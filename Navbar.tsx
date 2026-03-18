'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const links = [
  { href: '/#about',         label: 'O mne' },
  { href: '/#podcast',       label: 'Podcast' },
  { href: '/#achievements',  label: 'Achievements' },
  { href: '/#community',     label: 'Doers United' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-5',
        'bg-cream/90 backdrop-blur-lg transition-all duration-300',
        scrolled && 'border-b border-border shadow-sm',
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div className="w-9 h-9 bg-ink rounded-lg flex items-center justify-center font-serif font-black text-gold text-xs">
          MF
        </div>
        <div className="text-sm font-semibold text-ink leading-tight">
          Mentalita<br />
          <span className="text-gold">Foundera</span>
        </div>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          className="bg-ink text-gold px-5 py-2 rounded-full text-xs font-semibold hover:bg-ink-soft transition-all hover:-translate-y-px"
        >
          Napíš mi
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className={cn('w-6 h-0.5 bg-ink rounded transition-transform', menuOpen && 'rotate-45 translate-y-2')} />
        <span className={cn('w-6 h-0.5 bg-ink rounded transition-opacity', menuOpen && 'opacity-0')} />
        <span className={cn('w-6 h-0.5 bg-ink rounded transition-transform', menuOpen && '-rotate-45 -translate-y-2')} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-cream border-b border-border flex flex-col gap-4 p-6 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-ink-soft hover:text-ink">
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={() => setMenuOpen(false)}
            className="bg-ink text-gold px-5 py-3 rounded-full text-sm font-semibold text-center">
            Napíš mi
          </Link>
        </div>
      )}
    </nav>
  )
}
