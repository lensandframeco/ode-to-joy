import { Hero } from '../components/Hero'
import { ContentSection } from '../components/ContentSection'
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { CONTACT_HERO } from '../images'

// Sign up at https://formspree.io and replace with your form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgonlqll'

interface ContactPageProps {
  onNavigate: (page: string) => void
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          _replyto: formData.email,
          subject: `OTJ Contact Form: ${formData.subject}`,
          message: formData.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      <Hero
        title="Join Us"
        subtitle="If you're a young musician, mentor, educator, or supporter—we'd love to connect."
        imageSrc={CONTACT_HERO}
        imageAlt="Young musicians ensemble"
        overlayOpacity="dark"
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-neutral-700 leading-relaxed">
            Whether you're interested in learning more about our mentorship program, hoping to partner
            with us, or simply want to learn more about the Foundation's work, we welcome you to
            reach out. The future of classical music belongs to the young artists who dare to
            compose—and to the supporters who help make it possible.
          </p>
        </div>
      </ContentSection>

      <ContentSection background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h3 className="mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#FC0606]" />
                  </div>
                  <div>
                    <div className="mb-1">Email</div>
                    <a
                      href="mailto:kerry@odetojoyfoundation.org"
                      className="text-[#FC0606] hover:text-[#CC0505] transition-colors"
                    >
                      info@odetojoyfoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#FC0606]" />
                  </div>
                  <div>
                    <div className="mb-1">Location</div>
                    <p className="text-neutral-600">Los Angeles, California</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white border border-neutral-200 rounded-lg">
                <h4 className="mb-3">Office Hours</h4>
                <p className="text-neutral-600 text-sm">
                  Monday – Friday<br />
                  9:00 AM – 5:00 PM PST
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white border border-neutral-200 rounded-lg p-12 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="mb-4">Thank You!</h3>
                  <p className="text-lg text-neutral-700 mb-2">
                    Your message has been sent successfully.
                  </p>
                  <p className="text-neutral-600">
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <div className="bg-white border border-neutral-200 rounded-lg p-8">
                  <h3 className="mb-6">Send Us a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-neutral-700">Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC0606] focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 text-neutral-700">Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC0606] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block mb-2 text-neutral-700">Subject *</label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC0606] focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="program-inquiry">Program Inquiry</option>
                        <option value="mentorship">Mentorship Opportunities</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="donation">Donation Question</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 text-neutral-700">Message *</label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC0606] focus:border-transparent resize-none"
                        placeholder="Tell us about your interest in the Foundation..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="w-full bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-md flex items-center justify-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-[#FC0606] hover:bg-[#CC0505] text-white px-6 py-4 rounded-md transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'} <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  )
}
