import {
  BookCopy,
  FileCheck2,
  Newspaper,
  Presentation,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: BookCopy,
    title: 'Konversi Skripsi ke Jurnal Artikel',
    description:
      'Kami membantu mengubah hasil penelitian skripsi, tesis, atau disertasi Anda menjadi artikel ilmiah berkualitas yang siap untuk dipublikasikan di jurnal nasional maupun internasional.',
    details: [
      'Analisis dan restrukturisasi naskah',
      'Penyesuaian format sesuai template jurnal',
      'Penyusunan abstrak dan kata kunci yang efektif',
    ],
  },
  {
    icon: FileCheck2,
    title: 'Academic Proofreading',
    description:
      'Tim ahli kami akan melakukan pemeriksaan mendalam terhadap naskah Anda, mencakup tata bahasa, ejaan, tanda baca, dan konsistensi gaya penulisan akademik.',
    details: [
      'Proofreading oleh native speaker & ahli bidang',
      'Pengecekan plagiarisme (by request)',
      'Perbaikan struktur kalimat dan alur tulisan',
    ],
  },
  {
    icon: Newspaper,
    title: 'Pendampingan Publikasi Jurnal',
    description:
      'Kami menyediakan layanan pendampingan penuh mulai dari pemilihan jurnal yang tepat, proses submission, hingga merespon masukan dari reviewer.',
    details: [
      'Rekomendasi jurnal terindeks Scopus/SINTA',
      'Bantuan proses submission & cover letter',
      'Strategi menanggapi revisi dari reviewer',
    ],
  },
  {
    icon: Presentation,
    title: 'Pelatihan Penulisan Akademik',
    description:
      'Tingkatkan kapasitas Anda dalam penulisan karya ilmiah melalui program pelatihan kami yang dirancang khusus untuk mahasiswa, dosen, dan peneliti.',
    details: [
      'Workshop online & offline',
      'Materi komprehensif dari A-Z',
      'Sesi praktik dan feedback langsung',
    ],
  },
];

export default function LayananPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Layanan Akademik Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Solusi terintegrasi untuk mendukung kesuksesan publikasi ilmiah
            Anda. Kami hadir untuk memudahkan setiap langkah perjalanan akademik
            Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside mb-6">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                    <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="/order">Pesan Layanan Ini</Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
