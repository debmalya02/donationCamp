import Image from 'next/image';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

interface PreviousProgramProps {
  title: string;
  date: string;
  image: string;
  description: string;
  impact: string;
  volunteers: number;
}

export default function PreviousProgram({
  title,
  date,
  image,
  description,
  impact,
  volunteers,
}: PreviousProgramProps) {
  return (
    <Card className="group h-full">
      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <p className="absolute bottom-4 left-4 text-white font-medium">{date}</p>
      </div>

      <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mt-auto space-y-2">
        <div className="flex items-center gap-2 text-purple-600">
          <span className="text-lg">🎯</span>
          <span>{impact}</span>
        </div>
        <div className="flex items-center gap-2 text-green-600">
          <span className="text-lg">👥</span>
          <span>{volunteers} volunteers participated</span>
        </div>
      </div>
    </Card>
  );
}