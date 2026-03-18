import Link from 'next/link'
import Image from 'next/image'
import type { Person, Episode } from '@/types'

interface Props {
  person: Person
  latestEpisode?: Episode
}

export function HeroSection({ person, latestEpisode }: Props) {
  const stats = person.stats ?? [
    { value: '100+', label: 'Epizód' },
    { value: '50k',  label: 'Poslucháčov' },
    { value: '#1',   label: 'Startup podcast' },
  ]

  return (
    <section className="min-h-svh grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto px-[5%] pt-28 pb-16">
      {/* ── Text ── */}
      <div>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-light text-gold-dark text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-dark animate-pulse-dot" />
          Nový epizód každý týždeň
        </div>

        <h1 className="font-serif text-5xl lg:text-7xl leading-[1.05] tracking-tight text-ink mb-5">
          <em>Mentalita</em>
          <br />
          <span className="text-gold">Foundera</span>
        </h1>

        <p className="text-lg text-ink-muted leading-relaxed max-w-lg mb-10">
          Podcast, kde najlepší zakladatelia a lídri zdieľajú príbehy, zlyhania a stratégie,
          ktoré im pomohli budovať firmy, ktoré majú zmysel.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Link href="/#podcast"
            className="inline-flex items-center gap-2 bg-ink text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-ink-soft hover:-translate-y-0.5 transition-all shadow-sm">
            <PlayIcon />
            Počúvať podcast
          </Link>
          <Link href="/#about"
            className="inline-flex items-center gap-2 border border-border text-ink px-7 py-3.5 rounded-full text-sm font-semibold hover:border-ink hover:-translate-y-0.5 transition-all">
            O Viktorovi
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 pt-6 border-t border-border">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-ink leading-none mb-1">
                {s.value.replace(/[^0-9]/g, '') && (
                  <span className="text-gold">{s.value.replace(/[0-9]+/, '')}</span>
                )}
                {s.value.match(/^[^0-9]/) ? (
                  <>{s.value.replace(/[0-9].*/,'')}<span className="text-gold">{s.value.replace(/^[^0-9]*/,'')}</span></>
                ) : (
                  <>{s.value.replace(/[^0-9].*/,'')}<span className="text-gold">{s.value.replace(/[0-9]*/,'')}</span></>
                )}
              </div>
              <div className="text-xs text-ink-muted uppercase tracking-wider font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Visual ── */}
      <div className="flex justify-end relative">
        <div className="relative w-full max-w-sm lg:max-w-md">
          {/* Photo frame */}
          <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-cream-2 border border-border shadow-2xl">
            {person.photo ? (
              <Image src={person.photo} alt={person.name} fill className="object-cover object-top" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-cream to-cream-2 flex flex-col items-center justify-center gap-3">
                <span className="font-serif text-8xl font-bold text-gold opacity-20">VŠ</span>
                <span className="text-xs text-ink-muted">Add photo in Sanity Studio</span>
              </div>
            )}
          </div>

          {/* Latest episode floater */}
          {latestEpisode && (
            <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 max-w-[220px]">
              <div className="w-10 h-10 rounded-xl bg-cream-2 flex items-center justify-center text-lg shrink-0">🎙</div>
              <div>
                <div className="text-xs font-bold text-ink leading-tight">Nová epizóda</div>
                <div className="text-[11px] text-ink-muted mt-0.5 leading-tight truncate">#{latestEpisode.episodeNumber} — {latestEpisode.guestName}</div>
              </div>
            </div>
          )}

          {/* Award floater */}
          <div className="absolute -top-4 -left-10 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-faint flex items-center justify-center text-lg shrink-0">🏆</div>
            <div>
              <div className="text-xs font-bold text-ink leading-tight">Top Podcast 2024</div>
              <div className="text-[11px] text-ink-muted mt-0.5">Business &amp; Founders — SK</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}
