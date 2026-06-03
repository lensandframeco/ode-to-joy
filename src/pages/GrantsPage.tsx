import { Hero } from '../components/Hero'
import { ContentSection } from '../components/ContentSection'
import { TimelineItem } from '../components/TimelineItem'
import { ArrowRight } from 'lucide-react'
import { GRANTS_HERO, WOMAN_CELLIST, DIVERSE_ORCHESTRA } from '../images'

interface GrantsPageProps {
  onNavigate: (page: string) => void
}

export function GrantsPage({ onNavigate }: GrantsPageProps) {
  return (
    <div>
      <Hero
        title="From Idea to Impact: How Our Grant Program Works"
        subtitle="A month of creation. A lifetime of artistic possibility."
        imageSrc={GRANTS_HERO}
        imageAlt="Young musicians in ensemble rehearsal"
        overlayOpacity="dark"
      />

      <ContentSection title="The Grant Program">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-neutral-700 leading-relaxed text-center mb-12">
            Our grants provide young musicians with the opportunity to complete an original composition
            under the guidance of professional composers and educators who serve as mentors. Over the
            course of one month, each composer develops a new work—from early sketches to refined
            drafts—supported by financial resources and artistic insight. We encourage experimentation,
            cultural diversity, and personal voice. Finished pieces may feature classical ensembles,
            solo instrumentalists, or hybrid instrumentations that reflect the composer's background
            and imagination.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-[#FC0606] mb-2">Grant Amount</div>
              <div className="text-neutral-900">Up to $5,000</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-[#FC0606] mb-2">Duration</div>
              <div className="text-neutral-900">One Month</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="text-[#FC0606] mb-2">Mentorship</div>
              <div className="text-neutral-900">1-on-1 Guidance</div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray" title="A Month in the Life of a Young Composer">
        <div className="max-w-3xl mx-auto">
          <TimelineItem number={1} title="Award & Introduction" description="Grant recipients are paired with professional composers and educators who serve as mentors." />
          <TimelineItem number={2} title="Composition Period" description="Four weeks of writing, revising, experimenting, and exploring." />
          <TimelineItem number={3} title="Rehearsal & Collaboration" description="Ensembles work with the composer to bring the piece to life." />
          <TimelineItem number={4} title="Performance" description="A filmed premiere of the completed work." />
          <TimelineItem number={5} title="Documentary Release" description="Founder Kerry Candaele produces a documentary short capturing the entire creative journey, shared with audiences everywhere. Each composer receives a copy for their own professional portfolio." />
          <TimelineItem number={6} title="Archive & Legacy" description="The work becomes part of a growing collection of new compositions, with co-ownership retained by the young artist." isLast />
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="max-w-3xl mx-auto text-center bg-white border border-neutral-200 rounded-lg p-12">
          <h2 className="mb-4">Mentorship by Invitation Only</h2>
          <p className="text-lg text-neutral-700 mb-8">
            The Ode To Joy mentorship program is currently by invitation only. We are planning to
            launch an open application process in 2026. If you have questions about the program,
            please feel free to reach out.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#FC0606] hover:bg-[#CC0505] text-white px-8 py-4 rounded-md transition-colors inline-flex items-center gap-2"
          >
            Contact Us to Learn More <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-8">Supporting All Young Composers</h2>
          <p className="text-lg text-neutral-700 text-center mb-12 max-w-3xl mx-auto">
            Our grants are designed to reach talented musicians from diverse backgrounds, ensuring
            that the next generation of composers reflects the full spectrum of human experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={WOMAN_CELLIST} alt="African-American woman cellist" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={DIVERSE_ORCHESTRA} alt="Diverse orchestra musicians" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
