import React from 'react';
import FunnelHero from '../../components/funnel/FunnelHero';
import PricingCard from '../../components/funnel/PricingCard';
import ContactForm from '../../components/funnel/ContactForm';
import { Brain } from 'lucide-react';

const AppFunnel: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <FunnelHero
        title="Need an App? I'll Build Yours in Just 48 Hours."
        subtitle="Custom-built, lightning-fast, AI-powered apps — ready to go in 2 days or less."
        ctaText="Let's Build Your App"
        onCtaClick={scrollToContact}
      />
      
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block p-3 bg-[#227DFF]/10 rounded-full mb-6">
              <Brain className="h-8 w-8 text-[#227DFF]" />
            </div>
            <p className="text-xl text-white/80">
              Using the power of AI and no-code tools, I build custom apps that would normally take months — in just 48 hours. No big dev teams, no endless meetings, no stress. Just results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              name="Starter"
              price={299}
              description="Perfect for MVPs and simple applications"
              features={[
                "1 platform (mobile or web)",
                "3 screens",
                "48hr delivery",
                "Basic integrations",
                "User authentication"
              ]}
              onCtaClick={scrollToContact}
            />
            
            <PricingCard
              name="Pro"
              price={599}
              description="Full-featured app for serious businesses"
              features={[
                "Mobile + Web platforms",
                "Up to 5 screens",
                "API integration",
                "Custom branding",
                "Analytics dashboard"
              ]}
              isPopular
              onCtaClick={scrollToContact}
            />
            
            <PricingCard
              name="Elite"
              price="Custom"
              description="Let's build something serious"
              features={[
                "Unlimited platforms",
                "Custom features",
                "Priority support",
                "Advanced security",
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
            <h2 className="text-3xl font-bold mb-4">Let's Build Your App</h2>
            <p className="text-white/80">No stress, no guesswork. I got you.</p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default AppFunnel;