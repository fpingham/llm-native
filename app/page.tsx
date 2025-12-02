'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { TestimonialCarousel } from '@/app/components/TestimonialCarousel';
import { PhotoCarousel } from '@/app/components/PhotoCarousel';
import { pastSpeakers, testimonials, photos } from '@/app/data/events';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-lg font-light">
              
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <Link 
                href="/manifesto"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Manifesto
              </Link>
              <Link 
                href="/events"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Events
              </Link>
              <a 
                href="https://discord.gg/ZPRJ4H5y"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full transition-colors ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  className="w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span>Discord</span>
              </a>
            </div>

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
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="/manifesto"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-2 text-gray-400 hover:text-white"
              >
                Manifesto
              </Link>
              <Link 
                href="/events"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-2 text-gray-400 hover:text-white"
              >
                Events
              </Link>
              <a 
                href="https://discord.gg/dmgG2wkhSu"
                className="block mt-4 px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full text-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12">
        <header className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-8 tracking-tight">
            LLM Native
          </h1>
          <div className="text-gray-500 text-lg mb-16">Buenos Aires · Argentina</div>
          
          {/* Manifesto Preview */}
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-gray-400 text-base leading-relaxed italic">
              "[…] Large Language Models mark a new era of cognitive tools - enhancing human intelligence, not replacing it. Success hinges on design that feels natural and flows with human thought. In this domain, taste is the ultimate currency - the difference between tools that enhance and those that hinder."
            </blockquote>
            <Link 
              href="/manifesto"
              className="inline-flex items-center gap-2 mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors group"
            >
              <span className="font-mono">&gt;</span>
              <span>Read the manifesto</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </header>

        <main>
                                {/* Events Section */}
           <section id="events" className="my-16">
             <h2 className="text-3xl font-light text-center mb-6">Events</h2>
             <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
               We bring together founders, engineers, researchers and AI enthusiasts building frontier products using Large Language Models.
             </p>
             
             {/* Past Speakers Grid - Smaller */}
             <div className="mb-8">
               <h3 className="text-xl font-light text-center mb-8 text-gray-400">Past Speakers</h3>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                 {pastSpeakers.map((speaker, idx) => (
                   <div key={idx} className="text-center group">
                     <div className="relative mb-3 mx-auto w-16 h-16 rounded-full overflow-hidden bg-gray-900">
                       <img
                         src={speaker.image || '/placeholder-speaker.svg'}
                         alt={speaker.name}
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                       />
                     </div>
                     <h4 className="text-sm font-medium text-gray-300">{speaker.name}</h4>
                     <p className="text-xs text-gray-400">{speaker.title}</p>
                     <p className="text-xs text-gray-500">{speaker.company}</p>
                   </div>
                 ))}
               </div>
             </div>
             
             {/* View all events link */}
             <div className="text-center mt-8">
               <Link 
                 href="/events"
                 className="inline-flex items-center gap-2 mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors group"
               >
                 <span className="font-mono">&gt;</span>
                 <span>View all events</span>
                 <span className="group-hover:translate-x-1 transition-transform">→</span>
               </Link>
             </div>
                     </section>

           {/* Testimonials Section */}
           <section id="testimonials" className="my-16">
             <h2 className="text-3xl font-light text-center mb-8">What People Say</h2>
             <TestimonialCarousel testimonials={testimonials} />
           </section>

           {/* Photo Gallery Section */}
           <section id="photos" className="my-16">
             <h2 className="text-3xl font-light text-center mb-8">Community Moments</h2>
             <PhotoCarousel photos={photos} />
           </section>

           {/* Join the Community Section */}
           <section className="my-24 text-center">
             <h2 className="text-3xl font-light text-center mb-6">Join the Community</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
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
          </section>
        </main>
        
        <footer className="mt-24 pt-8 border-t border-gray-900">
          <div className="text-center">
            <span className="text-gray-500 text-sm">© 2025 LLM Native BA <span className="ml-2">🇦🇷</span> All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
