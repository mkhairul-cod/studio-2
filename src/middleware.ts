import createMiddleware from 'next-intl/middleware';
 
const locales = ['en', 'id'];
const defaultLocale = 'id';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales,
 
  // Used when no locale matches
  defaultLocale
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|en)/:path*']
};
