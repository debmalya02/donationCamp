import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface UpcomingProgramProps {
  title: string;
  date: string;
  image: string;
  description: string;
  goalAmount: number;
  raisedAmount: number;
  volunteersNeeded: number;
  volunteersJoined: number;
}

export default function UpcomingProgram({
  title,
  date,
  image,
  description,
  goalAmount,
  raisedAmount,
  volunteersNeeded,
  volunteersJoined,
}: UpcomingProgramProps) {
  const fundingProgress = (raisedAmount / goalAmount) * 100;
  const volunteersProgress = (volunteersJoined / volunteersNeeded) * 100;

  return (
    <Card className="group hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-96 md:h-96 h-48 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
              {title}
            </h3>
            <p className="text-purple-600 mb-3">{date}</p>
            <p className="text-gray-600 mb-4">{description}</p>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Funding Progress</span>
                <span>₹{raisedAmount.toLocaleString()} / ₹{goalAmount.toLocaleString()}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${fundingProgress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Volunteers</span>
                <span>{volunteersJoined} / {volunteersNeeded}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${volunteersProgress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/donate">
              <Button variant="primary" className="text-sm">
                Donate Now
              </Button>
            </Link>
            <Button variant="secondary" className="text-sm">
              Volunteer
            </Button>
            <Button variant="secondary" className="text-sm">
              Share
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}