import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['id', 'en'] as const;
  export const localePrefix = 'always'; // Default
   
  // The `pathnames` object holds pairs of internal
  // and external paths, separated by locale.
  export const pathnames = {
    // If all locales use the same path, a single
    // external path can be used for all locales.
    '/': '/',
  
    // If locales use different paths, you can
    // specify each external path per locale.
    '/alat-ai': {
      id: '/alat-ai',
      en: '/ai-tools'
    },
    '/artikel': {
      id: '/artikel',
      en: '/articles'
    },
    '/kirim-artikel': {
        id: '/kirim-artikel',
        en: '/submit-article'
    },
    '/kontak': {
        id: '/kontak',
        en: '/contact'
    },
    '/layanan': {
        id: '/layanan',
        en: '/services'
    },
    '/mitra': {
        id: '/mitra',
        en: '/partners'
    },
    '/order': {
        id: '/order',
        en: '/order'
    },
    '/tentang-kami': {
        id: '/tentang-kami',
        en: '/about-us'
    }
  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});