import Link from 'next/link'

const nav = [
  { href: '/#about', label: 'O mne' },
  { href: '/#podcast', label: 'Podcast' },
  { href: '/#achievements', label: 'Achievements' },
  { href: '/#community', label: 'Doers United' },
  { href: '/#contact', label: 'Kontakt' },
]
const platforms = [
  { href: '#', label: 'Spotify' },
  { href: '#', label: 'Apple Podcasts' },
  { href: '#', label: 'YouTube' },
  { href: '#', label: 'TikTok' },
]
const social = [
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Twitter / X' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-[5%] pt-16 pb-8">
        <div className="flex flex-wrap justify-between gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl font-bold mb-2">
              Mentalita <span className="text-gold">Foundera</span>
            </div>
            <p className="text-sm text-white/35 max-w-xs leading-relaxed">
              Podcast o mentalite zakladateľov.<br />Nové epizódy každý týždeň.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Navigácia</div>
              {nav.map((l) => (
                <Link key={l.href} href={l.href} className="block text-sm text-white/60 hover:text-gold mb-2 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Platformy</div>
              {platforms.map((l) => (
                <Link key={l.label} href={l.href} className="block text-sm text-white/60 hover:text-gold mb-2 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Sociálne siete</div>
              {social.map((l) => (
                <Link key={l.label} href={l.href} className="block text-sm text-white/60 hover:text-gold mb-2 transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 text-xs text-white/25">
          <span>© {new Date().getFullYear()} Viktor Štefanák · Mentalita Foundera. Všetky práva vyhradené.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Ochrana súkromia</Link>
            <Link href="/terms"   className="hover:text-white/50 transition-colors">Podmienky</Link>
            <span className="bg-gold/10 text-gold px-3 py-1 rounded-full font-semibold tracking-wide">
              Made with ❤ in Bratislava
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
