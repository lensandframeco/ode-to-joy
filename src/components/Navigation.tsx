import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { LOGO } from '../images'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Mission', value: 'mission' },
    { label: 'Grants', value: 'grants' },
    { label: 'Recipients', value: 'grant-recipients' },
    { label: 'Films', value: 'films' },
    { label: 'Founder', value: 'about' },
    { label: 'Board', value: 'board' },
    { label: 'Support', value: 'support' },
    { label: 'Contact', value: 'contact' },
  ]

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img src={LOGO} alt="Ode to Joy Foundation Logo" className="h-8 sm:h-10 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`transition-colors ${
                  currentPage === item.value
                    ? 'text-[#FC0606]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value)
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 transition-colors ${
                  currentPage === item.value
                    ? 'text-[#FC0606] bg-white/5'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
