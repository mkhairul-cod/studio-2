import Link from 'next/link';
import { University, Phone, Mail, MapPin } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.447-4.435-9.884-9.888-9.884-5.448 0-9.886 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
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
              <li><Link href="/mitra" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mitra</Link></li>
              <li><Link href="/kontak" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kontak</Link></li>
              <li><Link href="/order" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pesan Layanan</Link></li>
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
