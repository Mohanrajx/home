import { PageShell } from '@/components/page-shell';

const cases = [
  ['Fintech Onboarding Platform','Fragmented onboarding journey causing high drop-off.','Reframed onboarding into progressive trust checkpoints with event-driven architecture.','Unified KYC, adaptive UI flows, and conversion instrumentation.','42% activation lift, 28% lower support tickets, 37% faster onboarding completion.'],
  ['Headless Commerce Modernization','Legacy storefront slowing releases and reducing conversion velocity.','Implemented composable commerce architecture with modular checkout services.','New storefront framework, payment optimization, and merchandising automation.','31% conversion growth, 52% faster deployments, 24% increase in average order value.'],
  ['B2B SaaS Dashboard Rebuild','Complex workflows with low user adoption among enterprise teams.','Designed role-aware navigation and performance-first data rendering strategy.','Rebuilt dashboard information architecture and component library.','39% increase in weekly active users, 46% improved task completion rate.'],
  ['Agency Delivery Platform','Agency struggled with fragmented internal tools and reporting visibility.','Built a unified operations portal with SLA tracking and automated reporting.','Integrated task orchestration, client reporting, and quality controls.','33% gross margin improvement, 61% faster reporting cycles, 22% higher client retention.']
];

export default function CaseStudiesPage() {
  return <PageShell title="Case Studies" subtitle="Enterprise-grade outcomes delivered through structured execution."><div className="space-y-6">{cases.map(([t,p,a,s,o])=><article key={t} className="card"><h2 className="font-display text-2xl">{t}</h2><div className="mt-4 grid gap-4 text-sm md:grid-cols-2"><p><strong>Problem:</strong> {p}</p><p><strong>Approach:</strong> {a}</p><p><strong>Solution:</strong> {s}</p><p><strong>Outcome:</strong> {o}</p></div></article>)}</div></PageShell>;
}
