import React from 'react';

interface PulsarLogoProps {
  className?: string;
  variant?: 'full' | 'symbol' | 'horizontal';
  height?: number | string;
}

export function PulsarLogo({ className = '', height = 48 }: PulsarLogoProps) {
  return (
    <img
      src="/pulsar-logo.png"
      alt="Pulsar Energy"
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        width: 'auto',
      }}
      className={`object-contain select-none max-w-full inline-block ${className}`}
      referrerPolicy="no-referrer"
    />
  );
}

