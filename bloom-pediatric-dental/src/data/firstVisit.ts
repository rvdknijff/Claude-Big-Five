export interface VisitStep {
  readonly n: number
  readonly title: string
  readonly kid: string
  readonly parent: string
  readonly minutes: string
}

/** The first-visit journey — written twice: once for the child, once for the parent. */
export const visitSteps: readonly VisitStep[] = [
  {
    n: 1,
    title: 'Binnenkomen',
    kid: 'Je hangt je jas op, kiest een plekje in de wachtkamer en zoekt in het boekje naar de verstopte muis.',
    parent:
      'Kom gerust tien minuten eerder. De wachtruimte heeft een leeshoek en een raam op de tuin — geen tv, geen piepende apparaten. Uw kind mag zelf bepalen wanneer het meeloopt.',
    minutes: '± 10 min',
  },
  {
    n: 2,
    title: 'Kennismaken',
    kid: 'Je maakt kennis met de tandarts en de assistente. Zij vertellen wat er vandaag gebeurt en wat niet.',
    parent:
      'We stellen ons voor op ooghoogte van uw kind en leggen de afspraak van vandaag uit in gewone taal. Vragen van u bespreken we het liefst even apart, niet boven het hoofd van uw kind.',
    minutes: '± 5 min',
  },
  {
    n: 3,
    title: 'De stoel ontdekken',
    kid: 'De stoel kan omhoog en omlaag, net een liftje. Je mag hem eerst zelf uitproberen, met je schoenen aan.',
    parent:
      'Bij een eerste bezoek gebeurt er bewust weinig. Uw kind leert de stoel, de lamp en het spiegeltje kennen zonder dat er iets “moet”. U zit ernaast in beeld.',
    minutes: '± 5 min',
  },
  {
    n: 4,
    title: 'Tanden tellen',
    kid: 'Met een klein spiegeltje tellen we samen je tanden. Jij mag hardop meetellen. Kietelt een beetje.',
    parent:
      'Een rustige inspectie met spiegel en tellen. Poetsen we samen na, dan ziet uw kind met een kleurtablet waar de plek zat die de tandenborstel had gemist.',
    minutes: '± 10 min',
  },
  {
    n: 5,
    title: 'Samen afsluiten',
    kid: 'Je krijgt een sticker en kiest een nieuwe tandenborstel. Tot de volgende keer!',
    parent:
      'We sluiten altijd positief af, ook als niet alles lukte. U krijgt een kort verslag mee en, als het nodig is, een concreet poetsplan of een vervolgafspraak.',
    minutes: '± 5 min',
  },
] as const
