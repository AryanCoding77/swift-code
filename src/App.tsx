import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Services from './components/ServicesSection';
import Testimonials from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import About from './components/About';
import Team from './components/TeamSection';
import Contact from './components/ContactSection';
import Footer from './components/Footer';
import EmailPopup from './components/ui/EmailPopup';
import AnimatedBackground from './components/AnimatedBackground';
import FloatingElements from './components/FloatingElements';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      {/* Background animations */}
      <AnimatedBackground />
      <FloatingElements />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Testimonials />
        <PricingSection />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
      <EmailPopup />
    </div>
  );
}

export default App;