import { Event, Speaker, Testimonial, Photo } from '@/app/types/events';

// Unified speakers array - use name as key when referencing in events
export const allSpeakers: Speaker[] = [
  // Current/Recent speakers - shown on landing
  {
    name: "Lucas Petralli",
    title: "Building LLM-Native Community",
    company: "@LLM Native",
    linkedin: "https://www.linkedin.com/in/lucas-petralli/",
    twitter: "https://x.com/PetralliLucas",
    image: "/speakers/lucas-petralli.png",
    showOnLanding: true
  },
  {
    name: "Lautaro Gesuelli Pinto",
    title: "Building LLM-Native Community",
    company: "@LLM Native",
    linkedin: "https://www.linkedin.com/in/lgesuellip/",
    twitter: "https://x.com/lgesuelli_p",
    image: "/speakers/lautaro-gesuelli-pinto.png",
    showOnLanding: true
  },
  {
    name: "Francisco Ingham",
    title: "Co-founder & CTO",
    company: "@Field Data",
    linkedin: "https://www.linkedin.com/in/fpingham/",
    twitter: "https://twitter.com/fpingham",
    image: "/speakers/francisco-ingham.png",
    showOnLanding: true
  },
  {
    name: "Tomás Antonini",
    title: "Founding CoS",
    company: "@Not Diamond",
    image: "/speakers/tomás-antonini.png",
    linkedin: "https://www.linkedin.com/in/tomasantonini/",
    showOnLanding: true
  },
  {
    name: "Tomás Hernando Kofman",
    title: "Co-founder & CEO",
    company: "@Not Diamond",
    image: "/speakers/tomas-hernando-kofman.png",
    showOnLanding: true
  },
  {
    name: "Nicolas Camara",
    title: "Co-founder & CTO",
    company: "@Firecrawl",
    image: "/speakers/nicolas-camara.png",
    showOnLanding: true
  },
  {
    name: "Akshat Agrawal",
    title: "Product + GTM",
    company: "@Windsurf",
    image: "/speakers/akshat-agrawal.png",
    showOnLanding: true
  },
  {
    name: "Facundo Palavecino",
    title: "Sr AI Engineer ",
    company: "@Brinta",
    image: "/speakers/facundo-palavecino.png",
    showOnLanding: true
  },
  {
    name: "Conrado Marturet",
    title: "Co-founder & CTO",
    company: "@Fairway",
    image: "/speakers/conrado-marturet.png",
    showOnLanding: true
  },
  {
    name: "Ezequiel Sculli",
    title: "Founder & CTO/CPO",
    company: "@Darwin AI",
    image: "/speakers/ezequiel-sculli.png",
    showOnLanding: true
  },
  {
    name: "Marcos Lilljedahl",
    title: "Senior Software and Infrastructure Engineer",
    company: "@Dagger",
    image: "/speakers/marcos-lilljedahl.png",
    showOnLanding: true
  },
  {
    name: "Daniel Quelali",
    title: "AI Engineer",
    company: "@Self Employed",
    image: "/speakers/daniel-quelali.png",
    showOnLanding: true
  },
  {
    name: "Leonel Bianchi",
    title: "AI Lead",
    company: "@Wúru",
  },
  {
    name: "Alejandro Crosa",
    title: "CTO",
    company: "@DaffyGiving",
    twitter: "https://x.com/gptcrosa",
    image: "/speakers/alejandro-crosa.png",
    showOnLanding: true
  },
  {
    name: "Pablo Zivic",
    title: "Sr Expert Data Scientist at Mercado Libre",
    company: "@Mercado Libre",
    linkedin: "https://www.linkedin.com/in/pablozivic/",
    twitter: "https://x.com/ideasrapidas",
    image: "/speakers/pablo-zivic.png",
    showOnLanding: true
  },
  {
    name: "Lisandro Rezoagli",
    title: "Head of Technology",
    company: "@Lemon",
    linkedin: "https://www.linkedin.com/in/lrezoagli/",
    image: "/speakers/lisandro-rezoagli.png",
    showOnLanding: true
  },
  {
    name: "Tadeo Donegana Braunschweig",
    title: "AI Engineer",
    company: "@TiendaNube",
    linkedin: "https://www.linkedin.com/in/tadeo-donegana-braunschweig/",
    twitter: "https://x.com/tadeodonegana",
    image: "/speakers/tadeo-donegana-braunschweig.png",
    showOnLanding: true
  },
  {
    name: "Ivanna Figueroa",
    title: "Cyber Security Engineer",
    company: "@Mercado Libre",
    linkedin: "https://www.linkedin.com/in/ivanna-a-figueroa/",
    twitter: "https://x.com/IvannaAFigueroa",
    image: "/speakers/ivanna-figueroa.png",
    showOnLanding: true
  },
  {
    name: "Nicolás Seguro",
    title: "Co-Founder - AI",
    company: "@Fardo",
    linkedin: "https://www.linkedin.com/in/nicolas-seguro/",
    image: "/speakers/nicolas-seguro.png",
    showOnLanding: true
  },
  {
    name: "Segundo D'Augerot",
    title: "Co-Founder - Marketing Manager",
    company: "@Fardo",
    linkedin: "https://www.linkedin.com/in/segundo-d-augerot-b6727223b/",
    image: "/speakers/segundo-d'augerot.png"
  },
  {
    name: "Yurman David",
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
    image: "/speakers/manuel-soria.png",
    showOnLanding: true
  },
  {
    name: "shroominic",
    title: "AI Engineer",
    company: "@Routstr",
    twitter: "https://x.com/shroominic",
    image: "/speakers/shroominic.png",
    showOnLanding: true
  },
  {
    name: "Axel German Bernardo Alderete",
    title: "Head of Infrastructure",
    company: "@Lemon",
    linkedin: "https://www.linkedin.com/in/axel-german-bernardo-alderete-2a0361138/",
    image: "/speakers/axel-german-bernardo-alderete.png",
    showOnLanding: false
  },
  // November 2025 Meetup @ Mercado Libre - Randomized order
  {
    name: "Isaac Guillermo Gaete",
    title: "AI Engineer",
    company: "@TiendaNube",
    image: "/speakers/isaac-guillermo-gaete.png",
    showOnLanding: true
  },
  {
    name: "Federico Barabasch",
    title: "Sr Data & Analytics Expert",
    company: "@Mercado Libre",
    image: "/speakers/federico-barabasch.png",
    showOnLanding: true
  },
  {
    name: "Lucas Agustín Vittor",
    title: "AI Researcher",
    company: "@Harvard",
    image: "/speakers/lucas-agustin-vittor.png",
    showOnLanding: true
  },
  {
    name: "Pablo Zamudio",
    title: "ML Sr Expert",
    company: "@Mercado Libre",
    image: "/speakers/pablo-zamudio.png",
    showOnLanding: true
  },
  {
    name: "Pablo Lorenzatto",
    title: "CTO & Co-Founder",
    company: "@MUTT DATA",
    image: "/speakers/pablo-lorenzatto.png",
    showOnLanding: true
  },
  {
    name: "Javier Cardoso",
    title: "Sr Software Manager",
    company: "@MercadoLibre",
    image: "/speakers/javier-cardoso.png",
    showOnLanding: true
  },
  // January 2026 - LLM Native PDE @ Punta Tech Week
  {
    name: "Miguel Langone",
    title: "Co-founder & CTO",
    company: "@Horizon",
    linkedin: "https://www.linkedin.com/in/miguellangone/",
    image: "/speakers/miguel-langone.png",
    showOnLanding: true
  },
  {
    name: "Santiago Castillo",
    title: "Head of AI and ML",
    company: "@Akua",
    linkedin: "https://www.linkedin.com/in/santiago-castillo-austt/",
    image: "/speakers/santiago-castillo.png",
    showOnLanding: true
  },
  {
    name: "Javier Quincke",
    title: "VP of Engineering & AI",
    company: "@Braven",
    linkedin: "https://www.linkedin.com/in/javier-quincke-44849312b/",
    image: "/speakers/javier-quincke.png",
    showOnLanding: true
  },
  // April 2026 - Buenos Aires LangChain Meetup @ MODO
  {
    name: "Alessandro Paolini",
    title: "Software Engineer",
    company: "@TiendaNube",
    linkedin: "https://www.linkedin.com/in/alessandropaolini/",
    image: "/speakers/alessandro-paolini.png",
    showOnLanding: true
  },
];

// Helper function to get speakers by names
export const getSpeakersByNames = (names: string[]): Speaker[] => {
  return names
    .map(name => allSpeakers.find(speaker => speaker.name === name))
    .filter((speaker): speaker is Speaker => speaker !== undefined);
};

// Get speakers for the current event (Jan 2025)
export const currentEventSpeakers = getSpeakersByNames([
  "Lucas Petralli",
  "Lautaro Gesuelli Pinto",
  "Lisandro Rezoagli",
  "Axel German Bernardo Alderete",
  "Tadeo Donegana Braunschweig",
  "Pablo Zivic",
  "Ivanna Figueroa",
  "Nicolás Seguro",
  "Segundo D'Augerot",
  "Yurman David",
  "Manuel Soria",
  "Alejandro Crosa",
  "shroominic",
  "Francisco Ingham"
]);

// Backwards compatibility exports
export const speakers = currentEventSpeakers;
export const pastSpeakers = allSpeakers.filter(speaker => speaker.showOnLanding);

export const events: Event[] = [
  {
    id: "langchain-meetup-ba-apr-2026",
    slug: "langchain-meetup-ba-apr-2026",
    title: "LangChain Meetup @ MODO",
    date: "April 10, 2026",
    time: "19:30 - 23:00",
    location: "MODO, Buenos Aires",
    description: "The first official LangChain Meetup in Argentina, co-organized with the LangChain Community and hosted at MODO. A casual gathering to share questions and hands-on experiences with the LangChain stack, with a focus on LangGraph, LangSmith, and Deep Agents.",
    speakers: getSpeakersByNames([
      "Lucas Petralli",
      "Tadeo Donegana Braunschweig",
      "Alessandro Paolini",
      "Javier Quincke"
    ]),
    isUpcoming: false,
    registrationUrl: "https://luma.com/kr0zn9s3",
    schedule: [
      {
        time: "19:30",
        title: "🏠 Doors Open & Reception",
        duration: "15 min",
        type: "networking",
        description: "Grab a drink, find a seat, and meet fellow builders."
      },
      {
        time: "19:45",
        title: "Welcome & Intros",
        duration: "25 min",
        type: "talk",
        description: "Opening remarks and a round of introductions.",
        speakers: ["Lucas Petralli", "Tadeo Donegana Braunschweig"]
      },
      {
        time: "20:10",
        title: "LangChain Stack @ TiendaNube",
        duration: "35 min",
        type: "talk",
        description: "How TiendaNube runs the LangChain stack in production, plus advanced customization.",
        speakers: ["Tadeo Donegana Braunschweig", "Alessandro Paolini"]
      },
      {
        time: "20:45",
        title: "Understanding Deep Agents",
        duration: "15 min",
        type: "talk",
        description: "Concepts, use cases, and best practices for building Deep Agents.",
        speakers: ["Javier Quincke"]
      },
      {
        time: "21:00",
        title: "🍤 Networking",
        duration: "2 hr",
        type: "networking",
        description: "Keep the conversation going over drinks and snacks."
      }
    ]
  },
  {
    id: "claude-code-hack-night-jan-2026",
    slug: "claude-code-hack-night-jan-2026",
    title: "Claude Code Hack Night",
    date: "January 20, 2026",
    time: "19:00 - 23:00",
    location: "Buenos Aires",
    description: "We're at a breaking point in software development: code is no longer the bottleneck. The magic is now in the workflows (planning, testing, and compounding). A hands-on hack night to Claude Code together: bring a project, trade setups with devs shipping daily, and dial in your plugins, skills, hooks, and md files over pizza and Monster. 🚢",
    speakers: getSpeakersByNames([
      "Francisco Ingham"
    ]),
    isUpcoming: false,
    registrationUrl: "https://luma.com/tz15fchl",
    schedule: [
      {
        time: "19:00",
        title: "🍕 Doors, Pizza & Setup",
        duration: "30 min",
        type: "networking",
        description: "Grab a slice and a Monster, find a spot, and set up your project."
      },
      {
        time: "19:30",
        title: "Kickoff",
        duration: "15 min",
        type: "talk",
        description: "Why code is no longer the bottleneck, and what we're hacking on tonight.",
        speakers: ["Francisco Ingham"]
      },
      {
        time: "19:45",
        title: "Claude Code Hacking",
        duration: "3 hr",
        type: "workshop",
        description: "Bring a project and Claude Code together: your own stuff, a side quest at work, open source, whatever. Trade setups and dial in your plugins, skills, hooks, and md files."
      },
      {
        time: "22:45",
        title: "Demos & Hangout",
        duration: "15 min",
        type: "networking",
        description: "Show what you shipped and keep the conversation going."
      }
    ]
  },
  {
    id: "llm-native-pde-jan-2026",
    slug: "llm-native-pde-jan-2026",
    title: "LLM Native @ Punta Tech Week",
    date: "January 15, 2026",
    time: "20:00 - 23:30",
    location: "Punta del Este, Uruguay",
    locationTagline: "Punta del Este • Uruguay",
    description: "LLM Native's first edition in Punta del Este, the only technical space for AI engineers at Punta Tech Week. Sponsored by AWS and hosted by Horizon, this invite-only gathering brought together founders, engineers, and practitioners shipping AI-first products for high-signal lightning talks on agents, coding workflows, and retrieval, followed by an informal dinner.",
    speakers: getSpeakersByNames([
      "Miguel Langone",
      "Francisco Ingham",
      "Santiago Castillo",
      "Javier Quincke"
    ]),
    isUpcoming: false,
    registrationUrl: "https://luma.com/xo6qq2ci",
    schedule: [
      {
        time: "20:00",
        title: "🏠 Reception & Check-in",
        duration: "30 min",
        type: "networking",
        description: "Grab a drink and meet fellow builders."
      },
      {
        time: "20:30",
        title: "AI-Ready Codebases: Accelerating with Spec-Driven Development",
        duration: "20 min",
        type: "talk",
        description: "Why AI systems need AI-ready codebases. This talk covers how Spec-Driven Development turns specifications into a shared contract between humans and LLMs, reducing ambiguity and significantly increasing development speed and reliability.",
        speakers: ["Miguel Langone"]
      },
      {
        time: "20:50",
        title: "Towards the Ultimate Coding Workflow",
        duration: "20 min",
        type: "talk",
        description: "The past few months have marked a turning point in AI-assisted development. The combination of Opus 4.5, new versions of Claude Code and parallel background agents has redefined what's possible. We'll explore the stack, plugins and workflows that can help us best leverage this shift to drastically accelerate development teams while improving code quality.",
        speakers: ["Francisco Ingham"]
      },
      {
        time: "21:10",
        title: "High-Code Agents at Low-Code Speed: Scaling with a Modern AI Stack",
        duration: "20 min",
        type: "talk",
        description: "Choosing between the simplicity of n8n-like tools and the control of a high-code stack is often a trade-off between speed and capability. We'll dive into how a modern ecosystem, leveraging LangChain, Agentcore, and Claude Code, eliminates this friction, providing the orchestration, infrastructure, and developer velocity to launch and scale high-code agents with the ease of visual automation platforms, without sacrificing architectural control.",
        speakers: ["Santiago Castillo"]
      },
      {
        time: "21:30",
        title: "Harnessing deep agents for retrieval",
        duration: "20 min",
        type: "talk",
        description: "We'll demonstrate how deep agents can bypass traditional semantic search when retrieving information from large document volumes, using iterative reasoning and basic tools instead of complex RAG pipelines with embeddings and vector stores. This agentic approach sidesteps challenges like maintaining vector databases, tuning retrieval parameters, and managing chunking strategies, achieving comparable or superior results through direct reasoning, much like a skilled researcher navigating a library.",
        speakers: ["Javier Quincke"]
      },
      {
        time: "21:50",
        title: "🚢 Dinner & Chat",
        duration: "100 min",
        type: "networking",
        description: "Short and sweet talks, then ample time to connect over a nice, informal dinner."
      }
    ]
  },
  {
    id: "llm-native-nov-2025",
    slug: "llm-native-nov-2025",
    title: "LLM Native @ Mercado Libre",
    date: "November 28, 2025",
    time: "18:00 - 22:30",
    location: "Mercado Libre, Buenos Aires",
    description: "LLM Native meetup hosted at Mercado Libre featuring community and guest speakers sharing insights on AI agents, MCP platforms, and LLM workflows in production.",
    speakers: getSpeakersByNames([
      "Lucas Petralli",
      "Lautaro Gesuelli Pinto",
      "Francisco Ingham",
      "Isaac Guillermo Gaete",
      "Lucas Agustín Vittor",
      "Pablo Lorenzatto",
      "Federico Barabasch",
      "Pablo Zamudio",
      "Javier Cardoso"
    ]),
    isUpcoming: false,
    registrationUrl: "https://lu.ma/kpeqi6q7",
    schedule: [
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
        speakers: ["Lucas Petralli", "Lautaro Gesuelli Pinto", "Francisco Ingham"]
      },
      {
        time: "19:00",
        title: "Nuvemshop Agent AI solution for conversational commerce",
        duration: "20 min",
        type: "talk",
        speakers: ["Isaac Guillermo Gaete"]
      },
      {
        time: "19:20",
        title: "Doing Science at Scale with LLMs",
        duration: "20 min",
        type: "talk",
        speakers: ["Lucas Agustín Vittor"]
      },
      {
        time: "19:40",
        title: "Building Workflows with Uncensored LLMs in Sensitive Environments",
        duration: "20 min",
        type: "talk",
        speakers: ["Pablo Lorenzatto"]
      },
      {
        time: "20:00",
        title: "🍸 Break",
        duration: "15 min",
        type: "break"
      },
      {
        time: "20:15",
        title: "Coding Agents: Evolving from Vibe Coding to Spec-Driven Development",
        duration: "20 min",
        type: "talk",
        speakers: ["Federico Barabasch"]
      },
      {
        time: "20:35",
        title: "MCP Platform: Building MCPs that are Easy, Secure, and Scalable",
        duration: "20 min",
        type: "talk",
        speakers: ["Pablo Zamudio"]
      },
      {
        time: "20:55",
        title: "Massive Ops: Solving Repetitive Tasks Before They Become Technical Debt",
        duration: "20 min",
        type: "talk",
        speakers: ["Javier Cardoso"]
      },
      {
        time: "21:15",
        title: "🍤 Finger Food & Networking",
        duration: "75 min",
        type: "networking",
        description: "Enjoy finger food while discussing the future of AI with the community"
      },
      {
        time: "22:30",
        title: "⏸️ Closing Remarks",
        duration: "5 min",
        type: "talk"
      }
    ]
  },
  {
    id: "llm-native-jul-2025",
    slug: "llm-native-jul-2025",
    title: "Community Hours @Lemon",
    date: "July 11, 2025",
    time: "18:00 - 22:30",
    location: "Buenos Aires",
    description: "​This event is part of the llmnative.dev community, co-organized with @Lemon. It brings together founders, engineers, researchers, and AI enthusiasts building frontier products using LLMs.",
    speakers: getSpeakersByNames([
      "Lucas Petralli",
      "Lautaro Gesuelli Pinto",
      "Lisandro Rezoagli",
      "Axel German Bernardo Alderete",
      "Tadeo Donegana Braunschweig",
      "Pablo Zivic",
      "Ivanna Figueroa",
      "Nicolás Seguro",
      "Segundo D'Augerot",
      "Yurman David",
      "Manuel Soria",
      "Alejandro Crosa",
      "shroominic",
      "Francisco Ingham"
    ]),
    isUpcoming: false,
    registrationUrl: "https://lu.ma/6t28qlia",
    schedule: [
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
        speakers: ["Lucas Petralli", "Lautaro Gesuelli Pinto"]
      },
      {
        time: "19:00",
        title: "Building scalable MCP systems in production",
        duration: "30 min",
        type: "talk",
        speakers: ["Lisandro Rezoagli", "Axel German Bernardo Alderete", "Tadeo Donegana Braunschweig"]
      },
      {
        time: "19:30",
        title: "Vibe Coding: Tricks to hold an Agent on a short leash",
        duration: "15 min",
        type: "talk",
        speakers: ["Pablo Zivic"]
      },
      {
        time: "19:45",
        title: "Insecure Agents: How to build safe and secure LLM-based applications",
        duration: "15 min",
        type: "talk",
        speakers: ["Ivanna Figueroa"]
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
        speakers: ["Nicolás Seguro", "Segundo D'Augerot", " Yurman David"]
      },
      {
        time: "20:30",
        title: "Making Generative Media Useful",
        duration: "15 min",
        type: "talk",
        speakers: ["Manuel Soria"]
      },
      {
        time: "20:45",
        title: "The Case for Local AI Models",
        duration: "15 min",
        type: "talk",
        speakers: ["Alejandro Crosa"]
      },
      {
        time: "21:00",
        title: "A Decentralised LLM Routing Marketplace",
        duration: "15 min",
        type: "talk",
        speakers: ["shroominic"]
      },
      {
        time: "21:15",
        title: "LLMNative evals: the winning workflow",
        duration: "15 min",
        type: "talk",
        speakers: ["Francisco Ingham"]
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
        type: "talk"
      }
    ]
  },
  {
    id: "llm-native-april-2025",
    slug: "llm-native-april-2025",
    title: "LLMNative BA - Community Hour",
    date: "April 29, 2025",
    time: "19:00 - 23:00",
    location: "Buenos Aires",
    description: "A relaxed space to discuss what everyone is working on, showcase demos, and debate the evolving AI ecosystem.",
    speakers: getSpeakersByNames([
      "Lucas Petralli",
      "Lautaro Gesuelli Pinto",
      "Marcos Lilljedahl",
      "Daniel Quelali",
      "Leonel Bianchi"
    ]),
    isUpcoming: false,
    registrationUrl: "https://lu.ma/csdwt7hm",
    schedule: []
  },
  {
    id: "llm-native-mar-2025",
    slug: "llm-native-mar-2025",
    title: "LLMNative BA V1 @AWS",
    date: "March 11, 2025",
    time: "17:30 - 22:30",
    location: "AWS Office, Buenos Aires",
    description: "LLM-Native BA is where founders, engineers, and leading researchers advancing frontier AI applications gather to share real-world technical challenges at every stage of LLM-based systems, with a focus on meaningful production-level experiences.",
    speakers: getSpeakersByNames([
      "Francisco Ingham",
      "Tomás Antonini",
      "Tomás Hernando Kofman",
      "Nicolas Camara",
      "Akshat Agrawal",
      "Lucas Petralli",
      "Lautaro Gesuelli Pinto",
      "Facundo Palavecino",
      "Conrado Marturet",
      "Tadeo Donegana Braunschweig",
      "Ezequiel Sculli",
    ]),
    isUpcoming: false,
    registrationUrl: "https://lu.ma/nfxv829h?tk=fFnP5W",
    schedule: [
      {
        time: "17:30",
        title: "🏠 Reception",
        duration: "30 min",
        type: "networking"
      },
      {
        time: "18:00",
        title: "▶️ Welcome and introduction",
        duration: "15 min",
        type: "talk",
        speakers: ["Tomás Antonini"]
      },
      {
        time: "18:15",
        title: "Building LLM-Native Organizations: FieldData's approach",
        duration: "30 min",
        type: "talk",
        description: "This talk explores how LLMs represent the next automation wave, freeing workers from digital busywork. I'll share the core principles of the LLM-native community, where cognitive tools handle routine tasks invisibly while enhancing human potential. Using Fielddata as a case study, I'll demonstrate practical implementation strategies, internal best practices we use and how we think and develop LLM-powered UX's. Together we'll explore how to build organizations where technology adapts to humans and not the reverse.",
        speakers: ["Francisco Ingham"]
      },
      {
        time: "18:45",
        title: "Upgrading to Multi-Model: 10x'ing Dev Speed and LLM Quality with Not Diamond",
        duration: "30 min",
        type: "talk",
        description: "Every week a new frontier AI model is released to the world. And yet the vast majority of developers are still building AI with the 'traditional' approach: inefficiently waterfalling development through one model at a time. This results in inefficient engineering cycles, degraded output quality, and bloated inference costs and latency. In this talk, you'll learn a set of scalable principles and practical data-driven techniques that leading startups and Fortune 100s are using to evaluate and optimize all candidate models and prompt configurations in parallel, saving tens of thousands of engineering hours and improving output accuracy by up to 35%.",
        speakers: ["Tomás Hernando Kofman"]
      },
      {
        time: "19:15",
        title: "Break",
        duration: "30 min",
        type: "break"
      },
      {
        time: "19:45",
        title: "Building Firecrawl's Deep Research API",
        duration: "30 min",
        type: "talk",
        description: "From launching an open-source version just hours after OpenAI's announcement to introducing the Firecrawl Deep Research API, we’ll explore how Firecrawl drives innovation in the AI era of web extraction.",
        speakers: ["Nicolas Camara"]
      },
      {
        time: "20:15",
        title: "The Future is Agentic: How Windsurf Writes 90% of its Users' Code",
        duration: "30 min",
        type: "talk",
        description: "Agentic AI is reshaping software development, shifting AI from an assistive tool to an active collaborator. At Windsurf, we’ve built an integrated coding agent that writes 90% of its users’ code, evolving alongside developers as they build. This talk explores the impact of deeply embedded AI agents: how they accelerate iteration, reduce cognitive load, and change the way engineers approach problem-solving. Drawing from real-world use cases, we’ll discuss the trade-offs of designing agentic systems, the challenges of ensuring reliability in production, and what we’ve learned from features that didn’t make the cut.",
        speakers: ["Akshat Agrawal"]
      },
      {
        time: "20:45",
        title: "Finger food & Networking",
        duration: "45 min",
        type: "networking"
      },
      {
        time: "21:30",
        title: "Building Agents with Model Context Protocol (MCP)",
        duration: "5 min",
        type: "talk",
        description: "We'll share the problems we faced in the pre-MCP world and demonstrate how this protocol now unifies our fragmented ecosystem and is revolutionizing agent development. Through practical experiences, we'll show how we've built servers connecting seamlessly with Claude and Windsurf clients, and designed specialized clients for agent frameworks, enabling us to focus on creating sophisticated AI solutions.",
        speakers: ["Lautaro Gesuelli Pinto", "Lucas Petralli"]
      },
      {
        time: "21:35",
        title: "Using LLMs to extract tables from Excel spreadsheets",
        duration: "5 min",
        type: "talk",
        description: "Spreadsheets are ubiquitous in data workflows but contain unstructured, visually formatted tables that pose challenges for automated processing. In this keynote, I’ll show how how to extract meaningful tables from complex spreadsheets with multiple tables, inconsistent formatting, and high-dimensional data. We will discuss our approach at BRINTA, including heuristic-driven metadata generation, tool-assisted LLM navigation, and the crucial role of human validation.",
        speakers: ["Facundo Palavecino"]
      },
      {
        time: "21:40",
        title: "How Fairway Applies MMLLMs to Navigate Regulatory Compliance in US Automotive Transactions",
        duration: "5 min",
        type: "talk",
        description: "This talk will explore how a combination of MMLLMs enables rapid and accurate decision-making in the complex landscape of US regulatory vehicle transactions. We will break down the workflow into key stages: text extraction, signature and notarization identification, transaction categorization, regulatory compliance assessment, and final decision-making, all executed in minutes.",
        speakers: ["Conrado Marturet"]
      },
      {
        time: "21:45",
        title: "Benchmarking Localized Contextual Understanding in LLMs through Regional Literature",
        duration: "5 min",
        type: "talk",
        description: "DECUBO is a benchmark designed to assess the ability of LLMs to interpret literary texts deeply rooted in the cultural, geographical, and linguistic context of Argentina, particularly the Province of Buenos Aires. By leveraging a representative corpus and a curated set of expert-generated questions from the Provincial Directorate of Libraries and Reading Promotion, DECUBO provides a framework to evaluate the limitations and strengths of LLMs in understanding local references.",
        speakers: ["Tadeo Donegana Braunschweig"]
      },
      {
        time: "21:50",
        title: "How Evaluations Improved Darwin's AI Workers Suite",
        duration: "5 min",
        type: "talk",
        description: "In this talk I’ll share our experience using evaluations to refine our approach to model assessment. We’ll dive into how structured evaluations helped us systematically improve accuracy, reduce hallucinations, and enhance overall performance across our AI Workers Suite.",
        speakers: ["Ezequiel Sculli"]
      },
      {
        time: "21:55",
        title: "Open Networking & Closing",
        duration: "35 min",
        type: "networking",
        description: "Final networking session and event closing."
      }
    ]
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Jimena Lagorio",
    role: "Program Management | L&D @ Mercado Libre",
    content: "La semana pasada vivimos algo enorme junto a la comunidad de LLMs Native",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7401681239272865792"
  },
  {
    name: "Tadeo Donegana Braunschweig",
    role: "AI Engineer @ Tiendanube",
    content: "Si estas construyendo con AI gen, no podes no estar en la comunidad de llmnative 🚀",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7401682210715742208"
  },
  {
    name: "Facundo Palavecino",
    role: "ML/AI Engineer | Tech Lead",
    content: "llmnative: dícese del evento donde builders de la hostia comparten conocimiento y experiencia con el resto. El mejor día para sumarse era ayer. El próximo es hoy. Sumate!",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7402451883136782337"
  },
  {
    name: "Marcelo Cavazzoli",
    role: "chelo.eth 🍋 @ Lemon",
    content: "Tengo un nuevo evento y Discord favorito: LLM Natives. Me hizo acordar a esos inicios de Bitcoin en Argentina, pero ahora con AI.",
    postUrl: "https://x.com/lemoncheli/status/1943859428329238552"
  },
  {
    name: "Alejandro Crosa",
    role: "CTO @ DaffyGiving",
    content: "Dijo 'Acá nos juntamos builders y no les queremos vender nada' y me conquistó",
    postUrl: "https://x.com/gptcrosa/status/1943794074726629648"
  },
  {
    name: "Pablo Zamudio",
    role: "ML Expert @ Mercado Libre",
    content: "Tremenda esa comunidad como crece y crece!! 👏👏👏",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7350623325439643649?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7350623325439643649%2C7350959999847665664%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287350959999847665664%2Curn%3Ali%3AugcPost%3A7350623325439643649%29" // TODO: Add actual post URL
  },
  {
    name: "Matías Frydman",
    role: "AI Tech Lead",
    content: "Gran encuentro de la comunidad LLM Native en Lemon.",
    postUrl: "https://www.linkedin.com/posts/activity-7350538258025476096-5u_h?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOpDW4BKl77N-jtdFy9or2naFa3Qqj9FpU"
  },
  {
    name: "Diego Perez Grandamarina",
    role: "Innovation Leader",
    content: "Otro encuentro de LLM Native y no me alcanza el post! Gracias Marcelo Cavazzoli por prestarnos las oficinas de Lemon y la onda! La comunidad de builders ya tiene más de 600 miembros.",
    postUrl: "https://www.linkedin.com/posts/diegoperezgrandamarina_otro-encuentro-de-llm-native-y-no-me-alcanza-activity-7350325419293708288-sdpm?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOpDW4BKl77N-jtdFy9or2naFa3Qqj9FpU"
  },
  {
    name: "Segundo D'Augerot",
    role: "Co-Founder @ Fardo",
    content: "Un lujo! Un ambiente único, el que había ahí.",
    postUrl: "https://www.linkedin.com/posts/segundo-d-augerot-b6727223b_llmnative-fardo-llm-activity-7350533597163929600-GIaE?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOpDW4BKl77N-jtdFy9or2naFa3Qqj9FpU"
  },
  {
    name: "Tiago Prelato",
    role: "@SneyX_",
    content: "Tremendo! Hermosos eventos se estan mandando que impulsan a la comunidad 🔥🙌🏻",
    postUrl: "https://x.com/SneyX_"
  },
  {
    name: "Julián Lizarraga",
    role: "Data Scientist @ Mercado Libre",
    content: "Son unos cracks! Estuvo increíble todo: el lugar, las charlas, la gente. Ya espero el próximo 😈",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7350623325439643649?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7350623325439643649%2C7350633436975349761%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287350633436975349761%2Curn%3Ali%3AugcPost%3A7350623325439643649%29"
  },
  {
    name: "Sufyan Ahmed",
    role: "@sufrang737",
    content: "Por más eventos asiii",
    postUrl: "https://x.com/sufrang737"
  },
  {
    name: "Mauro Casas Balsamello",
    role: "Software Engineer",
    content: "Presente en el evento de LLM Native, un gran iniciativa!",
    postUrl: "https://www.linkedin.com/posts/maurocasas_we-hosted-another-llm-native-meetup-at-lemon-activity-7351277154321494018-S4VA?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOpDW4BKl77N-jtdFy9or2naFa3Qqj9FpU"
  },
  {
    name: "Juan Marí",
    role: "AI Engineer",
    content: "El viernes pasado se realizó un nuevo encuentro de la comunidad llmnative.dev, esta vez en las oficinas de Lemon. Tuvimos la oportunindad de escuchar sobre novedosos casos de uso de LLMs, incluyendo experiencias reales con MCPs en producción.",
    postUrl: "https://www.linkedin.com/posts/juan-mar%C3%AD-29ab3b20a_el-viernes-pasado-se-realiz%C3%B3-un-nuevo-encuentro-activity-7350626607444758529-2rd5?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOpDW4BKl77N-jtdFy9or2naFa3Qqj9FpU"
  },
  {
    name: "Santiago Cuevas",
    role: "AI Engineer - Data Scientist",
    content: "🙏Lucas Petralli y Lautaro Gesuelli Pinto, gracias por organizar! Un lujazo el nivel de la comunidad.",
    postUrl: "https://www.linkedin.com/posts/santicuevas_we-hosted-another-llm-native-meetup-at-lemon-activity-7351037938362703872-nIPB?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOpDW4BKl77N-jtdFy9or2naFa3Qqj9FpU"
  },
  {
    name: "Andrés Avila Páez",
    role: "Co-Founder @ Arturito.ai",
    content: "🚀 Estuvimos en el 3er encuentro de LLMNative en las oficinas de Lemon, y salimos con la cabeza explotada 💥 Modelos en producción, agentes seguros, LLMs corriendo local, SEO pensando en LLMs, contenido generativo y evals reales para mejorar lo que ya está corriendo.",
    postUrl: "https://www.linkedin.com/posts/romanavila_estuvimos-en-el-3er-encuentro-de-llmnative-activity-7351026863806263296-N0Du?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOpDW4BKl77N-jtdFy9or2naFa3Qqj9FpU"
  },
];

// All event photos from the events folder
// To add new photos: just add image files to /public/events/ and include them below
// The carousel will automatically shuffle them randomly on each page load
export const eventPhotos: Photo[] = [
  {
    id: "1",
    src: "/events/meetup-1_1.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "2",
    src: "/events/meetup-1_2.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "3",
    src: "/events/meetup-1_3.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "4",
    src: "/events/meetup-2_1.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "5",
    src: "/events/meetup-2_2.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "6",
    src: "/events/meetup-3_1.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "7",
    src: "/events/meetup-3_2.jpg",
    alt: "LLM Native community event",
  },
  {
    id: "8",
    src: "/events/meetup-3_3.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "9",
    src: "/events/meetup-3_4.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "10",
    src: "/events/meetup-3_5.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "11",
    src: "/events/meetup-3_6.jpg",
    alt: "LLM Native community event",
  },
  {
    id: "12",
    src: "/events/meetup-4_1.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "13",
    src: "/events/meetup-4_2.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "14",
    src: "/events/meetup-4_3.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "15",
    src: "/events/meetup-4_4.jpeg",
    alt: "LLM Native community event",
  },
  {
    id: "16",
    src: "/events/meetup-5_1.jpeg",
    alt: "LLM Native PDE at Punta Tech Week",
  },
  {
    id: "17",
    src: "/events/meetup-5_2.jpeg",
    alt: "LLM Native PDE at Punta Tech Week",
  },
  {
    id: "18",
    src: "/events/meetup-6_1.jpeg",
    alt: "Buenos Aires LangChain Meetup at MODO",
  },
  {
    id: "19",
    src: "/events/meetup-6_2.jpeg",
    alt: "Buenos Aires LangChain Meetup at MODO",
  }
];

// Function to shuffle array randomly
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Export photos (will be shuffled in component)
export const photos: Photo[] = eventPhotos;