import type { Metadata } from 'next'
import { Inter, Share_Tech_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
const shareTechMono = Share_Tech_Mono({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech-mono'
})

export const metadata: Metadata = {
  title: 'LLM Native BA',
  description: 'Join the pioneers building the future with AI. Connect with founders, engineers, and builders shipping LLM-native products in Buenos Aires.',
  keywords: 'LLM, AI, Buenos Aires, tech community, developers, machine learning, artificial intelligence, meetups',
  openGraph: {
    title: 'LLM Native BA',
    description: 'Join the pioneers building the future with AI in Buenos Aires',
    type: 'website',
    locale: 'es_AR',
    siteName: 'LLM Native Buenos Aires',
    images: [
      {
        url: '/logo-small.png',
        width: 512,
        height: 512,
        alt: 'LLM Native Buenos Aires Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLM Native BA',
    description: 'Join the pioneers building the future with AI in Buenos Aires',
    images: ['/logo-small.png'],
  },
  icons: {
    icon: '/logo-small.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} ${shareTechMono.variable}`}>{children}</body>
    </html>
  )
}