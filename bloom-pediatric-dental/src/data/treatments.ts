export interface Treatment {
  readonly id: string
  readonly title: string
  readonly age: string
  readonly summary: string
  readonly detail: string
  readonly tone: 'sage' | 'blush' | 'sky' | 'sun'
}

export const treatments: readonly Treatment[] = [
  {
    id: 'wennen',
    title: 'Wenafspraken',
    age: '2 – 6 jaar',
    summary: 'Kennismaken met de praktijk in korte, luchtige bezoekjes.',
    detail:
      'Voor de allerkleinsten en voor kinderen die het spannend vinden. In één of meer korte afspraken bouwen we op: rondkijken, de stoel, tellen, poetsen. We gaan pas verder als uw kind daaraan toe is.',
    tone: 'sage',
  },
  {
    id: 'controle',
    title: 'Halfjaarlijkse controle',
    age: 'alle leeftijden',
    summary: 'Tellen, kijken, poetsen nakijken en samen een plan maken.',
    detail:
      'Een rustige controle van tanden en tandvlees, met aandacht voor de wisseling en de stand. We poetsen na met een kleurtablet zodat uw kind zelf ziet waar de aandacht naartoe moet.',
    tone: 'sky',
  },
  {
    id: 'fluoride',
    title: 'Fluoride & lakken',
    age: '4 jaar en ouder',
    summary: 'Een beschermlaagje op kwetsbare kiezen en groeven.',
    detail:
      'Zodra de blijvende kiezen doorkomen, kunnen we de groeven afsluiten met een dun laklaagje (sealen). Bij een hoger risico op gaatjes brengen we een paar keer per jaar fluoridelak aan. Niet boren, niet verdoven.',
    tone: 'sun',
  },
  {
    id: 'gaatje',
    title: 'Een gaatje vullen',
    age: 'alle leeftijden',
    summary: 'Stap voor stap, met alles van tevoren uitgelegd.',
    detail:
      'We laten eerst zien, voelen en horen wat er gaat gebeuren. De verdoving noemen we “slaapdruppels voor de tand”. Uw kind heeft een stopteken dat we ook echt gebruiken. Kleine vullingen doen we het liefst in de ochtend.',
    tone: 'blush',
  },
  {
    id: 'trauma',
    title: 'Ongeluk met een tand',
    age: 'alle leeftijden',
    summary: 'Snel terecht na een val, botsing of sportongeluk.',
    detail:
      'Bel ons dezelfde dag. Is een blijvende tand er helemaal uit? Leg hem in melk of laat uw kind hem in de wang houden en kom meteen langs — de eerste dertig minuten tellen. We beoordelen, stabiliseren en plannen de controle.',
    tone: 'blush',
  },
  {
    id: 'verwijzing',
    title: 'Beugel & verwijzing',
    age: '8 – 16 jaar',
    summary: 'We kijken mee naar de stand en verwijzen op het juiste moment.',
    detail:
      'Wij plaatsen zelf geen beugels, maar volgen de ontwikkeling van het gebit nauwkeurig. Als een orthodontist iets kan betekenen, verwijzen we gericht en op een moment dat een behandeling ook echt zin heeft.',
    tone: 'sage',
  },
]

export const prevention: readonly { title: string; body: string }[] = [
  {
    title: 'Twee keer per dag, twee minuten',
    body: 'Poets ’s ochtends en vlak voor het slapen. Na het avondpoetsen alleen nog water.',
  },
  {
    title: 'Poets na tot een jaar of tien',
    body: 'Kinderen kunnen de fijne motoriek pas rond hun tiende. Laat uw kind zelf beginnen en poets daarna nog even na.',
  },
  {
    title: 'Fluoride op maat',
    body: 'Onder de 5 jaar een erwtje kindertandpasta, daarna gewone tandpasta met 1450 ppm fluoride.',
  },
  {
    title: 'Zoetmomenten tellen, niet grammen',
    body: 'Niet de hoeveelheid suiker maakt het verschil, maar hoe vaak per dag. Zeven zoetmomenten is veel; probeer er vier van te maken.',
  },
]
