import { defineField, defineType } from 'sanity'

export const achievementSchema = defineType({
  name: 'achievement',
  title: 'Achievement / Míľnik',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Názov', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'description', title: 'Popis', type: 'text', rows: 2 }),
    defineField({ name: 'year', title: 'Rok / Obdobie', type: 'string', description: 'Napr. 2022 alebo 2020–2022' }),
    defineField({ name: 'order', title: 'Poradie (nižšie = vyššie)', type: 'number', initialValue: 99 }),
    defineField({
      name: 'category',
      title: 'Kategória',
      type: 'string',
      options: { list: ['Business', 'Media', 'Community', 'Speaking', 'Investment'] },
    }),
  ],
  orderings: [{ title: 'Poradie', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'year' } },
})
