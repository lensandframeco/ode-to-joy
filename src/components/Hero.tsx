import { ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  imageSrc: string
  imageSrcMobile?: string
  imageAlt: string
  ctaText?: string
  ctaText2?: string
  onCtaClick?: () => void
  onCta2Click?: () => void
  overlayOpacity?: 'light' | 'medium' | 'dark'
  imagePosition?: string
  imagePositionMobile?: string
}

export function Hero({
  title,
  subtitle,
  description,
  imageSrc,
  imageSrcMobile,
  imageAlt,
  ctaText,
  ctaText2,
  onCtaClick,
  onCta2Click,
  overlayOpacity = 'medium',
  imagePosition = 'center',
  imagePositionMobile,
}: HeroProps) {
  const overlayClasses = {
    light: 'bg-black/30',
    medium: 'bg-black/40',
    dark: 'bg-black/50',
  }

  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {imageSrcMobile ? (
          <>
            <img
              src={imageSrcMobile}
              alt={imageAlt}
              className="md:hidden w-full h-full object-cover"
              style={{ objectPosition: imagePositionMobile || imagePosition }}
            />
            <img
              src={imageSrc}
              alt={imageAlt}
              className="hidden md:block w-full h-full object-cover"
              style={{ objectPosition: imagePosition }}
            />
          </>
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
        )}
        <div className={`absolute inset-0 ${overlayClasses[overlayOpacity]}`}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-white mb-4">{title}</h1>
        {subtitle && <h2 className="text-white mb-6 opacity-90">{subtitle}</h2>}
        {description && (
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            {description}
          </p>
        )}
        {(ctaText || ctaText2) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaText && (
              <button
                onClick={onCtaClick}
                className="bg-[#FC0606] hover:bg-[#CC0505] text-white px-8 py-4 rounded-md transition-colors inline-flex items-center justify-center gap-2"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
            {ctaText2 && (
              <button
                onClick={onCta2Click}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-md transition-colors inline-flex items-center justify-center gap-2"
              >
                {ctaText2}
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
