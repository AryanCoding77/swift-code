import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
  return (
    <div 
      className={`relative backdrop-blur-lg bg-opacity-6 bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;