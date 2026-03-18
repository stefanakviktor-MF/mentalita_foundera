import type { Achievement } from '@/types'

const statCards = [
  { num: '10+',  label: 'Rokov budovania firiem a komunít' },
  { num: '5k+',  label: 'Členov v Doers United komunite' },
  { num: '50+',  label: 'Prednášok a vystúpení' },
  { num: '3×',   label: 'Úspešne exited startupy' },
]

export function AchievementsSection({ achievements }: { achievements: Achievement[] }) {
  return (
    <section id="achievements" className="bg-white py-28 px-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-start">

        {/* Left */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-2 block">Achievements</span>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight text-ink mb-4">
            Čo som<br />doteraz<br /><span className="text-gold">dokázal</span>
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed mb-8">
            Čísla a míľniky, ktoré hovoria za seba.
          </p>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-3">
            {statCards.map((s) => (
              <div key={s.label}
                className="bg-cream rounded-2xl p-5 border border-border hover:border-gold transition-colors">
                <div className="font-serif text-3xl font-bold text-ink mb-1">
                  {s.num.replace(/[^0-9]/g,'')}<span className="text-gold">{s.num.replace(/[0-9]+/,'')}</span>
                </div>
                <div className="text-xs text-ink-muted font-medium leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          {achievements.map((a, i) => (
            <div key={a._id} className="flex gap-5 group">
              {/* Dot + line */}
              <div className="flex flex-col items-center pt-1">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-border bg-cream group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_0_0_4px_#E8D48A] transition-all shrink-0 z-10" />
                {i < achievements.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border min-h-[2rem] mt-1" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10">
                <div className="text-xs font-bold text-gold-dark uppercase tracking-wider mb-1">{a.year}</div>
                <div className="text-base font-bold text-ink mb-1.5 leading-snug">{a.title}</div>
                {a.description && (
                  <p className="text-sm text-ink-muted leading-relaxed">{a.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
