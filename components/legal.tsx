import { ReactNode } from 'react';

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="section">
      <h1 className="h1">{title}</h1>
      <p className="mt-4 text-sm text-muted">Last updated: January 2026</p>
      <div className="prose prose-slate mt-8 max-w-none dark:prose-invert">{children}</div>
    </section>
  );
}
