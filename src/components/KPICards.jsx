import { BookOpen, Monitor, Briefcase, Code, Megaphone, HardHat } from 'lucide-react';

export default function KPICards() {
  const institutes = [
    {
      name: 'Teclab',
      country: 'Argentina',
      programs: 16,
      colorClass: 'panel-teclab',
      textClass: 'teclab-text',
      areas: [
        { name: 'Tecnología e Informática', icon: <Code size={16} /> },
        { name: 'Marketing Digital y CX', icon: <Megaphone size={16} /> },
        { name: 'Gestión de Negocios', icon: <Briefcase size={16} /> },
      ]
    },
    {
      name: 'IPP',
      country: 'Chile',
      programs: 49,
      colorClass: 'panel-ipp',
      textClass: 'ipp-text',
      areas: [
        { name: 'Administración y Negocios', icon: <Briefcase size={16} /> },
        { name: 'Tecnología', icon: <Monitor size={16} /> },
        { name: 'Marketing y Diseño', icon: <Megaphone size={16} /> },
        { name: 'Ciencias Sociales / Educación', icon: <BookOpen size={16} /> },
      ]
    },
    {
      name: 'Onmex',
      country: 'México',
      programs: 18,
      colorClass: 'panel-onmex',
      textClass: 'onmex-text',
      areas: [
        { name: 'Tecnología', icon: <Code size={16} /> },
        { name: 'Marketing y CX', icon: <Megaphone size={16} /> },
        { name: 'Administración Empresarial', icon: <Briefcase size={16} /> },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-3">
      {institutes.map((inst, idx) => (
        <div key={idx} className={`glass-panel ${inst.colorClass} flex flex-col justify-between`}>
          <div>
            <div className="flex justify-between items-center" style={{ marginBottom: 'var(--space-md)' }}>
              <h2 className={`text-3xl ${inst.textClass}`}>{inst.name}</h2>
              <span className="badge">{inst.country}</span>
            </div>
            
            <div className="flex items-center gap-md" style={{ marginBottom: 'var(--space-lg)' }}>
              <span className="text-5xl">{inst.programs}</span>
              <span className="text-secondary leading-tight">Programas<br/>Activos</span>
            </div>

            <h3 className="text-sm text-muted uppercase font-semibold" style={{ marginBottom: 'var(--space-sm)' }}>Áreas de Saber Principales</h3>
            <ul className="flex flex-col gap-sm">
              {inst.areas.map((area, aIdx) => (
                <li key={aIdx} className="flex items-center gap-sm text-sm p-2 rounded" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className={inst.textClass}>{area.icon}</span>
                  {area.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
