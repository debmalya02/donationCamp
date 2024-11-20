'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageSlideshow from '@/components/home/ImageSlideshow';
import UpcomingProgram from '@/components/home/UpcomingProgram';
import PreviousProgram from '@/components/home/PreviousProgram';
// import CountingNumber from '@/components/home/CountingNumber';

import Card from '@/components/ui/Card';

const stats = [
  { value: '5,000+', label: 'Generous Donors' },
  { value: '₹1.2Cr', label: 'Total Donations' },
  { value: '10,000+', label: 'Lives Impacted' },
];

const upcomingPrograms = [
  {
    title: 'Food Distribution Drive',
    date: 'October 25, 2023',
    image: '/food-drive.jpg',
    description: 'Join us in our mission to provide meals to 1000+ families in need.',
    goalAmount: 500000,
    raisedAmount: 350000,
    volunteersNeeded: 50,
    volunteersJoined: 35,
  },
  {
    title: 'Education Kit Distribution',
    date: 'November 1, 2023',
    image: '/education.jpg',
    description: 'Help us provide essential school supplies to underprivileged children.',
    goalAmount: 300000,
    raisedAmount: 150000,
    volunteersNeeded: 30,
    volunteersJoined: 12,
  },
];

const previousPrograms = [
  {
    title: 'Medical Camp',
    date: 'September 15, 2023',
    image: '/programs/medical.jpg',
    description: 'Free medical checkups and medicine distribution for 500+ people.',
    impact: '500+ patients treated',
    volunteers: 45,
  },
  {
    title: 'Tree Plantation Drive',
    date: 'August 30, 2023',
    image: '/programs/tree-plantation.jpg',
    description: 'Planted 1000+ trees across the city with community support.',
    impact: '1000+ trees planted',
    volunteers: 120,
  },
  {
    title: 'School Renovation',
    date: 'August 1, 2023',
    image: '/programs/school.jpg',
    description: 'Complete renovation of a government school including new facilities.',
    impact: '300+ students benefited',
    volunteers: 75,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <ImageSlideshow />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Make a Difference Today
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join us in our mission to create positive change and help those in need through the power of giving.
            </p>
            <Link 
              href="/donate" 
              className="btn-primary text-lg"
            >
              Donate Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section
      <section className="relative z-10 bg-transparent">
        <div className="container mx-auto px-4 -mt-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:scale-105 transition-transform duration-300 shadow-xl bg-white/90 backdrop-blur-lg">
                  <CountingNumber value={stat.value} />
                  <p className="text-gray-600">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

       {/* Stats Section */}
       <section className="py-40  bg-transparent">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:scale-105 transition-transform duration-300 shadow-xl bg-white/90 backdrop-blur-lg">
                  <h3 className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Programs Section */}
      <section className="py-20 bg-gradient-to-b from-white/50 to-transparent">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Programs</h2>
          <div className="space-y-8">
            {upcomingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <UpcomingProgram {...program} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Programs Section */}
      <section className="py-20 bg-white/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-20">Previous Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PreviousProgram {...program} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container text-center py-40">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Your contribution can help us create a better future for those in need.
          </p>
          <Link 
            href="/donate" 
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Donating
          </Link>
        </div>
      </section>
    </div>
  );
}