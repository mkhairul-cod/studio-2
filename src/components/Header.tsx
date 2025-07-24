'use client';

import Link from 'next-intl/link';
import { usePathname } from 'next-intl/client';
import { useState } from 'react';
import { Menu, University, Wand2, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/layanan', label: t('services') },
    { href: '/artikel', label: t('articles') },
    { href: '/alat-ai', label: t('ai_tool'), isNew: true },
    { href: '/tentang-kami', label: t('about_us') },
    { href: '/mitra', label: t('partners') },
    { href: '/kontak', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <University className="h-6 w-6" />
          <span className="font-headline">Simpul Academy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.href === '/alat-ai' && <Wand2 className="w-4 h-4" />}
              {link.label}
              {link.isNew && (
                <span className="bg-accent/80 text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                  NEW
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
           <LanguageSwitcher />
           <Button asChild variant="outline" size="sm">
            <Link href="/kirim-artikel"><Send className="w-4 h-4 mr-2" /> {t('submit_article')}</Link>
          </Button>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/order">{t('order_now')}</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary" onClick={() => setIsMenuOpen(false)}>
                  <University className="h-6 w-6" />
                  <span className="font-headline">Simpul Academy</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary flex items-center gap-2',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                      )}
                    >
                       {link.href === '/alat-ai' && <Wand2 className="w-5 h-5" />}
                      {link.label}
                       {link.isNew && (
                        <span className="bg-accent/80 text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                          NEW
                        </span>
                      )}
                    </Link>
                  ))}
                </nav>
                 <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4" onClick={() => setIsMenuOpen(false)}>
                  <Link href="/order">{t('order_now')}</Link>
                </Button>
                 <Button asChild variant="outline" className="mt-2" onClick={() => setIsMenuOpen(false)}>
                  <Link href="/kirim-artikel"><Send className="w-4 h-4 mr-2" /> {t('submit_article')}</Link>
                </Button>
                <div className='pt-4 border-t'>
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
