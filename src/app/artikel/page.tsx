import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const placeholderArticles = [
  {
    title: '5 Kesalahan Umum dalam Menulis Abstrak dan Cara Menghindarinya',
    category: 'Tips Menulis',
    date: '15 Juli 2024',
    summary: 'Abstrak adalah gerbang utama penelitian Anda. Pelajari kesalahan yang sering terjadi dan pastikan abstrak Anda efektif dan menarik perhatian editor.',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'writing desk',
    link: '#',
  },
  {
    title: 'Update Terbaru: Predatory Journals yang Harus Dihindari di Tahun 2024',
    category: 'Berita Akademik',
    date: '12 Juli 2024',
    summary: 'Dunia publikasi terus berubah. Kenali daftar jurnal predator terbaru agar jerih payah penelitian Anda tidak sia-sia dan terpublikasi di tempat yang tepat.',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'warning sign',
    link: '#',
  },
  {
    title: 'Cara Memilih Jurnal yang Tepat untuk Naskah Anda',
    category: 'Publikasi',
    date: '10 Juli 2024',
    summary: 'Memilih jurnal yang sesuai adalah langkah krusial. Kami berikan panduan langkah demi langkah untuk menemukan rumah terbaik bagi artikel ilmiah Anda.',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'library books',
    link: '#',
  },
];

export default function ArtikelPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Artikel & Wawasan Terbaru
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Temukan tips, berita, dan analisis mendalam seputar dunia akademik dan publikasi ilmiah dari para ahli di Simpul Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderArticles.map((article, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Link href={article.link} className="block">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={article.dataAiHint}
                  />
                </div>
              </Link>
              <CardHeader>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5" />
                        <span>{article.category}</span>
                    </div>
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
                 <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={article.link}>
                        Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
            <p className="text-muted-foreground">Konten baru akan segera hadir. Nantikan terus wawasan terbaru dari kami!</p>
        </div>

      </div>
    </div>
  );
}