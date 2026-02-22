import { ReactNode } from 'react';

export function PageShell({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <>
      <section className="section pb-8">
        <h1 className="h1">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">{subtitle}</p>
      </section>
      <section className="section pt-4">{children}</section>
    </>
  );
}
