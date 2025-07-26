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
  Wand2,
  Loader2,
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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { generateTitles } from '@/ai/flows/title-generator';

const services = [
  {
    icon: BookCopy,
    title: 'Konversi Skripsi ke Jurnal',
    description: 'Ubah skripsi/tesis Anda menjadi artikel ilmiah berkualitas.',
  },
  {
    icon: FileCheck2,
    title: 'Academic Proofreading',
    description: 'Pemeriksaan tata bahasa, ejaan, & gaya penulisan.',
  },
  {
    icon: Newspaper,
    title: 'Pendampingan Publikasi',
    description: 'Bimbingan penuh dari pemilihan jurnal hingga submit.',
  },
  {
    icon: Presentation,
    title: 'Pelatihan Penulisan',
    description: 'Tingkatkan kapasitas menulis melalui workshop interaktif.',
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
    role: 'Direktur Program',
    image: 'https://placehold.co/150x150.png',
    dataAiHint: 'smiling man',
  },
  {
    name: 'Siti Aminah, S.Hum',
    role: 'Editor Utama',
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
    name: 'Anisa, Mahasiswa S2',
    comment: 'Layanan konversi tesisnya luar biasa! Artikel saya diterima di jurnal nasional terakreditasi. Terima kasih Simpul Academy!',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'happy student',
  },
  {
    name: 'Dr. Hermawan, Dosen',
    comment: 'Proofreading naskah bahasa Inggris saya sangat teliti. Native speaker mereka benar-benar profesional.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professor',
  },
  {
    name: 'Rizky, Lulusan S1',
    comment: 'Berkat bimbingan intensif, saya berhasil menyelesaikan skripsi tepat waktu dengan hasil yang memuaskan.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'graduate woman',
  },
  {
    name: "'Cendekia' Study Group",
    comment: 'Workshop penulisan akademiknya sangat membuka wawasan. Semua anggota kami jadi lebih percaya diri menulis.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'group students',
  },
];

const TickerText = () => (
    <>
    <span>Konversi Skripsi ke Jurnal</span>
    <span className="mx-4 text-accent">•</span>
    <span>Proofreading Akademik</span>
    <span className="mx-4 text-accent">•</span>
    <span>Pendampingan Publikasi</span>
    <span className="mx-4 text-accent">•</span>
    <span>Pelatihan Penulisan</span>
    <span className="mx-4 text-accent">•</span>
    </>
);

const SpecialOfferDialog = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center items-center mb-4">
            <Award className="w-16 h-16 text-accent-foreground" />
          </div>
          <DialogTitle className="text-2xl font-headline text-primary text-center">
            Penawaran Spesial!
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground pt-2">
            Dapatkan sesi coaching gratis untuk persiapan Beasiswa LPDP. Kelas dibuka jika terkumpul minimal 2 peserta. Jangan lewatkan kesempatan ini!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center pt-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg" onClick={() => onOpenChange(false)}>
            <Link href="/order">
              Pesan Layanan Sekarang
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

const FoldedCornerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-accent-foreground"
  >
    <path
      d="M8 22.0002H18C18.932 22.0002 19.8228 21.6811 20.5218 21.1147C21.2208 20.5482 21.6865 19.7821 21.8415 18.9142L21.9865 18.0002L16.9865 13.0002L8 22.0002Z"
      className="fill-current opacity-30"
    />
    <path
      d="M4 2.00024H16L22 8.00024V18.0002C22 18.5307 21.7893 19.0394 21.4142 19.4145C21.0391 19.7895 20.5304 20.0002 20 20.0002H4C3.46957 20.0002 2.96086 19.7895 2.58579 19.4145C2.21071 19.0394 2 18.5307 2 18.0002V4.00024C2 3.46981 2.21071 2.9611 2.58579 2.58603C2.96086 2.21095 3.46957 2.00024 4 2.00024Z"
      className="stroke-current"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AIToolWidget = () => {
  const [topic, setTopic] = useState('');
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError("Topik tidak boleh kosong.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedTitles([]);

    try {
      const result = await generateTitles({ researchTopic: topic });
      setGeneratedTitles(result.titles);
    } catch (e) {
      console.error(e);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div
            animate={{
                y: [0, -5, 0],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
            }}
            className="fixed bottom-6 left-6 z-40"
        >
          <Button
            variant="ghost"
            className="bg-background/80 hover:bg-primary/90 rounded-full shadow-lg border border-primary/20 hover:scale-110 w-16 h-16 transition-all duration-300 group p-0 flex items-center justify-center"
          >
            <FoldedCornerIcon />
          </Button>
        </motion.div>
      </SheetTrigger>
      <SheetContent side="left" className="w-[380px] sm:w-[450px] p-0">
        <div className="flex flex-col h-full">
            <div className="p-6 border-b">
                <h2 className="text-2xl font-headline text-primary flex items-center gap-3">
                    <Wand2 className="w-7 h-7" />
                    Generator Judul AI
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                    Cukup masukkan topik Anda, dan biarkan AI kami memberikan ide-ide judul yang cemerlang.
                </p>
            </div>
            <div className="p-6 flex-grow overflow-y-auto">
                <div className="space-y-4">
                    <Textarea
                        placeholder={"Contoh: Pengaruh media sosial terhadap kesehatan mental remaja..."}
                        rows={4}
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        disabled={isLoading}
                        className="text-base"
                    />
                    <Button onClick={handleGenerate} disabled={isLoading} className="w-full" size="lg">
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Menghasilkan...
                            </>
                        ) : (
                           <>
                              <Wand2 className="mr-2 h-5 w-5" />
                              Dapatkan Ide Judul
                           </>
                        )}
                    </Button>
                </div>

                {error && (
                    <Alert variant="destructive" className="mt-4 text-left">
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {generatedTitles.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-lg font-headline font-bold text-primary mb-3">Hasil Judul yang Dihasilkan:</h3>
                        <ul className="space-y-3 list-decimal list-inside bg-primary/5 p-4 rounded-md border">
                            {generatedTitles.map((title, index) => (
                                <li key={index} className="text-muted-foreground">
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="p-6 border-t mt-auto text-center">
                 <Button asChild variant="outline">
                  <Link href="/alat-ai">Lihat Alat AI Lainnya <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default function Home() {

  const slides = [
    {
        title: "Mitra Akademik Terdepan Anda",
        description: "Dari konversi skripsi menjadi jurnal hingga pelatihan penulisan, kami hadir untuk memberdayakan perjalanan akademik Anda.",
        buttons: [
            { text: "Pesan Layanan", href: "/order", variant: "default" as const },
            { text: "Hubungi Kami", href: "/kontak", variant: "outline" as const, icon: MessageCircle }
        ],
        image: { src: "https://placehold.co/1200x800.png", dataAiHint: "researcher presentation" },
        floatingIcons: [
            { icon: PenSquare, className: "top-[15%] left-[10%]" },
            { icon: BookOpen, className: "bottom-[15%] right-[10%]" },
            { icon: Lightbulb, className: "top-[20%] right-[20%]" },
        ]
    },
    {
        title: "Berkolaborasi untuk Sukses",
        description: "Kami membangun jaringan dengan institusi dan komunitas untuk memperkuat ekosistem riset dan publikasi di Indonesia.",
        buttons: [
            { text: "Jadi Mitra Kami", href: "/mitra#join-mitra", variant: "default" as const, icon: Users },
            { text: "Lihat Layanan", href: "/layanan", variant: "outline" as const, icon: Briefcase }
        ],
        image: { src: "https://placehold.co/1200x800.png", dataAiHint: "team collaboration" },
        floatingIcons: [
            { icon: Users, className: "bottom-[25%] left-[12%]" },
            { icon: Briefcase, className: "top-[18%] right-[15%]" },
            { icon: Award, className: "bottom-[10%] right-[30%]" },
        ]
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )
  const [isSpecialOfferOpen, setSpecialOfferOpen] = useState(false);

  useEffect(() => {
    // This effect should only run on the client
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
        <AIToolWidget />

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
                            priority={index === 0} // Prioritize loading the first slide image
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
                                     <Button key={btnIndex} asChild size="lg" className={button.variant === 'default' ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'border-primary/30' } variant={button.variant}>
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
                Layanan Unggulan Kami
              </h2>
              <p className="text-md text-muted-foreground max-w-2xl mx-auto mt-2">
                Solusi lengkap untuk semua kebutuhan akademik Anda, didukung oleh para ahli di bidangnya.
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
                Tim Profesional Kami
              </h2>
              <p className="text-md text-muted-foreground max-w-2xl mx-auto mt-2">
                Dipimpin oleh para akademisi dan praktisi berpengalaman yang berdedikasi untuk kesuksesan Anda.
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
                Apa Kata Mereka
              </h2>
              <p className="text-md text-muted-foreground max-w-2xl mx-auto mt-2">
                Kisah sukses dari para klien yang telah mempercayakan kebutuhan akademiknya kepada kami.
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
