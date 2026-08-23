'use client';

import { Heart } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';

type FavoriteButtonProps = {
  itemId: string;
  isActive: boolean;
  onToggle: (id: string) => void;
  size?: number;
  className?: string;
};

export function FavoriteButton({
  itemId,
  isActive,
  onToggle,
  size = 17,
  className = '',
}: FavoriteButtonProps) {
  const { dict } = useLocale();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle(itemId);
      }}
      className={`absolute end-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-all hover:scale-105 ${
        isActive ? 'text-accent' : 'text-foreground/65'
      } ${className}`}
      aria-label={isActive ? dict.design.removeFromFavorites : dict.design.addToFavorites}
      aria-pressed={isActive}
    >
      {isActive ? <Heart size={size} fill="currentColor" /> : <Heart size={size} />}
    </button>
  );
}
