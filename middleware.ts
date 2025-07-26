import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix, pathnames } from './src/navigation';
 
export default createMiddleware({
  defaultLocale: 'id',
  locales,
  localePrefix,
  pathnames
});
 
export const config = {
  // Match only internationalized pathnames
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/', '/(id|en)/:path*']
};