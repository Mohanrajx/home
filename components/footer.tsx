import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="section grid gap-8 py-12 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold">AxisEdge Technologies</p>
          <p className="mt-3 text-sm text-muted">High-performance digital engineering for ambitious teams.</p>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p className="font-medium text-fg">Company</p>
          <Link href="/about">About</Link><br />
          <Link href="/careers">Careers</Link><br />
          <Link href="/blog">Blog</Link>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p className="font-medium text-fg">Services</p>
          <Link href="/services">Engineering</Link><br />
          <Link href="/process">Process</Link><br />
          <Link href="/pricing">Pricing</Link>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p className="font-medium text-fg">Legal</p>
          <Link href="/privacy-policy">Privacy</Link><br />
          <Link href="/terms-of-service">Terms</Link><br />
          <Link href="/cookie-policy">Cookies</Link><br />
          <Link href="/refund-policy">Refunds</Link><br />
          <Link href="/acceptable-use-policy">AUP</Link><br />
          <Link href="/sla">SLA</Link>
        </div>
      </div>
    </footer>
  );
}
