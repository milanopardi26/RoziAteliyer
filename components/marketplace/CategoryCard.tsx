'use client';

import Link from 'next/link';
import type { Category } from '@/lib/types';
import { useLocale } from '@/components/locale-provider';
import { toPersianNumber } from '@/lib/i18n';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

type CategoryCardProps = {
  category: Category;
  coverImage: string;
  base: string;
};

export function CategoryCard({ category, coverImage, base }: CategoryCardProps) {
  const { dict, isRTL } = useLocale();
  const count = isRTL ? toPersianNumber(category.design_count) : category.design_count;

  return (
    <Link
      href={`${base}/discover?category=${category.slug}`}
      className="group relative aspect-[0.82] overflow-hidden rounded-2xl"
    >
      <ImageWithFallback
        src={coverImage}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        fallbackClassName="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <span className="block font-display text-xl sm:text-2xl">{category.name}</span>
        <span className="mt-1 block text-[11px] text-white/75">
          {count} {dict.discover.designsUnit}
        </span>
      </div>
    </Link>
  );
}
