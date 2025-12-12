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
}

export const defaultTheme: ThemeConfig = {
  wrapper: '',
  number: 'text-gray-900 dark:text-white',
  heading: 'text-primary-600 dark:text-primary-400',
  sub: 'text-gray-700 dark:text-gray-300',
  meta: 'text-gray-600 dark:text-gray-400',
}

