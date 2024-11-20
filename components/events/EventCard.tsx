import Image from 'next/image';
import { CalendarIcon, MapPinIcon, UsersIcon, ClockIcon } from '@heroicons/react/24/outline';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Event } from '@/types/events';

interface EventCardProps {
  event: Event;
  type: 'upcoming' | 'past';
}

export default function EventCard({ event, type }: EventCardProps) {
  const isUpcoming = type === 'upcoming';

  return (
    <Card className="group overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-72 h-48 md:h-auto">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
          />
          {!isUpcoming && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Completed</span>
            </div>
          )}
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <div className="flex items-center gap-2 text-purple-600 mb-2">
              <CalendarIcon className="w-5 h-5" />
              <span>{event.date}</span>
              <ClockIcon className="w-5 h-5 ml-4" />
              <span>{event.time}</span>
            </div>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
              {event.title}
            </h3>

            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <MapPinIcon className="w-5 h-5" />
              <span>{event.location}</span>
            </div>

            <p className="text-gray-600 mb-4">{event.description}</p>
          </div>

          {isUpcoming && (
            <>
              <div className="flex items-center gap-2 text-gray-600">
                <UsersIcon className="w-5 h-5" />
                <span>{event.registeredCount} registered out of {event.capacity} spots</span>
              </div>

              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300"
                  style={{ width: `${(event.registeredCount / event.capacity) * 100}%` }}
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="primary">Register Now</Button>
                <Button variant="secondary">Add to Calendar</Button>
                <Button variant="secondary">Share Event</Button>
              </div>
            </>
          )}

          {!isUpcoming && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <UsersIcon className="w-5 h-5 text-green-600" />
                <span className="text-green-600">{event.attendees} people attended</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {event.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}