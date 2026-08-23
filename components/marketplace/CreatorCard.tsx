'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';
import type { Creator } from '@/lib/types';
import { VerifiedBadge } from '@/components/shared/VerifiedBadge';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

type CreatorCardProps = {
  creator: Creator;
  base: string;
  offset?: boolean;
};

export function CreatorCard({ creator, base, offset = false }: CreatorCardProps) {
  return (
    <Link href={`${base}/artists/${creator.handle}`} className={`group ${offset ? 'mt-8' : ''}`}>
      <div className="aspect-[0.78] overflow-hidden rounded-2xl bg-muted">
        <ImageWithFallback
          src={creator.avatar_url ?? ''}
          alt={creator.display_name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-3">
        <span className="flex items-center gap-1 text-sm font-semibold">
          {creator.display_name}
          {creator.is_verified && <VerifiedBadge size={13} />}
        </span>
        <span className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin size={11} /> {creator.location}
        </span>
      </div>
    </Link>
  );
}

export function CreatorGrid({ creators, base }: { creators: Creator[]; base: string }) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-5">
      {creators.map((creator, index) => (
        <CreatorCard key={creator.id} creator={creator} base={base} offset={index === 1} />
      ))}
    </div>
  );
}
