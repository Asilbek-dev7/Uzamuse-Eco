import React, { useState, useEffect } from 'react';

export const SafeImage = ({ src, alt, className, loading = "lazy", onLoad, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fallback = `https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800&h=600`; 

  const isGoogleDrive = src?.includes('googleusercontent.com') || src?.includes('drive.google.com');

  return (
    <div className={`relative overflow-hidden bg-primary/5 ${className}`}>
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary/5 animate-pulse">
          <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      <img
        key={src}
        src={error || !src ? fallback : src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className?.includes('object-') ? '' : 'object-cover'}`}
        style={{ transform: 'translateZ(0)' }}
        onError={() => {
          console.error(`Image failed to load: ${src}`);
          setError(true);
          setIsLoading(false);
        }}
        onLoad={(e) => {
          setIsLoading(false);
          onLoad?.(e);
        }}
        referrerPolicy={isGoogleDrive ? "no-referrer" : undefined}
        {...props}
      />
    </div>
  );
};
