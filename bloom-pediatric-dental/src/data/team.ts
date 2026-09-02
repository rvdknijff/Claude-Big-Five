import { media, type MediaAsset } from './media'

export interface TeamMember {
  readonly name: string
  readonly role: string
  readonly bio: string
  readonly likes: string
  readonly image: MediaAsset
}

export const team: readonly TeamMember[] = [
  {
    name: 'Dr. Sophie de Wit',
    role: 'Kindertandarts, oprichter',
    bio: 'Sophie werkte acht jaar in een grote groepspraktijk voordat ze Bloom begon, omdat ze vond dat het rustiger en persoonlijker moest kunnen. Ze is gedifferentieerd in kindertandheelkunde en begeleidt vooral de spannende eerste bezoeken.',
    likes: 'Zwemt elke ochtend in de Eem, ook in de winter.',
    image: media.teamSophie,
  },
  {
    name: 'Noor Bakker',
    role: 'Kindertandartsassistente',
    bio: 'Noor is er bij bijna elke behandeling. Zij is degene die uitlegt wat de instrumenten doen, het stopteken afspreekt en op het juiste moment een grapje maakt. Kinderen vragen bij de volgende afspraak vaak naar haar.',
    likes: 'Verzamelt stickers — de goede, met glitter.',
    image: media.teamNoor,
  },
  {
    name: 'Emma Vermeer',
    role: 'Preventieassistente',
    bio: 'Emma doet de poetsinstructie en het voedingsadvies. Ze werkt met kleurtabletten en een grote knuffeltand, en ze praat net zo makkelijk met een kleuter als met een puber die vindt dat poetsen tijdverspilling is.',
    likes: 'Kan elke tandpasta blind herkennen aan de smaak.',
    image: media.teamEmma,
  },
] as const
