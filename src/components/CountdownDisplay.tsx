'use client';

import { CountdownResult } from '@/types/countdown';
import { formatDate } from '@/lib/countdown';
import { emojiThemes, defaultTheme } from '@/theme/emojiThemes';

interface CountdownDisplayProps {
  countdown: CountdownResult;
  title?: string;
  emoji?: string;
}

export default function CountdownDisplay({ countdown, title, emoji }: CountdownDisplayProps) {
  const theme = (emoji && emojiThemes[emoji]) || defaultTheme;

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
    <div className={`animate-fade-in text-center ${theme.wrapper}`}>
      {emoji && (
        <div className="text-8xl mb-6 animate-scale-in flex justify-center">
          <div className={`rounded-full p-2 ${theme.emojiRing ?? ''}`}>
          {emoji}
          </div>
        </div>
      )}
      
      <div className="mb-8 animate-scale-in" style={{ animationDelay: '0.1s' }}>
        {showDaysNumber && (
          <div className={`text-9xl md:text-[12rem] font-bold leading-none mb-4 ${theme.number}`}>
            {countdown.days}
          </div>
        )}
        
        <div className={`text-3xl md:text-5xl font-medium mb-2 ${theme.sub}`}>
          {daysText}
        </div>
        
        <h1 className={`text-4xl md:text-6xl font-bold ${theme.heading}`}>
          {title || 'deze datum'}
        </h1>
      </div>

      <div className={`space-y-4 text-lg animate-fade-in ${theme.meta}`} style={{ animationDelay: '0.3s' }}>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="text-center">
            <div className={`text-3xl font-bold ${theme.number}`}>{countdown.weeks}</div>
            <div className="text-sm uppercase tracking-wide">{countdown.weeks === 1 ? 'week' : 'weken'}</div>
          </div>
          
          <div className="text-center">
            <div className={`text-3xl font-bold ${theme.number}`}>{countdown.months}</div>
            <div className="text-sm uppercase tracking-wide">{countdown.months === 1 ? 'maand' : 'maanden'}</div>
          </div>
        </div>

        <div className="mt-6 text-base">
          <span>
            {countdown.isPast ? 'Was op' : 'Tot'} {formatDate(countdown.targetDate)}
          </span>
        </div>
      </div>
    </div>
  );
}