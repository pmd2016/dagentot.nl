import DatePicker from '@/components/DatePicker'

export default function Page() {
  return (
    <main className="min-h-screen flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center">DagenTot.nl — Gratis Countdown Timer</h1>
        <DatePicker />
      </div>
    </main>
  )
}