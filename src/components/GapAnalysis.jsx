import { Search, HeartPulse, Cpu, Leaf, Wrench, BrainCircuit } from 'lucide-react';

export default function GapAnalysis() {
  const gaps = [
    {
      title: "1. Salud, Cuidados y Bienestar",
      icon: <HeartPulse className="text-danger" size={24} color="var(--accent-ipp)" />,
      competitors: "UVM, Siglo 21, AIEP, IPChile, INACAP",
      offerings: "Enfermería, Fisioterapia, Psicología, Masoterapia.",
      insight: "Rol no automatizable. Alto valor económico en 2026 debido a la necesidad de empatía humana."
    },
    {
      title: "2. Orquestación de IA (Nativos)",
      icon: <Cpu className="teclab-text" size={24} color="var(--accent-teclab)" />,
      competitors: "EducacionIT, Coderhouse, UNIR, Platzi",
      offerings: "Consultor IA, AI Product Manager, Prompt Engineering.",
      insight: "El mercado premia con +56% de salario a perfiles de Orquestación; nosotros solo tenemos Data Science clásico."
    },
    {
      title: "3. Formación Verde y Energías",
      icon: <Leaf className="onmex-text" size={24} color="var(--accent-onmex)" />,
      competitors: "UTN, Siglo 21, INACAP, AIEP, UVM",
      offerings: "Renovables, Electromovilidad, Ing. Ambiental.",
      insight: "Green Skills: una tendencia principal para la transición económica, donde prácticamente no tenemos oferta."
    },
    {
      title: "4. Alta Especialización Física",
      icon: <Wrench className="text-muted" size={24} />,
      competitors: "INACAP, AIEP, ESBA",
      offerings: "Mantenimiento Industrial, Mecánica, Topografía.",
      insight: "A medida que la IA desplaza al 'cuello blanco', el valor de los oficios físicos complejos aumenta dramáticamente."
    },
    {
      title: "5. Power Skills Explícitas",
      icon: <BrainCircuit className="text-warning" size={24} color="#ffaa00" />,
      competitors: "Platzi, Siglo 21, UVM",
      offerings: "Pensamiento Crítico, Liderazgo, Inteligencia Emocional.",
      insight: "Con la obsolescencia técnica rápida, el 'aprender a aprender' y el razonamiento ético son la nueva moneda."
    }
  ];

  return (
    <div className="glass-panel" style={{ background: 'linear-gradient(145deg, rgba(10,10,15,0.8) 0%, rgba(20,20,30,0.6) 100%)', borderColor: 'rgba(255,42,95,0.2)'}}>
      <div className="flex justify-between items-start" style={{ marginBottom: 'var(--space-lg)' }}>
        <div>
          <div className="flex items-center gap-sm mb-2">
            <Search className="text-danger" size={24} color="var(--accent-ipp)" />
            <h2 className="text-3xl text-gradient">Gaps del Portafolio: Dónde NO Estamos</h2>
          </div>
          <p className="text-secondary max-w-3xl">
            La competencia ya capitalizó áreas críticas para la empleabilidad 2026. Nuestras marcas están ausentes de estos vectores clave de crecimiento.
          </p>
        </div>
        <div className="badge badge-danger">Oportunidad Perdida</div>
      </div>

      <div className="grid grid-cols-3 gap-md">
        {gaps.map((gap, idx) => (
          <div key={idx} className="p-5 rounded-lg border flex flex-col gap-sm" style={{ background: 'rgba(0,0,0,0.3)', borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-sm border-b pb-3 mb-2" style={{ borderColor: 'rgba(255,255,255,0.05)'}}>
              {gap.icon}
              <h3 className="font-semibold text-lg leading-tight">{gap.title}</h3>
            </div>
            
            <div className="flex-grow">
              <span className="text-xs text-muted uppercase tracking-wider block mb-1">Competencia Activa:</span>
              <p className="text-sm text-secondary mb-3">{gap.competitors} ({gap.offerings})</p>
              
              <span className="text-xs text-muted uppercase tracking-wider block mb-1">Insight 2026:</span>
              <p className="text-sm font-medium text-primary">{gap.insight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
