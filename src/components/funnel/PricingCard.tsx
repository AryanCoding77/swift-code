import React from 'react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

interface PricingCardProps {
  name: string;
  price: string | number;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features = [], // Add default empty array
  isPopular,
  ctaText = "Get Started",
  onCtaClick,
}) => {
  return (
    <div className={`relative ${isPopular ? 'scale-105 mt-3' : ''}`}>
      {isPopular && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#227DFF] text-white text-sm font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 ${isPopular ? 'mt-2' : ''} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-white">${price}</span>
          {typeof price === 'number' && <span className="text-white/60 ml-1">/project</span>}
        </div>
        <p className="text-white/80 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-6">
          {(features || []).map((feature, index) => (
            <li key={index} className="flex items-center text-white/70">
              <Check className="h-5 w-5 text-[#227DFF] mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          variant={isPopular ? 'primary' : 'secondary'}
          className="w-full"
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;