'use client'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useSpring, useTransform } from 'framer-motion';

interface CountingNumberProps {
  value: string;
  duration?: number;
}

export default function CountingNumber({ value, duration = 2 }: CountingNumberProps) {
  const [parsedValue, setParsedValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  
  useEffect(() => {
    // Parse the numeric value from the string (e.g., "5,000+" -> 5000)
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    setParsedValue(numericValue);
  }, [value]);

  const springConfig = {
    duration,
    bounce: 0,
    ease: "easeOut",
  };

  const spring = useSpring(0, springConfig);
  const displayed = useTransform(spring, (latest) => {
    if (latest === 0) return '0';
    // Format number with commas and add any suffix from original value
    const suffix = value.match(/[^0-9,]/g)?.join('') || '';
    return Math.round(latest).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (inView) {
      spring.set(parsedValue);
    }
  }, [inView, spring, parsedValue]);

  return (
    <motion.h3 ref={ref} className="text-4xl font-bold text-purple-600 mb-2">
      {displayed}
    </motion.h3>
  );
}