import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/case-studies', '/process', '/pricing', '/about', '/contact', '/careers', '/blog', '/privacy-policy', '/terms-of-service', '/refund-policy', '/cookie-policy', '/acceptable-use-policy', '/sla'];
  return routes.map((route) => ({ url: `https://axisedge.tech${route}`, lastModified: new Date(), changeFrequency: 'monthly', priority: route === '' ? 1 : 0.8 }));
}
