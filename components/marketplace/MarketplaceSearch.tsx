'use client';

import { Search, X } from 'lucide-react';
import { useLocale } from '@/components/locale-provider';

type MarketplaceSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function MarketplaceSearch({ value, onChange }: MarketplaceSearchProps) {
  const { dict } = useLocale();

  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-2xl px-5 py-4 sm:px-8">
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
          <Search size={18} className="text-muted-foreground" />
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={dict.discover.searchPlaceholder}
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          {value && (
            <button
              onClick={() => onChange('')}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={dict.nav.close}
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
