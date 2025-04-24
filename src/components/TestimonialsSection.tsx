import React, { useState } from 'react';
import { testimonials } from '../data';
import GlassCard from './ui/GlassCard';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-[#227DFF]/10 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-purple-500/10 rounded-full filter blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-[#b3b3b3] text-lg">
            See what our clients are saying about their experience working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <GlassCard className="md:p-10 relative">
              <Quote className="absolute top-6 left-6 h-10 w-10 text-[#227DFF]/20" />
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#227DFF]/30">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <blockquote className="text-white text-lg md:text-xl italic mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#b3b3b3]">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-white/70 hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentIndex === index 
                        ? 'bg-[#227DFF]' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-white/70 hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;