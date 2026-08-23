'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';

export function DiscoverMoreSection() {
  const { locale, dict, isRTL } = useLocale();
  const base = `/${locale}`;

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] lg:px-12 lg:py-20">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground/70">
            {dict.discover.browseMarketplace}
          </p>
          <h2 className="font-display text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
            {dict.sections.discoverMoreTitle}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-primary-foreground/75">
            {dict.sections.discoverMoreDesc}
          </p>
        </div>
        <Link
          href={`${base}/discover`}
          className="group inline-flex w-fit items-center gap-3 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5"
        >
          {dict.discover.allDesigns}{' '}
          {isRTL ? (
            <ArrowRight size={16} className="transition-transform group-hover:-translate-x-1 rotate-180" />
          ) : (
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          )}
        </Link>
      </div>
    </section>
  );
}
