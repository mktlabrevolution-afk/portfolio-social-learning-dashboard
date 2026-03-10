import { TrendingUp, Shield, HelpCircle, Activity, Globe, BookMarked } from 'lucide-react';

export default function StrategicInfographic() {
  const trends = [
    {
      title: 'Transición SaaS Pedagógico',
      desc: 'El mercado exige práctica deliberada con IA en lugar de bibliotecas asíncronas.',
      icon: <Activity size={20} className="teclab-text" />
    },
    {
      title: 'IA Agéntica',
      desc: 'Usuarios crean sus propios entornos. Nuestro rol: validar habilidades, no solo proveer información.',
      icon: <Globe size={20} className="onmex-text" />
    },
    {
      title: 'Demanda de Microcredenciales',
      desc: '39% de habilidades obsoletas a 2030. Focus en certificaciones cortas y Power Skills.',
      icon: <BookMarked size={20} className="ipp-text" />
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-lg pt-4" style={{ marginTop: 'var(--space-md)' }}>
      {/* Trends Column */}
      <div className="flex flex-col gap-md">
        <div className="flex items-center gap-sm mb-2">
          <TrendingUp className="text-primary" size={24} />
          <h2 className="text-3xl text-gradient">Tendencias Máxima 2026</h2>
        </div>
        
        {trends.map((trend, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: 'var(--space-md)' }}>
            <div className="flex items-start gap-sm">
              <div className="p-2 rounded-full bg-black bg-opacity-20 mt-1">
                {trend.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{trend.title}</h3>
                <p className="text-sm text-secondary">{trend.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SW Analysis Column */}
      <div className="flex flex-col gap-md">
        <h2 className="text-3xl text-gradient mb-2" style={{ visibility: 'hidden'}}>Análisis de Fuerzas</h2>
        
        {/* Strengths */}
        <div className="glass-panel panel-onmex" style={{ background: 'linear-gradient(135deg, rgba(0,210,135,0.05) 0%, rgba(19,20,31,0.6) 100%)' }}>
          <div className="flex items-center gap-sm mb-4">
            <Shield className="text-success" size={24} color="var(--accent-onmex)" />
            <h3 className="text-2xl font-bold text-success" style={{ color: 'var(--accent-onmex)'}}>Nuestros Puntos Fuertes</h3>
          </div>
          <ul className="flex flex-col gap-sm">
            <li className="flex gap-sm items-start">
              <span className="text-success onmex-text mt-1">✓</span>
              <div>
                <h4 className="font-semibold text-sm">Alineación Técnica 100%</h4>
                <p className="text-sm text-secondary">Portafolio hiper-enfocado en áreas de alto valor en IT, Cloud y Datos.</p>
              </div>
            </li>
            <li className="flex gap-sm items-start">
              <span className="text-success onmex-text mt-1">✓</span>
              <div>
                <h4 className="font-semibold text-sm">Formatos Ágiles (2-3 años)</h4>
                <p className="text-sm text-secondary">Rutas rápidas ideales para el "reskilling" dinámico que busca el mercado.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="glass-panel panel-ipp" style={{ background: 'linear-gradient(135deg, rgba(255,42,95,0.05) 0%, rgba(19,20,31,0.6) 100%)' }}>
          <div className="flex items-center gap-sm mb-4">
            <HelpCircle className="text-danger" size={24} color="var(--accent-ipp)" />
            <h3 className="text-2xl font-bold text-danger" style={{ color: 'var(--accent-ipp)'}}>Nuestros Puntos Débiles</h3>
          </div>
          <ul className="flex flex-col gap-sm">
            <li className="flex gap-sm items-start">
              <span className="text-danger ipp-text mt-1">✗</span>
              <div>
                <h4 className="font-semibold text-sm">Dependencia de "Carreras" largas</h4>
                <p className="text-sm text-secondary">Exceso de oferta de Bootcamps cortos en competidores ágiles (Coderhouse, Platzi).</p>
              </div>
            </li>
            <li className="flex gap-sm items-start">
              <span className="text-danger ipp-text mt-1">✗</span>
              <div>
                <h4 className="font-semibold text-sm">Comoditización Junior</h4>
                <p className="text-sm text-secondary">Enseñamos "la herramienta", pero la IA ya automatiza el código junior. Urge pivotar a Orquestación.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
