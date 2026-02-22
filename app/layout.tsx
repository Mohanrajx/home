import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  metadataBase: new URL('https://axisedge.tech'),
  title: { default: 'AxisEdge Technologies', template: '%s | AxisEdge Technologies' },
  description: 'Digital engineering and web technology studio for high-growth teams.',
  openGraph: {
    title: 'AxisEdge Technologies',
    description: 'High-performance digital products, modern web platforms, and conversion-driven ecommerce systems.',
    url: 'https://axisedge.tech',
    siteName: 'AxisEdge Technologies',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AxisEdge Technologies',
  url: 'https://axisedge.tech',
  email: 'legal@axisedge.tech',
  sameAs: ['https://www.linkedin.com']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable} font-sans`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
