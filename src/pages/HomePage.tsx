import { Hero } from '../components/Hero'
import { ContentSection } from '../components/ContentSection'
import { Award, Film, Heart, ArrowRight } from 'lucide-react'
import { HOME_HERO, HOME_HERO_MOBILE, BALALAIKA_GUITAR, CELLIST_1, CELLIST_2 } from '../images'

interface HomePageProps {
  onNavigate: (page: string) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <Hero
        title="Empowering the Next Generation of Composers"
        subtitle="Original music. Fresh voices. Classical tradition reimagined."
        imageSrc={HOME_HERO}
        imageSrcMobile={HOME_HERO_MOBILE}
        imageAlt="Woman violinist performing"
        ctaText="Learn About Our Mission"
        ctaText2="Support a Young Composer"
        onCtaClick={() => onNavigate('mission')}
        onCta2Click={() => onNavigate('support')}
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-neutral-700 leading-relaxed">
            The Ode To Joy Foundation supports young musicians—especially those from underserved
            communities—who are ready to take the bold step from performance to creation. We provide
            grants, mentorship, and a month-long creative journey that culminates in the premiere of
            a brand-new work. These compositions honor the classical tradition while expanding it with
            new voices, new timbres, and new cultural perspectives. Each piece is documented from first
            sketch to final performance, and shared with audiences everywhere. We invite you to explore
            the stories, hear the music, and join us in supporting the next generation of composers.
          </p>
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <button
            onClick={() => onNavigate('grants')}
            className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow text-left group"
          >
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-[#FC0606]" />
            </div>
            <h3 className="mb-2">Our Grants</h3>
            <p className="text-neutral-600 mb-4">
              Discover how our grants support young composers through their creative journey
            </p>
            <span className="text-[#FC0606] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn More <ArrowRight className="w-5 h-5" />
            </span>
          </button>

          <button
            onClick={() => onNavigate('films')}
            className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow text-left group"
          >
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
              <Film className="w-6 h-6 text-[#FC0606]" />
            </div>
            <h3 className="mb-2">Watch the Films</h3>
            <p className="text-neutral-600 mb-4">
              Explore the trilogy that inspired the foundation and see composers in action
            </p>
            <span className="text-[#FC0606] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Watch Now <ArrowRight className="w-5 h-5" />
            </span>
          </button>

          <button
            onClick={() => onNavigate('support')}
            className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow text-left group"
          >
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-[#FC0606]" />
            </div>
            <h3 className="mb-2">Support Our Mission</h3>
            <p className="text-neutral-600 mb-4">
              Your gift directly supports the next wave of young composers
            </p>
            <span className="text-[#FC0606] inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Donate Now <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">From Performance to Creation</h2>
            <p className="text-neutral-700 mb-4">
              At a time when many young musicians are trained only to perfect the performance
              of existing masterpieces, we invite them to take the next, courageous step—to
              compose their own.
            </p>
            <p className="text-neutral-700 mb-6">
              Through financial support, mentorship from professional composers and educators, and
              documentary filmmaking that captures their creative journey, we help young artists
              transform inspiration into new music that honors the past while reaching toward the future.
            </p>
            <button
              onClick={() => onNavigate('mission')}
              className="bg-[#FC0606] hover:bg-[#CC0505] text-white px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
            >
              Our Mission <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={BALALAIKA_GUITAR}
              alt="Young musicians collaborating with balalaika and guitar"
              className="w-full h-[400px] object-cover object-center"
            />
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-12">Celebrating Diverse Voices in Classical Music</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={CELLIST_1} alt="African-American cellist" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={CELLIST_2} alt="Black cellist performing" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
