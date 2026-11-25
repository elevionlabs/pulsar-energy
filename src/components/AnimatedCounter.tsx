import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  to: number;
  from?: number;
  duration?: number; // duration in seconds (default: 1.6)
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  isCurrency?: boolean;
  once?: boolean;
  formatter?: (val: number) => string;
}

// Ease out expo for snappy, high-end deceleration
const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  to,
  from = 0,
  duration = 1.6,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  isCurrency = false,
  once = true,
  formatter,
}) => {
  const [displayValue, setDisplayValue] = useState<number>(from);
  const [isInView, setIsInView] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const prevToRef = useRef<number>(from);

  // Setup intersection observer
  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
          setDisplayValue(from);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [from, once]);

  // Run the counting animation when in view or when target 'to' changes
  useEffect(() => {
    if (!isInView) return;

    const startVal = prevToRef.current !== to ? prevToRef.current : from;
    const endVal = to;
    prevToRef.current = to;

    const durationMs = duration * 1000;
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOutExpo(progress);

      const current = startVal + (endVal - startVal) * easedProgress;
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(endVal);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isInView, to, from, duration]);

  // Format the output
  const renderText = () => {
    if (formatter) {
      return formatter(displayValue);
    }

    if (isCurrency) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0,
      }).format(Math.round(displayValue));
    }

    const formattedNumber = displayValue.toFixed(decimals);
    return `${prefix}${formattedNumber}${suffix}`;
  };

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`}>
      {renderText()}
    </span>
  );
};

interface AnimatedRangeCounterProps {
  toVal1: number;
  toVal2: number;
  fromVal1?: number;
  fromVal2?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  separator?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedRangeCounter: React.FC<AnimatedRangeCounterProps> = ({
  toVal1,
  toVal2,
  fromVal1 = 0,
  fromVal2 = 0,
  duration = 1.6,
  decimals = 0,
  prefix = '',
  separator = ' a ',
  suffix = '',
  className = '',
}) => {
  const [val1, setVal1] = useState<number>(fromVal1);
  const [val2, setVal2] = useState<number>(fromVal2);
  const [isInView, setIsInView] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const durationMs = duration * 1000;
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOutExpo(progress);

      setVal1(fromVal1 + (toVal1 - fromVal1) * easedProgress);
      setVal2(fromVal2 + (toVal2 - fromVal2) * easedProgress);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(updateCounter);
      } else {
        setVal1(toVal1);
        setVal2(toVal2);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isInView, toVal1, toVal2, fromVal1, fromVal2, duration]);

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`}>
      {prefix}
      {val1.toFixed(decimals)}
      {separator}
      {val2.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const AnimatedMetricValue: React.FC<{ value: string; className?: string }> = ({
  value,
  className = '',
}) => {
  // Check for range like "15% a 35%" or "8 a 18 meses"
  const rangeMatch = value.match(/^([~<>\s]*)?(\d+(?:\.\d+)?)(%?)\s*(?:a|-)\s*(\d+(?:\.\d+)?)(%?)(.*)$/i);
  if (rangeMatch) {
    const prefix = rangeMatch[1] || '';
    const val1 = parseFloat(rangeMatch[2]);
    const val2 = parseFloat(rangeMatch[4]);
    const suffix = (rangeMatch[5] || rangeMatch[3] || '') + (rangeMatch[6] || '');
    return (
      <AnimatedRangeCounter
        toVal1={val1}
        toVal2={val2}
        prefix={prefix}
        separator={value.includes(' a ') ? ' a ' : '-'}
        suffix={suffix}
        duration={1.5}
        className={className}
      />
    );
  }

  // Check for single number like "+40%", "< 200ms", "Até 45%", "25+ Anos", "-15%"
  const singleMatch = value.match(/^([^0-9.-]*?)(-?\d+(?:\.\d+)?)(.*)$/);
  if (singleMatch) {
    const prefix = singleMatch[1];
    const num = parseFloat(singleMatch[2]);
    const suffix = singleMatch[3];
    const hasDecimals = singleMatch[2].includes('.');
    const decimals = hasDecimals ? singleMatch[2].split('.')[1].length : 0;
    return (
      <AnimatedCounter
        to={num}
        decimals={decimals}
        prefix={prefix}
        suffix={suffix}
        duration={1.5}
        className={className}
      />
    );
  }

  // Fallback to text (e.g. "PIMVP / EVO")
  return <span className={className}>{value}</span>;
};

