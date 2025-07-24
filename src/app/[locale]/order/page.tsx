'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslations } from 'next-intl';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Loader2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nama harus diisi (minimal 2 karakter).' }),
  whatsapp: z.string().min(10, { message: 'Nomor WhatsApp tidak valid.' }).regex(/^\d+$/, { message: "Hanya boleh angka."}),
  email: z.string().email({ message: 'Format email tidak valid.' }),
  serviceType: z.enum([
    'konversi_jurnal',
    'proofreading',
    'pendampingan_publikasi',
    'pelatihan',
    'pembuatan_web',
    'aplikasi_web',
    'modul_digital',
    'analisis_data',
    'lainnya'
  ], { required_error: 'Silakan pilih salah satu layanan.'}),
  message: z.string().optional(),
  file: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

const serviceOptions = [
    { value: 'konversi_jurnal', label: 'Konversi Skripsi ke Jurnal' },
    { value: 'proofreading', label: 'Academic Proofreading' },
    { value: 'pendampingan_publikasi', label: 'Pendampingan Publikasi Jurnal' },
    { value: 'pelatihan', label: 'Pelatihan Penulisan Akademik' },
    { value: 'pembuatan_web', label: 'Pembuatan Web Pribadi' },
    { value: 'aplikasi_web', label: 'Aplikasi Web-Based' },
    { value: 'modul_digital', label: 'Modul Digital Interaktif' },
    { value: 'analisis_data', label: 'Analisis & Olah Data' },
    { value: 'lainnya', label: 'Layanan Lainnya (Jelaskan di pesan)' },
];

export default function OrderPage() {
  const t = useTranslations('OrderPage');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: '',
        whatsapp: '',
        email: '',
        message: '',
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
        formData.append('file', data.file[0]);
      }
      formData.append('_subject', `Pesanan Baru Layanan: ${data.serviceType} dari ${data.name}`);

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
        throw new Error('Gagal mengirim pesanan.');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Terjadi kesalahan saat mengirim pesanan. Silakan coba lagi.',
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
                    <CardTitle className="font-headline text-3xl text-primary mt-4">{t('success_title')}</CardHeader>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{t('success_description')}</p>
                    <p className="text-muted-foreground mt-2">{t('success_spam')}</p>
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
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            {t('description')}
          </p>
        </div>

        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
              <CardTitle className="font-headline">{t('card_title')}</CardTitle>
              <CardDescription>{t('card_description')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('name_label')}</FormLabel>
                    <FormControl><Input placeholder={t('name_placeholder')} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="whatsapp" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('whatsapp_label')}</FormLabel>
                    <FormControl><Input placeholder={t('whatsapp_placeholder')} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('email_label')}</FormLabel>
                    <FormControl><Input placeholder={t('email_placeholder')} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                 <FormField control={form.control} name="serviceType" render={({ field }) => (
                    <FormItem>
                        <FormLabel>{t('service_label')}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                            <SelectValue placeholder={t('service_placeholder')} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {serviceOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('message_label')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('message_placeholder')}
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField control={form.control} name="file" render={({ field }) => (
                    <FormItem>
                    <FormLabel>{t('upload_label')}</FormLabel>
                    <FormControl>
                        <Input 
                            type="file" 
                            {...form.register('file')}
                            className="file:bg-primary/10 file:text-primary file:font-semibold file:px-4 file:py-2 file:border-none file:rounded-md hover:file:bg-primary/20"
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )} />

                <p className="text-sm text-muted-foreground pt-4 text-center">{t('terms')}</p>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                      <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {t('submitting_button')}
                      </>
                  ) : (
                      t('submit_button')
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
