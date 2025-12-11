'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface DatePickerProps {
  initialTitle?: string;
  initialDate?: string;
  initialEmoji?: string;
}

const emojiOptions = [
  { emoji: '🎂', label: 'Verjaardag' },
  { emoji: '🏖️', label: 'Vakantie' },
  { emoji: '🎄', label: 'Kerst' },
  { emoji: '🎉', label: 'Feest' },
  { emoji: '💍', label: 'Bruiloft' },
  { emoji: '👶', label: 'Geboorte' },
  { emoji: '🎓', label: 'Afstuderen' },
  { emoji: '✈️', label: 'Reis' },
  { emoji: '🏡', label: 'Verhuizing' },
  { emoji: '❤️', label: 'Valentijn' },
];

export default function DatePicker({ initialTitle, initialDate, initialEmoji }: DatePickerProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialTitle || '');
  const [date, setDate] = useState(initialDate || '');
  const [emoji, setEmoji] = useState(initialEmoji || '');
  const [error, setError] = useState('');

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 10);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!date) {
      setError('Kies een datum');
      return;
    }

    const params = new URLSearchParams();
    params.set('date', date);
    if (title) params.set('title', title);
    if (emoji) params.set('emoji', emoji);

    const query = params.toString();
    const target = `/?${query}`;

    try {
      await router.push(target);
    } catch (err) {
      // fallback to full navigation if router fails
      if (typeof window !== 'undefined') window.location.href = target;
      return;
    }

    // If router.push didn't navigate (some environments), apply a short fallback
    setTimeout(() => {
      if (typeof window !== 'undefined' && window.location.search !== `?${query}`) {
        window.location.href = target;
      }
    }, 300);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Wat vier je?
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Bijv. Mijn verjaardag"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Datum *
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={today}
          max={maxDateStr}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Kies een emoji (optioneel)
        </label>
        <div className="grid grid-cols-5 gap-2">
          {emojiOptions.map((option) => (
            <button
              key={option.emoji}
              type="button"
              onClick={() => setEmoji(emoji === option.emoji ? '' : option.emoji)}
              className={`p-3 text-3xl rounded-lg border-2 transition-all hover:scale-110 ${
                emoji === option.emoji
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600'
              }`}
              title={option.label}
            >
              {option.emoji}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="text-red-600 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="w-full py-4 px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Maak countdown
      </button>
    </form>
  );
}