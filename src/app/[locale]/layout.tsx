import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import { routing } from '@/libs/I18nRouting';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | FEVR',
    default: 'FEVR - The Future of VR Casino Gaming',
  },
  description: 'Join the waitlist for FEVR, the revolutionary VR casino experience. Immerse yourself in the future of online gaming with poker, blackjack, roulette, and slots in virtual reality.',
  keywords: ['VR casino', 'virtual reality gaming', 'online casino', 'VR poker', 'VR gambling', 'metaverse casino'],
  authors: [{ name: 'FEVR Team' }],
  creator: 'FEVR',
  publisher: 'FEVR',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'FEVR',
    title: 'FEVR - The Future of VR Casino Gaming',
    description: 'Join the waitlist for FEVR, the revolutionary VR casino experience.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FEVR - VR Casino Gaming',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FEVR - The Future of VR Casino Gaming',
    description: 'Join the waitlist for FEVR, the revolutionary VR casino experience.',
    images: ['/og-image.png'],
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <PostHogProvider>
            {props.children}
          </PostHogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
