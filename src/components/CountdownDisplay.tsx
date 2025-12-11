'use client';

import { CountdownResult } from '@/types/countdown';
import { formatDate } from '@/lib/countdown';

interface CountdownDisplayProps {
  countdown: CountdownResult;
  title?: string;
  emoji?: string;
}

export default function CountdownDisplay({ countdown, title, emoji }: CountdownDisplayProps) {
  const getDisplayText = () => {
    if (countdown.isToday) return 'is vandaag!';
    if (countdown.isTomorrow) return 'is morgen!';
    if (countdown.isYesterday) return 'was gisteren';
    if (countdown.isPast) return countdown.days === 1 ? 'dag geleden' : 'dagen geleden';
    return countdown.days === 1 ? 'dag tot' : 'dagen tot';
  };

  const daysText = getDisplayText();
  const showDaysNumber = !countdown.isToday && !countdown.isTomorrow && !countdown.isYesterday;

  return (
    <div className="animate-fade-in text-center">
      {emoji && (
        <div className="text-8xl mb-6 animate-scale-in">
          {emoji}
        </div>
      )}
      
      <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.1s' }}>
        {showDaysNumber && (
          <div className="text-9xl md:text-[12rem] font-bold text-gray-900 dark:text-white leading-none mb-4">
            {countdown.days}
          </div>
        )}
        
        <div className="text-3xl md:text-5xl font-medium text-gray-700 dark:text-gray-300 mb-2">
          {daysText}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-primary-600 dark:text-primary-400">
          {title || 'deze datum'}
        </h1>
      </div>

      <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{countdown.weeks}</div>
            <div className="text-sm uppercase tracking-wide">{countdown.weeks === 1 ? 'week' : 'weken'}</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{countdown.months}</div>
            <div className="text-sm uppercase tracking-wide">{countdown.months === 1 ? 'maand' : 'maanden'}</div>
          </div>
        </div>

        <div className="mt-6 text-base">
          <span className="text-gray-500 dark:text-gray-500">
            {countdown.isPast ? 'Was op' : 'Tot'} {formatDate(countdown.targetDate)}
          </span>
        </div>
      </div>
    </div>
  );
}