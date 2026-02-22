import { PageShell } from '@/components/page-shell';

const services = [
  ['Web Engineering', 'Platform architecture, API integration, and scalable frontend/backend delivery.', 'Deliverables: technical roadmap, modular codebase, CI/CD pipeline, QA coverage.'],
  ['UI/UX Design', 'Product UX systems for speed-to-market and user trust.', 'Deliverables: wireframes, high-fidelity UI, design system, interaction specs.'],
  ['E-commerce Systems', 'Conversion-led storefronts and checkout optimization with robust operations.', 'Deliverables: storefront build, payment flow optimization, analytics instrumentation.'],
  ['Performance Optimization', 'Core Web Vitals and infrastructure tuning for resilient load handling.', 'Deliverables: performance audit, bottleneck remediation, observability dashboard.'],
  ['Conversion Engineering', 'Experimentation and CRO frameworks that improve revenue efficiency.', 'Deliverables: funnel diagnostics, A/B test plan, experimentation backlog.'],
  ['Ongoing Technical Partnerships', 'Dedicated engineering leadership and continuous product evolution.', 'Deliverables: sprint execution, SLA support, roadmap governance.']
];

export default function ServicesPage() {
  return <PageShell title="Services" subtitle="Clear scope, premium execution, and accountability at every milestone."><div className="grid gap-4 md:grid-cols-2">{services.map(([n,d,l])=><article key={n} className="card"><h2 className="font-display text-xl">{n}</h2><p className="mt-3 text-sm text-muted">{d}</p><p className="mt-3 text-sm">{l}</p></article>)}</div></PageShell>;
}
