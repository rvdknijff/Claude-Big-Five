export const site = {
  name: 'Northbound Expeditions',
  tagline: "Go where the road doesn't",
  base: 'Tromsø, Norway',
  groupMax: 8,
  email: 'trips@northbound-expeditions.com',
  emailHref: 'mailto:trips@northbound-expeditions.com',
  phone: '+47 21 09 44 10',
  phoneHref: 'tel:+4721094410',
  address: ['Northbound Expeditions AS', 'Storgata 44', '9008 Tromsø', 'Norway'],
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Strava club', href: 'https://strava.com' },
  ],
} as const

export const nav = [
  { label: 'Expeditions', to: '/expeditions' },
  { label: 'Guides', to: '/guides' },
  { label: 'Journal', to: '/journal' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
] as const
