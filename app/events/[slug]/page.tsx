'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { events } from '@/app/data/events'
import { notFound } from 'next/navigation'

export default function EventPage({ params }: { params: { slug: string } }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const event = events.find(e => e.slug === params.slug)
  
  if (!event) {
    notFound()
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const speakersByName = event.speakers.reduce((acc, speaker) => {
    acc[speaker.name] = speaker
    return acc
  }, {} as Record<string, typeof event.speakers[0]>)

  return (
    <div className="min-h-screen bg-black text-white">
      <style jsx>{`
        @keyframes pingpong {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        .animate-pingpong {
          animation: pingpong 3s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm' : ''
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/events" className="text-lg font-light hover:text-gray-300 transition-colors">
              ← Back
            </Link>
            
            {/* Desktop Navigation */}
            <a 
              href={event.registrationUrl || "https://lu.ma/user/llmnative"}
              className="hidden md:inline-block text-blue-400 hover:text-blue-300 transition-colors text-lg font-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.isUpcoming ? 'Register on Luma →' : 'View on Luma →'}
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-4 py-4">
              <a 
                href={event.registrationUrl || "https://lu.ma/user/llmnative"}
                className="block text-blue-400 hover:text-blue-300 transition-colors text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.isUpcoming ? 'Register on Luma →' : 'View on Luma →'}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-gray-500 mb-6 text-sm uppercase tracking-wider">Buenos Aires • Argentina</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 tracking-tight">
            LLM Native
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 text-gray-400">
            {event.title}
          </h2>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Come meet, mingle, and tackle real-world technical challenges, with a special focus on meaningful, production-grade experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 mb-16 justify-center items-center text-lg">
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{event.date}</span>
            </div>
            <div className="hidden sm:block text-gray-600">•</div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{event.time}</span>
            </div>
          </div>

          {event.isUpcoming && event.registrationUrl && (
            <a 
              href={event.registrationUrl}
              className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors text-lg font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </a>
          )}
        </div>
        

      </section>

      {/* Schedule Section */}
      {event.schedule.length > 0 && (
        <section id="schedule" className="pt-16 pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light mb-8 text-center">Schedule</h2>
            
            <div className="space-y-4">
              {event.schedule.map((session, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 p-4 rounded-lg transition-all duration-300">
                    <div className="col-span-12 md:col-span-2 text-gray-400">
                      <span className="text-lg">{session.time}</span>
                    </div>
                    
                    <div className="col-span-12 md:col-span-10">
                      <h3 className="text-xl font-light mb-2 text-white">
                        {session.title}
                      </h3>
                      
                      {session.description && (
                        <p className="text-gray-400 mb-3">{session.description}</p>
                      )}
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span>{session.duration}</span>
                        <span className="px-3 py-1 bg-gray-900 rounded-full text-xs uppercase tracking-wider">
                          {session.type}
                        </span>
                      </div>
                      
                      {session.speakers && session.speakers.length > 0 && (
                        <div className="space-y-3">
                          {session.speakers.map((speakerName, idx) => {
                            const speaker = speakersByName[speakerName]
                            if (!speaker) return null
                            return (
                              <div key={idx} className="flex items-center gap-4">
                                <img 
                                  src={speaker.image || '/placeholder-speaker.svg'} 
                                  alt={speaker.name}
                                  className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-white">{speaker.name}</p>
                                  <p className="text-xs text-gray-400">{speaker.title}</p>
                                  <p className="text-xs text-gray-500">{speaker.company}</p>
                                  <div className="flex gap-3 mt-1">
                                    {speaker.linkedin && (
                                      <a 
                                        href={speaker.linkedin}
                                        className="text-gray-500 hover:text-blue-400 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${speaker.name} LinkedIn`}
                                      >
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                      </a>
                                    )}
                                    {speaker.twitter && (
                                      <a 
                                        href={speaker.twitter}
                                        className="text-gray-500 hover:text-blue-400 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${speaker.name} Twitter/X`}
                                      >
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                                        </svg>
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* Join the Community Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-4">Join the Community</h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Connect with builders, share ideas, and stay updated on upcoming events.
          </p>
          <a 
            href="https://discord.gg/dmgG2wkhSu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg 
              className="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span className="font-medium">Join our Discord</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 LLM Native BA <span className="ml-2">🇦🇷</span> All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}