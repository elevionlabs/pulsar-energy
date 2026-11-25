import React, { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  threshold?: number;
  rootMargin?: string;
  delayMs?: number;
  direction?: 'up' | 'none';
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  id,
  threshold = 0.08,
  rootMargin = '0px 0px -30px 0px',
  delayMs = 0,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = domRef.current;
    if (!currentElement) return;

    // If user prefers reduced motion, show immediately
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              const timer = setTimeout(() => {
                requestAnimationFrame(() => setIsVisible(true));
              }, delayMs);
              return () => clearTimeout(timer);
            } else {
              requestAnimationFrame(() => setIsVisible(true));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElement);

    // Fallback timer: ensure content is always revealed after 1.5s even if observer doesn't trigger
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [threshold, rootMargin, delayMs]);

  return (
    <div
      ref={domRef}
      id={id}
      className={`transition-all duration-700 md:duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform will-change-[opacity,transform] ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 filter-none'
          : `opacity-0 ${direction === 'up' ? 'translate-y-7 sm:translate-y-10 scale-[0.99]' : ''}`
      } ${className}`}
    >
      {children}
    </div>
  );
};
