export interface Episode {
  _id: string
  episodeNumber: number
  title: string
  slug: string
  publishedAt: string
  category?: string
  description: string
  coverImage?: string
  guestName?: string
  guestTitle?: string
  guestPhoto?: string
  durationSeconds?: number
  spotifyUrl?: string
  appleUrl?: string
  youtubeUrl?: string
  isFeatured?: boolean
  tags?: string[]
  showNotes?: PortableTextBlock[]
}

export interface Person {
  name: string
  tagline?: string
  bio?: PortableTextBlock[]
  photo?: string
  portraitPhoto?: string
  tags?: string[]
  linkedinUrl?: string
  instagramUrl?: string
  twitterUrl?: string
  email?: string
  city?: string
  quote?: string
  stats?: { value: string; label: string }[]
}

export interface Achievement {
  _id: string
  title: string
  description?: string
  year?: string
  category?: string
}

// Minimal Portable Text block type
export interface PortableTextBlock {
  _type: string
  _key: string
  children?: { text: string }[]
}
