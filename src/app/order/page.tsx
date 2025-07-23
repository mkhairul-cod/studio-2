'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
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
  file: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: '01', name: 'Informasi Diri', fields: ['name', 'whatsapp', 'email'] },
  { id: '02', name: 'Pilih Layanan', fields: ['serviceType'] },
  { id: '03', name: 'Unggah & Kirim', fields: ['file'] },
];

const serviceOptions = [
    { value: 'konversi_jurnal', label: 'Konversi Skripsi ke Jurnal' },
    { value: 'proofreading', label: 'Academic Proofreading' },
    { value: 'pendampingan_publikasi', label: 'Pendampingan Publikasi Jurnal' },
    { value: 'pelatihan', label: 'Pelatihan Penulisan Akademik' },
    { value: 'pembuatan_web', label: 'Pembuatan Web Pribadi' },
    { value: 'aplikasi_web', label: 'Aplikasi Web-Based' },
    { value: 'modul_digital', label: 'Modul Digital Interaktif' },
    { value: 'analisis_data', label: 'Analisis & Olah Data' },
    { value: 'lainnya', label: 'Layanan Lainnya (Jelaskan di WA)' },
];

export default function OrderPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: '',
        whatsapp: '',
        email: '',
    }
  });

  const { handleSubmit, trigger } = methods;

  const processForm = async (data: FormData) => {
    setIsSubmitting(true);
     try {
      // Create a FormData object to handle file uploads
      const formData = new FormData();
      
      // Append all text fields from 'data'
      Object.keys(data).forEach(key => {
        if (key !== 'file') {
          formData.append(key, (data as any)[key]);
        }
      });
      
      // Append the file if it exists
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
         toast({
          title: "Pesanan Terkirim!",
          description: "Tim kami akan segera menghubungi Anda melalui WhatsApp.",
          variant: "default",
        });
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

  type FieldName = keyof FormData;

  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });
    
    if (!output) return;

    if (currentStep < steps.length - 1) {
        setCurrentStep(step => step + 1);
    } else {
       await handleSubmit(processForm)();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(step => step - 1);
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
                    <CardTitle className="font-headline text-3xl text-primary mt-4">Pesanan Berhasil Dikirim!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Terima kasih telah melakukan pemesanan. Tim kami akan segera menghubungi Anda melalui WhatsApp untuk konfirmasi dan diskusi lebih lanjut mengenai detail dan harga.</p>
                    <p className="text-muted-foreground mt-2">Mohon periksa juga folder spam email Anda untuk salinan pesanan.</p>
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
            Formulir Pemesanan Layanan
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Lengkapi 3 langkah mudah di bawah ini untuk memulai proyek Anda bersama kami. Tim kami akan menghubungi Anda untuk konsultasi harga dan detail.
          </p>
        </div>

        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="font-headline">Langkah {steps[currentStep].id}</CardTitle>
                <CardDescription>{steps[currentStep].name}</CardDescription>
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {currentStep + 1} / {steps.length}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(processForm)}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentStep === 0 && (
                      <div className="space-y-4">
                        <FormField control={methods.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl><Input placeholder="Contoh: Budi Santoso" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={methods.control} name="whatsapp" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nomor WhatsApp Aktif</FormLabel>
                            <FormControl><Input placeholder="Contoh: 081234567890" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={methods.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Alamat Email</FormLabel>
                            <FormControl><Input placeholder="Contoh: budi.santoso@email.com" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                    )}

                    {currentStep === 1 && (
                      <FormField control={methods.control} name="serviceType" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jenis Layanan</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih layanan yang Anda butuhkan" />
                              </Trigger>
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
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-4 text-center">
                        <p className="text-muted-foreground">
                            Jika ada, silakan unggah naskah atau dokumen relevan lainnya (opsional, maks 10MB).
                        </p>
                        <FormField control={methods.control} name="file" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only">Unggah File</FormLabel>
                            <FormControl>
                                <Input 
                                    type="file" 
                                    {...methods.register('file')}
                                    className="file:bg-primary/10 file:text-primary file:font-semibold file:px-4 file:py-2 file:border-none file:rounded-md hover:file:bg-primary/20"
                                />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <p className="text-sm text-muted-foreground pt-4">Dengan menekan tombol "Kirim Pesanan", Anda mengajukan permintaan penawaran dan setuju untuk dihubungi oleh tim kami.</p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 pt-4 border-t flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 0 || isSubmitting}>
                    Kembali
                  </Button>
                  <Button type="button" onClick={nextStep} disabled={isSubmitting}>
                    {isSubmitting && currentStep === steps.length - 1 ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Mengirim...
                        </>
                    ) : (
                        currentStep === steps.length - 1 ? 'Kirim Pesanan' : 'Lanjutkan'
                    )}
                  </Button>
                </div>
              </form>
            </FormProvider>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}