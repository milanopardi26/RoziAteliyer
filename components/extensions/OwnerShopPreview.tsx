'use client';

import Link from 'next/link';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';

export function OwnerShopPreview() {
  const { locale, dict, isRTL } = useLocale();
  const base = `/${locale}`;

  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted order-2 lg:order-1">
          <img
            src="https://images.pexels.com/photos/5556285/pexels-photo-5556285.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop"
            alt={dict.extensions.ownerShopTitle}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <span className="absolute start-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur">
            <Sparkles size={11} /> {dict.extensions.comingSoon}
          </span>
        </div>
        <div className="order-1 lg:order-2">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            {dict.extensions.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
            {dict.extensions.ownerShopTitle}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-7 text-muted-foreground">
            {dict.extensions.ownerShopDesc}
          </p>
          <Link
            href={`${base}#shop`}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
          >
            <ShoppingBag size={16} /> {dict.extensions.ownerShopCta}{' '}
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
