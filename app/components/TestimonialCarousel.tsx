'use client'

import { useState, useEffect } from 'react'
import { Testimonial } from '@/app/types/events'

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-0">
      <div className="overflow-hidden rounded-lg bg-gray-950/30 backdrop-blur-sm border border-gray-800/50 p-6 sm:p-8">
        <div className="flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed max-w-2xl px-2 sm:px-0">
                  {testimonial.content}
                </p>
                
                <div className="text-center">
                  <h4 className="text-gray-100 font-medium text-sm">{testimonial.name}</h4>
                  {testimonial.role && (
                    <p className="text-gray-400 text-xs">
                      {testimonial.role}
                    </p>
                  )}
                </div>
                
                {/* View original post link */}
                {testimonial.postUrl && (
                  <a 
                    href={testimonial.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 sm:mt-4 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View original post
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-4 sm:mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-400 w-6 sm:w-8' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}