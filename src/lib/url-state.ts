import { CountdownParams } from '@/types/countdown';

export function extractParams(searchParams: URLSearchParams): CountdownParams | null {
  const date = searchParams.get('date');
  
  if (!date) {
    return null;
  }
  
  return {
    title: searchParams.get('title') || undefined,
    date,
    emoji: searchParams.get('emoji') || undefined,
    theme: (searchParams.get('theme') as 'light' | 'dark' | 'auto') || undefined,
  };
}

export function buildShareUrl(params: CountdownParams): string {
  const url = new URL(window.location.origin);
  
  url.searchParams.set('date', params.date);
  if (params.title) url.searchParams.set('title', params.title);
  if (params.emoji) url.searchParams.set('emoji', params.emoji);
  
  return url.toString();
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}