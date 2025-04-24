import React from 'react';
import FunnelHero from '../../components/funnel/FunnelHero';
import PricingCard from '../../components/funnel/PricingCard';
import ContactForm from '../../components/funnel/ContactForm';
import { Code } from 'lucide-react';

const WebFunnel: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <FunnelHero
        title="Websites Built Swift. Built Smart."
        subtitle="AI-powered websites ready to launch in hours — not weeks."
        ctaText="Start My Website"
        onCtaClick={scrollToContact}
      />
      
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block p-3 bg-[#227DFF]/10 rounded-full mb-6">
              <Code className="h-8 w-8 text-[#227DFF]" />
            </div>
            <p className="text-xl text-white/80">
              Using AI and automation, I create professional websites that not only look amazing but are optimized for conversions and performance. Fast, responsive, and ready to grow your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              name="Starter Site"
              price={199}
              description="Perfect for simple landing pages"
              features={[
                "Landing page",
                "1 section",
                "Mobile optimized",
                "Basic SEO",
                "Fast delivery"
              ]}
              onCtaClick={scrollToContact}
            />
            
            <PricingCard
              name="Biz Site"
              price={399}
              description="Complete website for businesses"
              features={[
                "Full site",
                "3 pages",
                "Contact form",
                "SEO basic",
                "Analytics integration"
              ]}
              isPopular
              onCtaClick={scrollToContact}
            />
            
            <PricingCard
              name="Smart Site"
              price={699}
              description="Advanced features and design"
              features={[
                "Advanced design",
                "AI chat integration",
                "Custom animations",
                "Full integrations",
                "Priority support"
              ]}
              onCtaClick={scrollToContact}
            />
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Your Website Project</h2>
            <p className="text-white/80">Your website, delivered fast. Powered by SwiftCode.</p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default WebFunnel;