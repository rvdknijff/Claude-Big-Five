export const site = {
  name: 'Bloom',
  full: 'Bloom kindertandarts',
  city: 'Amersfoort',
  claim: 'Een gezonde glimlach groeit mee.',
  ages: '2 tot 16 jaar',
  address: ['Bloom kindertandarts', 'Sterrenkruid 14', '3824 GV Amersfoort'],
  phone: '033 200 14 40',
  phoneHref: 'tel:+31332001440',
  email: 'hallo@bloomkindertandarts.nl',
  emailHref: 'mailto:hallo@bloomkindertandarts.nl',
  hours: [
    { day: 'Maandag t/m donderdag', time: '08:00 – 17:00' },
    { day: 'Vrijdag', time: '08:00 – 15:00' },
    { day: 'Woensdagmiddag', time: 'spreekuur voor spannende eerste bezoeken' },
  ],
  emergency:
    'Bij een ongeluk met tanden buiten openingstijden belt u de dienstdoende tandarts via 0900 – 8602.',
} as const

export const nav = [
  { label: 'Eerste bezoek', to: '/eerste-bezoek' },
  { label: 'Behandelingen', to: '/behandelingen' },
  { label: 'Voor ouders', to: '/voor-ouders' },
  { label: 'Ons team', to: '/ons-team' },
  { label: 'Vragen', to: '/veelgestelde-vragen' },
  { label: 'Contact', to: '/contact' },
] as const
