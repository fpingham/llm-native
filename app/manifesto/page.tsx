'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function ManifestoPage() {
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm' : ''
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="text-lg font-light hover:text-gray-300 transition-colors"
            >
              ← Back
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <Link 
                href="/events"
                className="text-gray-300 hover:text-white transition-colors"
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
                href="/events"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Events
              </Link>
              <a 
                href="https://discord.gg/dmgG2wkhSu"
                className="block mt-4 px-4 py-2 bg-[#5865F2] text-white rounded-full text-center hover:bg-[#4752C4] transition-colors"
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4 tracking-tight">
            LLM Native
          </h1>
          <div className="text-gray-500 text-lg">Buenos Aires · Argentina</div>
        </header>

        <main>
          <section className="bg-gray-950/30 backdrop-blur-sm border border-gray-900/50 rounded-lg p-8">
            <h2 className="text-2xl font-mono mb-6 text-gray-300">
              <i className="fas fa-code text-gray-600"></i> &gt; manifesto
            </h2>
            <div className="space-y-6 text-gray-300">
              <h3 className="text-3xl font-light text-white mb-4">The LLM Native Manifesto</h3>
              <h4 className="text-xl font-medium text-white mb-3">The Next Wave of Automation</h4>

              <p className="leading-relaxed">
                The Industrial Revolution drove massive productivity gains across all industries but trapped
                workers in factories with mechanical labor. As automation spread, it freed humans from physical toil. Now
                we see the same cycle: the Digital Revolution boosted productivity but chained workers to screens. Just as mechanical
                automation freed factory workers, AI is now automating routine digital work. The pattern is
                clear: technological revolutions first create new repetitive forms of labor, then automation
                eliminates them.
              </p>

              <p className="leading-relaxed">
                Humans excel at building relationships, creative work, expert decision-making, and design. Yet
                we waste hours on digital busywork and administrative overhead. We need
                tools that eliminate repetitive digital tasks so people can do meaningful work. Technology
                should adapt to humans, not force humans to adapt to it.
              </p>

              <p className="leading-relaxed">
                Large Language Models mark a new era of cognitive tools - enhancing human intelligence, not
                replacing it. Success hinges on design that feels natural and flows with human thought. In this
                domain, taste is the ultimate currency - the difference between tools that enhance and those
                that hinder. The technology should act as an extension of mind itself, amplifying our work
                without demanding attention.
              </p>

              <h4 className="text-xl font-medium text-white mb-3 mt-8">The LLM Native Organization</h4>
              <p className="leading-relaxed">
                A new model of work demands organizations built around cognitive tools from the ground up. The
                LLM native organization works on two levels:
              </p>

              <ul className="space-y-3 my-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">→</span>
                  <div>
                    <strong className="text-white">Internal Systems</strong>: LLMs form an intelligent layer between
                    workers and digital systems - automating information flow and analysis across the
                    organization.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">→</span>
                  <div>
                    <strong className="text-white">External Products</strong>: Intelligence weaves throughout the experience,
                    handling complexity invisibly while flowing naturally with user actions.
                  </div>
                </li>
              </ul>

              <h4 className="text-xl font-medium text-white mb-3 mt-8">Core Purpose</h4>
              <p className="leading-relaxed">
                Our mission is clear: eliminate repetitive digital work that consumes valuable time and
                attention, helping professionals to focus on what matters - creating quality products and services
                that serve their communities.
              </p>
            </div>
          </section>

          <section className="text-center mt-12">
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
