import { Search, HeartPulse, Cpu, Leaf, Wrench, BrainCircuit, Target } from 'lucide-react';

export default function GapAnalysis() {
  const gaps = [
    {
      sector: "Salud y Bienestar",
      opportunity: "Alta demanda post-IA para roles empáticos y cuidado (Enfermería, Gerontología).",
      action: "Ausentes. Evaluar alianzas o programas cortos.",
      icon: <Target className="text-teclab" />,
      demand: 95,
      competitorPresence: 40
    },
    {
      sector: "Roles Nativos de IA",
      opportunity: "Arquitectos de IA, Prompt Engineers, AI Orchestrators.",
      action: "Tenemos Data Science general. Faltan roles hiper-específicos de integración.",
      icon: <Zap className="text-warning" />,
      demand: 100,
      competitorPresence: 20
    },
    {
      sector: "Formación Verde",
      opportunity: "Energías Renovables, Mantenimiento Solar/EV, Tech Ambiental.",
      action: "Mercado inexplorado por nosotros. Alto financiamiento B2B futuro.",
      icon: <TrendingUp className="text-onmex" />,
      demand: 80,
      competitorPresence: 30
    },
    {
      sector: "Oficios Físicos Específicos",
      opportunity: "Mecánica avanzada, Minería, Mantenimiento Industrial.",
      action: "Difícil de automatizar por IA (Robótica es cara). Gran valor económico a futuro.",
      icon: <HelpCircle className="text-secondary" />,
      demand: 85,
      competitorPresence: 60
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel" style={{ padding: '12px', minWidth: '200px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="font-semibold mb-2">{label}</p>
          <div className="flex justify-between text-sm mb-1">
            <span style={{ color: 'var(--accent-teclab)' }}>Demanda Proyectada:</span>
            <span className="font-bold">{payload[1].value}%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span style={{ color: 'var(--accent-ipp)' }}>Presencia Competencia:</span>
            <span className="font-bold">{payload[0].value}%</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-panel border-teclab">
      <div className="flex flex-col md:flex-row gap-lg">
          {/* Graphical Representation */}
          <div className="w-full md:w-1/2 flex flex-col p-4 rounded-xl" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
             <h3 className="text-sm uppercase tracking-widest text-muted font-semibold mb-2">Matriz de Oportunidad (2026)</h3>
             <p className="text-xs text-secondary mb-6">Comparativa de demanda proyectada versus saturación actual de competidores en nuestros puntos ciegos.</p>
             
             <div style={{ width: '100%', height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={gaps} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--accent-teclab)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--accent-teclab)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--accent-ipp)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--accent-ipp)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="sector" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} tick={{fill: '#94a3b8'}} />
                    <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="competitorPresence" stroke="var(--accent-ipp)" fillOpacity={1} fill="url(#colorComp)" name="Competencia" />
                    <Area type="monotone" dataKey="demand" stroke="var(--accent-teclab)" fillOpacity={1} fill="url(#colorDemand)" name="Demanda" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>
          
          {/* Texts & Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-sm" style={{ marginBottom: 'var(--space-md)' }}>
                <Target className="teclab-text" size={24} color="var(--accent-teclab)" />
                <h2 className="text-2xl text-gradient">Gaps y Oportunidades</h2>
              </div>
              <p className="text-secondary" style={{ marginBottom: 'var(--space-lg)' }}>
                Áreas de alto valor donde la competencia aún es baja o donde el avance de la IA no afectará negativamente la empleabilidad.
              </p>
              
              <div className="grid grid-cols-1 gap-md">
                  {gaps.map((gap, idx) => (
                    <div key={idx} className="flex gap-sm items-start p-3 rounded-lg hover:bg-white hover:bg-opacity-5 transition-colors">
                      <div className="p-2 rounded-full bg-black bg-opacity-40">{gap.icon}</div>
                      <div>
                        <h4 className="font-semibold text-primary text-sm">{gap.sector}</h4>
                        <p className="text-secondary text-xs my-1">{gap.opportunity}</p>
                        <p className="text-xs text-muted italic">Nota: {gap.action}</p>
                      </div>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
}
