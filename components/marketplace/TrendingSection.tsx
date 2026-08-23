'use client';

import type { Design } from '@/lib/types';
import { DesignGrid } from './DesignGrid';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { useLocale } from '@/components/locale-provider';

type TrendingSectionProps = {
  designs: Design[];
  favorites: string[];
  onFavorite: (id: string) => void;
};

export function TrendingSection({ designs, favorites, onFavorite }: TrendingSectionProps) {
  const { locale, dict } = useLocale();
  const base = `/${locale}`;
  const trending = [...designs].sort((a, b) => b.view_count - a.view_count).slice(0, 4);

  return (
    <section className="border-y border-border/60 bg-[#f2efe8]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeader
          eyebrow={dict.sections.curatedForYou}
          title={dict.sections.trendingTitle}
          description={dict.sections.trendingDesc}
          ctaLabel={dict.sections.viewAllDesigns}
          ctaHref={`${base}/discover`}
        />
        <DesignGrid designs={trending} favorites={favorites} onFavorite={onFavorite} base={base} />
      </div>
    </section>
  );
}
