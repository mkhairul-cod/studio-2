import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Tag, Sparkles } from 'lucide-react';

const placeholderArticles = [
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
    title: '5 Kesalahan Fatal dalam Abstrak yang Membuat Naskah Ditolak',
    category: 'Tips Menulis',
    date: '12 Juli 2024',
    summary: 'Abstrak adalah gerbang utama naskah Anda. Pelajari kesalahan umum yang sering diabaikan dan cara menulis abstrak yang kuat untuk memikat editor jurnal.',
    image: 'https://placehold.co/800x400.png',
    dataAiHint: 'writing desk paper',
    link: '#',
    isNew: false,
  },
];

export default function ArtikelPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Wawasan & Tren Akademik Terbaru
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Jelajahi analisis mendalam, tips praktis, dan berita terkini seputar dunia publikasi, penelitian, dan teknologi pendidikan dari para ahli di Simpul Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderArticles.map((article, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <Link href={article.link} className="block">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={article.dataAiHint}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                   {article.isNew && (
                    <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>BARU</span>
                    </div>
                  )}
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
                 <Button asChild variant="link" className="p-0 h-auto font-semibold">
                    <Link href={article.link}>
                        Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
