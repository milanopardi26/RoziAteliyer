'use client';

import type { Design } from '@/lib/types';
import { DesignGrid } from './DesignGrid';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { useLocale } from '@/components/locale-provider';

type FeaturedDesignsSectionProps = {
  designs: Design[];
  favorites: string[];
  onFavorite: (id: string) => void;
  id?: string;
};

export function FeaturedDesignsSection({
  designs,
  favorites,
  onFavorite,
  id = 'discover',
}: FeaturedDesignsSectionProps) {
  const { locale, dict } = useLocale();
  const base = `/${locale}`;

  return (
    <section id={id} className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionHeader
        eyebrow={dict.sections.curatedForYou}
        title={dict.sections.freshFromStudio}
        ctaLabel={dict.sections.viewAllDesigns}
        ctaHref={`${base}/discover`}
      />
      <DesignGrid
        designs={designs.slice(0, 4)}
        favorites={favorites}
        onFavorite={onFavorite}
        base={base}
        priorityCount={2}
      />
    </section>
  );
}
