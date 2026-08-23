import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function EmptyState({ icon: Icon, title, description, ctaLabel, ctaHref }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <span className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-muted">
        <Icon size={28} className="text-muted-foreground" />
      </span>
      <p className="text-lg font-semibold">{title}</p>
      {description && <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>}
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
        >
          {ctaLabel}
        </Link>
      )}
    </div>
  );
}
