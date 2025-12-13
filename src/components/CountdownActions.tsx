'use client';

import { useRouter } from 'next/navigation';
import ShareButton from '@/components/ShareButton';
import { CountdownParams } from '@/types/countdown';

interface CountdownActionsProps {
  params: CountdownParams;
}

export default function CountdownActions({ params }: CountdownActionsProps) {
  const router = useRouter();

  return (
    <div className="mt-8 flex justify-center gap-4">
      <ShareButton params={params} />
      <button
        onClick={() => router.push('/')}
        className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Nieuwe countdown
      </button>
    </div>
  );
}