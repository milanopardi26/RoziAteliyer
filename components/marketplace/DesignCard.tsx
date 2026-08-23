'use client';

import Link from 'next/link';
import { Star } from 'lucide-react';
import type { Design } from '@/lib/types';
import { useLocale } from '@/components/locale-provider';
import { toPersianNumber } from '@/lib/i18n';
import { FavoriteButton } from '@/components/shared/FavoriteButton';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

type DesignCardProps = {
  design: Design;
  isFavorite: boolean;
  onFavorite: (id: string) => void;
  showCreator?: boolean;
  showFavorite?: boolean;
  showBadge?: boolean;
  priority?: boolean;
  base: string;
  className?: string;
};

export function DesignCard({
  design,
  isFavorite,
  onFavorite,
  showCreator = true,
  showFavorite = true,
  showBadge = true,
  priority = false,
  base,
  className = '',
}: DesignCardProps) {
  const { dict, isRTL } = useLocale();

  return (
    <article className={`group min-w-0 ${className}`}>
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
        <Link href={`${base}/designs/${design.slug}`} aria-label={design.title}>
          <ImageWithFallback
            src={design.image_url}
            alt={design.title}
            loading={priority ? 'eager' : 'lazy'}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        {showFavorite && (
          <FavoriteButton itemId={design.id} isActive={isFavorite} onToggle={onFavorite} />
        )}
        {showBadge && design.is_featured && (
          <span className="absolute bottom-3 start-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground backdrop-blur">
            {dict.design.featured}
          </span>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <Link
            href={`${base}/designs/${design.slug}`}
            className="block truncate text-sm font-semibold transition-colors hover:text-primary"
          >
            {design.title}
          </Link>
          {showCreator && design.creators && (
            <Link
              href={`${base}/artists/${design.creators.handle}`}
              className="mt-1 block truncate text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {design.creators.display_name}
            </Link>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-1 pt-0.5 text-xs text-muted-foreground">
          <Star size={12} fill="currentColor" className="text-accent" />
          {isRTL ? toPersianNumber(design.avg_rating.toFixed(1)) : design.avg_rating.toFixed(1)}
        </div>
      </div>
    </article>
  );
}
