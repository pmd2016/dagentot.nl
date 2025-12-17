export interface HolidayDefinition {
  id: string;
  name: string;
  emoji: string;
  month: number; // 0-based (0 = January)
  day: number;
  theme?: string; // Associated emoji theme
}

export const predefinedHolidays: HolidayDefinition[] = [
  {
    id: 'christmas',
    name: 'Kerstmis',
    emoji: '🎄',
    month: 11, // December
    day: 25,
    theme: '🎄',
  },
  {
    id: 'new-years-eve',
    name: 'Oudjaarsavond',
    emoji: '🎆',
    month: 11, // December
    day: 31,
    theme: '🎆',
  },
  {
    id: 'valentines-day',
    name: 'Valentijnsdag',
    emoji: '❤️',
    month: 1, // February
    day: 14,
    theme: '❤️',
  },
  {
    id: 'kings-day',
    name: 'Koningsdag',
    emoji: '👑',
    month: 3, // April
    day: 27,
    theme: '👑',
  },
];

export function calculateNextHolidayDate(holiday: HolidayDefinition): Date {
  const now = new Date();
  const currentYear = now.getFullYear();

  // Create date for this year
  const holidayThisYear = new Date(currentYear, holiday.month, holiday.day);

  // If the holiday has already passed this year, use next year
  if (holidayThisYear < now) {
    return new Date(currentYear + 1, holiday.month, holiday.day);
  }

  return holidayThisYear;
}

export function getHolidayDateString(holiday: HolidayDefinition): string {
  const nextDate = calculateNextHolidayDate(holiday);
  const year = nextDate.getFullYear();
  const month = String(nextDate.getMonth() + 1).padStart(2, '0'); // getMonth() is 0-based
  const day = String(nextDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function formatHolidayDate(date: Date): string {
  return date.toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}