import { client } from './client'
import type { Episode, Person, Achievement } from '@/types'
import { MOCK_EPISODES, MOCK_PERSON, MOCK_ACHIEVEMENTS } from '../mock-data'

const isSanityConfigured = () =>
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'

// ── Episodes ─────────────────────────────────────────────────
const EPISODE_FIELDS = `
  _id,
  episodeNumber,
  title,
  "slug": slug.current,
  publishedAt,
  category,
  description,
  "coverImage": coverImage.asset->url,
  guestName,
  guestTitle,
  "guestPhoto": guestPhoto.asset->url,
  durationSeconds,
  spotifyUrl,
  appleUrl,
  youtubeUrl,
  isFeatured,
  tags
`

export async function getLatestEpisodes(count = 6): Promise<Episode[]> {
  if (!isSanityConfigured()) return MOCK_EPISODES.slice(0, count)
  try {
    return await client.fetch<Episode[]>(
      `*[_type == "episode"] | order(publishedAt desc)[0...$count] { ${EPISODE_FIELDS} }`,
      { count: count - 1 },
      { next: { revalidate: 3600 } }
    )
  } catch {
    return MOCK_EPISODES.slice(0, count)
  }
}

export async function getAllEpisodes(): Promise<Episode[]> {
  if (!isSanityConfigured()) return MOCK_EPISODES
  try {
    return await client.fetch<Episode[]>(
      `*[_type == "episode"] | order(publishedAt desc) { ${EPISODE_FIELDS} }`,
      {},
      { next: { revalidate: 3600 } }
    )
  } catch {
    return MOCK_EPISODES
  }
}

export async function getEpisodeBySlug(slug: string): Promise<Episode | null> {
  if (!isSanityConfigured()) return MOCK_EPISODES.find((e) => e.slug === slug) ?? null
  try {
    return await client.fetch<Episode>(
      `*[_type == "episode" && slug.current == $slug][0] {
        ${EPISODE_FIELDS},
        showNotes
      }`,
      { slug },
      { next: { revalidate: 3600 } }
    )
  } catch {
    return MOCK_EPISODES.find((e) => e.slug === slug) ?? null
  }
}

// ── Person ───────────────────────────────────────────────────
export async function getPerson(): Promise<Person> {
  if (!isSanityConfigured()) return MOCK_PERSON
  try {
    return await client.fetch<Person>(
      `*[_type == "person" && slug.current == "viktor-stefanak"][0] {
        name, tagline, bio, "photo": photo.asset->url,
        "portraitPhoto": portraitPhoto.asset->url,
        tags, linkedinUrl, instagramUrl, twitterUrl, email, city, quote, stats
      }`,
      {},
      { next: { revalidate: 86400 } }
    )
  } catch {
    return MOCK_PERSON
  }
}

// ── Achievements ─────────────────────────────────────────────
export async function getAchievements(): Promise<Achievement[]> {
  if (!isSanityConfigured()) return MOCK_ACHIEVEMENTS
  try {
    return await client.fetch<Achievement[]>(
      `*[_type == "achievement"] | order(order asc) { _id, title, description, year, category }`,
      {},
      { next: { revalidate: 86400 } }
    )
  } catch {
    return MOCK_ACHIEVEMENTS
  }
}
