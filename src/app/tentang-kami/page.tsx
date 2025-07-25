'use client';

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Landmark, Target, BookOpen } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamInfo = {
  director: "Direktur Utama",
  program_director: "Direktur Program & Penelitian",
  founder: "Pendiri",
  finance_director: "Direktur Keuangan & Admin.",
  finance_deputy: "Wadir: Sarah Azkia Marta, S.T",
  business_director: "Direktur Hubungan & Bisnis",
  business_deputy: "Wadir: Fathin Afif, S.T",
  training_division: "Bidang Pelatihan & Pendidikan: Muhammad Wafiq Afansa, S.Mat",
  publication_division: "Bidang Publikasi & Literasi: Nada Ariqah, S.Si",
  researcher_team: "Tim Peneliti & Instruktur: Zahlul Nugraha, S.T, M. Abian Haikal Fauzan, S.E",
  admin_staff: "Staf Administrasi & Operasional: Muhammad Furqan, S.Si, Rifangga, S.E",
  it_division: "Bidang IT & Media Digital"
}


export default function TentangKamiPage() {
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
              Mengenal lebih dekat siapa kami, bagaimana kami bekerja, dan nilai-nilai yang kami pegang teguh.
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
                    Berawal dari Kedai Kopi di Aceh
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>CV Simpul Project Academy lahir dari diskusi-diskusi hangat para profesional muda di berbagai kedai kopi di Aceh. Kami, yang memiliki latar belakang beragam namun satu visi yang sama, melihat adanya tantangan besar yang dihadapi oleh mahasiswa dan akademisi: kesulitan dalam menembus dunia publikasi ilmiah.</p>
                  <p>Dari obrolan santai, tercetuslah ide untuk membangun sebuah wadah yang bisa menjembatani kesenjangan tersebut. Kami ingin menciptakan sebuah 'simpul' yang menghubungkan ide-ide brilian dari penelitian dengan platform publikasi yang kredibel. Maka, pada tahun 2024, kami meresmikan langkah kami dalam sebuah badan usaha.</p>
                  <p>Kini, Simpul Academy terus berkembang, didorong oleh semangat kolaborasi dan komitmen untuk meningkatkan kualitas serta kuantitas publikasi ilmiah dari Indonesia.</p>
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
                    Tim Inti & Struktur Organisasi
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
                    <p className="text-sm font-semibold text-primary/80">{teamInfo.director} ({teamInfo.founder})</p>
                  </div>
                  
                  {/* Directors Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-background rounded-lg border">
                        <Avatar className="w-20 h-20 mx-auto mb-3">
                            <AvatarImage src="https://placehold.co/150x150.png" data-ai-hint="smiling man glasses" />
                            <AvatarFallback>NF</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-card-foreground">Dr. Nurul Fajri Saminan, S.Pd, M.Pd</h3>
                        <p className="text-sm text-muted-foreground">{teamInfo.program_director}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                        <Avatar className="w-20 h-20 mx-auto mb-3">
                            <AvatarImage src="https://placehold.co/150x150.png" data-ai-hint="professional woman hijab" />
                            <AvatarFallback>RH</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-card-foreground">Ruhul Hilyati, S.T</h3>
                        <p className="text-sm text-muted-foreground">{teamInfo.finance_director}</p>
                         <p className="text-xs text-muted-foreground mt-1">{teamInfo.finance_deputy}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                         <Avatar className="w-20 h-20 mx-auto mb-3">
                            <AvatarImage src="https://placehold.co/150x150.png" data-ai-hint="professional man formal" />
                            <AvatarFallback>AH</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-card-foreground">Amri Hikary, S.H</h3>
                        <p className="text-sm text-muted-foreground">{teamInfo.business_director}</p>
                        <p className="text-xs text-muted-foreground mt-1">{teamInfo.business_deputy}</p>
                    </div>
                  </div>

                  {/* Other Teams */}
                   <div className="text-left pt-4 border-t">
                     <h3 className="font-headline text-xl text-primary mb-4 text-center">Tim & Bidang Lainnya</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="p-3 bg-primary/5 rounded-md"><strong>{teamInfo.training_division.split(':')[0]}:</strong> {teamInfo.training_division.split(':')[1]}</div>
                        <div className="p-3 bg-primary/5 rounded-md"><strong>{teamInfo.publication_division.split(':')[0]}:</strong> {teamInfo.publication_division.split(':')[1]}</div>
                        <div className="p-3 bg-primary/5 rounded-md"><strong>{teamInfo.researcher_team.split(':')[0]}:</strong> {teamInfo.researcher_team.split(':')[1]}</div>
                        <div className="p-3 bg-primary/5 rounded-md"><strong>{teamInfo.admin_staff.split(':')[0]}:</strong> {teamInfo.admin_staff.split(':')[1]}</div>
                        <div className="p-3 bg-primary/5 rounded-md md:col-span-2 text-center"><strong>{teamInfo.it_division}</strong></div>
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
