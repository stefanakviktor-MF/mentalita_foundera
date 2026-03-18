'use client'

import { useState } from 'react'

export function ContactSection() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-cream py-28 px-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left info */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-3 block">Kontakt</span>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight tracking-tight text-ink mb-4">
            Porozprávajme<br />sa o <span className="text-gold">spolupráci</span>
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed mb-8">
            Hľadáš hosta do podcastu, speakera na konferenciu, alebo mentora pre tvoj biznis? Napíš mi.
          </p>

          <div className="space-y-3 mb-8">
            {[
              { icon: '📧', label: 'Email',   value: 'viktor@mentalitafoundera.sk' },
              { icon: '🏢', label: 'Sídlo',   value: 'Bratislava, Slovensko' },
              { icon: '🎙', label: 'Podcast', value: 'Mentalita Foundera' },
            ].map((c) => (
              <div key={c.label}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border hover:border-gold hover:translate-x-1 transition-all">
                <div className="w-11 h-11 rounded-xl bg-cream-2 flex items-center justify-center text-xl shrink-0">{c.icon}</div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-0.5">{c.label}</div>
                  <div className="text-sm font-semibold text-ink">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'LinkedIn',    href: '#' },
              { label: 'Instagram',   href: '#' },
              { label: 'Twitter / X', href: '#' },
            ].map((s) => (
              <a key={s.label} href={s.href}
                className="flex items-center gap-1.5 border border-border text-ink-soft text-sm font-semibold px-4 py-2 rounded-full hover:border-ink hover:text-ink hover:-translate-y-0.5 transition-all">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl p-7 border border-border">
          <h3 className="text-xl font-bold text-ink mb-1">Pošli správu</h3>
          <p className="text-sm text-ink-muted mb-6 leading-relaxed">Odpoviem do 24–48 hodín počas pracovných dní.</p>

          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <div className="text-lg font-bold text-ink mb-2">Správa odoslaná!</div>
              <p className="text-ink-muted text-sm">Ozvem sa do 24–48 hodín.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-ink-soft mb-1.5 uppercase tracking-wide">Meno a priezvisko *</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ján Novák"
                  className="w-full px-4 py-3 border border-border rounded-xl text-sm bg-cream text-ink outline-none focus:border-gold focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-soft mb-1.5 uppercase tracking-wide">Email *</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jan@firma.sk"
                  className="w-full px-4 py-3 border border-border rounded-xl text-sm bg-cream text-ink outline-none focus:border-gold focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-soft mb-1.5 uppercase tracking-wide">Predmet</label>
                <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Spolupráca / Speaking / Podcast host..."
                  className="w-full px-4 py-3 border border-border rounded-xl text-sm bg-cream text-ink outline-none focus:border-gold focus:bg-white transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-soft mb-1.5 uppercase tracking-wide">Správa *</label>
                <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Opíš čo máš na mysli..."
                  className="w-full px-4 py-3 border border-border rounded-xl text-sm bg-cream text-ink outline-none focus:border-gold focus:bg-white transition-all resize-none" />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm">Nastala chyba. Skús znova alebo napíš priamo na email.</p>
              )}

              <button type="submit" disabled={status === 'loading'}
                className="w-full bg-ink text-white py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-ink-soft transition-all disabled:opacity-60">
                {status === 'loading' ? 'Odosielam...' : (
                  <>
                    Odoslať správu
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
