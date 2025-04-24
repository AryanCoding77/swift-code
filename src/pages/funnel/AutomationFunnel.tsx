import React from 'react';
import FunnelHero from '../../components/funnel/FunnelHero';
import PricingCard from '../../components/funnel/PricingCard';
import ContactForm from '../../components/funnel/ContactForm';
import { Bot } from 'lucide-react';

const AutomationFunnel: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <FunnelHero
        title="Automate Like a Boss — with AI."
        subtitle="Let AI handle the boring stuff, so you can focus on what matters."
        ctaText="Let's Automate My Biz"
        onCtaClick={scrollToContact}
      />
      
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block p-3 bg-[#227DFF]/10 rounded-full mb-6">
              <Bot className="h-8 w-8 text-[#227DFF]" />
            </div>
            <p className="text-xl text-white/80">
              Transform your business with AI-powered automation. From customer service to lead generation and internal operations, I build smart systems that work 24/7 so you don't have to.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              name="Basic Flow"
              price={149}
              description="Start automating your business"
              features={[
                "1 chatbot",
                "Lead capture form",
                "Automation workflow",
                "Basic integrations",
                "24/7 operation"
              ]}
              onCtaClick={scrollToContact}
            />
            
            <PricingCard
              name="Growth Bot"
              price={349}
              description="Comprehensive automation solution"
              features={[
                "Omni-channel automation",
                "Chat + voice support",
                "Advanced workflows",
                "CRM integration",
                "Analytics dashboard"
              ]}
              isPopular
              onCtaClick={scrollToContact}
            />
            
            <PricingCard
              name="Custom Ops"
              price="Custom"
              description="Deep automation builds"
              features={[
                "Custom AI models",
                "Enterprise integration",
                "Workflow design",
                "Training & support",
                "Dedicated manager"
              ]}
              ctaText="Book Free Consult"
              onCtaClick={scrollToContact}
            />
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Automating Today</h2>
            <p className="text-white/80">I build AI systems that just work. You chill.</p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default AutomationFunnel;