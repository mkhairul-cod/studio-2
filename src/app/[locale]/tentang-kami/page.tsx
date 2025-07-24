'use client';

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Landmark, Target, BookOpen } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTranslations } from 'next-intl';

export default function TentangKamiPage() {
  const t = useTranslations('AboutPage');
  const teamT = useTranslations('Team');

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
              {t('title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto">
              <TabsTrigger value="history" className="py-2"><Landmark className="w-4 h-4 mr-2"/>{t('tab_history')}</TabsTrigger>
              <TabsTrigger value="vision" className="py-2"><Target className="w-4 h-4 mr-2"/>{t('tab_vision')}</TabsTrigger>
              <TabsTrigger value="structure" className="py-2"><Users className="w-4 h-4 mr-2"/>{t('tab_structure')}</TabsTrigger>
              <TabsTrigger value="legal" className="py-2"><FileText className="w-4 h-4 mr-2"/>{t('tab_legality')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="history">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary flex items-center gap-3">
                    <BookOpen />
                    {t('history_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>{t('history_p1')}</p>
                  <p>{t('history_p2')}</p>
                  <p>{t('history_p3')}</p>
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
                            {t('vision_mission_title')}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="font-bold text-lg text-primary mb-2">{t('vision_title')}</h3>
                            <p className="text-muted-foreground">
                                {t('vision_text')}
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary mb-2">{t('mission_title')}</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>{t('mission_item1')}</li>
                                <li>{t('mission_item2')}</li>
                                <li>{t('mission_item3')}</li>
                                <li>{t('mission_item4')}</li>
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
                    {t('structure_title')}
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
                    <p className="text-sm font-semibold text-primary/80">{teamT('director')} ({teamT('founder')})</p>
                  </div>
                  
                  {/* Directors Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-background rounded-lg border">
                        <Avatar className="w-20 h-20 mx-auto mb-3">
                            <AvatarImage src="https://placehold.co/150x150.png" data-ai-hint="smiling man glasses" />
                            <AvatarFallback>NF</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-card-foreground">Dr. Nurul Fajri Saminan, S.Pd, M.Pd</h3>
                        <p className="text-sm text-muted-foreground">{teamT('program_director')}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                        <Avatar className="w-20 h-20 mx-auto mb-3">
                            <AvatarImage src="https://placehold.co/150x150.png" data-ai-hint="professional woman hijab" />
                            <AvatarFallback>RH</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-card-foreground">Ruhul Hilyati, S.T</h3>
                        <p className="text-sm text-muted-foreground">{teamT('finance_director')}</p>
                         <p className="text-xs text-muted-foreground mt-1">{teamT('finance_deputy')}</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                         <Avatar className="w-20 h-20 mx-auto mb-3">
                            <AvatarImage src="https://placehold.co/150x150.png" data-ai-hint="professional man formal" />
                            <AvatarFallback>AH</AvatarFallback>
                        </Avatar>
                        <h3 className="font-bold text-card-foreground">Amri Hikary, S.H</h3>
                        <p className="text-sm text-muted-foreground">{teamT('business_director')}</p>
                        <p className="text-xs text-muted-foreground mt-1">{teamT('business_deputy')}</p>
                    </div>
                  </div>

                  {/* Other Teams */}
                   <div className="text-left pt-4 border-t">
                     <h3 className="font-headline text-xl text-primary mb-4 text-center">Tim & Bidang Lainnya</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="p-3 bg-primary/5 rounded-md"><strong>{teamT('training_division').split(':')[0]}:</strong> {teamT('training_division').split(':')[1]}</div>
                        <div className="p-3 bg-primary/5 rounded-md"><strong>{teamT('publication_division').split(':')[0]}:</strong> {teamT('publication_division').split(':')[1]}</div>
                        <div className="p-3 bg-primary/5 rounded-md"><strong>{teamT('researcher_team').split(':')[0]}:</strong> {teamT('researcher_team').split(':')[1]}</div>
                        <div className="p-3 bg-primary/5 rounded-md"><strong>{teamT('admin_staff').split(':')[0]}:</strong> {teamT('admin_staff').split(':')[1]}</div>
                        <div className="p-3 bg-primary/5 rounded-md md:col-span-2 text-center"><strong>{teamT('it_division')}</strong></div>
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
                    {t('legality_title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <p className="font-semibold text-primary">{t('company_name')}</p>
                        <p className="text-muted-foreground">CV Simpul Project Academy</p>
                    </div>
                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <p className="font-semibold text-primary">{t('owner')}</p>
                        <p className="text-muted-foreground">Muhammad Khairul</p>
                    </div>
                    <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <p className="font-semibold text-primary">{t('nib')}</p>
                        <p className="text-muted-foreground font-mono">2411240034931</p>
                    </div>
                     <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                        <p className="font-semibold text-primary">{t('kbli')}</p>
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
