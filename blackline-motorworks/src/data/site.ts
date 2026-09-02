export const site = {
  name: 'Blackline Motorworks',
  tagline: 'Engineered to perform',
  location: 'Utrecht, Netherlands',
  address: ['Blackline Motorworks', 'Atoomweg 21', '3542 AA Utrecht', 'Netherlands'],
  phone: '+31 30 271 04 88',
  phoneHref: 'tel:+31302710488',
  email: 'workshop@blackline-motorworks.nl',
  emailHref: 'mailto:workshop@blackline-motorworks.nl',
  hours: [
    { day: 'Monday – Thursday', time: '08:00 – 18:00' },
    { day: 'Friday', time: '08:00 – 16:00' },
    { day: 'Weekend', time: 'By appointment (track weekends)' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ],
} as const

export const primaryNav = [
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Workshop', to: '/workshop' },
  { label: 'Contact', to: '/contact' },
] as const

export const marques = ['Porsche', 'BMW M', 'Audi RS', 'Mercedes-AMG'] as const
