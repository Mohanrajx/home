import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const links = [
  ['Services', '/services'],
  ['Case Studies', '/case-studies'],
  ['Process', '/process'],
  ['Pricing', '/pricing'],
  ['About', '/about'],
  ['Contact', '/contact']
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-semibold">AxisEdge Technologies</Link>
        <nav className="hidden gap-5 text-sm md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-muted hover:text-fg">{label}</Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
