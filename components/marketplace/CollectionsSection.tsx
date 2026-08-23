'use client';

import type { Collection } from '@/lib/types';
import { CollectionGrid } from './CollectionCard';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { useLocale } from '@/components/locale-provider';

type CollectionsSectionProps = {
  collections: Collection[];
};

export function CollectionsSection({ collections }: CollectionsSectionProps) {
  const { locale, dict } = useLocale();
  const base = `/${locale}`;

  return (
    <section className="border-y border-border/60 bg-[#f2efe8]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeader
          eyebrow={dict.sections.curatedForYou}
          title={dict.sections.collectionsTitle}
          description={dict.sections.collectionsDesc}
          ctaLabel={dict.sections.browseCollections}
          ctaHref={`${base}/discover`}
        />
        <CollectionGrid collections={collections} base={base} />
      </div>
    </section>
  );
}
