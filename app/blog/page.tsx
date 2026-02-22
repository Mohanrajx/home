import { PageShell } from '@/components/page-shell';

const posts = [
  ['Engineering for Trust: Why Reliability Is a Growth Lever','How reliability and performance directly influence conversion, retention, and enterprise confidence.'],
  ['Modern Ecommerce Architecture in 2026','A practical blueprint for composable commerce, data ownership, and checkout performance.'],
  ['From Design System to Revenue System','How structured product design reduces delivery risk and improves measurable outcomes.']
];

export default function BlogPage() {
  return <PageShell title="Blog" subtitle="Insights on product engineering, platform strategy, and conversion systems."><div className="grid gap-4 md:grid-cols-3">{posts.map(([t,e])=><article key={t} className="card"><h2 className="font-display text-lg">{t}</h2><p className="mt-3 text-sm text-muted">{e}</p></article>)}</div></PageShell>;
}
