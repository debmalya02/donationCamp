'use client'
import { motion } from 'framer-motion';
import EventCard from '@/components/events/EventCard';
import { upcomingEvents, pastEvents } from '@/data/events';

export default function Events() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-100/50 to-transparent py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Our Events
            </h1>
            <p className="text-gray-600 text-lg">
              Join us in making a difference through our various events and initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EventCard event={event} type="upcoming" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-20">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-16">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EventCard event={event} type="past" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}