import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['id'] as const;
  export const localePrefix = 'as-needed';
   
  export const pathnames = {
    '/': '/',
    '/alat-ai': '/alat-ai',
    '/artikel': '/artikel',
    '/kirim-artikel': '/kirim-artikel',
    '/kontak': '/kontak',
    '/layanan': '/layanan',
    '/mitra': '/mitra',
    '/order': '/order',
    '/tentang-kami': '/tentang-kami'
  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});