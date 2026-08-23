'use client';

import type { Category } from '@/lib/types';
import { CategoryCard } from './CategoryCard';

type CategoryGridProps = {
  categories: Category[];
  coverMap: Record<string, string>;
  base: string;
  fallbackImage: string;
};

export function CategoryGrid({ categories, coverMap, base, fallbackImage }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {categories.slice(0, 6).map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          coverImage={coverMap[category.slug] ?? fallbackImage}
          base={base}
        />
      ))}
    </div>
  );
}
