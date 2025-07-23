import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Landmark } from 'lucide-react';

export default function TentangKamiPage() {
  return (
    <div className="bg-primary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            Tentang Simpul Academy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Mengenal lebih dekat siapa kami, bagaimana kami bekerja, dan
            legalitas yang kami miliki.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="history"><Landmark className="w-4 h-4 mr-2"/>Sejarah</TabsTrigger>
              <TabsTrigger value="structure"><Users className="w-4 h-4 mr-2"/>Struktur</TabsTrigger>
              <TabsTrigger value="legal"><FileText className="w-4 h-4 mr-2"/>Legalitas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">
                    Berawal dari Kedai Kopi di Aceh
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    CV Simpul Project Academy lahir dari diskusi-diskusi hangat
                    para profesional muda di berbagai kedai kopi di Aceh. Kami,
                    yang memiliki latar belakang beragam namun satu visi yang
                    sama, melihat adanya tantangan besar yang dihadapi oleh
                    mahasiswa dan akademisi: kesulitan dalam menembus dunia
                    publikasi ilmiah.
                  </p>
                  <p>
                    Dari obrolan santai, tercetuslah ide untuk membangun sebuah
                    wadah yang bisa menjembatani kesenjangan tersebut. Kami ingin
                    menciptakan sebuah 'simpul' yang menghubungkan ide-ide brilian
                    dari penelitian dengan platform publikasi yang kredibel.
                    Maka, pada tahun 2024, kami meresmikan langkah kami dalam
                    sebuah badan usaha.
                  </p>
                  <p>
                    Kini, Simpul Academy terus berkembang, didorong oleh semangat
                    kolaborasi dan komitmen untuk meningkatkan kualitas serta
                    kuantitas publikasi ilmiah dari Indonesia.
                  </p>
                   <div className="relative w-full h-64 mt-6 rounded-lg overflow-hidden">
                    <Image
                      src="https://placehold.co/800x400.png"
                      alt="Diskusi di kedai kopi"
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint="coffee shop discussion"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="structure" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">
                    Struktur Organisasi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="font-bold text-primary mb-2">Direksi</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <strong>Direktur Utama:</strong> Muhammad Khairul
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Bidang Layanan</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <strong>Kepala Divisi Konversi & Publikasi:</strong> Tim A
                      </li>
                      <li>
                        <strong>Kepala Divisi Proofreading & Editing:</strong> Tim B
                      </li>
                      <li>
                        <strong>Kepala Divisi Pelatihan & Workshop:</strong> Tim C
                      </li>
                    </ul>
                  </div>
                   <div>
                    <h3 className="font-bold text-primary mb-2">Bidang Pendukung</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <strong>Administrasi & Keuangan:</strong> Tim D
                      </li>
                       <li>
                        <strong>Pemasaran & Kemitraan:</strong> Tim E
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="legal" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">
                    Informasi Legalitas (OSS/NIB)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <div>
                        <p className="font-semibold text-primary">Nama Usaha:</p>
                        <p>CV Simpul Project Academy</p>
                    </div>
                    <div>
                        <p className="font-semibold text-primary">Pemilik / Penanggung Jawab:</p>
                        <p>Muhammad Khairul</p>
                    </div>
                    <div>
                        <p className="font-semibold text-primary">Nomor Induk Berusaha (NIB):</p>
                        <p>2411240034931</p>
                    </div>
                     <div>
                        <p className="font-semibold text-primary">Kode Klasifikasi Baku Lapangan Usaha Indonesia (KBLI):</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><strong>58130:</strong> Penerbitan Surat Kabar, Jurnal dan Buletin atau Majalah</li>
                            <li><strong>85495:</strong> Pendidikan Bimbingan Belajar dan Konseling Swasta</li>
                            <li><strong>74902:</strong> Aktivitas Juru Bahasa (Interpreter)</li>
                            <li><strong>70209:</strong> Aktivitas Konsultasi Manajemen Lainnya</li>
                        </ul>
                    </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
