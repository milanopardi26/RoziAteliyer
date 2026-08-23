'use client';

import { useState } from 'react';

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackClassName?: string;
};

export function ImageWithFallback({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackClassName = '',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div className={`${fallbackClassName || className} bg-muted`} aria-label={alt} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
