import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <Frown className="w-24 h-24 text-primary opacity-50 mb-4" />
      <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
        404 - Halaman Tidak Ditemukan
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4 mb-8">
        Maaf, halaman yang Anda cari tidak ada atau mungkin telah dipindahkan.
      </p>
      <Button asChild size="lg">
        <Link href="/">Kembali ke Halaman Utama</Link>
      </Button>
    </div>
  )
}
