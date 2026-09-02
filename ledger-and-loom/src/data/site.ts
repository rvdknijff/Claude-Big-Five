export const site = {
  name: 'Ledger & Loom',
  promise: "Finance for people who didn't start a business to become accountants.",
  city: 'Rotterdam',
  email: 'hello@ledgerandloom.com',
  emailHref: 'mailto:hello@ledgerandloom.com',
  phone: '+31 10 322 88 04',
  phoneHref: 'tel:+31103228804',
  address: ['Ledger & Loom', 'Schiekade 189', '3013 BR Rotterdam', 'Netherlands'],
  founded: 2019,
} as const

export const nav = [
  { label: 'Services', to: '/services', index: '01' },
  { label: 'Cases', to: '/cases', index: '02' },
  { label: 'Insights', to: '/insights', index: '03' },
  { label: 'About', to: '/about', index: '04' },
  { label: 'Contact', to: '/contact', index: '05' },
] as const
