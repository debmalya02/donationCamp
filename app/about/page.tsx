'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & President',
    image: '/team/john.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Operations Director',
    image: '/team/jane.jpg',
  },
  // Add more team members as needed
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="text-lg text-gray-700 mb-8">
              At Donation Club, we believe in the power of collective giving. Our mission is to create a platform where 
              compassionate individuals can come together to make a meaningful impact in the lives of those in need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}