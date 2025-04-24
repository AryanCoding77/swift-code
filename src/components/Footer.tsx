import React from 'react';
import { Code, Github, Linkedin, Twitter, Zap } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build Swift. Let's Build Smart.
          </h2>
          <Button 
            size="lg"
            className="group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
            <Zap className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-6 w-6 text-[#227DFF]" />
              <span className="text-xl font-bold text-white">Swift App Solutions</span>
            </div>
            <p className="text-[#b3b3b3] max-w-md mb-6">
              AI-powered solutions delivered in 48 hours. Transform your business with smart automation and rapid development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-[#b3b3b3] hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-[#b3b3b3] hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-[#b3b3b3] hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-[#b3b3b3] hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">AI Workflows</a></li>
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">Web & App Builds</a></li>
              <li><a href="#" className="text-[#b3b3b3] hover:text-white transition-colors">Chat & Voice Bots</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#b3b3b3] text-sm">
            &copy; {new Date().getFullYear()} Swift App Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-[#b3b3b3] text-sm">
              <span className="text-[#227DFF]">Built Swift. Built Smart.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;