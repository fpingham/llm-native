'use client'

import { useState, useEffect, useMemo } from 'react'
import { Photo } from '@/app/types/events'
import { shuffleArray } from '@/app/data/events'

interface PhotoCarouselProps {
  photos: Photo[]
}

export function PhotoCarousel({ photos }: PhotoCarouselProps) {
  // Shuffle photos randomly on each component mount
  const shuffledPhotos = useMemo(() => shuffleArray(photos), [photos])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === shuffledPhotos.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(timer)
  }, [shuffledPhotos.length])

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? shuffledPhotos.length - 1 : currentIndex - 1)
  }

  const handleNext = () => {
    setCurrentIndex(currentIndex === shuffledPhotos.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-950/30 backdrop-blur-sm border border-gray-800/50">
        <div className="flex transition-transform duration-500 ease-in-out h-full"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {shuffledPhotos.map((photo) => (
            <div key={photo.id} className="w-full flex-shrink-0 relative">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-black/70 hover:text-white transition-all"
          aria-label="Previous photo"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-black/70 hover:text-white transition-all"
          aria-label="Next photo"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="flex justify-center gap-2 mt-3">
        {shuffledPhotos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-400 w-8' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}