import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: 'Mentalita Foundera — Viktor Štefanák',
    template: '%s | Mentalita Foundera',
  },
  description:
    'Podcast o mentalite zakladateľov. Viktor Štefanák sa každý týždeň rozpráva s najlepšími foundermi na Slovensku a v Čechách.',
  keywords: ['podcast', 'startup', 'founder', 'podnikanie', 'mentalita', 'viktor stefanak'],
  authors: [{ name: 'Viktor Štefanák' }],
  creator: 'Viktor Štefanák',
  metadataBase: new URL('https://mentalitafoundera.sk'),
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    url: 'https://mentalitafoundera.sk',
    siteName: 'Mentalita Foundera',
    title: 'Mentalita Foundera — Viktor Štefanák',
    description: 'Podcast o mentalite zakladateľov. Každý týždeň nová epizóda.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentalita Foundera',
    description: 'Podcast o mentalite zakladateľov.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
