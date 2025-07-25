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
  Loader2,
  Users,
  Briefcase,
  Award,
  PenSquare,
  Lightbulb,
  BookOpen,
  Wand2,
} from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { generateTitles } from '@/ai/flows/title-generator';


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

const AnimateOnScroll = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};


export default function Home() {
  const [isSpecialOfferOpen, setSpecialOfferOpen] = useState(false);
  const [topic, setTopic] = useState('');
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError('Mohon masukkan deskripsi topik penelitian Anda.');
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
      setError('Terjadi kesalahan saat menghasilkan judul. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
        <SpecialOfferDialog open={isSpecialOfferOpen} onOpenChange={setSpecialOfferOpen} />
        {/* Hero Section */}
        <section id="hero" className="relative bg-primary/5 w-full overflow-hidden">
          <div className="relative w-full min-h-[70vh] flex items-center justify-center py-20">
              <FloatingIcon icon={PenSquare} className="top-[15%] left-[10%]" />
              <FloatingIcon icon={BookOpen} className="bottom-[15%] right-[10%]" />
              <FloatingIcon icon={Lightbulb} className="top-[20%] right-[20%]" />
              <Image
                  src="https://placehold.co/1200x800.png"
                  alt="Abstract background"
                  fill
                  style={{objectFit: 'cover'}}
                  className="opacity-10"
                  data-ai-hint="researcher presentation"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

              <div className="container mx-auto px-4 text-center relative z-10">
                  <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-4">
                      Butuh Inspirasi Judul Penelitian?
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                      Cukup masukkan topik Anda, dan biarkan kecerdasan buatan kami memberikan ide-ide judul yang cemerlang untuk memulai penelitian Anda.
                  </p>
                  
                  <Card className="max-w-2xl mx-auto shadow-xl bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            <Textarea
                                placeholder="Contoh: Pengaruh media sosial terhadap kesehatan mental remaja..."
                                rows={3}
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                disabled={isLoading}
                                className="text-base"
                            />
                            <Button onClick={handleGenerate} disabled={isLoading} className="w-full" size="lg">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Mencari Ide...
                                    </>
                                ) : (
                                   <>
                                      <Wand2 className="mr-2 h-5 w-5" />
                                      Dapatkan Ide Judul
                                   </>
                                )}
                            </Button>
                        </div>
                    </CardContent>
                  </Card>

                   {error && (
                      <Alert variant="destructive" className="max-w-2xl mx-auto mt-4 text-left">
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{error}</AlertDescription>
                      </Alert>
                  )}

                  {generatedTitles.length > 0 && (
                      <div className="mt-8 max-w-2xl mx-auto text-left">
                          <h3 className="text-xl font-headline font-bold text-primary mb-4">Berikut beberapa idenya:</h3>
                          <ul className="space-y-3 list-decimal list-inside bg-background/80 backdrop-blur-sm p-4 rounded-md border">
                              {generatedTitles.map((title, index) => (
                                  <li key={index} className="text-muted-foreground">
                                      {title}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  )}
              </div>
          </div>
        </section>

        {/* Scrolling Ticker Section */}
        <section className="bg-primary text-primary-foreground py-5 overflow-hidden relative mt-16">
            <div className="relative">
                <div className="flex whitespace-nowrap animate-scroll">
                    <div className="flex-shrink-0 px-8 text-lg font-bold"><TickerText /></div>
                    <div className="flex-shrink-0 px-8 text-lg font-bold"><TickerText /></div>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <AnimateOnScroll>
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
        </AnimateOnScroll>

        {/* Team Section */}
        <AnimateOnScroll>
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
        </AnimateOnScroll>

        {/* Testimonials Section */}
        <AnimateOnScroll>
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
        </AnimateOnScroll>
    </>
  );
}
