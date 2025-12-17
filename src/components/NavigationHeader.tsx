'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { predefinedHolidays, calculateNextHolidayDate, formatHolidayDate, getHolidayDateString } from '@/lib/holidays';

export default function NavigationHeader() {
  const router = useRouter();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [showHolidayMenu, setShowHolidayMenu] = useState(false);

  const applyThemeClass = (nextTheme: 'light' | 'dark') => {
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const safeGetStoredTheme = (): 'light' | 'dark' | null => {
    try {
      return localStorage.getItem('theme') as 'light' | 'dark' | null;
    } catch {
      return null;
    }
  };

  const safeStoreTheme = (nextTheme: 'light' | 'dark') => {
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // Safari private mode can block localStorage; ignore in that case.
    }
  };

  useEffect(() => {
    setMounted(true);
    const savedTheme = safeGetStoredTheme();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme ?? (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    applyThemeClass(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    safeStoreTheme(newTheme);
    applyThemeClass(newTheme);
  };

  const handleHolidayClick = (holiday: typeof predefinedHolidays[0]) => {
    const dateStr = getHolidayDateString(holiday);

    const params = new URLSearchParams();
    params.set('date', dateStr);
    params.set('title', holiday.name);
    params.set('emoji', holiday.emoji);

    const query = params.toString();
    router.push(`/?${query}`);
    setShowHolidayMenu(false);
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-3xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer">
                AantalDagenTot.nl
              </h1>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-3">
            {/* Holiday Menu */}
            <div className="relative">
              <button
                onClick={() => setShowHolidayMenu(!showHolidayMenu)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label="Snelle countdowns"
              >
                📅 Snelle countdowns
              </button>

              {showHolidayMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                  {predefinedHolidays.map((holiday) => {
                    const nextDate = calculateNextHolidayDate(holiday);
                    return (
                      <button
                        key={holiday.id}
                        onClick={() => handleHolidayClick(holiday)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{holiday.emoji}</span>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {holiday.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {formatHolidayDate(nextDate)}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {showHolidayMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowHolidayMenu(false)}
        />
      )}
    </header>
  );
}