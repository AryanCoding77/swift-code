import React, { useState, useEffect } from 'react';
import { X, Rocket } from 'lucide-react';
import Button from './Button';

const EmailPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasInteracted) return;
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 50) {
        setIsVisible(true);
        setHasInteracted(true);
      }
    };

    const timeoutId = setTimeout(() => {
      if (!hasInteracted) {
        setIsVisible(true);
        setHasInteracted(true);
      }
    }, 10000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [hasInteracted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccess(true);
      setTimeout(() => {
        setIsVisible(false);
        setShowSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsVisible(false)}
      />
      
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl animate-scale">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            {showSuccess ? "Thanks for joining! 🎉" : (
              <>
                🚨 Need an App? Ready in 48 Hours.
              </>
            )}
          </h2>
          <p className="text-white/80 mb-2">
            {showSuccess 
              ? "Check your inbox for your custom SwiftPlan!"
              : "We build AI-powered apps & systems — fast, smart, and tailored for you."}
          </p>
          <p className="text-white/70 text-sm">
            Enter your email to get a custom SwiftPlan + early access to limited-time offers.
          </p>
        </div>

        {!showSuccess && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="transform transition-all duration-200 hover:translate-y-[-2px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#227DFF]/50 text-white placeholder-white/50 transition-all duration-200 hover:bg-white/10"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full group" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="loading-spinner" />
              ) : (
                <>
                  👉 Let's Build Swift
                  <Rocket className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>

            <p className="text-sm text-white/60 text-center">
              No spam. Just value.
            </p>
          </form>
        )}

        <div className="absolute -z-10 inset-0 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#227DFF]/30 rounded-full filter blur-[80px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full filter blur-[80px] animate-pulse-slow" />
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;