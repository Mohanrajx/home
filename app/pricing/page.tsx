import { PageShell } from '@/components/page-shell';

const tiers = [
  ['Starter','From $8,000 / £6,500 per project','Ideal for early-stage teams shipping MVP features with strong technical foundations.'],
  ['Growth','From $18,000 / £14,500 per project','For scaling products needing platform upgrades, conversion systems, and velocity improvements.'],
  ['Enterprise','Custom engagement','Strategic multi-team execution with governance, SLA commitments, and long-term roadmap ownership.']
];

export default function PricingPage() {
  return <PageShell title="Pricing" subtitle="Premium delivery models with transparent commercial structure."><div className="grid gap-4 md:grid-cols-3">{tiers.map(([n,p,d])=><article key={n} className="card"><h2 className="font-display text-2xl">{n}</h2><p className="mt-2 font-medium text-accent">{p}</p><p className="mt-3 text-sm text-muted">{d}</p></article>)}</div><p className="mt-8 text-sm text-muted">Payment transparency: milestone invoices, clear acceptance criteria, and dispute-handling process documented in Terms of Service.</p></PageShell>;
}
