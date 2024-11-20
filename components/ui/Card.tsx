import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        'bg-white/80 rounded-2xl shadow-xl p-6 backdrop-blur-sm',
        className
      )}
      {...props}
    />
  );
}