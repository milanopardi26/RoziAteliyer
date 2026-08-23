type LoadingSkeletonProps = {
  count?: number;
  variant?: 'design' | 'category' | 'creator' | 'detail';
  className?: string;
};

export function LoadingSkeleton({ count = 8, variant = 'design', className = '' }: LoadingSkeletonProps) {
  const items = Array.from({ length: count });

  if (variant === 'detail') {
    return (
      <div className={className}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="aspect-square skeleton-shimmer rounded-2xl" />
          <div className="space-y-4">
            <div className="h-8 w-2/3 skeleton-shimmer rounded" />
            <div className="h-4 w-1/3 skeleton-shimmer rounded" />
            <div className="h-24 skeleton-shimmer rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'category') {
    return (
      <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 ${className}`}>
        {items.map((_, i) => (
          <div key={i} className="aspect-[0.82] skeleton-shimmer rounded-2xl" />
        ))}
      </div>
    );
  }

  if (variant === 'creator') {
    return (
      <div className={`grid grid-cols-3 gap-3 sm:gap-5 ${className}`}>
        {items.slice(0, 3).map((_, i) => (
          <div key={i} className="aspect-[0.78] skeleton-shimmer rounded-2xl" />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 ${className}`}>
      {items.map((_, i) => (
        <div key={i}>
          <div className="aspect-square skeleton-shimmer rounded-2xl" />
          <div className="mt-3 h-4 w-2/3 skeleton-shimmer rounded" />
          <div className="mt-2 h-3 w-1/3 skeleton-shimmer rounded" />
        </div>
      ))}
    </div>
  );
}
