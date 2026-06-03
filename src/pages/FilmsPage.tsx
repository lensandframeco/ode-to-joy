import { Hero } from '../components/Hero'
import { ContentSection } from '../components/ContentSection'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { FILMS_HERO, FOLLOWING_THE_NINTH, LOVE_AND_JUSTICE, LAST_WILL } from '../images'

interface FilmsPageProps {
  onNavigate: (page: string) => void
}

export function FilmsPage({ onNavigate }: FilmsPageProps) {
  return (
    <div>
      <Hero
        title="Our Films"
        subtitle="The Beethoven-Hero Trilogy & Beyond"
        imageSrc={FILMS_HERO}
        imageAlt="People celebrating at the Berlin Wall with Brandenburg Gate and fireworks"
        overlayOpacity="dark"
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-neutral-700 leading-relaxed">
            These three deeply personal films offered by Kerry Candaele chart a journey through history, music and human spirit—stories that now serve as inspiration for the Foundation's work with young composers.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed mt-4">
            Starting with <em>Following the Ninth</em>, then <em>Love & Justice</em>, and concluding with <em>Last Will & Testament</em>, the films explore the enduring power of Beethoven's creations, how they have inspired communities around the world, and how they echo the creative drive we now aim to unleash in new voices.
          </p>
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img src={FOLLOWING_THE_NINTH} alt="Following the Ninth" className="w-full h-96 object-cover" />
          </div>
          <div>
            <h2 className="mb-4">Following the Ninth</h2>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              This documentary explores the global impact and legacy of Beethoven's Ninth Symphony, particularly focusing on its influence in moments of historical significance such as the fall of the Berlin Wall and the Tiananmen Square protests of 1989. It also follows women in Chile who used the Ninth Symphony as an act of resistance under the Pinochet dictatorship—and shows how a choral tradition of tens of thousands in Japan brings the piece into a modern, communal context.
            </p>
            <p className="text-neutral-700 mb-6 leading-relaxed">
              <strong>In relation to our new mission:</strong> this film underscores how musical creation and communal voice can emerge out of adversity—and it reminds us that young composers today can stand at a similar intersection of tradition and transformation.
            </p>
            <a
              href="https://youtube.com/watch?v=vujOUDZnqpU&feature=youtu.be"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FC0606] hover:bg-[#CC0505] text-white px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
            >
              Watch the Film <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="mb-4">Love & Justice</h2>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              <em>Love & Justice: In the Footsteps of Beethoven's Rebel Opera</em> brings us to Valparaíso, Chile, where the story of Beethoven's sole opera Fidelio resonates deeply. The narrative weaves the journey of Butoh performer María Belén Espinosa Peña, whose grandfather Jorge Peña Hen was murdered during the 1973 coup. Through her story, the film unites Beethoven's quest for love and justice with a legacy of political repression, hope and resilience.
            </p>
            <p className="text-neutral-700 mb-6 leading-relaxed">
              <strong>Seen through the lens of our Foundation:</strong> the film is a vivid example of creativity emerging out of challenge—and of classical music's potential to embrace new voices and untraditional stories.
            </p>
            <a
              href="https://www.youtube.com/watch?v=OYS0rIUy0gc&t=39s"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FC0606] hover:bg-[#CC0505] text-white px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
            >
              Watch the Film <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
            <img src={LOVE_AND_JUSTICE} alt="Love & Justice" className="w-full h-96 object-cover" />
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img src={LAST_WILL} alt="Last Will & Testament" className="w-full h-96 object-cover" />
          </div>
          <div>
            <h2 className="mb-4">Last Will & Testament</h2>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              This concluding film in the trilogy — <em>Last Will & Testament: In the Footsteps of Beethoven's Late String Quartets</em> — is a tender, contemplative look at Beethoven's final years. It focuses on the music he created when illness and deafness separated him from the public, and how his late quartets reflect an ever-evolving commitment to artistic risk and introspection.
            </p>
            <p className="text-neutral-700 mb-6 leading-relaxed">
              <strong>For us,</strong> this film signals not only the tail end of one creative arc—but also the launching point for a new one. As Beethoven looked inward and then outward again, so we invite young musicians to look ahead: to compose, to experiment, and to create their own legacies.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="mb-4">The Worms Lose: Billy Bragg and Beethoven</h2>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              I had the opportunity to visit with Billy Bragg when he was writing a new English version of the Ode To Joy from Beethoven's Ninth Symphony. Billy's Ode was performed at the Royal Festival Hall at London's Southbank Centre. Before the show we visited his high school, and we talked about the evolution of his life as a musician, and his enduring political commitments. He sings his new version of the Ode in my <em>Following The Ninth</em> film on this site.
            </p>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              <strong>Duration:</strong> 20:04
            </p>
            <a
              href="https://www.youtube.com/watch?v=B0IhaU1fcGU"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FC0606] hover:bg-[#CC0505] text-white px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
            >
              Watch the Film <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl order-1 lg:order-2 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/B0IhaU1fcGU"
              title="The Worms Lose: Billy Bragg and Beethoven"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-center">Why This Matters</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Each film embodies the belief that art can transform the human spirit, create communities of shared purpose, and give voice to the unheard. The Foundation's grant program carries forward this vision—supporting young composers from underserved communities to compose original works, mentor under experienced professionals, and share their music with the world.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed text-center">
            We encourage you to watch these films, then explore how you can become part of the next chapter: by mentoring, donating, or simply sharing these stories.
          </p>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Explore Our Mission</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Inspired by these stories? Learn more about how the Ode To Joy Foundation supports the next generation of composers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('grants')}
              className="bg-[#FC0606] hover:bg-[#CC0505] text-white px-8 py-4 rounded-md transition-colors inline-flex items-center justify-center gap-2"
            >
              Grant Program <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('support')}
              className="bg-neutral-800 hover:bg-neutral-900 text-white px-8 py-4 rounded-md transition-colors inline-flex items-center justify-center gap-2"
            >
              Support Our Work <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
