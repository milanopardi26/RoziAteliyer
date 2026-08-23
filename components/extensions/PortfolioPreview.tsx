'use client';

import Link from 'next/link';
import { ArrowRight, Brush, FolderKanban } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';

export function PortfolioPreview() {
  const { locale, dict, isRTL } = useLocale();
  const base = `/${locale}`;

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted order-2 lg:order-1">
          <img
            src="https://images.pexels.com/photos/36731583/pexels-photo-36731583.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop"
            alt={dict.extensions.portfolioTitle}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <div className="order-1 lg:order-2">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            {dict.extensions.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
            {dict.extensions.portfolioTitle}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-7 text-muted-foreground">
            {dict.extensions.portfolioDesc}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Branding', 'Campaign', 'Collaboration', 'Art Direction'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                <FolderKanban size={12} /> {tag}
              </span>
            ))}
          </div>
          <Link
            href={`${base}#portfolio`}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
          >
            <Brush size={16} /> {dict.extensions.portfolioCta}{' '}
            {isRTL ? (
              <ArrowRight size={15} className="transition-transform group-hover:-translate-x-1 rotate-180" />
            ) : (
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
