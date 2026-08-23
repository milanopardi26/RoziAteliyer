'use client';

import { Check } from 'lucide-react';

type VerifiedBadgeProps = {
  size?: number;
  className?: string;
};

export function VerifiedBadge({ size = 20, className = '' }: VerifiedBadgeProps) {
  return (
    <Check
      size={size}
      className={`rounded-full bg-primary p-1 text-primary-foreground ${className}`}
      aria-label="Verified"
    />
  );
}
