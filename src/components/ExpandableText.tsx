'use client';

import { useState, useEffect } from 'react';

interface ExpandableTextProps {
  text: string;
  maxWords?: number;
  className?: string;
}

export default function ExpandableText({
  text,
  maxWords = 50,
  className = ''
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const words = text.split(' ');
  const shouldTruncate = words.length > maxWords;
  const truncatedText = shouldTruncate ? words.slice(0, maxWords).join(' ') + '...' : text;
  const displayText = isExpanded ? text : truncatedText;

  if (!shouldTruncate) {
    return (
      <p className={className} suppressHydrationWarning>
        {isClient ? (
          <span dangerouslySetInnerHTML={{ __html: text }} />
        ) : (
          text.replace(/<[^>]*>/g, '')
        )}
      </p>
    );
  }

  return (
    <div suppressHydrationWarning>
      <p className={`${className} ${isExpanded ? '' : 'relative'}`}>
        {isClient ? (
          <span dangerouslySetInnerHTML={{ __html: displayText }} />
        ) : (
          displayText.replace(/<[^>]*>/g, '')
        )}
        {!isExpanded && (
          <span className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none" />
        )}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
      >
        {isExpanded ? 'Lees minder' : 'Lees meer...'}
      </button>
    </div>
  );
}