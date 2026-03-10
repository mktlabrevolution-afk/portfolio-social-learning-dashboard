import { Activity, ShieldCheck, Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex flex-col gap-sm" style={{ marginBottom: 'var(--space-xl)' }}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl text-gradient">Portfolio Social Learning</h1>
          <p className="text-xl text-secondary mt-2">
            Análisis de Competitividad 2026: <span className="teclab-text font-semibold">Teclab</span> · <span className="ipp-text font-semibold">IPP</span> · <span className="onmex-text font-semibold">Onmex</span>
          </p>
        </div>
        
        <div className="flex gap-sm">
          <div className="glass-panel py-2 px-4 flex items-center gap-sm">
            <ShieldCheck className="text-success" size={20} color="var(--accent-onmex)" />
            <span className="text-sm font-semibold">Data Verified</span>
          </div>
          <div className="glass-panel py-2 px-4 flex items-center gap-sm">
            <Zap className="text-warning" size={20} color="#ffaa00" />
            <span className="text-sm font-semibold">Live Analysis</span>
          </div>
        </div>
      </div>
    </header>
  );
}
