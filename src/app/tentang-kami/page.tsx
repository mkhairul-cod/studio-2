'use client';

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Landmark, Target, BookOpen } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function TentangKamiPage() {
  const team = {
    director: "Direktur Utama",
    founder: "Pendiri",
    program_director: "Direktur Program",
    finance_director: "Direktur Keuangan",
    finance_deputy: "Wakil Direktur Keuangan",
    business_director: "Direktur Bisnis",
    business_deputy: "Wakil Direktur Bisnis",
    training_division: "Divisi Pelatihan & SDM: Siti Aminah, S.Hum",
    publication_division: "Divisi Publikasi & Jurnal: Putri, S.Pd., M.Pd.",
    researcher_team: "Tim Peneliti: Ilham, M.Sc. & Tim",
    admin_staff: "Staf Admin: Rini, A.Md.",
    it_division: "Divisi IT: Budi Hartono, M.Kom",
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary/5 py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
            <Image
                src="https://storage.googleapis.com/project-spark-34116.appspot.com/6c91a32a-57b1-4778-838b-826075908f4c_1.png"
                alt="Simpul Academy Logo Background"
                fill
                style={{objectFit: 'cover'}}
                className="opacity-5"
                data-ai-hint="logo background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
             <div className="flex justify-center mb-4">
               <Image
                src="https://storage.googleapis.com/project-spark-34116.appspot.com/6c91a32a-57b1-4778-838b-826075908f4c_1.png"
                alt="Simpul Academy Logo"
                width={100}
                height={100}
                className="rounded-full shadow-lg"
                data-ai-hint="company logo"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
              Tentang Simpul Academy
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Mengenal lebih dekat siapa kami, bagaimana kami bermula, dan apa yang menjadi landasan semangat kami dalam berkontribusi untuk dunia akademik.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto">
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
                    Perjalanan Kami
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>Simpul Academy lahir dari sebuah 'simpul' diskusi sederhana di sebuah kedai kopi di Banda Aceh pada pertengahan 2024. Berawal dari keprihatinan atas tantangan yang dihadapi mahasiswa dan peneliti dalam publikasi ilmiah, sekelompok akademisi muda berinisiatif untuk menciptakan sebuah solusi.</p>
                  <p>Kami melihat banyak hasil riset berkualitas (skripsi/tesis) yang hanya berakhir di perpustakaan. Kami ingin menjembatani kesenjangan tersebut, mengubah karya-karya berharga itu menjadi artikel ilmiah yang dapat diakses secara global dan memberikan dampak lebih luas.</p>
                  <p>Dari layanan konversi skripsi, kami berkembang menyediakan pendampingan publikasi, proofreading, hingga pelatihan. Nama 'Simpul Academy' dipilih untuk merepresentasikan peran kami sebagai penghubung dan penyederhana kerumitan dalam proses akademik, menjadi mitra yang dapat diandalkan.</p>
                   <div className="relative w-full h-64 mt-6 rounded-lg overflow-hidden border">
                    <Image
                      src="https://placehold.co/800x400.png"
                      alt="Diskusi di kedai kopi"
                      fill
                      style={{objectFit: 'cover'}}
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
                            Visi & Misi
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="font-bold text-lg text-primary mb-2">Visi</h3>
                            <p className="text-muted-foreground">
                                Menjadi mitra akademik terdepan di Indonesia yang inovatif dan terpercaya dalam mendukung terwujudnya publikasi ilmiah berkualitas global serta akselerasi transformasi digital di dunia pendidikan.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary mb-2">Misi</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Menyediakan layanan pendampingan akademik yang komprehensif, mulai dari konversi karya ilmiah hingga publikasi di jurnal bereputasi.</li>
                                <li>Menyelenggarakan pelatihan dan pengembangan kapasitas sumber daya manusia di bidang penulisan dan penelitian ilmiah.</li>
                                <li>Membangun platform digital yang memberdayakan para akademisi untuk berkolaborasi dan meningkatkan visibilitas karya mereka.</li>
                                <li>Menjalin kemitraan strategis dengan institusi pendidikan, lembaga riset, dan komunitas untuk memperkuat ekosistem riset nasional.</li>
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
                <CardContent className="space-y-8 text-center text-muted-foreground">
                  
                  {/* Founder/Director Section */}
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <Avatar className="w-24 h-24 mx-auto mb-4 ring-2 ring-primary">
                        <AvatarImage src="https://placehold.co/150x150.png" data-ai-hint="professional man" />
                        <AvatarFallback>MK</AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-lg text-primary">Muhammad Khairul, S.Pd, M.Pd</h3>
                    <p className="text-sm font-semibold text-primary/80">{team.director} ({team.founder})</p>
                  </div>
                  
                  {/* Directors Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-background rounded-lg border">
                        <Avatar className="w-20 h-20 mx-auto mb-3">
                            <AvatarImage src="https://placehold.co/150x150.png" data-ai-hint="smiling man glasses" />
                            <AvatarFallback>NF</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-card-foreground">Dr. Nurul Fajri Saminan, S.Pd, M.Pd</h3>
                        <p className="text-sm text-muted-foreground">{team.program_director}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                        <Avatar className="w-20 h-20 mx-auto mb-3">
                            <AvatarImage src="https://placehold.co/150x150.png" data-ai-hint="professional woman hijab" />
                            <AvatarFallback>RH</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-card-foreground">Ruhul Hilyati, S.T</h3>
                        <p className="text-sm text-muted-foreground">{team.finance_director}</p>
                         <p className="text-xs text-muted-foreground mt-1">{team.finance_deputy}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                         <Avatar className="w-20 h-20 mx-auto mb-3">
                            <AvatarImage src="https://placehold.co/150x150.png" data-ai-hint="professional man formal" />
                            <AvatarFallback>AH</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-card-foreground">Amri Hikary, S.H</h3>
                        <p className="text-sm text-muted-foreground">{team.business_director}</p>
                        <p className="text-xs text-muted-foreground mt-1">{team.business_deputy}</p>
                    </div>
                  </div>

                  {/* Other Teams */}
                   <div className="text-left pt-4 border-t">
                     <h3 className="font-headline text-xl text-primary mb-4 text-center">Tim & Bidang Lainnya</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="p-3 bg-primary/5 rounded-md"><strong>{team.training_division.split(':')[0]}:</strong> {team.training_division.split(':')[1]}</div>
                        <div className="p-3 bg-primary/5 rounded-md"><strong>{team.publication_division.split(':')[0]}:</strong> {team.publication_division.split(':')[1]}</div>
                        <div className="p-3 bg-primary/5 rounded-md"><strong>{team.researcher_team.split(':')[0]}:</strong> {team.researcher_team.split(':')[1]}</div>
                        <div className="p-3 bg-primary/5 rounded-md"><strong>{team.admin_staff.split(':')[0]}:</strong> {team.admin_staff.split(':')[1]}</div>
                        <div className="p-3 bg-primary/5 rounded-md md:col-span-2 text-center"><strong>{team.it_division}</strong></div>
                     </div>
                   </div>

                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="legal">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                    <FileText />
                    Informasi Legalitas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <p className="font-semibold text-primary">Nama Perusahaan</p>
                        <p className="text-muted-foreground">CV Simpul Project Academy</p>
                    </div>
                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <p className="font-semibold text-primary">Pemilik</p>
                        <p className="text-muted-foreground">Muhammad Khairul</p>
                    </div>
                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <p className="font-semibold text-primary">Nomor Induk Berusaha (NIB)</p>
                        <p className="text-muted-foreground font-mono">2411240034931</p>
                    </div>
                     <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <p className="font-semibold text-primary">Klasifikasi Baku Lapangan Usaha Indonesia (KBLI)</p>
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
