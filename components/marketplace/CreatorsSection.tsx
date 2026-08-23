'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';
import { fallbackCreators } from '@/data/creators';
import { CreatorGrid } from './CreatorCard';

export function CreatorsSection() {
  const { locale, dict, isRTL } = useLocale();
  const base = `/${locale}`;
  const creators = fallbackCreators.slice(0, 3);

  return (
    <section id="artists" className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            {dict.sections.peopleBehind}
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">
            {dict.sections.madeWithIntention}
            <br />
            <span className="italic text-muted-foreground">{dict.sections.sharedWithWorld}</span>
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-7 text-muted-foreground">
            {dict.sections.peopleBehindDesc}
          </p>
          <Link
            href={`${base}/discover`}
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            {dict.sections.meetAllArtists}{' '}
            {isRTL ? (
              <ArrowRight size={16} className="transition-transform group-hover:-translate-x-1 rotate-180" />
            ) : (
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            )}
          </Link>
        </div>
        <CreatorGrid creators={creators} base={base} />
      </div>
    </section>
  );
}
