'use client';

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
  Users,
  Briefcase,
  Award,
  PenSquare,
  Lightbulb,
  BookOpen,
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Autoplay from "embla-carousel-autoplay"
import { motion } from 'framer-motion';

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

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
    name: 'Muhammad Khairul, S.Pd, M.Pd',
    role: 'Direktur Utama',
    image: 'https://placehold.co/150x150.png',
    dataAiHint: 'professional man',
  },
  {
    name: 'Dr. Nurul Fajri Saminan, S.Pd, M.Pd',
    role: 'Direktur Program & Penelitian',
    image: 'https://placehold.co/150x150.png',
    dataAiHint: 'smiling man',
  },
  {
    name: 'Siti Aminah, S.Hum',
    role: 'Lead Editor',
    image: 'https://placehold.co/150x150.png',
    dataAiHint: 'professional woman',
  },
  {
    name: 'Budi Hartono, M.Kom',
    role: 'Koordinator Pelatihan',
    image: 'https://placehold.co/150x150.png',
    dataAiHint: 'man glasses',
  },
];

const testimonials = [
  {
    name: 'Dosen, Universitas Swasta',
    comment:
      'Layanan konversi skripsi sangat membantu. Prosesnya cepat dan hasilnya memuaskan. Artikel saya berhasil terbit di jurnal SINTA 2.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'happy student',
  },
  {
    name: 'Peneliti, LIPI',
    comment:
      'Proofreading yang teliti dan profesional. Naskah saya menjadi jauh lebih baik dan diterima di konferensi internasional. Sangat direkomendasikan!',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professor',
  },
  {
    name: 'Guru, SMAN 3 Jakarta',
    comment:
      'Tanpa pendampingan dari Simpul Academy, saya mungkin masih bingung dengan proses publikasi. Terima kasih banyak!',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'graduate woman',
  },
  {
    name: 'Mahasiswa Pascasarjana, UGM',
    comment:
      'Pelatihan academic writing-nya sangat membuka wawasan. Banyak tips praktis yang bisa langsung diterapkan. Pematerinya juga sangat kompeten.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'group students',
  },
];

const TickerText = () => {
    return (
        <>
        <span>Jasa Konversi Skripsi ke Jurnal</span>
        <span className="mx-4 text-accent">•</span>
        <span>Academic Proofreading Profesional</span>
        <span className="mx-4 text-accent">•</span>
        <span>Pendampingan Publikasi Jurnal SINTA & Scopus</span>
        <span className="mx-4 text-accent">•</span>
        <span>Pelatihan Penulisan Akademik Intensif</span>
        <span className="mx-4 text-accent">•</span>
        </>
    );
};

const SpecialOfferDialog = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center items-center mb-4">
            <Award className="w-16 h-16 text-accent-foreground" />
          </div>
          <DialogTitle className="text-2xl font-headline text-primary text-center">
            Program Spesial: Coaching LPDP Gratis!
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground pt-2">
            Raih mimpimu studi lanjut dengan beasiswa LPDP. Kami membuka kelas bimbingan intensif gratis dari esai hingga wawancara. Kelas dibuka jika terkumpul minimal 2 peserta.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center pt-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg" onClick={() => onOpenChange(false)}>
            <Link href="/order">
              Amankan Tempat Anda
              <ArrowRight className="ml-2 h-5 w-5"/>
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const FloatingIcon = ({ icon: Icon, className }: { icon: React.ElementType, className: string }) => {
    const duration = Math.random() * 2 + 3; // Random duration between 3 and 5 seconds
    const delay = Math.random() * 2; // Random delay up to 2 seconds

    return (
        <motion.div
            className={`absolute text-primary/30 z-0 hidden md:block ${className}`}
            animate={{
                y: ["-8px", "8px"],
                rotate: [0, Math.random() * 10 - 5],
            }}
            transition={{
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay
            }}
        >
            <Icon className="w-12 h-12 lg:w-16 lg:h-16" />
        </motion.div>
    );
};


export default function Home() {
  const slides = [
    {
        title: "Wujudkan Publikasi Ilmiah Anda",
        description: "Simpul Academy menyediakan layanan akademik profesional untuk membantu peneliti, dosen, dan mahasiswa dalam mencapai target publikasi.",
        buttons: [
            { text: "Mulai Proyek Anda", href: "/order", variant: "accent" },
            { text: "Konsultasi Gratis", href: "/kontak", variant: "outline", icon: MessageCircle }
        ],
        image: { src: "https://placehold.co/1200x800.png", dataAiHint: "researcher presentation" },
        floatingIcons: [
            { icon: PenSquare, className: "top-[15%] left-[10%]" },
            { icon: BookOpen, className: "bottom-[15%] right-[10%]" },
            { icon: Lightbulb, className: "top-[20%] right-[20%]" },
        ]
    },
    {
        title: "Bangun Peluang & Jadi Mitra Kami",
        description: "Buka peluang penghasilan tambahan dan perluas jaringan Anda dengan menjadi mitra Simpul Academy. Mari tumbuh dan berkolaborasi bersama kami.",
        buttons: [
            { text: "Jadi Mitra Kami", href: "/mitra#join-mitra", variant: "accent", icon: Users },
            { text: "Lihat Layanan", href: "/layanan", variant: "outline", icon: Briefcase }
        ],
        image: { src: "https://placehold.co/1200x800.png", dataAiHint: "team collaboration" },
        floatingIcons: [
            { icon: Users, className: "bottom-[25%] left-[12%]" },
            { icon: Briefcase, className: "top-[18%] right-[15%]" },
            { icon: Award, className: "bottom-[10%] right-[30%]" },
        ]
    },
    {
        title: "Asah Kemampuan, Cari Solusi",
        description: "Ayo tingkatkan skill menulis, meneliti, menganalisis masalah, dan berbagi ide untuk mencari solusi bersama melalui program pelatihan kami.",
        buttons: [
            { text: "Lihat Pelatihan", href: "/layanan", variant: "accent", icon: Presentation },
            { text: "Hubungi Kami", href: "/kontak", variant: "outline", icon: MessageCircle }
        ],
        image: { src: "https://placehold.co/1200x800.png", dataAiHint: "online workshop" },
        floatingIcons: [
            { icon: Presentation, className: "top-[20%] left-[15%]" },
            { icon: Lightbulb, className: "bottom-[20%] right-[15%]" },
            { icon: PenSquare, className: "top-[40%] right-[10%]" },
        ]
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )
  const [isSpecialOfferOpen, setSpecialOfferOpen] = useState(false);

  useEffect(() => {
    const hasSeenOffer = sessionStorage.getItem('hasSeenLpdpOffer');
    if (!hasSeenOffer) {
      const timer = setTimeout(() => {
        setSpecialOfferOpen(true);
        sessionStorage.setItem('hasSeenLpdpOffer', 'true');
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, []);


  return (
    <>
        <SpecialOfferDialog open={isSpecialOfferOpen} onOpenChange={setSpecialOfferOpen} />
        {/* Hero Section */}
        <section
          id="hero"
          className="relative bg-primary/5 w-full overflow-hidden"
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{ loop: true }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                    <div className="relative w-full h-[80vh] md:h-[70vh]">
                        {slide.floatingIcons.map((item, idx) => (
                           <FloatingIcon key={idx} icon={item.icon} className={item.className} />
                        ))}
                        <Image
                            src={slide.image.src}
                            alt={slide.title}
                            fill
                            style={{objectFit: 'cover'}}
                            className="opacity-10"
                            data-ai-hint={slide.image.dataAiHint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-center relative z-10">
                            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-4">
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                                {slide.description}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                {slide.buttons.map((button, btnIndex) => (
                                     <Button key={btnIndex} asChild size="lg" className={button.variant === 'accent' ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'border-primary/30' } variant={button.variant === 'accent' ? 'default' : 'outline'}>
                                        <Link href={button.href}>
                                            {button.icon && <button.icon className="mr-2 h-5 w-5"/>}
                                            {button.text}
                                        </Link>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex" />
          </Carousel>
        </section>

        {/* Scrolling Ticker Section */}
        <section className="bg-primary text-primary-foreground py-5 overflow-hidden relative">
            <div className="relative">
                <div className="flex whitespace-nowrap animate-scroll">
                    <div className="flex-shrink-0 px-8 text-lg font-bold"><TickerText /></div>
                    <div className="flex-shrink-0 px-8 text-lg font-bold"><TickerText /></div>
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
                Kami menawarkan solusi komprehensif untuk semua kebutuhan akademik Anda.
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
                Dipandu oleh para profesional yang bersemangat dalam dunia akademik dan inovasi digital untuk membantu kesuksesan Anda.
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
    </>
  );
}
