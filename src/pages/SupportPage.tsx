import { Hero } from '../components/Hero'
import { ContentSection } from '../components/ContentSection'
import { GivebutterWidget } from '../components/GivebutterWidget'
import { Heart, Award, Handshake, ArrowRight } from 'lucide-react'
import { SUPPORT_HERO } from '../images'

interface SupportPageProps {
  onNavigate: (page: string) => void
}

export function SupportPage({ onNavigate }: SupportPageProps) {
  const scrollToWidget = () => {
    const widgetSection = document.getElementById('donation-widget')
    if (widgetSection) {
      widgetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div>
      <Hero
        title="Support a Young Composer"
        subtitle="Your gift sparks creativity, opportunity, and new music."
        imageSrc={SUPPORT_HERO}
        imageAlt="Orchestra performance"
        overlayOpacity="dark"
      />

      <ContentSection id="donation-widget">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="mb-6">Make Your Donation</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Every donation to the Ode To Joy Foundation directly supports the next wave of young
                composers. Your generosity funds grants, mentorships, performances, and the documenting
                of each artistic journey.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <p className="text-neutral-800 mb-3">
                  Ode To Joy Foundation is a curriculum program of the Ode To Joy Foundation, a <span className="text-red-700">501(c)(3) charity</span>. 954 Indiana Avenue, Venice California, 90291
                </p>
                <p className="text-neutral-700">
                  Your financial support is an investment in musical and historical education, and in a better world. With your contribution, you are supporting a more hopeful and joyful future.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  'Nurtures creativity through music appreciation and historical understanding',
                  'Makes the unique Ode To Joy Curriculum available in more schools, without charge',
                  'Fosters innovative teaching that empowers students of every age',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FC0606] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-neutral-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <GivebutterWidget campaignId="j2APyp" className="w-full" />
              <p className="text-sm text-center text-neutral-600 mt-4">
                Powered by Givebutter - Secure donation processing
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray" title="Ways to Support">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-[#FC0606]" />
            </div>
            <h3 className="mb-3">Donate Now</h3>
            <p className="text-neutral-600 mb-6">
              Make a one-time or recurring donation to support our general operations and grant program.
            </p>
            <button
              onClick={scrollToWidget}
              className="w-full bg-[#FC0606] hover:bg-[#CC0505] text-white px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center gap-2"
            >
              Give Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-[#FC0606]" />
            </div>
            <h3 className="mb-3">Sponsor a Grant</h3>
            <p className="text-neutral-600 mb-6">
              Fund a full grant ($5,000) and receive updates throughout the composer's creative journey.
            </p>
            <button
              onClick={scrollToWidget}
              className="w-full bg-[#FC0606] hover:bg-[#CC0505] text-white px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center gap-2"
            >
              Sponsor <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
              <Handshake className="w-6 h-6 text-[#FC0606]" />
            </div>
            <h3 className="mb-3">Partner With Us</h3>
            <p className="text-neutral-600 mb-6">
              Explore institutional partnerships, corporate sponsorships, or collaborative initiatives.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center gap-2"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray" title="Your Investment">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-neutral-700 text-center mb-8">
            Your contribution to the Ode To Joy Foundation makes a lasting impact:
          </p>
          <div className="space-y-6">
            {[
              'Nurtures creativity and imagination through music appreciation, analysis, understanding of historical visual and written documents, and the experience of people across the globe.',
              'Helps make the unique Ode To Joy Curriculum available in more schools, without charge.',
              'Fosters innovative teaching that empowers students of every age.',
              'Helps combat cynicism and despair, two devastating curses of our time.',
            ].map((text, i) => (
              <div key={i} className="bg-red-50 border-l-4 border-[#FC0606] p-6 rounded-r-lg">
                <p className="text-neutral-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray" title="Donation Impact">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { amount: '$100', desc: 'Provides materials, rehearsal space, or recording costs for one composer' },
              { amount: '$500', desc: 'Supports mentorship sessions and professional guidance throughout the creative process' },
              { amount: '$2,500', desc: 'Funds ensemble performance and documentary production for one commissioned work' },
              { amount: '$5,000', desc: 'Fully funds one complete grant—from first idea to premiere and beyond' },
            ].map((item) => (
              <div key={item.amount} className="bg-white border border-neutral-200 rounded-lg p-6">
                <div className="text-[#FC0606] mb-2">{item.amount}</div>
                <p className="text-neutral-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-neutral-200 rounded-lg p-10 shadow-lg">
            <div className="text-center mb-6">
              <div className="text-5xl text-[#FC0606] mb-4">"</div>
            </div>
            <p className="text-xl text-neutral-800 text-center leading-relaxed mb-6">
              Supporting young composers isn't just about funding music—it's about investing in
              new voices, new perspectives, and the future of an art form that has moved humanity
              for centuries. When you give to the Ode To Joy Foundation, you become part of a
              composer's journey from idea to legacy.
            </p>
            <p className="text-center text-neutral-600">— Kerry Candaele, Founder</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Other Ways to Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Share Our Story', desc: 'Help us reach more supporters by sharing our mission on social media and with your networks.' },
              { title: 'Volunteer', desc: 'Offer your skills in music, education, film production, or nonprofit management.' },
              { title: 'Attend Events', desc: 'Join us for premiere performances and screenings of our documentary films.' },
              { title: 'Legacy Giving', desc: 'Include the Foundation in your estate planning to support future generations of composers.' },
            ].map((item) => (
              <div key={item.title} className="border border-neutral-200 rounded-lg p-6">
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-neutral-600 mb-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-neutral-200 rounded-lg p-8">
            <h3 className="text-center mb-6">Tax Deduction Information</h3>
            <div className="space-y-4 text-neutral-700">
              <p>
                OTJFoundation is a 501(c)(3) nonprofit recognized by the IRS. Contributions are deductible as provided in state and federal law.
              </p>
              <p>
                <span className="text-red-700">For mail correspondence:</span> 954 Indiana Avenue, Venice California 90291
              </p>
              <p className="text-sm text-neutral-600 pt-4 border-t border-neutral-200">
                Ode To Joy Education Project&reg; is a registered trademark for the Ode To Joy Foundation, Inc., a tax-exempt 501(c)(3) nonprofit.
              </p>
              <p className="text-center text-neutral-600 italic">
                Developing citizens and leaders for America's unfinished business.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-3xl mx-auto text-center bg-red-50 border-2 border-[#FC0606] rounded-lg p-12">
          <h2 className="mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-neutral-700 mb-8">
            Your gift today helps a young musician discover their voice and create music that will
            inspire audiences for years to come.
          </p>
          <button
            onClick={scrollToWidget}
            className="bg-[#FC0606] hover:bg-[#CC0505] text-white px-12 py-5 rounded-md transition-colors inline-flex items-center gap-2"
          >
            Donate Now <Heart className="w-5 h-5" />
          </button>
        </div>
      </ContentSection>
    </div>
  )
}
