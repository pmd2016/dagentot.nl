'use client';

import { useEffect } from 'react';

interface AdSlotProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal';
  position: 'top' | 'bottom' | 'footer';
}

export default function AdSlot({ slot, format = 'auto', position }: AdSlotProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  const positionClasses = {
    top: 'mb-8',
    bottom: 'my-8',
    footer: 'mt-12'
  };

  return (
    <div className={`ad-container ad-${position} ${positionClasses[position]} flex justify-center`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-XXXXXXXXXX'}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}