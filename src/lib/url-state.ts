import { CountdownParams } from '@/types/countdown';

export function convertSearchParamsToURLSearchParams(
  searchParams: { [key: string]: string | string[] | undefined }
): URLSearchParams {
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    const stringValue = Array.isArray(value) ? value[0] : value;
    if (stringValue) {
      params.set(key, stringValue);
    }
  });
  return params;
}

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