import Link from 'next/link'
import Image from 'next/image'
import { cn, formatDuration, formatDateShort } from '@/lib/utils'
import type { Episode } from '@/types'

interface Props {
  episode: Episode
  featured?: boolean
}

export function EpisodeCard({ episode, featured = false }: Props) {
  return (
    <Link
      href={`/podcast/${episode.slug}`}
      className={cn(
        'group bg-white rounded-2xl overflow-hidden border border-border',
        'hover:border-gold hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex',
        featured ? 'md:flex-row flex-col' : 'flex-col',
      )}
    >
      {/* Thumbnail */}
      <div className={cn(
        'relative bg-cream-2 overflow-hidden shrink-0',
        featured ? 'md:w-[42%] aspect-auto min-h-[200px]' : 'aspect-video',
      )}>
        {episode.coverImage ? (
          <Image src={episode.coverImage} alt={episode.title} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-cream to-cream-2 flex items-center justify-center">
            <span className="font-serif text-5xl font-bold text-gold opacity-25">
              {episode.episodeNumber}
            </span>
          </div>
        )}

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 group-hover:bg-ink/10 transition-colors">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg
                          opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>

        {/* Episode badge */}
        <div className="absolute top-2.5 left-2.5 bg-ink text-gold text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
          EP. {episode.episodeNumber}
          {episode.isFeatured && ' · NOVÁ'}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs text-ink-muted font-medium mb-2">
          {episode.publishedAt && formatDateShort(episode.publishedAt)}
          {episode.category && <> · {episode.category}</>}
        </div>

        <h3 className={cn(
          'font-bold text-ink leading-tight mb-2',
          featured ? 'text-xl' : 'text-base',
        )}>
          {episode.title}
        </h3>

        {episode.guestName && (
          <p className="text-sm text-gold-dark font-medium mb-2">
            {episode.guestName}{episode.guestTitle && ` · ${episode.guestTitle}`}
          </p>
        )}

        <p className="text-sm text-ink-muted leading-relaxed flex-1 line-clamp-3">
          {episode.description}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          {episode.durationSeconds ? (
            <span className="text-xs text-ink-muted flex items-center gap-1.5">
              <ClockIcon />
              {formatDuration(episode.durationSeconds)}
            </span>
          ) : <span />}

          {/* Platform dots */}
          <div className="flex gap-1.5">
            {episode.spotifyUrl && (
              <span className="w-7 h-7 rounded-lg bg-cream-2 hover:bg-gold-faint flex items-center justify-center transition-colors" title="Spotify">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-ink-muted">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </span>
            )}
            {episode.youtubeUrl && (
              <span className="w-7 h-7 rounded-lg bg-cream-2 hover:bg-gold-faint flex items-center justify-center transition-colors" title="YouTube">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-ink-muted">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
