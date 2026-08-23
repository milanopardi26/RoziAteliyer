'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, CirclePlay as PlayCircle, Users } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';

export function EducationPreview() {
  const { locale, dict, isRTL } = useLocale();
  const base = `/${locale}`;

  const items = [
    { icon: GraduationCap, label: 'Courses' },
    { icon: Users, label: 'Workshops' },
    { icon: PlayCircle, label: 'Webinars' },
    { icon: BookOpen, label: 'Masterclasses' },
  ];

  return (
    <section className="border-y border-border/60 bg-[#f2efe8]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              {dict.extensions.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
              {dict.extensions.educationTitle}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-muted-foreground">
              {dict.extensions.educationDesc}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
              {items.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <Icon size={18} className="text-primary" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
            <Link
              href={`${base}#education`}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              {dict.extensions.educationCta}{' '}
              {isRTL ? (
                <ArrowRight size={15} className="transition-transform group-hover:-translate-x-1 rotate-180" />
              ) : (
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              )}
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
            <img
              src="https://images.pexels.com/photos/5537517/pexels-photo-5537517.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop"
              alt={dict.extensions.educationTitle}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
