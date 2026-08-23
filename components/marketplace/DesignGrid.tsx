'use client';

import type { Design } from '@/lib/types';
import { DesignCard } from './DesignCard';

type DesignGridProps = {
  designs: Design[];
  favorites: string[];
  onFavorite: (id: string) => void;
  base: string;
  showCreator?: boolean;
  showFavorite?: boolean;
  showBadge?: boolean;
  priorityCount?: number;
  className?: string;
};

export function DesignGrid({
  designs,
  favorites,
  onFavorite,
  base,
  showCreator = true,
  showFavorite = true,
  showBadge = true,
  priorityCount = 0,
  className = '',
}: DesignGridProps) {
  return (
    <div className={`grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 ${className}`}>
      {designs.map((design, index) => (
        <DesignCard
          key={design.id}
          design={design}
          isFavorite={favorites.includes(design.id)}
          onFavorite={onFavorite}
          showCreator={showCreator}
          showFavorite={showFavorite}
          showBadge={showBadge}
          priority={index < priorityCount}
          base={base}
        />
      ))}
    </div>
  );
}
