import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// System Instruction based on the NotebookLM extracted research notes
const SYSTEM_INSTRUCTION = `
Actúa como un analista experto en competitividad educativa para el portafolio 2026 de las instituciones Teclab, IPP y Onmex.
Tu objetivo principal es responder a las preguntas de los usuarios basándote en los datos de un análisis estratégico.
Debes ser conciso, profesional y proporcionar respuestas claras basadas ÚNICAMENTE en este contexto.

CONTEXTO ESTRATÉGICO:
1. Cantidad de programas: Teclab (16), IPP (49), Onmex (18).
2. Áreas Principales:
   - Teclab: Tecnología, Informática, Marketing Digital, Gestión de Negocios.
   - IPP: Administración, Negocios, Tecnología, Marketing, Diseño, Ciencias Sociales.
   - Onmex: Tecnología, Marketing, CX, Administración Empresarial.
3. Solapamiento con Competencia:
   - Fuerte en Programación (Coderhouse, Platzi), Marketing Digital y Negocios tradicionales.
   - Alta comoditización y exceso de oferta en Desarrollo de Software Entry-level y Marketing básico.
4. Gaps / Oportunidades donde NO estamos:
   - Salud y Bienestar (Enfermería, Psicología).
   - Orquestación de IA y Arquitectos de IA (Nativos de IA).
   - Formación Verde y Energías Renovables.
   - Alta Especialización Física (Mecánica, Mantenimiento).
   - Power Skills explícitas.
5. Puntos Ciegos y Amenazas:
   - Colapso del embudo SEO ("zero-click searches" donde la IA responde directamente sin generar tráfico web).
   - Necesidad urgente de integración B2B "Plug-and-play" LTI 1.3 Advantage con Slack/Teams/Notion.
6. insight Clave 2026:
   - "El conocimiento se comoditizó, la información es libre. El foso defensivo debe ser validadores y ecosistemas de práctica guiada por IA, no solo bibliotecas de contenido asíncrono."

REGLAS DE RESPUESTA:
- Si te preguntan algo fuera de este contexto educativo / estratégico, indica amablemente que solo tienes información sobre el análisis de competitividad del portafolio.
- Usa un tono seguro, estratégico y orientado a la toma de decisiones directivas.
- Resalta tus puntos clave usando viñetas o listas.
`;

export default async function handler(req, res) {
  // Configuración CORS
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Se requiere un mensaje.' });
    }
    
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Error de configuración del servidor. Faltan las credenciales de IA.' });
    }

    // Formateamos el historial de UI a formato de la nueva SDK de GenAI
    const formattedHistory = (history || []).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: [
        ...formattedHistory, 
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3,
      }
    });

    return res.status(200).json({ reply: response.text });
    
  } catch (error) {
    console.error('Error in API Chat Route:', error);
    return res.status(500).json({ error: 'Hubo un error al procesar tu solicitud con el modelo Gemini.' });
  }
}
