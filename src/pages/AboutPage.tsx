import { Hero } from '../components/Hero'
import { ContentSection } from '../components/ContentSection'
import { Film, Music, BookOpen, Users, Globe, GraduationCap } from 'lucide-react'
import { ABOUT_HERO, KERRY_PORTRAIT, KERRY_FIELD_1, KERRY_FIELD_2 } from '../images'

interface AboutPageProps {
  onNavigate: (page: string) => void
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      <Hero
        title="Meet Kerry Candaele"
        subtitle="Musician. Filmmaker. Writer. Teacher. Mentor."
        imageSrc={ABOUT_HERO}
        imageAlt="Kerry Candaele mentoring a young musician"
        overlayOpacity="dark"
      />

      <ContentSection>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-xl sticky top-24">
                <img src={KERRY_PORTRAIT} alt="Kerry Candaele" className="w-full h-96 object-cover object-top" />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Kerry Candaele founded the Ode To Joy Foundation as a natural extension of his lifelong commitment to music, storytelling and social purpose. Raised in Lompoc, California after being born in Vancouver, B.C., Kerry grew into a global educator, historian, filmmaker and advocate for the values of tolerance, compassion, equality and artistic freedom embodied by Beethoven's Ninth Symphony.
                </p>
                <p>
                  Before establishing the Foundation, Kerry ran a history museum and taught high-school history at The Cate School in Montecito. He then worked overseas in East Timor, Guatemala, Jordan, the West Bank and Gaza for The Democracy Council — experiences that deepened his belief in art's power to build community and bridge divides.
                </p>
                <p>
                  Kerry's filmmaking career includes a trilogy of documentaries exploring Beethoven's global and human-spirit legacy: <em>Following the Ninth</em>, <em>Love & Justice</em>, and <em>Last Will & Testament</em>. He has presented his films in over 35 U.S. states and 40 countries, taught history at Marymount Manhattan College, Occidental College and Cal State Dominguez Hills, and given a TEDx talk at Purdue University.
                </p>
                <p>
                  He has also authored three books, among them <em>Bound for Glory 1910-1930: From the Great Migration to the Harlem Renaissance</em> and <em>Journeys With Beethoven</em>, which chronicles his Beethoven films and the music's global impact.
                </p>
                <p>
                  Today, as founder and mentor of the Foundation, Kerry brings his film-making, teaching and musical experience to a new mission: empowering young composers from underserved communities to create original works, mentor with professionals, and share their voices with the world. The Foundation stands at the crossroads of classical tradition and new creative possibility—and Kerry's vision continues to guide its path.
                </p>
                <p>
                  He lives in Santa Monica, California, and is the proud father of three daughters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray" title="Key Roles & Contributions">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Users, title: 'Founder & Director', desc: 'Building the grant, mentorship and film-archive program for emerging composers at the Ode To Joy Foundation.' },
            { icon: Film, title: 'Filmmaker & Screenwriter', desc: 'Creator of the Beethoven-hero trilogy; storyteller of music, history and human community.' },
            { icon: GraduationCap, title: 'Educator & Mentor', desc: 'Former high-school teacher, college lecturer and guide to musicians in prisons, hospitals and global settings.' },
            { icon: BookOpen, title: 'Author', desc: 'Three published books bridging music, history and culture; documented journeys between performance, composition and social change.' },
            { icon: Globe, title: 'Global Citizen', desc: 'Traveled and filmed in 25+ countries; collaborated with ensembles and musicians from South Africa to Japan, from Chile to California.' },
            { icon: Music, title: 'Musician & Advocate', desc: 'Lifelong commitment to making classical music accessible, joyful, and meaningful to diverse audiences worldwide.' },
          ].map((role) => (
            <div key={role.title} className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <role.icon className="w-6 h-6 text-[#FC0606]" />
              </div>
              <h3 className="mb-2">{role.title}</h3>
              <p className="text-neutral-600">{role.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-center">In the Field</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={KERRY_FIELD_1} alt="Kerry Candaele at work" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={KERRY_FIELD_2} alt="Kerry Candaele documenting" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">The Beethoven Trilogy</h2>
          <div className="space-y-6">
            {[
              { title: 'Following the Ninth', desc: "A documentary exploring the global impact of Beethoven's Ninth Symphony, from the fall of the Berlin Wall to Tiananmen Square protests, and its use as an act of resistance in Chile." },
              { title: 'Love & Justice', desc: "In the footsteps of Beethoven's rebel opera Fidelio, this film weaves together themes of political repression, hope, and resilience in Valparaíso, Chile." },
              { title: 'Last Will & Testament', desc: "A contemplative look at Beethoven's late string quartets and his final years of artistic risk and introspection—a launching point for the Foundation's mission." },
            ].map((film) => (
              <div key={film.title} className="border-l-4 border-[#FC0606] pl-6">
                <h3 className="mb-2">{film.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{film.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('films')}
              className="bg-[#FC0606] hover:bg-[#CC0505] text-white px-8 py-4 rounded-md transition-colors"
            >
              Explore the Films
            </button>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Published Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <h3 className="mb-2">Journeys With Beethoven</h3>
              <p className="text-neutral-600">
                Chronicles Kerry's Beethoven films and explores the music's global impact across cultures and communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200">
              <h3 className="mb-2">Bound for Glory 1910-1930</h3>
              <p className="text-neutral-600">
                From the Great Migration to the Harlem Renaissance—a historical exploration of cultural transformation.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border-l-4 border-[#FC0606] p-8 rounded-r-lg">
            <h2 className="mb-4">A Vision for the Future</h2>
            <p className="text-neutral-700 leading-relaxed">
              "Classical music has given me so much throughout my life—beauty, inspiration, connection,
              and meaning. But for too long, we've treated it as a museum art form, where young musicians
              are trained to preserve the past rather than create the future. The Ode To Joy Foundation
              exists to change that narrative. By empowering young composers from all backgrounds to
              find their voices and create new works—guided by professional mentors and documented through
              film—we're ensuring that classical music remains a living, breathing tradition. One that
              speaks to our time and welcomes everyone to participate in its ongoing story."
            </p>
            <p className="text-red-800 mt-4">— Kerry Candaele, Founder</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Join the Mission</h2>
          <p className="text-lg text-neutral-700 mb-8">
            Whether you're interested in supporting young composers, learning more about our work,
            or exploring partnership opportunities, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('support')}
              className="bg-[#FC0606] hover:bg-[#CC0505] text-white px-8 py-4 rounded-md transition-colors"
            >
              Support the Foundation
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 px-8 py-4 rounded-md transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
