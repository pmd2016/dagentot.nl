import type { Metadata } from 'next'
import DatePicker from '@/components/DatePicker'
import CountdownDisplay from '@/components/CountdownDisplay'
import ShareButton from '@/components/ShareButton'
import AdSlot from '@/components/AdSlot'
import Accordion from '@/components/Accordion'
import ExpandableText from '@/components/ExpandableText'
import CountdownActions from '@/components/CountdownActions'
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
            <CountdownActions params={params} />
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Veelgestelde vragen</h2>
              <Accordion
                items={[
                  {
                    title: 'Hoe werkt de countdown timer?',
                    description: 'Kies een datum en eventueel een titel en emoji. De timer toont automatisch hoeveel dagen, weken en maanden het nog is tot de gekozen datum. Je kunt je countdown delen via de deelknop.',
                  },
                  {
                    title: 'Kan ik mijn countdown delen?',
                    description: 'Ja! Klik op de "Deel countdown" knop om een unieke link te krijgen. Deze link kun je delen met anderen, zodat zij ook jouw countdown kunnen zien.',
                  },
                  {
                    title: 'Welke datums kan ik kiezen?',
                    description: 'Je kunt elke toekomstige datum kiezen tot maximaal 10 jaar vooruit. De timer werkt ook voor datums in het verleden, zodat je kunt zien hoeveel dagen geleden iets was.',
                  },
                  {
                    title: 'Zijn er kosten verbonden?',
                    description: 'Nee, AantalDagenTot.nl is volledig gratis te gebruiken. Je kunt onbeperkt countdowns maken zonder registratie.',
                  },
                ]}
              />
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Aftellen was nog nooit zo makkelijk
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ontdek in één oogopslag hoeveel dagen het nog is tot een vakantie, verjaardag of belangrijke datum.
              </p>
            </div>
            <DatePicker 
              initialTitle={params?.title}
              initialDate={params?.date}
              initialEmoji={params?.emoji}
            />
            <div className="mt-8 text-center max-w-2xl mx-auto">
              <ExpandableText
                text="<b>Wil je snel weten hoeveel dagen het nog is tot een belangrijke datum?</b> Met <b>AantalDagenTot.nl</b> zie je in &eacute;&eacute;n oogopslag hoeveel dagen, weken en maanden er nog over zijn tot jouw moment. Of het nu gaat om een vakantie, een verjaardag, een deadline of een feestdag: aftellen wordt eenvoudig &eacute;n leuk.<br>
<br>
Stel, je vraagt je af: <em>hoeveel dagen is het nog tot Kerst?</em> Of je wilt weten hoe lang het nog duurt voordat je zomervakantie begint, een examen start of een groot evenement plaatsvindt. Met AantalDagenTot.nl voer je simpelweg een datum in &mdash; of kies je deze via de kalender &mdash; en je krijgt direct een duidelijk overzicht. Geen gedoe, geen account nodig.<br>
<br>
Wat AantalDagenTot.nl extra handig maakt, is dat je elke countdown kunt <b>delen via een unieke link</b>. Zo kun je bijvoorbeeld een aftelpagina maken voor &ldquo;Vakantie Frankrijk&rdquo;, &ldquo;Verjaardag Anna&rdquo; of &ldquo;Lancering nieuwe website&rdquo; en deze eenvoudig opslaan, delen of bookmarken. Iedereen met de link ziet exact dezelfde countdown.<br>
<br>
De website is ontworpen met een <b>strak, modern en gebruiksvriendelijk ontwerp</b>, dat zowel op desktop als mobiel prettig werkt. Dankzij de ingebouwde <b>donkere en lichte modus</b> past de weergave zich aan jouw voorkeur of systeeminstelling aan. Zo blijft aftellen comfortabel, op elk moment van de dag.<br>
<br>
AantalDagenTot.nl is bedoeld als een <b>praktische tool voor dagelijks gebruik</b>: snel, overzichtelijk en betrouwbaar. Geen overbodige functies, maar precies wat je nodig hebt om grip te krijgen op tijd. Of je nu vooruitkijkt naar iets leuks of juist een belangrijke datum niet wilt vergeten &mdash; met AantalDagenTot.nl weet je altijd waar je aan toe bent.<br>
<br>
Begin vandaag nog met aftellen en ontdek hoe simpel het kan zijn om tijd inzichtelijk te maken."
                maxWords={50}
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
              />
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Veelgestelde vragen</h2>
              <Accordion
                items={[
                  {
                    title: 'Hoe werkt de countdown timer?',
                    description: 'Kies een datum en eventueel een titel en emoji. De timer toont automatisch hoeveel dagen, weken en maanden het nog is tot de gekozen datum. Je kunt je countdown delen via de deelknop.',
                  },
                  {
                    title: 'Kan ik mijn countdown delen?',
                    description: 'Ja! Klik op de "Deel countdown" knop om een unieke link te krijgen. Deze link kun je delen met anderen, zodat zij ook jouw countdown kunnen zien.',
                  },
                  {
                    title: 'Welke datums kan ik kiezen?',
                    description: 'Je kunt elke toekomstige datum kiezen tot maximaal 10 jaar vooruit. De timer werkt nog niet voor datums in het verleden.',
                  },
                  {
                    title: 'Zijn er kosten verbonden?',
                    description: 'Nee, AantalDagenTot.nl is volledig gratis te gebruiken. Je kunt onbeperkt countdowns maken zonder registratie.',
                  },
                ]}
              />
            </div>
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