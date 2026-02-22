import { PageShell } from '@/components/page-shell';

const steps = [
  ['Discovery','Business objectives, constraints, and success metrics are aligned with stakeholder priorities.'],
  ['Architecture','Technical blueprinting, risk planning, and integration strategy established for scale.'],
  ['Design','High-fidelity UI/UX systems and interaction models validated against user goals.'],
  ['Engineering','Agile implementation with code quality gates, QA automation, and release transparency.'],
  ['Launch & Optimization','Production launch, telemetry analysis, iterative optimization, and ongoing growth support.']
];

export default function ProcessPage() {
  return <PageShell title="Process" subtitle="A rigorous five-step model designed for predictable delivery and compounding outcomes."><div className="grid gap-4">{steps.map(([n,d],i)=><article key={n} className="card"><p className="text-sm text-accent">Step {i+1}</p><h2 className="mt-1 font-display text-2xl">{n}</h2><p className="mt-3 text-sm text-muted">{d}</p></article>)}</div></PageShell>;
}
