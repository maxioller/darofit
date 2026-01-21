import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Si tuvieras carpetas privadas
    },
    sitemap: 'https://pulsotek.site/sitemap.xml', // Reemplaza con tu dominio real
  };
}