'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, MailCheck, Handshake, Building2 } from 'lucide-react';

const formSchema = z.object({
  organization: z.string().min(2, { message: 'Nama institusi/organisasi harus diisi.' }),
  name: z.string().min(2, { message: 'Nama PIC harus diisi.' }),
  email: z.string().email({ message: 'Format email tidak valid.' }),
  proposal: z.string().min(10, { message: 'Deskripsi singkat minimal 10 karakter.' }),
});

type FormData = z.infer<typeof formSchema>;

const partners = [
    { name: 'Universitas Indonesia', logo: 'https://placehold.co/150x50.png', dataAiHint: 'university logo' },
    { name: 'Institut Teknologi Bandung', logo: 'https://placehold.co/150x50.png', dataAiHint: 'university logo' },
    { name: 'Lembaga Ilmu Pengetahuan Indonesia (LIPI)', logo: 'https://placehold.co/150x50.png', dataAiHint: 'research institute logo' },
    { name: 'Kementerian Pendidikan dan Kebudayaan', logo: 'https://placehold.co/150x50.png', dataAiHint: 'government logo' },
    { name: 'Relawan Jurnal Indonesia', logo: 'https://placehold.co/150x50.png', dataAiHint: 'community logo' },
    { name: 'Asosiasi Penerbit Jurnal', logo: 'https://placehold.co/150x50.png', dataAiHint: 'association logo' },
]

export default function MitraPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organization: '',
      name: '',
      email: '',
      proposal: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // This uses the same formspree endpoint for simplicity
    try {
      const response = await fetch('https://formspree.io/f/xanjbwpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            form_type: 'Partnership Inquiry',
            ...data
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Gagal mengirim proposal.');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Terjadi kesalahan saat mengirim data. Silakan coba lagi.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Kemitraan & Kolaborasi
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Kami percaya pada kekuatan kolaborasi. Simpul Academy aktif menjalin kemitraan dengan universitas, lembaga riset, dan komunitas untuk memajukan ekosistem akademik Indonesia.
          </p>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 md:py-24">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-headline font-bold text-primary flex items-center justify-center gap-3"><Building2 /> Institusi Mitra Kami</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
                {partners.map(p => (
                    <div key={p.name} title={p.name}>
                        <Image src={p.logo} alt={p.name} width={150} height={50} className="grayscale hover:grayscale-0 transition-all duration-300" data-ai-hint={p.dataAiHint} />
                    </div>
                ))}
            </div>
         </div>
      </section>


      {/* Join Mitra Form Section */}
      <section id="join-mitra" className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline flex items-center justify-center gap-3">
              <Handshake /> Mari Bergabung Sebagai Mitra
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Kami terbuka untuk berbagai bentuk kerja sama, seperti penyelenggaraan workshop bersama, program pendampingan, atau inisiatif lainnya yang saling menguntungkan.
            </p>
          </div>

          {isSubmitted ? (
             <Card className="w-full max-w-lg text-center mx-auto">
                <CardHeader>
                    <div className="mx-auto w-fit rounded-full bg-green-100 p-4">
                    <MailCheck className="h-12 w-12 text-green-600" />
                    </div>
                    <CardTitle className="font-headline text-3xl text-primary mt-4">
                    Proposal Terkirim!
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                    Terima kasih atas minat Anda untuk berkolaborasi. Tim kami akan mempelajari proposal Anda dan akan segera menghubungi Anda.
                    </p>
                </CardContent>
             </Card>
          ) : (
            <Card className="mx-auto w-full max-w-2xl">
                <CardHeader>
                    <CardTitle className="font-headline">Formulir Ajuan Kemitraan</CardTitle>
                    <CardDescription>
                    Isi formulir di bawah ini untuk memulai diskusi kerjasama.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Nama Institusi/Organisasi</FormLabel>
                            <FormControl>
                                <Input placeholder="Contoh: Universitas Pendidikan Indonesia" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Nama Narahubung (PIC)</FormLabel>
                            <FormControl>
                                <Input placeholder="Contoh: Prof. Dr. Siti Rahayu" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email Narahubung</FormLabel>
                            <FormControl>
                                <Input placeholder="pic@emailinstitusi.ac.id" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="proposal"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Deskripsi Singkat Proposal Kerjasama</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Jelaskan secara singkat bentuk kerjasama yang Anda usulkan..."
                                rows={4}
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Mengirim...
                            </>
                        ) : (
                            "Kirim Proposal"
                        )}
                        </Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
