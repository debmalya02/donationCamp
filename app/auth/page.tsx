'use client'
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AuthForm from '@/components/auth/AuthForm';

export default function Auth() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <Card>
            <AuthForm />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}