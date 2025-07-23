'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, University, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/artikel', label: 'Artikel', isNew: true },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/mitra', label: 'Mitra' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/order">Order Sekarang</Link>
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
                  <Link href="/order">Order Sekarang</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
