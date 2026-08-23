'use client';

import Link from 'next/link';
import { Layers } from 'lucide-react';
import type { Collection } from '@/lib/types';
import { useLocale } from '@/components/locale-provider';
import { toPersianNumber } from '@/lib/i18n';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

type CollectionCardProps = {
  collection: Collection;
  base: string;
};

export function CollectionCard({ collection, base }: CollectionCardProps) {
  const { dict, isRTL } = useLocale();
  const count = isRTL ? toPersianNumber(collection.item_count) : collection.item_count;

  return (
    <Link
      href={`${base}/discover`}
      className="group relative flex aspect-[4/3] overflow-hidden rounded-2xl bg-muted"
    >
      <ImageWithFallback
        src={collection.cover_image_url ?? ''}
        alt={collection.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        fallbackClassName="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
        <div>
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">
            <Layers size={11} /> {dict.discover.categories}
          </span>
          <h3 className="mt-1 font-display text-xl font-medium tracking-[-0.02em] sm:text-2xl">
            {collection.name}
          </h3>
          <p className="mt-1 line-clamp-1 text-xs text-white/70">{collection.description}</p>
        </div>
        <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">
          {count} {dict.sections.itemsUnit}
        </span>
      </div>
    </Link>
  );
}

export function CollectionGrid({ collections, base }: { collections: Collection[]; base: string }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} base={base} />
      ))}
    </div>
  );
}
