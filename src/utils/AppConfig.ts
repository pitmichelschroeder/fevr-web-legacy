import type { LocalizationResource } from '@clerk/types';
import type { LocalePrefixMode } from 'next-intl/routing';
import { enUS } from '@clerk/localizations';

const localePrefix: LocalePrefixMode = 'as-needed';

export const AppConfig = {
  name: 'FEVR',
  description: 'The Future of VR Casino Gaming',
  locales: ['en'],
  defaultLocale: 'en',
  localePrefix,
};

const supportedLocales: Record<string, LocalizationResource> = {
  en: enUS,
};

export const ClerkLocalizations = {
  defaultLocale: enUS,
  supportedLocales,
};
