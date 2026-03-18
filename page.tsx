import { HeroSection }          from '@/components/sections/HeroSection'
import { PlatformsStrip }        from '@/components/sections/PlatformsStrip'
import { AboutSection }          from '@/components/sections/AboutSection'
import { PodcastSection }        from '@/components/sections/PodcastSection'
import { AchievementsSection }   from '@/components/sections/AchievementsSection'
import { CommunitySection }      from '@/components/sections/CommunitySection'
import { ContactSection }        from '@/components/sections/ContactSection'
import { getLatestEpisodes, getPerson, getAchievements } from '@/lib/sanity/queries'

// ISR: re-generate every hour; ensures fresh content without rebuild
export const revalidate = 3600

export default async function HomePage() {
  // All data-fetching in parallel (falls back to mock data if Sanity not configured)
  const [episodes, person, achievements] = await Promise.all([
    getLatestEpisodes(6),
    getPerson(),
    getAchievements(),
  ])

  return (
    <main>
      <HeroSection person={person} latestEpisode={episodes[0]} />
      <PlatformsStrip />
      <AboutSection person={person} />
      <PodcastSection episodes={episodes} />
      <AchievementsSection achievements={achievements} />
      <CommunitySection />
      <ContactSection />
    </main>
  )
}
