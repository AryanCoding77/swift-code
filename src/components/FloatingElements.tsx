import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  // Array of floating elements with different properties
  const elements = [
    {
      size: 'w-16 h-16',
      position: 'top-[15%] left-[10%]',
      color: 'bg-blue-500/10',
      duration: 15,
      delay: 0,
    },
    {
      size: 'w-24 h-24',
      position: 'top-[40%] right-[5%]',
      color: 'bg-purple-500/10',
      duration: 18,
      delay: 2,
    },
    {
      size: 'w-32 h-32',
      position: 'bottom-[20%] left-[15%]',
      color: 'bg-cyan-500/10',
      duration: 20,
      delay: 5,
    },
    {
      size: 'w-20 h-20',
      position: 'bottom-[35%] right-[15%]',
      color: 'bg-indigo-500/10',
      duration: 16,
      delay: 3,
    },
    {
      size: 'w-28 h-28',
      position: 'top-[60%] left-[30%]',
      color: 'bg-blue-400/10',
      duration: 22,
      delay: 6,
    },
    {
      size: 'w-14 h-14',
      position: 'bottom-[60%] right-[30%]',
      color: 'bg-purple-400/10',
      duration: 25,
      delay: 4,
    },
    {
      size: 'w-10 h-10',
      position: 'top-[25%] right-[25%]',
      color: 'bg-pink-500/10',
      duration: 12,
      delay: 1,
    },
    {
      size: 'w-12 h-12',
      position: 'bottom-[10%] right-[40%]',
      color: 'bg-blue-600/10',
      duration: 14,
      delay: 7,
    },
  ];

  // Animation for floating in a subtle pattern
  const floatAnimation = (duration: number, delay: number) => ({
    y: ['-5%', '5%', '-5%'],
    x: ['2%', '-2%', '2%'],
    rotate: [0, 5, 0, -5, 0],
    opacity: [0, 0.8],
    transition: {
      duration: duration,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror' as const,
      opacity: { 
        duration: 2, 
        delay: delay 
      }
    },
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-2xl ${element.size} ${element.position} ${element.color}`}
          initial={{ opacity: 0 }}
          animate={floatAnimation(element.duration, element.delay)}
        />
      ))}
    </div>
  );
};

export default FloatingElements; 