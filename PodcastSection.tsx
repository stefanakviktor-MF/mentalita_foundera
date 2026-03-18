import Link from 'next/link'
import { EpisodeCard } from '@/components/podcast/EpisodeCard'
import type { Episode } from '@/types'

export function PodcastSection({ episodes }: { episodes: Episode[] }) {
  const featured  = episodes.find((e) => e.isFeatured) ?? episodes[0]
  const rest      = episodes.filter((e) => e._id !== featured?._id).slice(0, 4)

  return (
    <section id="podcast" className="bg-cream py-28 px-[5%]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-2 block">Podcast</span>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight text-ink">
              Najnovšie <span className="text-gold">epizódy</span>
            </h2>
            <p className="text-ink-muted text-lg mt-2">Rozhovory s foundermi, ktorí sa neboja hovoriť pravdu.</p>
          </div>
          <Link href="/podcast"
            className="whitespace-nowrap border border-border text-ink text-sm font-semibold px-6 py-3 rounded-full hover:border-ink hover:-translate-y-0.5 transition-all">
            Všetky epizódy →
          </Link>
        </div>

        {/* Grid: featured (2-col) + side cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured && (
            <div className="md:col-span-2">
              <EpisodeCard episode={featured} featured />
            </div>
          )}
          {rest.slice(0, 1).map((ep) => (
            <EpisodeCard key={ep._id} episode={ep} />
          ))}
          {rest.slice(1).map((ep) => (
            <EpisodeCard key={ep._id} episode={ep} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/podcast"
            className="inline-flex items-center gap-2 border border-border text-ink text-sm font-semibold px-7 py-3 rounded-full hover:border-ink transition-all">
            Načítať ďalšie epizódy
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
