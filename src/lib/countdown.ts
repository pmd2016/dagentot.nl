import { differenceInDays, differenceInMonths, startOfDay } from 'date-fns';
import { CountdownResult } from '@/types/countdown';

export function calculateCountdown(targetDateString: string): CountdownResult {
  const now = startOfDay(new Date());
  const target = startOfDay(new Date(targetDateString));
  
  const diffDays = differenceInDays(target, now);
  const absDays = Math.abs(diffDays);
  
  return {
    days: absDays,
    weeks: Math.floor(absDays / 7),
    months: Math.abs(differenceInMonths(target, now)),
    isPast: diffDays < 0,
    targetDate: target,
    isToday: diffDays === 0,
    isTomorrow: diffDays === 1,
    isYesterday: diffDays === -1,
  };
}

export function validateDate(dateString: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) return false;
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return false;
  
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 10);
  
  return date <= maxDate;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}