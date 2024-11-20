import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105',
        variant === 'primary' 
          ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
          : 'bg-white text-purple-600 border-2 border-purple-600',
        className
      )}
      {...props}
    />
  );
}