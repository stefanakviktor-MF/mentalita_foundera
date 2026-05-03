import { defineField, defineType } from 'sanity'

export const personSchema = defineType({
  name: 'person',
  title: 'Profil osoby',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Celé meno', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'tagline', title: 'Tagline (pod menom)', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio (odseky)', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'photo', title: 'Hlavná fotografia', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'portraitPhoto', title: 'Portrétna fotografia', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'tags',
      title: 'Roly / Tagy',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Napr. Podcaster, Entrepreneur, Speaker',
    }),
    defineField({ name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'twitterUrl', title: 'Twitter / X URL', type: 'url' }),
    defineField({ name: 'email', title: 'Kontaktný email', type: 'string' }),
    defineField({ name: 'city', title: 'Mesto', type: 'string' }),
    defineField({
      name: 'quote',
      title: 'Obľúbený citát',
      type: 'string',
      description: 'Zobrazí sa na About sekcii',
    }),
    defineField({
      name: 'stats',
      title: 'Hero štatistiky',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Hodnota', type: 'string', description: 'Napr. 100+' },
            { name: 'label', title: 'Popis', type: 'string', description: 'Napr. Epizód' },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),

    // ─── Hero section editable text ───────────────────────────────
    defineField({
      name: 'heroBadge',
      title: 'Hero · Badge text',
      type: 'string',
      description: 'Malý zlatý štítok nad nadpisom. Napr. "Nová epizóda každých 14 dní"',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero · Podnadpis',
      type: 'text',
      rows: 3,
      description: 'Krátky odsek pod hlavným nadpisom Mentalita Foundera.',
    }),
    defineField({
      name: 'heroAwardTitle',
      title: 'Hero · Award badge — riadok 1',
      type: 'string',
      description: 'Hlavný text na zlatej "ocenenie" plakete (napr. "TOP 3 biznisový podcast na Slovensku")',
    }),
    defineField({
      name: 'heroAwardSubtitle',
      title: 'Hero · Award badge — riadok 2',
      type: 'string',
      description: 'Druhý riadok plakety (napr. "2024 – 2026")',
    }),

    // ─── Podcast platform URLs (PlatformsStrip + Footer) ─────────
    defineField({ name: 'spotifyUrl', title: 'Spotify URL', type: 'url' }),
    defineField({ name: 'applePodcastsUrl', title: 'Apple Podcasts URL', type: 'url' }),
    defineField({ name: 'youtubeUrl', title: 'YouTube URL', type: 'url' }),
    defineField({ name: 'tiktokUrl', title: 'TikTok URL', type: 'url' }),
  ],
  preview: {
    select: { title: 'name', media: 'photo' },
  },
})
