'use client';

import type { Design } from '@/lib/types';
import { DesignGrid } from './DesignGrid';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { useLocale } from '@/components/locale-provider';

type NewArrivalsSectionProps = {
  designs: Design[];
  favorites: string[];
  onFavorite: (id: string) => void;
};

export function NewArrivalsSection({ designs, favorites, onFavorite }: NewArrivalsSectionProps) {
  const { locale, dict } = useLocale();
  const base = `/${locale}`;
  const arrivals = [...designs]
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .slice(0, 4);

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionHeader
        eyebrow={dict.sections.curatedForYou}
        title={dict.sections.newArrivalsTitle}
        description={dict.sections.newArrivalsDesc}
        ctaLabel={dict.sections.viewAllDesigns}
        ctaHref={`${base}/discover`}
      />
      <DesignGrid designs={arrivals} favorites={favorites} onFavorite={onFavorite} base={base} />
    </section>
  );
}
