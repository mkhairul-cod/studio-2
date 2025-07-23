import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Landmark, Target, BookOpen, Lightbulb } from 'lucide-react';

export default function TentangKamiPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary/5 py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
            <Image
                src="https://storage.googleapis.com/project-spark-34116.appspot.com/6c91a32a-57b1-4778-838b-826075908f4c_1.png"
                alt="Simpul Academy Logo Background"
                layout="fill"
                objectFit="cover"
                className="opacity-10"
                data-ai-hint="logo background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
              Tentang Simpul Academy
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Mengenal lebih dekat siapa kami, bagaimana kami bekerja, dan
              nilai-nilai yang kami pegang teguh.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 mb-6 h-auto">
              <TabsTrigger value="history" className="py-2"><Landmark className="w-4 h-4 mr-2"/>Sejarah</TabsTrigger>
              <TabsTrigger value="vision" className="py-2"><Target className="w-4 h-4 mr-2"/>Visi & Misi</TabsTrigger>
              <TabsTrigger value="structure" className="py-2"><Users className="w-4 h-4 mr-2"/>Struktur</TabsTrigger>
              <TabsTrigger value="legal" className="py-2"><FileText className="w-4 h-4 mr-2"/>Legalitas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="history">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                    <BookOpen />
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
                   <div className="relative w-full h-64 mt-6 rounded-lg overflow-hidden border">
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
            
            <TabsContent value="vision">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                            <Target />
                            Visi & Misi Kami
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="font-bold text-lg text-primary mb-2">Visi</h3>
                            <p className="text-muted-foreground">
                                Menjadi mitra akademik terdepan yang memberdayakan para cendekiawan Indonesia untuk menghasilkan karya ilmiah bereputasi global dan memberikan dampak nyata bagi masyarakat.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary mb-2">Misi</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Menyediakan layanan pendampingan publikasi yang terintegrasi, profesional, dan terpercaya.</li>
                                <li>Meningkatkan kualitas naskah ilmiah melalui layanan proofreading dan editing berstandar internasional.</li>
                                <li>Mengadakan pelatihan dan workshop penulisan akademik yang inovatif dan aplikatif.</li>
                                <li>Membangun jejaring kolaborasi yang kuat antara akademisi, peneliti, dan institusi pendidikan.</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="structure">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                    <Users />
                    Struktur Organisasi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-muted-foreground">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h3 className="font-bold text-primary mb-2">Direksi</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <strong>Direktur Utama:</strong> Muhammad Khairul
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h3 className="font-bold text-primary mb-2">Bidang Layanan</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        <strong>Kepala Divisi Konversi & Publikasi:</strong> Tim A - Ahli dalam analisis dan restrukturisasi naskah.
                      </li>
                      <li>
                        <strong>Kepala Divisi Proofreading & Editing:</strong> Tim B - Terdiri dari editor profesional dan native speaker.
                      </li>
                      <li>
                        <strong>Kepala Divisi Pelatihan & Workshop:</strong> Tim C - Praktisi berpengalaman dalam pengajaran akademik.
                      </li>
                    </ul>
                  </div>
                   <div className="p-4 bg-primary/5 rounded-lg">
                    <h3 className="font-bold text-primary mb-2">Bidang Pendukung</h3>
                    <ul className="list-disc list-inside space-y-1">
                       <li>
                        <strong>Administrasi & Keuangan:</strong> Tim D - Memastikan operasional berjalan lancar.
                      </li>
                       <li>
                        <strong>Pemasaran & Kemitraan:</strong> Tim E - Menjalin hubungan dengan mitra dan klien.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="legal">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                    <FileText />
                    Informasi Legalitas (OSS/NIB)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <p className="font-semibold text-primary">Nama Usaha:</p>
                        <p className="text-muted-foreground">CV Simpul Project Academy</p>
                    </div>
                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <p className="font-semibold text-primary">Pemilik / Penanggung Jawab:</p>
                        <p className="text-muted-foreground">Muhammad Khairul</p>
                    </div>
                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <p className="font-semibold text-primary">Nomor Induk Berusaha (NIB):</p>
                        <p className="text-muted-foreground font-mono">2411240034931</p>
                    </div>
                     <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <p className="font-semibold text-primary">Kode Klasifikasi Baku Lapangan Usaha Indonesia (KBLI):</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
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
