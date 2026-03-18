import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, ArrowRight } from 'lucide-react';

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { 
      role: 'model', 
      content: '¡Hola! Soy el asistente estratégico entrenado con tus documentos de NotebookLM. Conozco a fondo el portafolio de Teclab, IPP y Onmex, las áreas de sobrepoblación del mercado, nuestros puntos ciegos y las tendencias clave para 2026.\n\n¿Quieres saber en qué áreas nos solapamos con la competencia o cuál debería ser nuestra próxima jugada estratégica?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const predefinedQuestions = [
    "¿Cuáles son las mayores amenazas (puntos ciegos) para nuestras marcas?",
    "¿En qué áreas educativas nos solapamos más con la competencia?",
    "¿Qué roles de Inteligencia Artificial deberíamos empezar a enseñar?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendPrompt = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text.trim() };
    const history = [...messages];
    
    setMessages([...history, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content, history })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: 'model', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'model', content: `Error: ${data.error || 'Algo salió mal.'}` }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: 'Error de conexión con el servidor.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPrompt(input);
  };

  return (
    <div className="glass-panel w-full" style={{ marginTop: 'var(--space-xl)', background: 'linear-gradient(180deg, rgba(248,250,252,0.6) 0%, rgba(241,245,249,0.9) 100%)', borderColor: 'var(--accent-glow)' }}>
      {/* Chat Header */}
      <div className="flex items-center gap-md mb-6 pb-4 border-b" style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
        <div className="p-3 rounded-xl bg-black bg-opacity-5 border" style={{ borderColor: 'var(--accent-glow)' }}>
          <Sparkles className="teclab-text" size={28} color="var(--accent-teclab)" />
        </div>
        <div>
          <h2 className="text-3xl font-heading font-semibold text-gradient">AI NotebookLM Chat</h2>
          <p className="text-secondary text-sm mt-1">Chatea directamente con la inteligencia extraída del cuaderno: Portfolio Social Learning.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-lg">
        {/* Sidebar / Quick Actions */}
        <div className="flex flex-col gap-sm w-full md:w-1/3">
          <h3 className="text-sm text-muted uppercase tracking-widest font-semibold mb-2">Sugerencias Rápidas</h3>
          {predefinedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => sendPrompt(q)}
              disabled={isLoading}
              className="p-4 rounded-lg flex items-start text-left gap-sm transition-all hover:translate-x-1"
              style={{ 
                background: 'rgba(0,0,0,0.03)', 
                border: '1px solid rgba(0,0,0,0.05)',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                color: 'var(--text-primary)'
              }}
            >
              <ArrowRight size={18} className="text-secondary mt-1 min-w-[18px]" />
              <span className="text-sm leading-snug">{q}</span>
            </button>
          ))}
          
          <div className="mt-auto pt-6 px-4 pb-4 rounded-lg" style={{ background: 'rgba(2, 132, 199, 0.05)', borderLeft: '2px solid var(--accent-teclab)' }}>
            <p className="text-xs text-secondary italic">
              Este asistente está programado con el System Prompt estratégico directo de NotebookLM y utiliza la API de Gemini Pro 2.5.
            </p>
          </div>
        </div>

        {/* Chat Interface Area */}
        <div className="flex flex-col w-full md:w-2/3 h-[500px] border rounded-xl overflow-hidden" style={{ borderColor: 'rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.4)' }}>
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-md">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-sm ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-secondary text-primary'}`}
                     style={{ 
                       background: msg.role === 'user' ? 'var(--text-primary)' : 'rgba(241,245,249,1)',
                       border: msg.role === 'user' ? 'none' : '1px solid var(--accent-glow)',
                       color: msg.role === 'user' ? '#fff' : 'var(--text-primary)'
                     }}>
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} color="var(--accent-teclab)" />}
                </div>
                
                <div 
                  className={`p-4 rounded-xl text-sm leading-relaxed max-w-[85%] whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-opacity-20 rounded-tr-none' 
                      : 'border rounded-tl-none'
                  }`}
                  style={{ 
                    background: msg.role === 'user' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.7)',
                    borderColor: msg.role === 'user' ? 'transparent' : 'rgba(0,0,0,0.05)',
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-sm flex-row animate-fade-in">
                 <div className="p-2 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(241,245,249,1)', border: '1px solid var(--accent-glow)' }}>
                  <Bot size={20} color="var(--accent-teclab)" />
                </div>
                <div className="p-4 rounded-xl rounded-tl-none border text-secondary flex items-center gap-sm" style={{ background: 'rgba(255,255,255,0.6)', borderColor: 'rgba(0,0,0,0.05)' }}>
                  <Loader2 size={18} className="animate-spin text-teclab" color="var(--accent-teclab)" />
                  <span className="italic">Procesando respuesta estratégica...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-4 border-t flex gap-md bg-opacity-50" style={{ borderColor: 'rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.3)' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Haz una pregunta específica sobre el análisis del portafolio..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-lg border text-primary w-full"
              style={{ 
                background: 'rgba(0,0,0,0.02)',
                borderColor: 'rgba(0,0,0,0.1)', 
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 rounded-lg flex items-center justify-center border-none cursor-pointer transition-colors font-semibold gap-2"
              style={{ 
                background: input.trim() ? 'var(--accent-teclab)' : 'var(--bg-tertiary)',
                color: input.trim() ? '#fff' : 'var(--text-secondary)'
              }}
            >
              <span>Enviar</span>
              <Send size={18} />
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
}
