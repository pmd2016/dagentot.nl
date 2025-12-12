import type { Metadata } from 'next'
import DatePicker from '@/components/DatePicker'
import CountdownDisplay from '@/components/CountdownDisplay'
import ShareButton from '@/components/ShareButton'
import AdSlot from '@/components/AdSlot'
import { extractParams, convertSearchParamsToURLSearchParams } from '@/lib/url-state'
import { calculateCountdown, validateDate } from '@/lib/countdown'
import { generateCountdownMetadata } from '@/lib/seo'

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const urlSearchParams = convertSearchParamsToURLSearchParams(searchParams);
  const params = extractParams(urlSearchParams);

  const countdown = params && validateDate(params.date) 
    ? calculateCountdown(params.date) 
    : null;

  return generateCountdownMetadata(countdown, params?.title);
}

export default function Page({ searchParams }: PageProps) {
  const urlSearchParams = convertSearchParamsToURLSearchParams(searchParams);
  const params = extractParams(urlSearchParams);
  const adSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_MAIN || '3970087405';
  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  const hasCountdown = params && validateDate(params.date);
  const countdown = hasCountdown ? calculateCountdown(params.date) : null;

  return (
    <main className="min-h-screen flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-3xl">
        {adClient && adSlot && (
          <div className="mb-6">
            <AdSlot slot={adSlot} position="top" format="auto" />
          </div>
        )}
        {hasCountdown && countdown ? (
          <>
            <CountdownDisplay 
              countdown={countdown} 
              title={params.title}
              emoji={params.emoji}
            />
            <div className="mt-8 flex justify-center">
              <ShareButton params={params} />
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Nieuwe countdown maken</h2>
              <DatePicker 
                initialTitle={params.title}
                initialDate={params.date}
                initialEmoji={params.emoji}
              />
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-6 text-center">AantalDagenTot.nl — Gratis Countdown Timer</h1>
            <DatePicker 
              initialTitle={params?.title}
              initialDate={params?.date}
              initialEmoji={params?.emoji}
            />
          </>
        )}
        {adClient && adSlot && (
          <div className="mt-10">
            <AdSlot slot={adSlot} position="bottom" format="auto" />
          </div>
        )}
      </div>
    </main>
  )
}