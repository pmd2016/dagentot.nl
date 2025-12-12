import { Metadata } from 'next';
import { CountdownResult } from '@/types/countdown';

export function generateCountdownMetadata(
  countdown: CountdownResult | null,
  title?: string
): Metadata {
  if (!countdown) {
    return {
      title: 'AantalDagenTot.nl - Gratis Countdown Timer',
      description: 'Tel af naar belangrijke datums. Vakanties, verjaardagen, evenementen en meer. Deel je countdown met een unieke link.',
      openGraph: {
        title: 'AantalDagenTot.nl - Gratis Countdown Timer',
        description: 'Tel af naar belangrijke datums',
        type: 'website',
      },
    };
  }
  
  const eventTitle = title || 'deze datum';
  const daysText = countdown.days === 1 ? 'dag' : 'dagen';
  
  let description = '';
  if (countdown.isToday) {
    description = `${eventTitle} is vandaag! 🎉`;
  } else if (countdown.isTomorrow) {
    description = `${eventTitle} is morgen!`;
  } else if (countdown.isPast) {
    description = `${eventTitle} was ${countdown.days} ${daysText} geleden`;
  } else {
    description = `Nog ${countdown.days} ${daysText} tot ${eventTitle}`;
  }
  
  const pageTitle = countdown.isPast 
    ? `${countdown.days} ${daysText} geleden: ${eventTitle}`
    : `${countdown.days} ${daysText} tot ${eventTitle}`;
  
  return {
    title: `${pageTitle} | AantalDagenTot.nl`,
    description,
    openGraph: {
      title: pageTitle,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
    },
  };
}