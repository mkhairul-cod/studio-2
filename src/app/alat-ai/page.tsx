'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';
import { generateTitles } from '@/ai/flows/title-generator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AlatAiPage() {
  const [topic, setTopic] = useState('');
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    <div className="bg-primary/5 min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary flex items-center justify-center gap-3">
            <Wand2 className="w-10 h-10" />
            Alat Bantu AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Manfaatkan kekuatan kecerdasan buatan untuk membantu proses penelitian dan penulisan Anda.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-foreground" />
                AI Perekomendasi Judul Penelitian
            </CardTitle>
            <CardDescription>
                Masukkan deskripsi singkat atau kata kunci tentang topik penelitian Anda, dan biarkan AI kami memberikan beberapa ide judul yang menarik dan relevan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
                <Textarea
                    placeholder="Contoh: Pengaruh penggunaan media sosial terhadap kesehatan mental remaja di era digital..."
                    rows={4}
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    disabled={isLoading}
                />
                <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Mohon tunggu...
                        </>
                    ) : (
                        'Buatkan Rekomendasi Judul'
                    )}
                </Button>
            </div>

            {error && (
                <Alert variant="destructive" className="mt-6">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {generatedTitles.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-xl font-headline font-bold text-primary mb-4">Hasil Rekomendasi:</h3>
                    <ul className="space-y-3 list-decimal list-inside bg-background p-4 rounded-md border">
                        {generatedTitles.map((title, index) => (
                            <li key={index} className="text-muted-foreground">
                                {title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
