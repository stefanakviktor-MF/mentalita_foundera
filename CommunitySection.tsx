const perks = [
  { icon: '🤝', title: 'Networking s top foundermi', desc: 'Pravidelné eventy, mastermindy a 1:1 spojenia s ľuďmi, ktorí budujú.' },
  { icon: '🎓', title: 'Exkluzívny obsah & workshopy', desc: 'Prístupy k playlistom, šablónam, workshopom a zákulisným rozhovorom.' },
  { icon: '💡', title: 'Mentoring a spätná väzba',   desc: 'Dostupnosť skúsených founderov pre feedback na tvoj biznis alebo myšlienku.' },
]

const features = [
  'Mesačné live eventy v Bratislave a Prahe',
  'Súkromný Slack workspace s 30+ kanálmi',
  'Prístupy k exkluzívnym epizódam podcastu',
  'Zľavy na konferencie a produkty partnerov',
  'Direktný kontakt s Viktorom',
]

const avatars = ['PK', 'LN', 'MH', 'TK']

export function CommunitySection() {
  return (
    <section id="community" className="relative bg-ink py-28 px-[5%] overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_80%_50%,rgba(196,167,71,0.08)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Text */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3 block">Komunita</span>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight text-white mb-4">
            Pridaj sa do<br /><span className="text-gold">Doers United</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-8">
            Komunita pre ľudí, ktorí nečakajú na povolenie. Foundreri, podnikatelia a ambasadori
            zmeny z celej strednej Európy.
          </p>

          <div className="space-y-3 mb-8">
            {perks.map((p) => (
              <div key={p.title}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:border-gold/30 transition-all">
                <div className="w-11 h-11 rounded-xl bg-gold/10 text-gold flex items-center justify-center text-xl shrink-0">
                  {p.icon}
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-0.5">{p.title}</div>
                  <div className="text-white/45 text-xs leading-relaxed">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="https://doersunited.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,167,71,.35)] transition-all">
            Vstúpiť do Doers United →
          </a>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-7">
          <div className="font-serif text-2xl font-bold text-white mb-1">
            Doers <span className="text-gold">United</span>
          </div>
          <div className="text-xs text-white/40 uppercase tracking-widest mb-6">Community for founders &amp; builders</div>

          {/* Members row */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex">
              {avatars.map((a, i) => (
                <div key={a} className={`w-9 h-9 rounded-full border-2 border-ink bg-gold-light flex items-center justify-center text-[11px] font-bold text-gold-dark ${i > 0 ? '-ml-2.5' : ''}`}>
                  {a}
                </div>
              ))}
              <div className="-ml-2.5 w-9 h-9 rounded-full border-2 border-ink bg-gold flex items-center justify-center text-[10px] font-bold text-white">5k+</div>
            </div>
            <span className="text-sm text-white/60"><strong className="text-white">5 000+</strong> aktívnych členov</span>
          </div>

          <div className="h-px bg-white/10 my-4" />

          {features.map((f) => (
            <div key={f} className="flex items-center gap-3 py-2 text-sm text-white/60">
              <div className="w-5 h-5 rounded-md bg-gold/15 text-gold flex items-center justify-center text-[11px] shrink-0">✓</div>
              {f}
            </div>
          ))}

          <div className="h-px bg-white/10 my-4" />
          <a href="https://doersunited.com" target="_blank" rel="noopener noreferrer"
            className="block w-full bg-gold text-white text-center py-3.5 rounded-full text-sm font-semibold hover:bg-gold-dark transition-all">
            Chcem sa pridať →
          </a>
        </div>

      </div>
    </section>
  )
}
