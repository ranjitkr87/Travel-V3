import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  fallbackLabel?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  priority = false,
  className = 'w-full h-full object-cover',
  fallbackLabel,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="w-full h-full bg-surface-dim flex flex-col items-center justify-center p-6 text-center text-on-surface-variant"
        role="img"
        aria-label={alt}
      >
        <span className="material-symbols-outlined text-3xl text-primary/60 mb-2" aria-hidden="true">
          landscape
        </span>
        <span className="text-body-sm font-body-sm text-primary/80 max-w-xs">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};

export default OptimizedImage;
