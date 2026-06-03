import { Music2, Mail, MapPin } from 'lucide-react'

interface FooterProps {
  onNavigate: (page: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Music2 className="w-6 h-6 text-[#FC0606]" />
              <span className="text-white">Ode to Joy Foundation</span>
            </div>
            <p className="text-sm text-neutral-400">
              Empowering the next generation of composers
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4">Explore</h3>
            <div className="space-y-2">
              {[
                { label: 'Our Mission', page: 'mission' },
                { label: 'Grant Program', page: 'grants' },
                { label: 'Films', page: 'films' },
                { label: 'About the Founder', page: 'about' },
                { label: 'Board of Directors', page: 'board' },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className="block text-sm hover:text-[#FC0606] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4">Get Involved</h3>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('contact')}
                className="block text-sm hover:text-[#FC0606] transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">Los Angeles, CA</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:kerry@odetojoyfoundation.org" className="text-sm hover:text-[#FC0606] transition-colors">
                  kerry@odetojoyfoundation.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
          <p className="text-sm text-neutral-400">
            &copy; 2025 Ode to Joy Foundation. A 501(c)(3) nonprofit organization. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
