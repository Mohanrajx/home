import Link from 'next/link';

const faqs = [
  ['What does AxisEdge build?', 'We engineer web products, ecommerce platforms, and conversion systems with measurable outcomes.'],
  ['Do you support startups and larger teams?', 'Yes. We support funded startups, agencies, and scale-stage businesses with right-sized engagement models.'],
  ['How quickly can a project start?', 'Discovery can start in as little as one week after scope confirmation and onboarding.'],
  ['Do you work with existing stacks?', 'Yes, we integrate with modern stacks and can modernize legacy architecture incrementally.'],
  ['How do you manage communication?', 'Weekly leadership updates, async progress tracking, and transparent milestone reporting.'],
  ['What is included in quality assurance?', 'Automated testing, performance profiling, accessibility checks, and production readiness gates.'],
  ['How are payments handled?', 'Clear milestone billing with transparent statements and dispute escalation protocols.'],
  ['Who owns intellectual property?', 'Clients own final paid deliverables; platform accelerators and pre-existing components remain licensed.'],
  ['Do you sign NDAs?', 'Yes. Confidentiality and data-protection agreements are standard in every engagement.'],
  ['Can you provide long-term support?', 'Yes, with ongoing technical partnerships and SLA-backed response commitments.']
];

export default function Home() {
  return (
    <>
      <section className="section">
        <p className="text-sm font-medium text-accent">Digital Engineering & Web Technology Studio</p>
        <h1 className="h1 mt-4 max-w-4xl">High-performance digital products for teams that scale with precision.</h1>
        <p className="mt-6 max-w-3xl text-lg text-muted">AxisEdge Technologies builds modern web platforms, product-grade interfaces, and conversion-driven commerce systems engineered for growth, resilience, and trust.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="btn-primary" href="/contact">Start a Project</Link>
          <Link className="btn-secondary" href="/case-studies">View Case Studies</Link>
        </div>
      </section>

      <section className="section grid gap-6 md:grid-cols-3">
        {['What We Build','Why Companies Choose Us','Our Engineering Principles'].map((t,i)=><article key={t} className="card"><h2 className="font-display text-xl">{t}</h2><p className="mt-3 text-sm text-muted">{[
          'Revenue-focused products, scalable web apps, and robust ecommerce foundations designed for speed and stability.',
          'Senior execution, strategic clarity, and dependable delivery timelines aligned to business objectives.',
          'Performance by default, accessibility by design, security in every layer, and clean maintainable code.'
        ][i]}</p></article>)}
      </section>

      <section className="section">
        <h2 className="h2">Case Study Preview</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[['SaaS onboarding rebuild','+42% activation'],['Headless commerce migration','+31% conversion']].map(([a,b])=><div key={a} className="card"><p className="text-sm text-accent">{b}</p><p className="mt-2 font-medium">{a}</p></div>)}
        </div>
      </section>

      <section className="section">
        <h2 className="h2">Process Overview</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-5">{['Discovery','Architecture','Design','Engineering','Launch & Optimization'].map(s=><div key={s} className="card text-center text-sm font-medium">{s}</div>)}</div>
      </section>

      <section className="section">
        <h2 className="h2">Testimonials <span className="text-base text-muted">(sample)</span></h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['AxisEdge shipped with unusual clarity and speed.','Their engineering discipline reduced our risk profile dramatically.','A premium partner for product teams under real growth pressure.'].map((q)=><blockquote key={q} className="card text-sm text-muted">“{q}”</blockquote>)}
        </div>
      </section>

      <section className="section">
        <h2 className="h2">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map(([q,a]) => <div key={q} className="card"><h3 className="font-medium">{q}</h3><p className="mt-2 text-sm text-muted">{a}</p></div>)}
        </div>
      </section>

      <section className="section">
        <div className="card flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="h2">Build with confidence.</h2>
            <p className="mt-2 text-muted">Security-first engineering, transparent communication, and measurable outcomes.</p>
          </div>
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </div>
      </section>
    </>
  );
}
