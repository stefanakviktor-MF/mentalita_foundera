import Image from 'next/image'
import Link from 'next/link'
import type { Person } from '@/types'

export function AboutSection({ person }: { person: Person }) {
  const tags = person.tags ?? ['🎙 Podcaster', '🚀 Entrepreneur', '🤝 Community Builder', '📣 Speaker']

  return (
    <section id="about" className="bg-white py-28 px-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-16 lg:gap-24 items-center">

        {/* Text */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-3 block">O mne</span>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight text-ink mb-6">
            Zakladateľ, <span className="text-gold">investor</span><br />
            a hosť pochádzajúci<br />
            z Bratislavy
          </h2>

          <div className="text-ink-soft leading-relaxed space-y-4 text-[1.05rem]">
            <p>
              Som <strong className="text-ink font-semibold">Viktor Štefanák</strong> — serial entrepreneur,
              ktorý za posledných 10 rokov vybudoval niekoľko firiem a komunít pre zakladateľov v strednej Európe.
            </p>
            <p>
              Verím, že každý má v sebe potenciál budovať niečo zmysluplné. Preto som spustil{' '}
              <strong className="text-ink font-semibold">Mentalita Foundera</strong> — podcast, kde sa
              rozprávam s tými najlepšími foundermi o ich ceste, chybách a víziách.
            </p>
            <p>
              Som tiež spoluzakladateľ <strong className="text-ink font-semibold">Doers United</strong> —
              komunity ľudí, ktorí nečakajú na povolenie a jednoducho robia.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-7 mb-8">
            {tags.map((tag) => (
              <span key={tag}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border text-ink-soft
                           hover:border-gold hover:text-gold-dark hover:bg-gold-faint transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>

          <Link href="/#contact"
            className="inline-flex items-center gap-2 bg-ink text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-ink-soft hover:-translate-y-0.5 transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Napíš mi
          </Link>
        </div>

        {/* Image */}
        <div className="relative max-w-sm lg:max-w-none">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-cream-2">
            {person.portraitPhoto ? (
              <Image src={person.portraitPhoto} alt={person.name} fill className="object-cover object-top" />
            ) : person.photo ? (
              <Image src={person.photo} alt={person.name} fill className="object-cover object-top" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-cream to-cream-2 flex items-center justify-center">
                <span className="font-serif text-8xl font-bold text-gold opacity-20">VŠ</span>
              </div>
            )}
          </div>

          {/* Quote card */}
          <div className="absolute -bottom-6 -right-4 bg-ink text-white rounded-2xl p-5 w-52 shadow-2xl">
            <blockquote className="font-serif italic text-sm text-gold-light leading-snug mb-2">
              &ldquo;{person.quote ?? 'Najlepší čas na začiatok bol včera. Druhý najlepší čas je dnes.'}&rdquo;
            </blockquote>
            <cite className="text-[11px] text-white/40 not-italic">— {person.name}</cite>
          </div>
        </div>

      </div>
    </section>
  )
}
