import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/utils/Helpers';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${getBaseUrl()}/sign-up/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${getBaseUrl()}/sign-in/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
