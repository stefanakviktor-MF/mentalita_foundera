'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { episodeSchema } from './sanity/schemas/episode'
import { personSchema } from './sanity/schemas/person'
import { achievementSchema } from './sanity/schemas/achievement'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Mentalita Foundera',
  schema: {
    types: [episodeSchema, personSchema, achievementSchema],
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Obsah webu')
          .items([
            S.listItem().title('🎙 Epizódy').schemaType('episode').child(
              S.documentList().title('Všetky epizódy').filter('_type == "episode"')
            ),
            S.listItem().title('👤 Profil Viktora').schemaType('person').child(
              S.document().schemaType('person').documentId('viktor-stefanak')
            ),
            S.listItem().title('🏆 Achievements').schemaType('achievement').child(
              S.documentList().title('Achievements').filter('_type == "achievement"')
            ),
          ]),
    }),
    visionTool(),
  ],
})
