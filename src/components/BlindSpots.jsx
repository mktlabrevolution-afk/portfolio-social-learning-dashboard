import { EyeOff, AlertOctagon, Rocket, Plug } from 'lucide-react';

export default function BlindSpots() {
  const insights = [
    {
      type: "Amenaza Crítica",
      title: "Colapso del Funnel SEO (Zero-Click)",
      description: "Los LLMs están respondiendo directamente las dudas técnicas sin derivar tráfico a nuestras landings. Nuestro mecanismo de adquisición tradicional está bajo fuego.",
      icon: <AlertOctagon size={28} className="text-danger" color="var(--accent-ipp)" />,
      borderColor: "var(--accent-ipp)",
      bgColor: "rgba(255, 42, 95, 0.05)"
    },
    {
      type: "Oportunidad Disruptiva",
      title: "Arquitectos y Orquestadores de IA",
      description: "Pivotar las carreras desde la enseñanza de código básico hacia la Orquestación de IA y creación de Agentes, perfiles con primas salariales del 56% hoy.",
      icon: <Rocket size={28} className="text-warning" color="#ffaa00" />,
      borderColor: "#ffaa00",
      bgColor: "rgba(255, 170, 0, 0.05)"
    },
    {
      type: "Bloqueo B2B",
      title: "Ausencia de ecosistema LTI 1.3 Advantage",
      description: "Estamos perdiendo la venta corporativa si nuestras plataformas no son 'Plug & Play' conectables nativamente dentro de Slack, Teams o Notion de las empresas.",
      icon: <Plug size={28} className="text-success" color="var(--accent-teclab)" />,
      borderColor: "var(--accent-teclab)",
      bgColor: "rgba(0, 229, 255, 0.05)"
    }
  ];

  return (
    <div className="glass-panel" style={{ marginTop: 'var(--space-xl)' }}>
      <div className="flex flex-col items-center justify-center text-center p-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <EyeOff size={48} className="text-muted mb-4" />
        <h2 className="text-4xl text-gradient mb-2">Puntos Ciegos y Recomendaciones IA</h2>
        <p className="text-lg text-secondary max-w-2xl">
          El análisis transversal del NotebookLM destaca ángulos ciegos de la directiva y vectores de pivot corporativo inmediatos.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-md p-6">
        {insights.map((insight, idx) => (
          <div key={idx} className="p-6 rounded-lg" style={{ 
            background: insight.bgColor, 
            borderTop: `3px solid ${insight.borderColor}`,
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
          }}>
            <div className="flex justify-between items-start mb-4">
              {insight.icon}
              <span className="badge" style={{ color: insight.borderColor, borderColor: insight.borderColor }}>{insight.type}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
            <p className="text-sm text-secondary">{insight.description}</p>
          </div>
        ))}
      </div>
      
      {/* High value overall insight */}
       <div className="m-6 p-6 rounded-lg text-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <h4 className="text-sm text-muted uppercase tracking-widest font-bold mb-4">Veredicto Estratégico Global 2026</h4>
          <p className="text-2xl font-heading font-light leading-snug">
            <span className="text-primary italic">"El conocimiento se comoditizó, la información es libre.</span> El 'Moat' defensivo de Teclab, IPP y Onmex deber ser convertirse en <strong>validadores y ecosistemas de práctica guiada por IA, no solo bibliotecas de contenido</strong>."
          </p>
       </div>
    </div>
  );
}
