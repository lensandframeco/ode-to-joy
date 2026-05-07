import { useEffect } from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  page?: string
  imageUrl?: string
}

export function SEOHead({
  title = 'Ode to Joy Foundation - Supporting Young Classical Music Composers',
  description = 'The Ode to Joy Foundation supports young musicians from underserved communities by providing grants, mentorship, and opportunities to compose original classical music works.',
  page = 'home',
  imageUrl = 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200&h=630&fit=crop',
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title

    const updateMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? 'name' : 'property'
      let element = document.querySelector(`meta[${attribute}="${property}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, property)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    updateMetaTag('description', description, true)
    updateMetaTag('og:title', title)
    updateMetaTag('og:description', description)
    updateMetaTag('og:type', 'website')
    updateMetaTag('og:url', `https://odetojoyfoundation.org/${page}`)
    updateMetaTag('og:image', imageUrl)
    updateMetaTag('og:site_name', 'Ode to Joy Foundation')
    updateMetaTag('twitter:card', 'summary_large_image', true)
    updateMetaTag('twitter:title', title, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:image', imageUrl, true)
  }, [title, description, page, imageUrl])

  return null
}

export const pageMetadata = {
  home: {
    title: 'Ode to Joy Foundation - Supporting Young Classical Music Composers',
    description: 'The Ode to Joy Foundation supports young musicians from underserved communities by providing grants, mentorship, and opportunities to compose original classical music works.',
  },
  mission: {
    title: 'Our Mission - Ode to Joy Foundation',
    description: 'Our mission is to empower the next generation of classical music composers from underserved communities through grants, mentorship, and performance opportunities.',
  },
  grants: {
    title: 'Grants Program - Ode to Joy Foundation',
    description: 'The Ode to Joy Foundation provides financial grants to young composers to support their creative development and original classical music composition projects.',
  },
  films: {
    title: 'Films & Documentaries - Ode to Joy Foundation',
    description: 'Watch inspiring stories of young musicians and composers supported by the Ode to Joy Foundation through our documentary films and video content.',
  },
  about: {
    title: 'About Us - Ode to Joy Foundation',
    description: "Learn about the Ode to Joy Foundation's history, values, and commitment to supporting young classical music composers from underserved communities.",
  },
  board: {
    title: 'Board of Directors - Ode to Joy Foundation',
    description: "Meet the dedicated board members and leadership team guiding the Ode to Joy Foundation's mission to support young composers.",
  },
  support: {
    title: 'Support Our Mission - Ode to Joy Foundation',
    description: 'Support young musicians from underserved communities. Your donation helps provide grants, mentorship, and opportunities for emerging classical music composers.',
  },
  contact: {
    title: 'Contact Us - Ode to Joy Foundation',
    description: "Get in touch with the Ode to Joy Foundation. We'd love to hear from you about grants, partnerships, or how you can support young composers.",
  },
  'grant-recipients': {
    title: 'Grant Recipients | Ode to Joy Foundation',
    description: 'Meet the talented young composers who have received grants from the Ode to Joy Foundation to support their classical music composition projects.',
  },
}
