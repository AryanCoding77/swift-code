import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface FunnelHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

const FunnelHero: React.FC<FunnelHeroProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
}) => {
  return (
    <section className="min-h-[80vh] relative flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-[#227DFF]/20 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-purple-500/10 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            {subtitle}
          </p>
          
          <Button 
            size="lg"
            className="group"
            onClick={onCtaClick}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FunnelHero;