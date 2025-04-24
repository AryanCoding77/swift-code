import React, { useState } from 'react';
import { portfolioItems } from '../data';
import GlassCard from './ui/GlassCard';
import { ArrowRight } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Portfolio Highlights
          </h2>
          <p className="text-[#b3b3b3] text-lg">
            Showcasing our innovative solutions and success stories.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div 
                className="h-80 rounded-xl overflow-hidden"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-80'
                }`} />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 ease-in-out">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className={`text-white/70 mb-4 transition-all duration-300 ${
                    hoveredItem === item.id ? 'opacity-100' : 'opacity-0 translate-y-4'
                  }`}>
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-[#227DFF]/20 text-[#227DFF] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href="#" 
                    className={`inline-flex items-center text-[#227DFF] font-medium text-sm transition-all duration-300 ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <span className="text-[#227DFF] font-medium inline-block border-b border-[#227DFF]/30 pb-1">
            Built Swift. Built Smart.
          </span>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;