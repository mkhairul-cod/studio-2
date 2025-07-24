'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next-intl/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Sparkles, Filter, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

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

const categoryKeys = ['filter_all', 'filter_ai', 'filter_future_edu', 'filter_publishing', 'filter_writing_tips', 'filter_campus_life', 'filter_research_data'];

// This mapping is needed because the categories in the article data are in Indonesian.
// In a real application, you'd likely have category IDs or store the articles with category keys.
const categoryKeyToId: { [key: string]: string } = {
  filter_all: 'Semua',
  filter_ai: 'Teknologi AI',
  filter_future_edu: 'Pendidikan Masa Depan',
  filter_publishing: 'Publikasi Ilmiah',
  filter_writing_tips: 'Tips Menulis',
  filter_campus_life: 'Dunia Kampus',
  filter_research_data: 'Riset & Data',
};


export default function ArtikelPage() {
  const t = useTranslations('ArticlesPage');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredArticles = activeCategory === 'Semua'
    ? allArticles
    : allArticles.filter(article => article.category === activeCategory);

  return (
    <div className="bg-primary/5 min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            {t('description')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
           <Filter className="w-5 h-5 text-muted-foreground hidden sm:block" />
           {categoryKeys.map(key => {
             const categoryName = categoryKeyToId[key];
             return (
              <Button
                key={key}
                variant={activeCategory === categoryName ? 'default' : 'outline'}
                onClick={() => setActiveCategory(categoryName)}
                className={cn("rounded-full px-6 transition-all duration-300", activeCategory === categoryName ? "bg-accent text-accent-foreground shadow-md scale-105" : "bg-background/80 hover:bg-background")}
              >
                {t(key as any)}
              </Button>
            )}
           )}
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
                        {t('read_more')} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredArticles.length === 0 && (
          <div className="text-center mt-16 col-span-full bg-background/80 p-8 rounded-lg shadow-sm">
            <h3 className="font-headline text-2xl text-primary">{t('coming_soon_title')}</h3>
            <p className="text-muted-foreground text-lg mt-2">
              {t('coming_soon_description', {category: activeCategory})}
            </p>
          </div>
        )}

        {/* Call to Action Section */}
        <section className="mt-16 md:mt-24 text-center bg-card p-8 md:p-12 rounded-lg shadow-lg border">
          <h2 className="text-3xl font-headline font-bold text-primary">{t('cta_title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3 mb-6">
            {t('cta_description')}
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/kirim-artikel">
              <Send className="mr-2 h-5 w-5"/>
              {t('cta_button')}
            </Link>
          </Button>
        </section>

      </div>
    </div>
  );
}
