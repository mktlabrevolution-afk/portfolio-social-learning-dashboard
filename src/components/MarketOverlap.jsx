import { AlertTriangle, Info, Users, BarChart3, TrendingDown } from 'lucide-react';

export default function MarketOverlap() {
  const overlapData = [
    {
      category: "Tecnología y Datos",
      description: "Programación Fullstack, Data Analytics, QA, Ciberseguridad.",
      competitors: "Coderhouse, Platzi, Henry, EducacionIT, UTEL, Siglo 21, UNIR",
      risk: "Alto Solapamiento",
      riskLevel: "danger",
      details: "Competimos frontalmente contra bootcamps (sustitutos) y universidades tradicionales online."
    },
    {
      category: "Marketing Digital & Social Media",
      description: "Inbound, CX, Community Management.",
      competitors: "Platzi, Coderhouse, AIEP, IPLACEX, IEA",
      risk: "Comoditización",
      riskLevel: "danger",
      details: "Mercado altamente comoditizado. El tráfico de MOOCs puristas está cayendo por 'búsquedas con cero clics' de IA."
    },
    {
      category: "Negocios y Administración",
      description: "Contabilidad, RRHH, Control de Gestión.",
      competitors: "UVM, UNITEC, Siglo 21, UAI, INACAP, IPG",
      risk: "Saturación",
      riskLevel: "warning",
      details: "Exceso de oferta. Estructuras corporativas más planas reducen el valor del título genérico para aumentos salariales."
    }
  ];

  return (
    <div className="glass-panel">
      <div className="flex items-center gap-sm" style={{ marginBottom: 'var(--space-md)' }}>
        <BarChart3 className="text-warning" size={24} color="#ffaa00" />
        <h2 className="text-3xl text-gradient">Zonas de Solapamiento Crítico</h2>
      </div>
      
      <p className="text-secondary" style={{ marginBottom: 'var(--space-lg)', maxWidth: '800px' }}>
        El análisis revela áreas donde la oferta de Teclab, IPP y Onmex choca directamente contra la abundancia del mercado, generando riesgos de guerra de precios y baja diferenciación.
      </p>

      <div className="grid grid-cols-3">
        {overlapData.map((item, idx) => (
          <div key={idx} className="p-4 rounded-lg flex flex-col gap-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{item.category}</h3>
              <span className={`badge badge-${item.riskLevel}`}>{item.risk}</span>
            </div>
            
            <p className="text-sm text-secondary">{item.description}</p>
            
            <div className="mt-auto">
              <div className="flex items-center gap-xs text-xs text-muted mb-2">
                <Users size={14} /> Competencia principal:
              </div>
              <p className="text-sm text-primary font-medium">{item.competitors}</p>
            </div>
            
            <div className="mt-2 p-3 rounded bg-opacity-10 bg-black flex gap-sm text-sm border-l-2 border-warning">
              {item.riskLevel === 'danger' ? <TrendingDown size={16} className="text-danger flex-shrink-0" color="var(--accent-ipp)" /> : <AlertTriangle size={16} className="text-warning flex-shrink-0" color="#ffaa00" />}
              <span className="text-secondary">{item.details}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
