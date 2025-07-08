'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ChevronDown, Linkedin, Menu, X, ExternalLink, Twitter, ArrowLeft, FileText } from 'lucide-react';

interface Speaker {
  name: string;
  title: string;
  company: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

interface Session {
  time: string;
  title: string;
  description?: string;
  duration: string;
  type: 'talk' | 'panel' | 'workshop' | 'networking' | 'break';
  speakers?: Speaker[];
}

const speakers: Speaker[] = [
  {
    name: "Lucas Petralli",
    title: "Building LLM-Native Community",
    company: "@LLM Native",
    linkedin: "https://www.linkedin.com/in/lucas-petralli/",
    twitter: "https://x.com/PetralliLucas",
    image: "/speakers/lucas-petralli.png"
  },
  {
    name: "Lautaro Gesuelli Pinto",
    title: "Building LLM-Native Community",
    company: "@LLM Native",
    linkedin: "https://www.linkedin.com/in/lgesuellip/",
    twitter: "https://x.com/lgesuelli_p",
    image: "/speakers/lautaro-gesuelli-pinto.png"
  },
  {
    name: "Lisandro Rezoagli",
    title: "Head of Technology",
    company: "@Lemon",
    linkedin: "https://www.linkedin.com/in/lrezoagli/",
    image: "/speakers/lisandro-rezoagli.png"
  },
  {
    name: "Axel German Bernardo Alderete",
    title: "Head of Infraestructure ",
    company: "@Lemon",
    linkedin: "https://www.linkedin.com/in/axel-german-bernardo-alderete-2a0361138/",
    image: "/speakers/axel-german-bernardo-alderete.png"
  },
  {
    name: "Tadeo Donegana Braunschweig",
    title: "AI Engineer",
    company: "@Lemon",
    linkedin: "https://www.linkedin.com/in/tadeo-donegana-braunschweig/",
    twitter: "https://x.com/tadeodonegana",
    image: "/speakers/tadeo-donegana-braunschweig.png"
  },
  {
    name: "Pablo Zivic",
    title: "Sr Expert Data Scientist at Mercado Libre",
    company: "@Mercado Libre",
    linkedin: "https://www.linkedin.com/in/pablozivic/",
    twitter: "https://x.com/ideasrapidas",
    image: "/speakers/pablo-zivic.png"
  },
  {
    name: "Ivanna Figueroa",
    title: "Cyber Security Engineer",
    company: "@Mercado Libre",
    linkedin: "https://www.linkedin.com/in/ivanna-a-figueroa/",
    twitter: "https://x.com/IvannaAFigueroa",
    image: "/speakers/ivanna-figueroa.png"
  },
  {
    name: "Nicolás Seguro",
    title: "Co-Founder - AI",
    company: "@Fardo",
    linkedin: "https://www.linkedin.com/in/nicolas-seguro/",
    image: "/speakers/nicolas-seguro.png"
  },
  {
    name: "Segundo D'Augerot",
    title: "Co-Founder - Marketing Manager",
    company: "@Fardo",
    linkedin: "https://www.linkedin.com/in/segundo-d-augerot-b6727223b/",
    image: "/speakers/segundo-d'augerot.png"
  },
  {
    name: " Yurman David",
    title: "Co-founder - Growth Strategy",
    company: "@Fardo",
    linkedin: "https://www.linkedin.com/in/yurman-david-5114081a4/",
    image: "/speakers/yurman-david.png"
  }, 
  {
    name: "Manuel Soria",
    title: "AI Engineer",
    company: "Stealth",
    linkedin: "https://www.linkedin.com/in/soriamanuel/",
    twitter: "https://x.com/manuelsoria_",
    image: "/speakers/manuel-soria.png"
  },
  {
    name: "Alejandro Crosa",
    title: "CTO",
    company: "@DaffyGiving",
    twitter: "https://x.com/gptcrosa",
    image: "/speakers/alejandro-crosa.png"
  },
  {
    name: "shroominic",
    title: "AI Engineer",
    company: "@Routstr",
    twitter: "https://x.com/shroominic",
    image: "/speakers/shroominic.png"
  },
  {
    name: "Francisco Ingham",
    title: "Co-founder & CTO",
    company: "@Field Data",
    linkedin: "https://www.linkedin.com/in/fpingham/",
    twitter: "https://twitter.com/fpingham",
    image: "/speakers/francisco-ingham.png"
  }, 
];

interface PastSpeaker {
  name: string;
  title: string;
  company: string;
  image?: string;
}

const pastSpeakers: PastSpeaker[] = [
  {
    name: "Lucas Petralli",
    title: "Building LLM-Native Community",
    company: "@LLM Native",
    image: "/speakers/lucas-petralli.png"
  },
  {
    name: "Lautaro Gesuelli Pinto",
    title: "Building LLM-Native Community",
    company: "@LLM Native",
    image: "/speakers/lautaro-gesuelli-pinto.png"
  },
  {
    name: "Francisco Ingham",
    title: "Co-founder & CTO",
    company: "@Field Data",
    image: "/speakers/francisco-ingham.png"
  },
  {
    name: "Tomás Hernando Kofman",
    title: "Co-founder & CEO",
    company: "@Not Diamond",
    image: "/speakers/tomas-hernando-kofman.png"
  },
  {
    name: "Nicolas Camara",
    title: "Co-founder & CTO",
    company: "@Firecrawl",
    image: "/speakers/nicolas-camara.png"
  },
  {
    name: "Akshat Agrawal",
    title: "Product + GTM",
    company: "@Windsurf",
    image: "/speakers/akshat-agrawal.png"
  },
  {
    name: "Facundo Palavecino",
    title: "Sr AI Engineer ",
    company: "@Brinta",
    image: "/speakers/facundo-palavecino.png"
  },
  {
    name: "Conrado Marturet",
    title: "Co-founder & CTO",
    company: "@Fairway",
    image: "/speakers/conrado-marturet.png"
  },
  {
    name: "Tadeo Donegana Braunschweig",
    title: "AI Engineer",
    company: "@Lemon",
    image: "/speakers/tadeo-donegana-braunschweig.png"
  },
  {
    name: "Ezequiel Sculli",
    title: "Founder & CTO/CPO",
    company: "@Darwin AI",
    image: "/speakers/ezequiel-sculli.png"
  },
  {
    name: "Marcos Lilljedahl",
    title: "Senior Software and Infrastructure Engineer",
    company: "@Dagger",
    image: "/speakers/marcos-lilljedahl.png"
  },
  {
    name: "Daniel Quelali",
    title: "AI Engineer",
    company: "@Self Employed",
    image: "/speakers/daniel-quelali.png"
  },
  {
    name: "Leonel Bianchi",
    title: "AI Lead",
    company: "@Wúru",
  },
];

const schedule: Session[] = [
  {
    time: "18:00",
    title: "Reception & Check-in",
    duration: "45 min",
    type: "networking",
    description: "Grab a drink, and meet fellow builders."
  },
  {
    time: "18:45",
    title: "Welcome & Community Introduction",
    duration: "15 min",
    type: "talk",
    description: "Opening remarks and community vision",
    speakers: [speakers[0], speakers[1]],
  },
  {
    time: "19:00",
    title: "Building scalable MCP systems in production",
    duration: "30 min",
    type: "talk",
    speakers: [speakers[2], speakers[3], speakers[4]],
  },
  {
    time: "19:30",
    title: "Vibe Coding: Tricks to hold an Agent on a short leash",
    duration: "15 min",
    type: "talk",
    speakers: [speakers[5]],
  },
  {
    time: "19:45",
    title: "Insecure Agents: How to build safe and secure LLM-based applications",
    duration: "15 min",
    type: "talk",
    speakers: [speakers[6]],
  },
  {
    time: "20:00",
    title: "🍸 Break",
    duration: "15 min",
    type: "break"
  },
  {
    time: "20:15",
    title: "Optimize your brand visibility in AI search engines",
    duration: "15 min",
    type: "talk",
    speakers: [speakers[7], speakers[8], speakers[9]],
  },
  {
    time: "20:30",
    title: "Making Generative Media Useful",
    duration: "15 min",
    type: "talk",
    speakers: [speakers[10]],
  },
  {
    time: "20:45",
    title: "The Case for Local AI Models",
    duration: "15 min",
    type: "talk",
    speakers: [speakers[11]],
  },
  {
    time: "21:00",
    title: "A Decentralised LLM Routing Marketplace",
    duration: "15 min",
    type: "talk",
    speakers: [speakers[12]],
  },
  {
    time: "21:15",
    title: "LLMnative evals: the winning workflow",
    duration: "15 min",
    type: "talk",
    speakers: [speakers[13]],
  },
  {
    time: "21:30",
    title: " 🍤 Finger Food & Networking",
    duration: "45 min",
    type: "networking",
    description: "Enjoy finger food while discussing the future of AI with the community"
  },
  {
    time: "22:30",
    title: "⏸️ Closing Remarks",
    duration: "5 min",
    type: "talk",
  },
];

export default function EventPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm' : ''
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-lg font-light">
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <Link href="/" className="flex items-center gap-2 hover:text-gray-400 transition-colors">
                <ArrowLeft size={16} />
                Back
              </Link>
              <Link href="/#manifesto" className="flex items-center gap-2 hover:text-gray-400 transition-colors">
                <FileText size={16} />
                Manifesto
              </Link>
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('schedule')} className="hover:text-gray-400 transition-colors">Schedule</button>
              <button onClick={() => scrollToSection('past-speakers')} className="hover:text-gray-400 transition-colors">Past Speakers</button>
              <a 
                href="https://lu.ma/6t28qlia"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
              >
                Register
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
              <Link href="/" className="flex items-center gap-2 hover:text-gray-400 transition-colors">
                <ArrowLeft size={16} />
                Back
              </Link>
              <Link href="/#manifesto" className="flex items-center gap-2 hover:text-gray-400 transition-colors">
                <FileText size={16} />
                Manifesto
              </Link>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-gray-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('schedule')} className="block w-full text-left hover:text-gray-400 transition-colors">Schedule</button>
              <button onClick={() => scrollToSection('past-speakers')} className="block w-full text-left hover:text-gray-400 transition-colors">Past Speakers</button>
              <a 
                href="https://discord.gg/dmgG2wkhSu"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 px-4 py-2 bg-[#5865F2] text-white rounded-full text-center hover:bg-[#4752C4] transition-colors flex items-center gap-2 justify-center"
              >
                <svg 
                  className="w-4 h-4" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Discord
              </a>
              <a 
                href="https://lu.ma/llmnative-ba"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 px-4 py-2 bg-white text-black rounded-full text-center hover:bg-gray-100 transition-colors"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-gray-500 mb-6 text-sm uppercase tracking-wider">Buenos Aires • Argentina</p>
          <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-tight">
            LLM Native
          </h1>
          <h2 className="text-4xl md:text-6xl font-light mb-8 text-gray-400">
            Community Hours @Lemon
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
          ​Come meet, mingle, and tackle real-world technical challenges, with a special focus on meaningful, production-grade experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 mb-16 justify-center items-center text-lg">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar size={18} className="text-gray-600" />
              <span>July 11, 2025</span>
            </div>
            <div className="hidden sm:block text-gray-600">•</div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock size={18} className="text-gray-600" />
              <span>18:00 - 22:30</span>
            </div>
          </div>

          <div className="space-y-4 text-center mb-8">
            <div>
              <a 
                href="https://lu.ma/6t28qlia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-white text-black font-light text-lg rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Register Now
              </a>
            </div>
            
            <div className="text-gray-500 text-sm text-center">
              <a 
                href="https://lu.ma/user/llmnative"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors underline underline-offset-4"
              >
                View all events
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Animated Divider */}
      <div className="flex justify-center items-center h-16">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full animate-ping" style={{animationDelay: '300ms'}}></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping" style={{animationDelay: '600ms'}}></div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="pt-8 pb-12 px-4 bg-gray-950/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-8">About</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
          This event is part of the <a href="https://llmnative.dev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">llmnative.dev</a> community, 
          co-organized with Lemon.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
          We bring together founders, engineers, researchers and AI enthusiasts building frontier products using Large Language Models.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-8 text-center">Schedule</h2>
          
          <div className="space-y-1">
            {schedule.map((session, index) => (
              <div 
                key={index} 
                className={`border-b border-gray-900 py-6 hover:bg-gray-950/50 transition-colors duration-200 ${
                  session.type === 'break' || session.type === 'networking' ? 'opacity-60' : ''
                }`}
              >
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-2">
                    <div className="text-lg text-gray-500">{session.time}</div>
                  </div>
                  
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="text-xl font-light mb-2">{session.title}</h3>
                    {session.description && (
                      <p className="text-gray-500 text-sm leading-relaxed">{session.description}</p>
                    )}
                    
                    {session.speakers && session.speakers.length > 0 && (
                      <div className="mt-4 space-y-3">
                        {session.speakers.map((speaker, speakerIndex) => (
                          <div key={speakerIndex} className="flex items-start gap-3 p-3 bg-gray-950/50 rounded-lg">
                            <img 
                              src={speaker.image || '/placeholder-speaker.svg'} 
                              alt={speaker.name}
                              className="w-12 h-12 rounded-full bg-gray-900 flex-shrink-0"
                            />
                            <div className="flex-grow">
                              <div className="font-medium text-white">{speaker.name}</div>
                              <div className="text-sm text-gray-400">{speaker.title}</div>
                              <div className="text-sm text-gray-500 mb-2">{speaker.company}</div>
                              <div className="flex gap-3">
                                {speaker.linkedin && (
                                  <a 
                                    href={speaker.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-400 transition-colors"
                                    aria-label={`${speaker.name} LinkedIn`}
                                  >
                                    <Linkedin size={16} />
                                  </a>
                                )}
                                {speaker.twitter && (
                                  <a 
                                    href={speaker.twitter} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-400 transition-colors"
                                    aria-label={`${speaker.name} Twitter`}
                                  >
                                    <Twitter size={16} />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="col-span-12 md:col-span-3 md:text-right">
                    <span className={`text-sm ${
                      session.type === 'talk' ? 'text-gray-400' :
                      session.type === 'panel' ? 'text-gray-400' :
                      session.type === 'workshop' ? 'text-gray-400' :
                      'text-gray-600'
                    }`}>
                      {session.type === 'networking' ? 'Networking' : 
                       session.type === 'break' ? 'Break' :
                       session.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Move arrow inside the content container */}
          <div className="flex justify-center mt-16">
            <div className="animate-bounce">
              <ChevronDown size={32} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Past Speakers Section */}
      <section id="past-speakers" className="py-12 px-4 bg-gray-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-6 text-center">Past Speakers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastSpeakers.map((speaker, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-950/30 rounded-lg">
                <img 
                  src={speaker.image || '/placeholder-speaker.svg'} 
                  alt={speaker.name}
                  className="w-16 h-16 rounded-full bg-gray-900 flex-shrink-0 object-cover"
                />
                <div className="flex-grow">
                  <h4 className="font-medium text-white">{speaker.name}</h4>
                  <p className="text-sm text-gray-400">{speaker.title}</p>
                  <p className="text-sm text-gray-500">{speaker.company}</p>
                </div>
              </div>
            ))}
            
            {/* And More Card */}
            <div className="group relative flex items-center justify-center p-4 bg-gray-950/30 rounded-lg border border-gray-900 hover:border-gray-700 transition-all duration-300 cursor-pointer min-h-[120px]">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-600 group-hover:text-gray-400 transition-colors duration-300 mb-2">
                  +
                </div>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  and more soon
                </p>
                <p className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Amazing speakers from past events
                </p>
              </div>
              
              {/* Animated background effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/0 to-gray-800/0 group-hover:from-gray-900/20 group-hover:to-gray-800/20 rounded-lg transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">Join the Community</h2>
          <a 
            href="https://discord.gg/dmgG2wkhSu" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
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
      <footer className="mt-16 pt-8 border-t border-gray-900">
          <div className="text-center">
            <span className="text-gray-500 text-sm">© 2025 LLM Native BA <span className="ml-2">🇦🇷</span> All rights reserved.</span>
          </div>
        </footer>
    </div>
  );
}