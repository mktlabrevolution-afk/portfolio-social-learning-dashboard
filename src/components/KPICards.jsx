import { BookOpen, Monitor, Briefcase, Code, Megaphone } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export default function KPICards() {
  const institutes = [
    {
      name: 'Teclab',
      country: 'Argentina',
      totalPrograms: 16,
      colorClass: 'panel-teclab',
      textClass: 'teclab-text',
      hex: '#00e5ff',
      areas: [
        { name: 'Tecnología e Informática', value: 8, icon: <Code size={16} /> },
        { name: 'Marketing Digital y CX', value: 5, icon: <Megaphone size={16} /> },
        { name: 'Gestión de Negocios', value: 3, icon: <Briefcase size={16} /> },
      ]
    },
    {
      name: 'IPP',
      country: 'Chile',
      totalPrograms: 49,
      colorClass: 'panel-ipp',
      textClass: 'ipp-text',
      hex: '#ff2a5f',
      areas: [
        { name: 'Administración y Negocios', value: 20, icon: <Briefcase size={16} /> },
        { name: 'Tecnología', value: 12, icon: <Monitor size={16} /> },
        { name: 'Marketing y Diseño', value: 9, icon: <Megaphone size={16} /> },
        { name: 'Ciencias Sociales / Educación', value: 8, icon: <BookOpen size={16} /> },
      ]
    },
    {
      name: 'Onmex',
      country: 'México',
      totalPrograms: 18,
      colorClass: 'panel-onmex',
      textClass: 'onmex-text',
      hex: '#00d287',
      areas: [
        { name: 'Tecnología', value: 7, icon: <Code size={16} /> },
        { name: 'Marketing y CX', value: 5, icon: <Megaphone size={16} /> },
        { name: 'Administración Empresarial', value: 6, icon: <Briefcase size={16} /> },
      ]
    }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel" style={{ padding: '8px 12px', minWidth: 'auto', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-sm font-semibold">{payload[0].name}</p>
          <p className="text-sm text-secondary">{payload[0].value} programas</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-3">
      {institutes.map((inst, idx) => (
        <div key={idx} className={`glass-panel ${inst.colorClass} flex flex-col justify-between`}>
          <div>
            <div className="flex justify-between items-center" style={{ marginBottom: 'var(--space-md)' }}>
              <h2 className={`text-3xl ${inst.textClass}`}>{inst.name}</h2>
              <span className="badge">{inst.country}</span>
            </div>
            
            <div className="flex items-center gap-md" style={{ marginBottom: 'var(--space-md)' }}>
               {/* Gráfico Doughnut para representar el peso de las áreas */}
               <div style={{ width: '100px', height: '100px', position: 'relative' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={inst.areas}
                        innerRadius={30}
                        outerRadius={45}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {inst.areas.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={inst.hex} fillOpacity={1 - (index * 0.2)} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Total Centered */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-xl font-bold">
                    {inst.totalPrograms}
                  </div>
               </div>
               
               <div className="flex flex-col">
                 <span className="text-secondary text-sm uppercase tracking-wider font-semibold">Total</span>
                 <span className="text-3xl font-heading">{inst.totalPrograms}</span>
               </div>
            </div>

            <h3 className="text-sm text-muted uppercase font-semibold" style={{ marginBottom: 'var(--space-sm)' }}>Distribución del Portafolio</h3>
            <ul className="flex flex-col gap-sm">
              {inst.areas.map((area, aIdx) => (
                <li key={aIdx} className="flex items-center justify-between text-sm p-2 rounded" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="flex items-center gap-sm">
                    <span className={inst.textClass} style={{ opacity: 1 - (aIdx * 0.2) }}>{area.icon}</span>
                    <span className="text-secondary md:truncate max-w-[150px]">{area.name}</span>
                  </div>
                  <span className="font-semibold">{area.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
