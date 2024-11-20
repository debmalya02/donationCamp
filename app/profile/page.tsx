'use client'
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import DonationHistory from '@/components/profile/DonationHistory';
import UserStats from '@/components/profile/UserStats';
import ProfileHeader from '@/components/profile/ProfileHeader';

export default function Profile() {
  return (
    <div className="pt-24 h-screen">
      <div className="container mx-auto px-4 py-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ProfileHeader />
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <DonationHistory />
            </div>
            <div>
              <UserStats />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}