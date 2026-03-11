import { AlertTriangle, TrendingDown, Users, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function MarketOverlap() {
  const overlapData = [
    {
      category: "Tech & Data",
      description: "Programación Fullstack, QA, Cibers.",
      competitors: "Coderhouse, Platzi, Henry, EducacionIT, UTEL, Siglo 21, UNIR",
      risk: "Alto Solapamiento",
      riskLevel: "danger",
      saturationIndex: 90,
      details: "Saturación total por Bootcamps + Unis."
    },
    {
      category: "Marketing Digital",
      description: "Inbound, CX, Community Management.",
      competitors: "Platzi, Coderhouse, AIEP, IPLACEX, IEA",
      risk: "Comoditización",
      riskLevel: "danger",
      saturationIndex: 85,
      details: "Tráfico purista cayendo por 'Zero-Clicks' de IA."
    },
    {
      category: "Admin. y Negocios",
      description: "Contabilidad, RRHH, Control Gestión.",
      competitors: "UVM, UNITEC, Siglo 21, UAI, INACAP",
      risk: "Saturación Media",
      riskLevel: "warning",
      saturationIndex: 65,
      details: "Exceso de oferta reduce valor del título."
    }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel" style={{ padding: '8px 12px', minWidth: 'auto', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-sm font-semibold">{payload[0].payload.category}</p>
          <p className="text-danger font-bold text-lg">Índice: {payload[0].value}/100</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-panel">
      
      <div className="flex flex-col md:flex-row gap-lg">
        {/* Texts & Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-sm" style={{ marginBottom: 'var(--space-md)' }}>
              <BarChart3 className="text-warning" size={24} color="#ffaa00" />
              <h2 className="text-3xl text-gradient">Zonas de Solapamiento</h2>
            </div>
            
            <p className="text-secondary" style={{ marginBottom: 'var(--space-lg)' }}>
              El análisis revela áreas donde nuestra oferta choca directamente contra la abundancia del mercado, generando riesgos críticos de guerra de precios y comoditización post-IA.
            </p>
            
            <div className="flex flex-col gap-sm">
                {overlapData.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.02)', borderLeft: `3px solid ${item.riskLevel === 'danger' ? 'var(--accent-ipp)' : '#ffaa00'}` }}>
                    <div>
                        <h4 className="font-semibold text-sm">{item.category}</h4>
                        <p className="text-xs text-muted max-w-[280px] truncate">{item.competitors}</p>
                    </div>
                    <span className={`badge badge-${item.riskLevel}`}>{item.risk}</span>
                  </div>
                ))}
            </div>
        </div>
        
        {/* Graphical Representation */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 rounded-xl" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
           <h3 className="text-sm uppercase tracking-widest text-muted font-semibold mb-6">Índice de Saturación del Mercado (0-100)</h3>
           <div style={{ width: '100%', height: '280px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={overlapData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} layout="vertical">
                  <XAxis type="number" domain={[0, 100]} stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis dataKey="category" type="category" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} width={120} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                  <Bar dataKey="saturationIndex" radius={[0, 4, 4, 0]} barSize={32}>
                    {overlapData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.riskLevel === 'danger' ? 'var(--accent-ipp)' : '#ffaa00'} fillOpacity={0.8} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
           </div>
           
           <div className="flex gap-md mt-4 text-xs text-secondary">
              <div className="flex items-center gap-xs"><div className="w-3 h-3 rounded-sm" style={{ background: 'var(--accent-ipp)' }}></div> Riesgo Crítico</div>
              <div className="flex items-center gap-xs"><div className="w-3 h-3 rounded-sm" style={{ background: '#ffaa00' }}></div> Precaución</div>
           </div>
        </div>
      </div>

    </div>
  );
}
