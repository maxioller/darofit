import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Reemplaza con tu dominio real cuando lo tengas (ej: https://darofit.com)
  const baseUrl = 'https://pulsotek.site'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Si tuvieras más páginas (ej: blog), irían aquí
  ];
}