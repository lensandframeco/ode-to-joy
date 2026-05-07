import { Hero } from '../components/Hero'
import { ContentSection } from '../components/ContentSection'
import { ValueCard } from '../components/ValueCard'
import { Users, TrendingUp, Lightbulb, Globe } from 'lucide-react'
import {
  MISSION_HERO, SHEET_MUSIC_COLLAB, MISSION_TRUMPET,
  VIOLIN_PLAYER, PIANIST, STRING_ENSEMBLE,
} from '../images'

interface MissionPageProps {
  onNavigate: (page: string) => void
}

export function MissionPage({ onNavigate }: MissionPageProps) {
  return (
    <div>
      <Hero
        title="Our Mission: Creativity, Access, and New Voices in Classical Music"
        subtitle="Opening the door to composition for young musicians who have been excluded for too long."
        imageSrc={MISSION_HERO}
        imageAlt="Musicians performing together"
        overlayOpacity="dark"
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <div className="bg-[rgb(183,183,183)] border-l-4 border-[#FC0606] p-8 rounded-r-lg">
            <p className="text-lg text-neutral-800 leading-relaxed">
              The Ode To Joy Foundation is dedicated to nurturing the next generation of composers
              by empowering young musicians from underserved communities to create original works
              in the classical tradition. At a time when many students are trained only to perfect
              the performance of existing masterpieces, we invite them to take the next, courageous
              step—to compose their own. Through financial support, mentorship, and creative collaboration,
              we help young artists transform inspiration into new music that honors the past while
              reaching toward the future.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray" title="What We Do">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="mb-4">Grants That Spark Creation</h3>
            <p className="text-neutral-700 leading-relaxed">
              Each year, the Foundation awards grants—initially up to $5,000—to high school and
              college-age music students who demonstrate passion, potential, and curiosity, but
              lack the financial resources or institutional access to pursue composition in earnest.
              Awardees are paired with professional composers and educators who serve as mentors,
              guiding them through the creation of a completely new piece of music within one month.
              Their work might take the form of a string quartet, a solo piano piece, a trio, or a
              boundary-crossing ensemble blending Western and non-Western instruments. By embracing
              these voices and timbres, we aim to broaden what classical music can be.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={SHEET_MUSIC_COLLAB} alt="Young musicians collaborating with sheet music" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl">
            <img src={MISSION_TRUMPET} alt="Trumpet ensemble performance" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="mb-4">From First Sketch to Final Performance</h3>
            <p className="text-neutral-700 leading-relaxed">
              Founder Kerry Candaele documents every stage of the creative process—conversations with
              mentors, rehearsals with ensembles, breakthroughs at the piano, and the premiere itself.
              These moments are woven into documentary films and docuseries shared on our website and
              across digital platforms, offering a rare look at the joy, challenge, and discovery
              involved in composing original music. Each young composer retains co-ownership of their
              work, allowing their piece to live on, be performed, and strengthen their creative portfolio.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Our Values">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard
            icon={Users}
            title="Equity & Access"
            description="Expanding opportunities for young musicians to learn, create, and be heard."
          />
          <ValueCard
            icon={TrendingUp}
            title="Mentorship & Growth"
            description="Connecting emerging composers with experienced artists who nurture both craft and confidence."
          />
          <ValueCard
            icon={Lightbulb}
            title="Innovation & Tradition"
            description="Encouraging new works that honor classical forms while welcoming diverse cultural traditions."
          />
          <ValueCard
            icon={Globe}
            title="Community & Sharing"
            description="Building a living archive of new compositions to inspire others to compose, perform, and listen."
          />
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">A National Vision</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            The Foundation launches in the Los Angeles area, with plans to expand as partnerships
            and resources grow. As our archive of new works develops, we aim to reinvigorate classical
            education by making composition a standard and expected part of every young musician's
            training. In the spirit of Beethoven's call for joy and community, we celebrate not only
            the music of the past—but the promise of new voices yet to be heard.
          </p>
          <button
            onClick={() => onNavigate('grants')}
            className="bg-[#FC0606] hover:bg-[#CC0505] text-white px-8 py-4 rounded-md transition-colors"
          >
            Learn About Our Grants
          </button>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-8">Empowering Diverse Musical Voices</h2>
          <p className="text-lg text-neutral-700 text-center mb-12 max-w-3xl mx-auto">
            We are committed to supporting musicians from all backgrounds, celebrating the richness
            that diverse perspectives bring to classical music composition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={VIOLIN_PLAYER} alt="Black violin player" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={PIANIST} alt="African-American pianist" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={STRING_ENSEMBLE} alt="Diverse string ensemble" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
