import { useState } from 'react'

interface GrantRecipientsPageProps {
  onNavigate: (page: string) => void
}

export default function GrantRecipientsPage({ onNavigate }: GrantRecipientsPageProps) {
  const [selectedYear, setSelectedYear] = useState('2026')

  const recipients = [
    {
      year: 2026,
      name: 'Joseph Ehrenpreis',
      project: 'New Works for 8-String Brahms Guitar',
      image: 'https://images.makeitglow.co/projects/cmms687sz0001jkdrgv4r4h45/22d3e02f-24ff-4b06-92d3-519184584afe.jpg',
      bio: 'Joseph Ehrenpreis is a Los Angeles–based guitarist and composer whose work bridges contemporary classical music with deeply personal themes of joy, innocence, and mortality. A graduate of the Yale School of Music, where he earned both Master of Music and Master of Musical Arts degrees, he is recognized for commissioning, creating, and performing new music, particularly for the 8-string Brahms guitar.\n\nEhrenpreis has performed internationally across the United States, Europe, and Asia, with appearances at venues including Weil Hall at Carnegie Hall, Hong Kong City Hall, and Yale University\'s Morse Recital Hall. He currently serves as Principal Guitarist with the United Nations Chamber Music Society, where he performs and curates globally engaged chamber collaborations.\n\nAt the core of his artistic practice is a commitment to joy not as an abstraction, but as a deliberate response to fragility and uncertainty. A survivor of a congenital heart defect, Ehrenpreis underwent open-heart surgery at just three days old. The son of an immigrant mother from Havana, Cuba, his lived experience informs a creative voice that is both intimate and expansive.\n\nChoosing the guitar as his primary instrument, he is drawn to its presence across cultures and its ability to connect people on a deeply human level. For Ehrenpreis, composition is a way of working against limitation—shaping time, sound, and collaboration into something that extends beyond the constraints of the body and the unpredictability of life.\n\nHis recordings include aloe (2025) and saman (2024), released on Etymology Classics, among other collaborations with international artists. He is a recipient of the Henry and Lucy Moses Scholarship at Yale University, the Lillian Disney Scholarship at CalArts, and has been recognized as a Colburn Scholar. He is also honored as the inaugural recipient of the Ode to Joy Foundation Fellowship for young composers.\n\nBlending virtuosic performance with a searching, humanistic artistic vision, Ehrenpreis is an emerging voice in contemporary classical music, advancing new possibilities for the guitar while inviting listeners into a deeply personal world of sound.',
    },
    {
      year: 2026,
      name: 'Hongbo Cai',
      project: 'Invented Instruments and Multi-media',
      image: 'https://images.makeitglow.co/projects/cmms687sz0001jkdrgv4r4h45/80054051-76fd-42b5-99db-aa491084dab9.webp',
      bio: 'HONGBO CAI is a Chinese American diasporic sound artist and filmmaker whose work bridges performance practice and critical inquiry into media. Born in Quanzhou, the historic departure point of the Maritime Silk Road, he carries into his work a lasting sensitivity to migration, cultural memory, and the afterlives of places. A Juilliard-trained pianist, he made his Carnegie Hall debut at 21 and joined New York University\'s music department as an adjunct faculty member at 22. A 2026 Beverly Hills National Auditions winner, he has appeared as a soloist with the Shanghai Philharmonic, Shanghai Opera House, Florence Philharmonic, and musicians of the New York Philharmonic.\n\nAs a director and composer, his projects have been selected by Venice Biennale College, the Beijing International Short Film Festival, and the Clermont-Ferrand Short Film Festival. A 2025 Van Lier Fellow in Music Composition, his work has been supported by the Juilliard Risk Lab Residency, the Virginia Center for the Creative Arts, the Asian American Arts Alliance, and the New York Community Trust. Beyond the concert hall and screening room, his practice is shaped by years of backpacking through ruins, tombs, and archives. Most significantly, his outdoor research practices, especially expeditions in caving and diving, have informed a body of work preoccupied with liminal states, animals, ghosts, and distant temporalities.',
    },
  ]

  const years = ['2026']

  const filteredRecipients = recipients.filter(r => r.year === parseInt(selectedYear))

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-24 sm:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Grant Recipients
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-100 leading-relaxed">
              Celebrating the talented composers we've had the privilege to support on their creative journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Filter by year:</span>
            <div className="flex flex-wrap gap-2">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year.toString())}
                  className="px-4 py-2 rounded-lg font-medium text-sm bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recipients Grid */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.makeitglow.co/projects/cmms687sz0001jkdrgv4r4h45/80054051-76fd-42b5-99db-aa491084dab9.webp)'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredRecipients.map((recipient, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[3/4] overflow-hidden bg-slate-900">
                  <img
                    src={recipient.image}
                    alt={recipient.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full">
                      {recipient.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {recipient.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold mb-4">
                    {recipient.project}
                  </p>
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {recipient.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
