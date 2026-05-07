import { Hero } from '../components/Hero'
import { ContentSection } from '../components/ContentSection'
import { BOARD_HERO, WILLIAM_KINDERMAN, BRUCE_CRUM, LILLIAM_MOLINA } from '../images'

interface BoardPageProps {
  onNavigate: (page: string) => void
}

interface BoardMember {
  name: string
  title: string
  image: string
  bio: string[]
}

const boardMembers: BoardMember[] = [
  {
    name: 'William Kinderman',
    title: 'Professor of Music, UCLA',
    image: WILLIAM_KINDERMAN,
    bio: [
      "Professor William Kinderman is a distinguished musicologist and pianist at UCLA, where he specializes in Beethoven scholarship and classical music history.",
      "His extensive research and publications have made significant contributions to our understanding of Beethoven's creative process and the cultural context of classical music.",
      "Professor Kinderman brings invaluable academic expertise and mentorship to the Foundation's mission of supporting emerging composers.",
    ],
  },
  {
    name: 'Bruce Crum',
    title: 'Board Member',
    image: BRUCE_CRUM,
    bio: [
      "Bruce Crum is a partner at McAfee & Taft and a trusted advisor with decades of experience in corporate law, governance, and organizational strategy. A lifelong supporter of classical music, he brings both professional insight and personal passion to his role on the Ode to Joy Foundation's Board of Directors, helping guide the Foundation's mission to expand access to music education and young composers' opportunities.",
    ],
  },
  {
    name: 'Lilliam Molina-Cesario',
    title: 'Board Member',
    image: LILLIAM_MOLINA,
    bio: [
      'Lilliam Molina-Cesario is a dedicated advocate for arts education and cultural access, with a passion for creating opportunities for young artists from diverse backgrounds.',
      "Her expertise in community engagement and program development strengthens the Foundation's ability to connect with emerging composers and provide meaningful support.",
      "Lilliam's commitment to equity and inclusion helps ensure the Foundation's programs reach those who need them most.",
    ],
  },
  {
    name: 'Milos Cekic',
    title: 'Board Member',
    image: 'https://images.makeitglow.co/projects/cmms687sz0001jkdrgv4r4h45/6109470b-d593-451c-8edc-ecfd5788cfb7.jpg',
    bio: [
      'Milos M. Cekic is a medical doctor and associate clinical professor of radiological sciences specializing in diagnostic neuroradiology and acute care imaging. He is part of the faculty at UCLA Health / David Geffen School of Medicine at UCLA, where he practices and teaches in the Department of Radiology.',
      'Originally from Serbia, Cekic has an educational background that includes biological anthropology and neuroscience from Harvard University, along with a master\'s degree in philosophy from New York University. He earned his MD and PhD from Emory University School of Medicine and completed his fellowship in Diagnostic Neuroradiology at UCLA School of Medicine.',
      'His specialties include acute care imaging (urgent/emergency radiologic interpretation) and diagnostic neuroradiology (brain and nervous system imaging). He is affiliated as a physician with multiple UCLA Health medical centers, including Ronald Reagan UCLA Medical Center, UCLA Santa Monica Medical Center, and UCLA West Valley Medical Center.',
    ],
  },
]

export function BoardPage({ onNavigate }: BoardPageProps) {
  return (
    <div>
      <Hero
        title="Board of Directors"
        subtitle="Meet the dedicated leaders guiding the Ode to Joy Foundation's mission to empower young composers."
        imageSrc={BOARD_HERO}
        imageAlt="Young musicians rehearsing with conductor in orchestra setting"
        overlayOpacity="dark"
      />

      <ContentSection>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              Our Board of Directors combines deep expertise in music education, arts advocacy,
              and community engagement to guide the Foundation's mission of supporting emerging
              composers from underserved communities.
            </p>
          </div>

          <div className="space-y-16">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={`lg:col-span-1 ${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <img src={member.image} alt={member.name} className="w-full h-80 object-cover object-center" />
                  </div>
                </div>

                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex flex-col justify-center h-full">
                    <h2 className="mb-2">{member.name}</h2>
                    <p className="text-[#FC0606] mb-6">{member.title}</p>
                    <div className="space-y-4 text-neutral-700 leading-relaxed">
                      {member.bio.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">Join Us in Supporting Young Composers</h2>
          <p className="text-lg text-neutral-700 mb-8">
            The Board of Directors invites you to be part of the Foundation's mission to
            empower the next generation of classical music composers.
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
