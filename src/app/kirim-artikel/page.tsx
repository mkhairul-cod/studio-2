'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

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
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Loader2, Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nama harus diisi.' }),
  affiliation: z.string().min(3, { message: 'Afiliasi institusi harus diisi.' }),
  email: z.string().email({ message: 'Format email tidak valid.' }),
  title: z.string().min(10, { message: 'Judul artikel minimal 10 karakter.' }),
  abstract: z.string().min(20, { message: 'Abstrak minimal 20 karakter.' }),
  file: z.any().refine(files => files?.length == 1, 'File naskah wajib diunggah.'),
});

type FormData = z.infer<typeof formSchema>;

export default function KirimArtikelPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: '',
        affiliation: '',
        email: '',
        title: '',
        abstract: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
     try {
      const formData = new FormData();
      
      Object.keys(data).forEach(key => {
        if (key !== 'file') {
          formData.append(key, (data as any)[key]);
        }
      });
      
      if (data.file && data.file.length > 0) {
        formData.append('file_naskah', data.file[0]);
      }
      formData.append('_subject', `[KIRIM ARTIKEL] - ${data.title} oleh ${data.name}`);

      const response = await fetch('https://formspree.io/f/xanjbwpd', {
          method: 'POST',
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Gagal mengirimkan tulisan.');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 flex items-center justify-center min-h-[60vh]">
            <Card className="w-full max-w-lg text-center">
                <CardHeader>
                    <div className="mx-auto bg-green-100 p-4 rounded-full w-fit">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <CardTitle className="font-headline text-3xl text-primary mt-4">Terima Kasih!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Naskah Anda telah berhasil dikirim. Tim editor kami akan segera meninjaunya. Kami akan menghubungi Anda melalui email untuk informasi lebih lanjut.</p>
                </CardContent>
            </Card>
        </div>
    );
  }

  return (
    <div className="bg-primary/5 min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Kirim Artikel
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Bagikan pengetahuan dan hasil penelitian Anda dengan komunitas. Kami menerima kontribusi artikel yang relevan dengan dunia akademik dan penelitian.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
                <h2 className="font-headline text-2xl text-primary mb-4">Panduan Penulis</h2>
                <div className="space-y-4 text-muted-foreground p-6 bg-card border rounded-lg">
                    <div>
                        <h3 className="font-bold text-card-foreground">Orisinalitas</h3>
                        <p className="text-sm">Karya harus orisinal, belum pernah dipublikasikan, dan tidak sedang dalam proses review di tempat lain.</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-card-foreground">Format</h3>
                        <p className="text-sm">Kirim dalam format .doc, .docx, atau .pdf. Gunakan sitasi yang konsisten (APA, MLA, dll.).</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-card-foreground">Topik Relevan</h3>
                        <p className="text-sm">Topik harus relevan dengan keilmuan, riset, teknologi pendidikan, atau tren akademik terkini.</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-card-foreground">Proses Review</h3>
                        <p className="text-sm">Setiap naskah akan melalui proses review oleh tim editor kami untuk memastikan kualitas dan kelayakan.</p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2">
                <Card className="w-full">
                <CardHeader>
                    <CardTitle className="font-headline">Formulir Pengiriman</CardTitle>
                    <CardDescription>Lengkapi data di bawah ini dan unggah naskah Anda.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama Lengkap</FormLabel>
                                <FormControl><Input placeholder="Contoh: Dr. Budi Santoso" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                            )} />
                            <FormField control={form.control} name="affiliation" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Afiliasi Institusi</FormLabel>
                                <FormControl><Input placeholder="Contoh: Universitas Gadjah Mada" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                            )} />
                        </div>
                        <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Alamat Email</FormLabel>
                            <FormControl><Input type="email" placeholder="emailanda@contoh.com" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                        )} />
                        <FormField control={form.control} name="title" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Judul Artikel</FormLabel>
                            <FormControl><Input placeholder="Masukkan judul artikel Anda di sini" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                        )} />
                        <FormField control={form.control} name="abstract" render={({ field }) => (
                            <FormItem>
                            <FormLabel>Abstrak</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Tuliskan abstrak singkat artikel Anda (maksimal 250 kata)"
                                rows={4}
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="file" render={({ field }) => (
                            <FormItem>
                            <FormLabel>Unggah File Naskah (.doc, .docx, .pdf)</FormLabel>
                            <FormControl>
                                <Input 
                                    type="file" 
                                    accept=".doc,.docx,.pdf"
                                    {...form.register('file')}
                                    className="file:bg-primary/10 file:text-primary file:font-semibold file:px-4 file:py-2 file:border-none file:rounded-md hover:file:bg-primary/20"
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )} />
                        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Mengirim...
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4" />
                                Kirim Tulisan
                            </>
                        )}
                        </Button>
                    </form>
                    </Form>
                </CardContent>
                </Card>
            </div>
        </div>
        
      </div>
    </div>
  );
}
