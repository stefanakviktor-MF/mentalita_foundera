import { defineField, defineType } from 'sanity'

export const episodeSchema = defineType({
  name: 'episode',
  title: 'Epizóda',
  type: 'document',
  fields: [
    defineField({
      name: 'episodeNumber',
      title: 'Číslo epizódy',
      type: 'number',
      validation: (R) => R.required().positive().integer(),
    }),
    defineField({
      name: 'title',
      title: 'Názov',
      type: 'string',
      validation: (R) => R.required().max(140),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Dátum vydania',
      type: 'datetime',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategória',
      type: 'string',
      options: {
        list: [
          'Business', 'Marketing', 'Leadership',
          'Investing', 'Product', 'Mindset', 'Sales', 'Operations',
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Popis (krátky)',
      type: 'text',
      rows: 3,
      validation: (R) => R.required().max(300),
    }),
    defineField({
      name: 'showNotes',
      title: 'Show Notes (dlhý popis)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover obrázok',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'guestName',
      title: 'Meno hosťa',
      type: 'string',
    }),
    defineField({
      name: 'guestTitle',
      title: 'Pozícia / Firma hosťa',
      type: 'string',
    }),
    defineField({
      name: 'guestPhoto',
      title: 'Foto hosťa',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'durationSeconds',
      title: 'Dĺžka (sekundy)',
      type: 'number',
      description: 'Napr. 3720 = 1h 2min',
    }),
    defineField({
      name: 'spotifyUrl',
      title: 'Spotify URL',
      type: 'url',
    }),
    defineField({
      name: 'appleUrl',
      title: 'Apple Podcasts URL',
      type: 'url',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured epizóda?',
      type: 'boolean',
      initialValue: false,
      description: 'Zobrazí sa ako veľká karta na začiatku gridu',
    }),
    defineField({
      name: 'tags',
      title: 'Tagy',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
  ],
  orderings: [
    {
      title: 'Najnovšie',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Číslo epizódy (zostupne)',
      name: 'episodeNumberDesc',
      by: [{ field: 'episodeNumber', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'guestName',
      media: 'coverImage',
      num: 'episodeNumber',
    },
    prepare({ title, subtitle, media, num }) {
      return {
        title: `#${num} — ${title}`,
        subtitle: subtitle ?? 'Bez hosťa',
        media,
      }
    },
  },
})
