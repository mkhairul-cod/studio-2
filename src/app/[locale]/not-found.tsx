"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { Frown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations('NotFoundPage');

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <Frown className="w-24 h-24 text-primary opacity-50 mb-4" />
      <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
        {t('title')}
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4 mb-8">
        {t('description')}
      </p>
      <Button asChild size="lg">
        <Link href="/">{t('button')}</Link>
      </Button>
    </div>
  );
}
