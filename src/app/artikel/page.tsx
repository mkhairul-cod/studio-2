'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Tag, Sparkles, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const allArticles = [
  {
    title: 'AI dalam Penelitian: Kawan atau Lawan? Etika & Pemanfaatan',
    category: 'Teknologi AI',
    date: '18 Juli 2024',
    summary: 'Kecerdasan Buatan (AI) mengubah lanskap akademik. Pahami bagaimana cara memanfaatkan AI secara etis dan efektif untuk penelitian Anda tanpa terjebak plagiarisme.',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'artificial intelligence robot',
    link: '#',
    isNew: true,
  },
  {
    title: 'Masa Depan Pendidikan: Peran AI Generatif di Ruang Kelas',
    category: 'Pendidikan Masa Depan',
    date: '20 Juli 2024',
    summary: 'Bagaimana AI generatif seperti ChatGPT dapat diintegrasikan dalam kurikulum untuk meningkatkan kreativitas dan pemikiran kritis siswa?',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'classroom technology',
    link: '#',
    isNew: true,
  },
  {
    title: '5 Kesalahan Fatal dalam Abstrak yang Membuat Naskah Ditolak',
    category: 'Tips Menulis',
    date: '12 Juli 2024',
    summary: 'Abstrak adalah gerbang utama naskah Anda. Pelajari kesalahan umum yang sering diabaikan dan cara menulis abstrak yang kuat untuk memikat editor jurnal.',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'writing desk paper',
    link: '#',
    isNew: false,
  },
  {
    title: 'Update 2024: Daftar Jurnal Predator yang Wajib Anda Hindari',
    category: 'Publikasi Ilmiah',
    date: '15 Juli 2024',
    summary: 'Jangan sampai penelitian berharga Anda sia-sia. Kenali ciri-ciri dan daftar terbaru jurnal predator untuk memastikan publikasi Anda aman dan bereputasi.',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'warning sign book',
    link: '#',
    isNew: false,
  },
  {
    title: 'Strategi Jitu Tembus Jurnal Scopus untuk Pemula',
    category: 'Publikasi Ilmiah',
    date: '10 Juli 2024',
    summary: 'Publikasi di jurnal Scopus bukan lagi mimpi. Ikuti panduan langkah demi langkah mulai dari penentuan topik hingga strategi submit yang efektif.',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'magnifying glass journal',
    link: '#',
    isNew: false,
  },
  {
    title: 'Tips & Trik Bertahan Hidup Sebagai Mahasiswa Akhir',
    category: 'Dunia Kampus',
    date: '9 Juli 2024',
    summary: 'Mulai dari mengelola waktu dengan dosen pembimbing hingga menjaga kesehatan mental, temukan cara untuk melewati fase akhir kuliah dengan sukses.',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'student tired laptop',
    link: '#',
    isNew: false,
  },
  {
    title: 'Memanfaatkan Zotero untuk Manajemen Referensi Anti Pusing',
    category: 'Tips Menulis',
    date: '8 Juli 2024',
    summary: 'Ucapkan selamat tinggal pada daftar pustaka berantakan. Kuasai Zotero untuk mengelola sitasi dan referensi secara otomatis dan konsisten.',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'bookshelf organization',
    link: '#',
    isNew: false,
  },
  {
    title: 'Visualisasi Data Penelitian Menggunakan Tableau untuk Pemula',
    category: 'Riset & Data',
    date: '6 Juli 2024',
    summary: 'Data mentah tidak akan bercerita banyak. Pelajari dasar-dasar mengubah angka menjadi grafik yang informatif dan mudah dipahami menggunakan Tableau.',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'data chart graph',
    link: '#',
    isNew: false,
  },
];

const categories = ['Semua', 'Teknologi AI', 'Pendidikan Masa Depan', 'Publikasi Ilmiah', 'Tips Menulis', 'Dunia Kampus', 'Riset & Data'];

export default function ArtikelPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredArticles = activeCategory === 'Semua'
    ? allArticles
    : allArticles.filter(article => article.category === activeCategory);

  return (
    <div className="bg-primary/5 min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Wawasan & Tren Akademik Terbaru
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Jelajahi analisis mendalam, tips praktis, dan berita terkini seputar dunia publikasi, penelitian, dan teknologi pendidikan dari para ahli di Simpul Academy.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
           <Filter className="w-5 h-5 text-muted-foreground hidden sm:block" />
           {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={cn("rounded-full px-6 transition-all duration-300", activeCategory === category ? "bg-accent text-accent-foreground shadow-md scale-105" : "bg-background/80 hover:bg-background")}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 group bg-card">
              <Link href={article.link} className="block">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={article.dataAiHint}
                  />
                   {article.isNew && (
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>BARU</span>
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-primary/80 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {article.category}
                  </div>
                </div>
              </Link>
              <CardHeader>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                     <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                    </div>
                </div>
                <CardTitle className="font-headline text-xl leading-snug">
                  <Link href={article.link} className="hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{article.summary}</p>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary">
                    <Link href={article.link}>
                        Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredArticles.length === 0 && (
          <div className="text-center mt-16 col-span-full bg-background/80 p-8 rounded-lg shadow-sm">
            <h3 className="font-headline text-2xl text-primary">Segera Hadir!</h3>
            <p className="text-muted-foreground text-lg mt-2">
              Belum ada artikel untuk kategori "{activeCategory}". Kami sedang menyiapkannya!
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
