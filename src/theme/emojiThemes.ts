export type ThemeConfig = {
  wrapper: string
  number: string
  heading: string
  sub: string
  meta: string
  emojiRing?: string
}

export const emojiThemes: Record<string, ThemeConfig> = {
  '🎄': {
    wrapper:
      'rounded-3xl p-8 md:p-10 bg-gradient-to-b from-emerald-900 via-emerald-800 to-slate-900 border border-emerald-700/60 shadow-2xl shadow-emerald-900/40 text-white',
    number: 'text-amber-300 drop-shadow-[0_5px_25px_rgba(217,119,6,0.45)]',
    heading: 'text-amber-200',
    sub: 'text-emerald-100/90',
    meta: 'text-emerald-200/80',
    emojiRing: 'ring-4 ring-amber-200/70 ring-offset-4 ring-offset-emerald-900/40',
  },
  '🎂': {
    wrapper:
      'rounded-3xl p-8 md:p-10 bg-gradient-to-b from-pink-500 via-rose-500 to-fuchsia-700 border border-pink-200/60 shadow-2xl shadow-rose-800/40 text-white',
    number: 'text-amber-200 drop-shadow-[0_6px_18px_rgba(251,191,36,0.55)]',
    heading: 'text-white',
    sub: 'text-pink-100',
    meta: 'text-rose-100/90',
    emojiRing: 'ring-4 ring-amber-200/80 ring-offset-4 ring-offset-pink-600/70 bg-white/10 backdrop-blur-sm',
  },
  '🏖️': {
    wrapper:
      'rounded-3xl p-8 md:p-10 bg-gradient-to-b from-sky-400 via-blue-500 to-cyan-700 border border-yellow-200/60 shadow-2xl shadow-blue-900/40 text-white',
    number: 'text-yellow-200 drop-shadow-[0_5px_25px_rgba(254,240,138,0.45)]',
    heading: 'text-yellow-100',
    sub: 'text-blue-100/90',
    meta: 'text-cyan-200/80',
    emojiRing: 'ring-4 ring-yellow-200/70 ring-offset-4 ring-offset-blue-600/40',
  },
  '🎉': {
    wrapper:
      'rounded-3xl p-8 md:p-10 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 border border-yellow-200/60 shadow-2xl shadow-purple-900/40 text-white',
    number: 'text-yellow-200 drop-shadow-[0_5px_25px_rgba(254,240,138,0.45)]',
    heading: 'text-yellow-100',
    sub: 'text-pink-100/90',
    meta: 'text-orange-200/80',
    emojiRing: 'ring-4 ring-yellow-200/70 ring-offset-4 ring-offset-purple-600/40',
  },
  '💍': {
    wrapper:
      'rounded-3xl p-8 md:p-10 bg-gradient-to-b from-rose-100 via-pink-200 to-rose-300 border border-yellow-300/60 shadow-2xl shadow-rose-900/20 text-gray-900',
    number: 'text-yellow-600 drop-shadow-[0_5px_25px_rgba(202,138,4,0.45)]',
    heading: 'text-rose-800',
    sub: 'text-pink-700/90',
    meta: 'text-rose-600/80',
    emojiRing: 'ring-4 ring-yellow-400/70 ring-offset-4 ring-offset-rose-200/40',
  },
  '👶': {
    wrapper:
      'rounded-3xl p-8 md:p-10 bg-gradient-to-b from-blue-100 via-cyan-100 to-teal-200 border border-yellow-200/60 shadow-2xl shadow-blue-900/20 text-gray-900',
    number: 'text-blue-600 drop-shadow-[0_5px_25px_rgba(37,99,235,0.45)]',
    heading: 'text-blue-800',
    sub: 'text-cyan-700/90',
    meta: 'text-teal-600/80',
    emojiRing: 'ring-4 ring-yellow-200/70 ring-offset-4 ring-offset-blue-200/40',
  },
  '🎓': {
    wrapper:
      'rounded-3xl p-8 md:p-10 bg-gradient-to-b from-indigo-800 via-blue-800 to-slate-900 border border-yellow-400/60 shadow-2xl shadow-indigo-900/40 text-white',
    number: 'text-yellow-300 drop-shadow-[0_5px_25px_rgba(253,224,71,0.45)]',
    heading: 'text-yellow-200',
    sub: 'text-blue-100/90',
    meta: 'text-indigo-200/80',
    emojiRing: 'ring-4 ring-yellow-300/70 ring-offset-4 ring-offset-indigo-900/40',
  },
  '✈️': {
    wrapper:
      'rounded-3xl p-8 md:p-10 bg-gradient-to-b from-blue-600 via-sky-500 to-cyan-600 border border-white/60 shadow-2xl shadow-blue-900/40 text-white',
    number: 'text-white drop-shadow-[0_5px_25px_rgba(255,255,255,0.45)]',
    heading: 'text-cyan-100',
    sub: 'text-blue-100/90',
    meta: 'text-sky-200/80',
    emojiRing: 'ring-4 ring-white/70 ring-offset-4 ring-offset-blue-700/40',
  },
  '🏡': {
    wrapper:
      'rounded-3xl p-8 md:p-10 bg-gradient-to-b from-amber-700 via-orange-600 to-red-700 border border-yellow-300/60 shadow-2xl shadow-orange-900/40 text-white',
    number: 'text-yellow-200 drop-shadow-[0_5px_25px_rgba(254,240,138,0.45)]',
    heading: 'text-yellow-100',
    sub: 'text-orange-100/90',
    meta: 'text-amber-200/80',
    emojiRing: 'ring-4 ring-yellow-200/70 ring-offset-4 ring-offset-orange-700/40',
  },
}

export const defaultTheme: ThemeConfig = {
  wrapper: '',
  number: 'text-gray-900 dark:text-white',
  heading: 'text-primary-600 dark:text-primary-400',
  sub: 'text-gray-700 dark:text-gray-300',
  meta: 'text-gray-600 dark:text-gray-400',
}

