'use client';

import Link from 'next/link';
import { ArrowRight, Palette, Sparkles } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';
import { fallbackDesigns } from '@/data/designs';

export function Hero() {
  const { locale, dict, isRTL } = useLocale();
  const base = `/${locale}`;

  return (
    <section className="relative border-b border-border/60 bg-[#e8f0eb]">
      <div className="mx-auto grid min-h-[580px] max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.08fr] lg:px-12 lg:py-20">
        <div className="relative z-10 max-w-xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
            <Sparkles size={13} /> {dict.hero.badge}
          </div>
          <h1 className="font-display text-[clamp(3.5rem,7vw,6.6rem)] font-medium leading-[0.94] tracking-[-0.055em] text-[#173f3c]">
            {dict.hero.titleLine1}
            <br />
            <span className="italic text-primary">{dict.hero.titleLine2}</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-[#45625e]">{dict.hero.subtitle}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={`${base}#discover`}
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              {dict.hero.exploreCta}{' '}
              {isRTL ? (
                <ArrowRight size={16} className="transition-transform group-hover:-translate-x-1 rotate-180" />
              ) : (
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              )}
            </Link>
            <Link
              href={`${base}#artists`}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-[#173f3c] transition-colors hover:bg-white/60"
            >
              {dict.hero.meetArtists}
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-6 border-t border-[#b9cdc4] pt-5 text-xs text-[#45625e]">
            <div>
              <strong className="block text-xl font-semibold text-[#173f3c]">{dict.hero.statDesigns}</strong>
            </div>
            <div className="h-8 w-px bg-[#b9cdc4]" />
            <div>
              <strong className="block text-xl font-semibold text-[#173f3c]">{dict.hero.statCountries}</strong>
            </div>
          </div>
        </div>
        <div className="relative hidden h-[490px] lg:block">
          <div className="absolute end-[18%] top-[4%] h-[330px] w-[330px] rotate-[-7deg] overflow-hidden rounded-[12px] shadow-2xl shadow-[#173f3c]/15">
            <img src={fallbackDesigns[0].image_url} alt="Mediterranean Bloom pattern" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-[3%] end-0 h-[265px] w-[265px] rotate-[8deg] overflow-hidden rounded-[12px] border-[10px] border-[#f3f0e9] shadow-2xl">
            <img src={fallbackDesigns[3].image_url} alt="Botanical pattern" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-[10%] start-[6%] h-[185px] w-[185px] rotate-[5deg] overflow-hidden rounded-[12px] border-[8px] border-[#f3f0e9] shadow-xl">
            <img src={fallbackDesigns[2].image_url} alt="Pastel watercolor pattern" className="h-full w-full object-cover" />
          </div>
          <div className="absolute start-[9%] top-[22%] grid h-16 w-16 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg">
            <Palette size={25} />
          </div>
          <span className="absolute bottom-[2%] start-[28%] font-display text-lg italic text-[#45625e]">
            {dict.hero.findNext}
          </span>
        </div>
      </div>
    </section>
  );
}
