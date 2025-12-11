'use client';

import { useState } from 'react';
import { CountdownParams } from '@/types/countdown';
import { buildShareUrl, copyToClipboard } from '@/lib/url-state';

interface ShareButtonProps {
  params: CountdownParams;
}

export default function ShareButton({ params }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = buildShareUrl(params);

    if (navigator.share) {
      try {
        await navigator.share({
          title: params.title ? `Countdown: ${params.title}` : 'Mijn countdown',
          text: `Bekijk mijn countdown op DagenTot.nl`,
          url,
        });
        return;
      } catch (err) {
        // Fallback to copy
      }
    }

    try {
      await copyToClipboard(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
    >
      {copied ? (
        <>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Gekopieerd!
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Deel countdown
        </>
      )}
    </button>
  );
}