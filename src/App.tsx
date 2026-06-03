import { useState, useEffect, useCallback } from 'react'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { SEOHead, pageMetadata } from './components/SEOHead'
import { HomePage } from './pages/HomePage'
import { MissionPage } from './pages/MissionPage'
import { GrantsPage } from './pages/GrantsPage'
import { FilmsPage } from './pages/FilmsPage'
import { AboutPage } from './pages/AboutPage'
import { BoardPage } from './pages/BoardPage'
import { SupportPage } from './pages/SupportPage'
import { ContactPage } from './pages/ContactPage'
import GrantRecipientsPage from './pages/GrantRecipientsPage'

const VALID_PAGES = ['home', 'mission', 'grants', 'films', 'about', 'board', 'support', 'contact', 'grant-recipients']

function getPageFromPath(): string {
  // Handle both direct paths and paths with base URL
  let path = window.location.pathname
  const base = document.querySelector('base')?.getAttribute('href') || '/'
  
  // Remove base path if present
  if (base !== '/' && path.startsWith(base)) {
    path = path.slice(base.length)
  }
  
  // Clean up the path
  path = path.replace(/^\//, '').replace(/\/$/, '') || 'home'
  
  return VALID_PAGES.includes(path) ? path : 'home'
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromPath)

  const handleNavigate = useCallback((page: string) => {
    setCurrentPage(page)
    const url = page === 'home' ? '/' : `/${page}`
    window.history.pushState({ page }, '', url)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const onPopState = () => {
      setCurrentPage(getPageFromPath())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />
      case 'mission':
        return <MissionPage onNavigate={handleNavigate} />
      case 'grants':
        return <GrantsPage onNavigate={handleNavigate} />
      case 'films':
        return <FilmsPage onNavigate={handleNavigate} />
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />
      case 'board':
        return <BoardPage onNavigate={handleNavigate} />
      case 'support':
        return <SupportPage onNavigate={handleNavigate} />
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />
      case 'grant-recipients':
        return <GrantRecipientsPage onNavigate={handleNavigate} />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={pageMetadata[currentPage as keyof typeof pageMetadata]?.title}
        description={pageMetadata[currentPage as keyof typeof pageMetadata]?.description}
        page={currentPage}
      />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}
