'use client'

import Link from 'next/link'
import { Event } from '@/app/types/events'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.slug}`}>
      <div className="group relative bg-gray-950/30 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 hover:bg-gray-950/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-light text-gray-100 mb-2 group-hover:text-white transition-colors">
                {event.title}
              </h3>
              <div className="flex flex-col gap-1 text-sm text-gray-400">
                <span>{event.date}</span>
                <span>{event.time}</span>
                <span>{event.location}</span>
              </div>
            </div>
            {event.isUpcoming && (
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                Upcoming
              </span>
            )}
          </div>
          
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            {event.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {event.speakers.slice(0, 4).map((speaker, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-900 overflow-hidden"
                  title={speaker.name}
                >
                  <img
                    src={speaker.image || '/placeholder-speaker.svg'}
                    alt={speaker.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              ))}
              {event.speakers.length > 4 && (
                <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-xs text-gray-400">
                  +{event.speakers.length - 4}
                </div>
              )}
            </div>
            
            <span className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
              {event.isUpcoming ? 'Register →' : 'View Details →'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}