import Link from 'next/link';
import { University, Phone, Mail, MapPin } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);


export default function Footer() {
  const WHATSAPP_LINK =
    'https://api.whatsapp.com/send?phone=6285262608383&text=Halo%20Simpul%20Academy,%20saya%20tertarik%20dengan%20layanan%20Anda.';

  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
              <University className="h-7 w-7" />
              <span className="font-headline">Simpul Academy</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Membantu akademisi Indonesia mencapai potensi penuh dalam publikasi ilmiah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline font-bold text-primary mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link href="/layanan" className="text-sm text-muted-foreground hover:text-primary transition-colors">Layanan</Link></li>
              <li><Link href="/tentang-kami" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="/kontak" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kontak</Link></li>
              <li><Link href="/order" className="text-sm text-muted-foreground hover:text-primary transition-colors">Order</Link></li>
              <li><Link href="/#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimoni</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-headline font-bold text-primary mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">simpul.project.academy@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+62 852-6260-8383</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Banda Aceh, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-headline font-bold text-primary mb-4">Legalitas</h3>
            <p className="text-sm text-muted-foreground">
              CV Simpul Project Academy
            </p>
            <p className="text-sm text-muted-foreground">
              NIB: 2411240034931
            </p>
            <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
                <WhatsAppIcon />
                Chat via WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CV Simpul Project Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
