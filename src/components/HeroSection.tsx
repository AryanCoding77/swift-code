import React from 'react';
import { Zap, ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import { SparklesCore } from './ui/sparkles';

const HeroSection: React.FC = () => {
  return (
    <div id="home" className="h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
      <h1 className="md:text-7xl text-4xl lg:text-8xl font-bold text-center text-white relative z-20 mb-4">
        Swift App Solutions
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-[#227DFF] font-semibold mb-4 z-20">
        Need an app? Ready in 48 hours.
      </h2>
      
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#227DFF] to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#227DFF] to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />

        {/* Sparkles */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient */}
        <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <div className="relative z-20 text-center mt-8">
        <p className="text-lg md:text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-8 leading-relaxed px-4">
          I design AI-powered websites, automations, and business systems that solve real problems — fast.
          No code. No delays. Just results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Button 
            size="lg" 
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Build Together
            <Zap className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Free Strategy Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;