import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
 
export const metadata: Metadata = {
  title: 'Simpul Academy Web',
  description:
    'Jasa Konversi Skripsi ke Jurnal, Proofreading, dan Pelatihan Penulisan Akademik',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
            <div className="flex flex-col min-h-screen bg-background">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
                <FloatingWhatsApp />
            </div>
            <Toaster />
      </body>
    </html>
  );
}