import Image from 'next/image';
import Link from 'next/link';
import {
  BookCopy,
  FileCheck2,
  Newspaper,
  Presentation,
  Star,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const services = [
  {
    icon: BookCopy,
    title: 'Konversi Skripsi ke Jurnal',
    description: 'Ubah skripsi Anda menjadi artikel jurnal ilmiah yang siap publikasi.',
  },
  {
    icon: FileCheck2,
    title: 'Academic Proofreading',
    description: 'Pemeriksaan tata bahasa, ejaan, dan gaya penulisan akademik oleh ahli.',
  },
  {
    icon: Newspaper,
    title: 'Pendampingan Publikasi Jurnal',
    description: 'Bimbingan penuh dari naskah hingga terbit di jurnal nasional maupun internasional.',
  },
  {
    icon: Presentation,
    title: 'Pelatihan Penulisan Akademik',
    description: 'Tingkatkan kemampuan menulis karya ilmiah Anda dengan pelatihan intensif.',
  },
];

const team = [
  {
    name: 'Muhammad Khairul',
    role: 'Founder & Director',
    image: 'https://placehold.co/150x150.png',
    dataAiHint: 'professional man',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Head of Academic Services',
    image: 'https://placehold.co/150x150.png',
    dataAiHint: 'smiling man',
  },
  {
    name: 'Siti Aminah',
    role: 'Lead Editor',
    image: 'https://placehold.co/150x150.png',
    dataAiHint: 'professional woman',
  },
  {
    name: 'Budi Hartono',
    role: 'Training Coordinator',
    image: 'https://placehold.co/150x150.png',
    dataAiHint: 'man glasses',
  },
];

const testimonials = [
  {
    name: 'Rina Sari, M.Kom',
    comment:
      'Layanan konversi skripsi sangat membantu. Prosesnya cepat dan hasilnya memuaskan. Artikel saya berhasil terbit di jurnal SINTA 2.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'happy student',
  },
  {
    name: 'Dr. Adi Nugroho',
    comment:
      'Proofreading yang teliti dan profesional. Naskah saya menjadi jauh lebih baik dan diterima di konferensi internasional. Sangat direkomendasikan!',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professor',
  },
  {
    name: 'Fitriani, S.Pd',
    comment:
      'Tanpa pendampingan dari Simpul Academy, saya mungkin masih bingung dengan proses publikasi. Terima kasih banyak!',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'graduate woman',
  },
  {
    name: 'Mahasiswa Pascasarjana UGM',
    comment:
      'Pelatihan academic writing-nya sangat membuka wawasan. Banyak tips praktis yang bisa langsung diterapkan. Pematerinya juga sangat kompeten.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'group students',
  },
];

const TickerText = () => (
    <>
      <span>
        Jasa Konversi Skripsi ke Jurnal
      </span>
      <span className="mx-4 text-accent">•</span>
      <span>
        Academic Proofreading Profesional
      </span>
      <span className="mx-4 text-accent">•</span>
      <span>
        Pendampingan Publikasi Jurnal SINTA & Scopus
      </span>
      <span className="mx-4 text-accent">•</span>
      <span>
        Pelatihan Penulisan Akademik Intensif
      </span>
      <span className="mx-4 text-accent">•</span>
    </>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="hero"
          className="bg-primary/5 text-center pt-20 md:pt-32 pb-12 md:pb-16"
        >
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-4">
              Wujudkan Publikasi Ilmiah Anda
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Simpul Academy menyediakan layanan akademik profesional untuk membantu
              peneliti, dosen, dan mahasiswa dalam mencapai target publikasi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/order">Mulai Proyek Anda</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="border-primary/30">
                <Link href="/kontak">
                  <MessageCircle className="mr-2 h-5 w-5"/>
                  Konsultasi Gratis
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Scrolling Ticker Section */}
        <section className="bg-primary text-primary-foreground py-3 overflow-hidden">
            <div className="relative">
                <div className="flex whitespace-nowrap animate-scroll">
                    <div className="flex-shrink-0 px-8 font-semibold"><TickerText /></div>
                    <div className="flex-shrink-0 px-8 font-semibold"><TickerText /></div>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                Layanan Profesional Kami
              </h2>
              <p className="text-md text-muted-foreground max-w-2xl mx-auto mt-2">
                Kami menawarkan solusi komprehensif untuk semua kebutuhan
                akademik Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/layanan">Lihat Semua Layanan <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                Tim Ahli Kami
              </h2>
              <p className="text-md text-muted-foreground max-w-2xl mx-auto mt-2">
                Dipandu oleh para profesional muda yang bersemangat dalam dunia
                akademik.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {team.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <Avatar className="w-32 h-32 mb-4 shadow-md">
                    <AvatarImage src={member.image} data-ai-hint={member.dataAiHint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg text-primary">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                Apa Kata Klien Kami?
              </h2>
              <p className="text-md text-muted-foreground max-w-2xl mx-auto mt-2">
                Kepercayaan dan kepuasan klien adalah prioritas utama kami.
              </p>
            </div>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col justify-between">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <Avatar className="w-16 h-16 border-2 border-primary/20">
                              <AvatarImage src={testimonial.image} data-ai-hint={testimonial.dataAiHint} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="font-headline text-lg">{testimonial.name}</CardTitle>
                              <div className="flex mt-1 text-amber-400">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground italic">
                            "{testimonial.comment}"
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}
