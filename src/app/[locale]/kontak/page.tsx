'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
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
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, MailCheck } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nama harus diisi.' }),
  email: z.string().email({ message: 'Format email tidak valid.' }),
  message: z.string().min(10, { message: 'Pesan minimal 10 karakter.' }),
});

type FormData = z.infer<typeof formSchema>;

export default function KontakPage() {
  const t = useTranslations('ContactPage');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xanjbwpd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Gagal mengirim pesan.');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-16 md:py-24">
        <Card className="w-full max-w-lg text-center">
          <CardHeader>
            <div className="mx-auto w-fit rounded-full bg-green-100 p-4">
              <MailCheck className="h-12 w-12 text-green-600" />
            </div>
            <CardTitle className="font-headline text-3xl text-primary mt-4">
              {t('success_title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {t('success_description')}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary md:text-5xl font-headline">
            {t('title')}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            {t('description')}
          </p>
        </div>

        <Card className="mx-auto w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="font-headline">{t('form_title')}</CardTitle>
            <CardDescription>
              {t('form_description')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('name_label')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('name_placeholder')} {...field} />
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
                      <FormLabel>{t('email_label')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('email_placeholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('message_label')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('message_placeholder')}
                          rows={6}
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
