'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: 'default' | 'accent';
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  variant = 'default',
}: SectionHeaderProps) {
  const { isRTL } = useLocale();
  const CtaIcon = variant === 'accent' ? ChevronRight : ArrowRight;

  return (
    <div className="mb-10 flex items-end justify-between gap-5">
      <div>
        {eyebrow && (
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        )}
        <h2 className="font-display text-4xl font-medium tracking-[-0.045em] sm:text-5xl">{title}</h2>
        {description && (
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted-foreground">{description}</p>
        )}
      </div>
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="group hidden items-center gap-2 pb-1 text-sm font-semibold text-primary sm:flex"
        >
          {ctaLabel}{' '}
          {isRTL ? (
            <CtaIcon size={16} className="transition-transform group-hover:-translate-x-1 rotate-180" />
          ) : (
            <CtaIcon size={16} className="transition-transform group-hover:translate-x-1" />
          )}
        </Link>
      )}
    </div>
  );
}
