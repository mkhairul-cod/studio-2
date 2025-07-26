'use client';
import Link from 'next/link';

import {
  BookCopy,
  FileCheck2,
  Newspaper,
  Presentation,
  Languages,
  BookCheck,
  ClipboardCheck,
  Lightbulb,
  GraduationCap,
  Sparkles,
  BarChart,
  FileText,
  Image as ImageIcon,
  Globe,
  AppWindow,
  FileCode,
  Award,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: BookCopy,
    title: 'Konversi Skripsi ke Jurnal',
    description: 'Ubah hasil penelitian (skripsi/tesis) Anda menjadi artikel ilmiah berkualitas siap publikasi.',
  },
  {
    icon: FileCheck2,
    title: 'Academic Proofreading',
    description: 'Pemeriksaan tata bahasa, ejaan, & gaya penulisan akademik oleh ahli dan native speaker.',
  },
  {
    icon: Newspaper,
    title: 'Pendampingan Publikasi',
    description: 'Bimbingan penuh dari pemilihan jurnal, submission, hingga merespon reviewer.',
  },
  {
    icon: Presentation,
    title: 'Pelatihan Penulisan Akademik',
    description: 'Tingkatkan kapasitas menulis karya ilmiah melalui workshop online/offline interaktif.',
  },
  {
    icon: Languages,
    title: 'Jasa Penerjemahan',
    description: 'Penerjemahan abstrak dan naskah penuh (ID-EN) dengan terminologi yang akurat.',
  },
  {
    icon: BookCheck,
    title: 'Cek Plagiarisme & Parafrase',
    description: 'Pengecekan orisinalitas dengan Turnitin dan jasa parafrase untuk mengurangi similaritas.',
  },
  {
    icon: ClipboardCheck,
    title: 'Pembuatan Kuesioner',
    description: 'Pengembangan instrumen penelitian (kuesioner/angket) yang valid dan reliabel.',
  },
  {
    icon: Lightbulb,
    title: 'Konsultasi Judul & Topik',
    description: 'Bantuan menemukan topik penelitian yang menarik, relevan, dan memiliki kebaruan.',
  },
  {
    icon: GraduationCap,
    title: 'Bimbingan Proposal & Skripsi',
    description: 'Pendampingan intensif untuk penyusunan proposal penelitian hingga laporan skripsi.',
  },
  {
    icon: Sparkles,
    title: 'Desain & Layout Naskah',
    description: 'Jasa layouting profesional untuk artikel, prosiding, atau buku agar sesuai standar.',
  },
  {
    icon: BarChart,
    title: 'Analisis & Olah Data',
    description: 'Bantuan analisis data kuantitatif (SPSS, SEM) dan kualitatif (Nvivo, Atlas.ti).',
  },
  {
    icon: FileText,
    title: 'Penyusunan Referensi',
    description: 'Perapian daftar pustaka dan sitasi sesuai gaya (APA, MLA, Chicago) menggunakan Mendeley/Zotero.',
  },
  {
    icon: Globe,
    title: 'Pembuatan Web Pribadi',
    description: 'Bangun portofolio digital Anda dengan website pribadi yang profesional dan modern.',
  },
  {
    icon: AppWindow,
    title: 'Aplikasi Web-Based',
    description: 'Kembangkan aplikasi berbasis web untuk penelitian, pengajaran, atau kebutuhan bisnis Anda.',
  },
  {
    icon: FileCode,
    title: 'Modul Digital Interaktif',
    description: 'Transformasi materi ajar menjadi modul digital yang menarik dan interaktif untuk siswa.',
  },
  {
    icon: Award,
    title: 'Coaching Persiapan LPDP (Gratis)',
    description: 'Bimbingan intensif persiapan beasiswa LPDP, dari esai hingga wawancara. Kelas dibuka jika terkumpul minimal 2 peserta.',
    isFeatured: true,
  },
];

const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Contoh Naskah yang Dikerjakan', dataAiHint: 'academic paper' },
  { src: 'https://placehold.co/600x400.png', alt: 'Screenshot Testimoni Klien', dataAiHint: 'chat testimonial' },
  { src: 'https://placehold.co/600x400.png', alt: 'Sertifikat Publikasi Jurnal', dataAiHint: 'certificate' },
  { src: 'https://placehold.co/600x400.png', alt: 'Sesi Pelatihan Online', dataAiHint: 'online workshop' },
  { src: 'https://placehold.co/600x400.png', alt: 'Hasil Cek Plagiarisme', dataAiHint: 'plagiarism check' },
  { src: 'https://placehold.co/600x400.png', alt: 'Proses Bimbingan', dataAiHint: 'mentoring session' },
];

export default function LayananPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Layanan Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Kami menyediakan solusi komprehensif untuk mendukung setiap tahap perjalanan akademik dan profesional Anda, dari penelitian hingga transformasi digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className={cn("flex flex-col hover:shadow-lg transition-shadow duration-300", service.isFeatured && "border-2 border-primary bg-primary/5")}>
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl leading-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow pt-0">
                <p className="text-muted-foreground text-sm flex-grow mb-4">{service.description}</p>
                <Button asChild size="sm" className={cn("w-full mt-auto", service.isFeatured ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-accent hover:bg-accent/90 text-accent-foreground")}>
                    <Link href="/order">Pesan Layanan Ini</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery Section */}
        <section id="gallery" className="pt-16 md:pt-24">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                Galeri Portofolio
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                Beberapa contoh hasil kerja dan momen dari layanan yang telah kami berikan kepada klien kami.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                   <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.dataAiHint}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-center font-semibold p-4">{image.alt}</p>
                    </div>
                </div>
              ))}
            </div>
        </section>

      </div>
    </div>
  );
}
