export interface CountdownParams {
  title?: string;
  date: string;
  emoji?: string;
  theme?: 'light' | 'dark' | 'auto';
}

export interface CountdownResult {
  days: number;
  weeks: number;
  months: number;
  isPast: boolean;
  targetDate: Date;
  isToday: boolean;
  isTomorrow: boolean;
  isYesterday: boolean;
}