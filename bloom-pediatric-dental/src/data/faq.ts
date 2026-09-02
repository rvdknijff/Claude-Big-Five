export interface FaqItem {
  readonly q: string
  readonly a: string
}

export interface FaqGroup {
  readonly title: string
  readonly items: readonly FaqItem[]
}

export const faqGroups: readonly FaqGroup[] = [
  {
    title: 'Afspraken',
    items: [
      {
        q: 'Hoe schrijf ik mijn kind in?',
        a: 'Vul het contactformulier in of bel ons. We bellen binnen één werkdag terug om een eerste afspraak te plannen en vragen dan om de gegevens van uw huidige tandarts en zorgverzekeraar.',
      },
      {
        q: 'Kunnen broertjes en zusjes samen komen?',
        a: 'Dat kan, en het helpt vaak: het jongere kind ziet dat het oudere kind ontspannen op de stoel zit. Geef bij het maken van de afspraak door hoeveel kinderen komen.',
      },
      {
        q: 'Wat als we een afspraak niet halen?',
        a: 'Laat het minstens 24 uur van tevoren weten, dan kan een ander kind die plek gebruiken. Bij herhaald niet-verschijnen zonder bericht brengen we kosten in rekening die niet vergoed worden.',
      },
    ],
  },
  {
    title: 'Tijdens het bezoek',
    items: [
      {
        q: 'Wordt er bij het eerste bezoek geboord?',
        a: 'Nee. Het eerste bezoek is kennismaken: rondkijken, de stoel, tellen en samen napoetsen. Als er behandeling nodig is, plannen we daar een aparte afspraak voor zodat uw kind weet wat er komt.',
      },
      {
        q: 'Maken jullie röntgenfoto’s?',
        a: 'Alleen als het echt nodig is en meestal pas vanaf een jaar of vijf. We gebruiken de laagst mogelijke dosis en leggen aan uw kind uit dat het “een foto van de tanden” is.',
      },
      {
        q: 'Werken jullie met lachgas of narcose?',
        a: 'Standaard niet. Voor de meeste kinderen is rust, uitleg en tijd genoeg. Lukt een noodzakelijke behandeling echt niet, dan bespreken we een verwijzing naar een centrum voor bijzondere tandheelkunde.',
      },
    ],
  },
  {
    title: 'Kosten & verzekering',
    items: [
      {
        q: 'Moet ik zelf betalen?',
        a: 'Mondzorg voor kinderen tot 18 jaar zit in de basisverzekering en valt buiten het eigen risico. Wij declareren rechtstreeks bij uw zorgverzekeraar.',
      },
      {
        q: 'Wat wordt niet vergoed?',
        a: 'Kroon- en brugwerk, beugels (aparte regeling) en no-show. Voor alles wat buiten de basisverzekering valt, krijgt u vooraf een begroting.',
      },
    ],
  },
  {
    title: 'Praktisch',
    items: [
      {
        q: 'Is de praktijk toegankelijk met een kinderwagen of rolstoel?',
        a: 'Ja. De ingang is gelijkvloers, er is een lift naar de behandelkamers en een ruime toilet met verschoontafel.',
      },
      {
        q: 'Kan ik parkeren?',
        a: 'Voor de deur is kort parkeren gratis (30 minuten met de schijf). Op vijf minuten loopafstand is een parkeergarage.',
      },
    ],
  },
]
