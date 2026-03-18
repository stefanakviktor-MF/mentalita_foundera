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
  ],
  preview: {
    select: { title: 'name', media: 'photo' },
  },
})
