import React, { useState } from 'react';
import GlassCard from './ui/GlassCard';
import Button from './ui/Button';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    
    // Show success message (in a real app)
    alert('Thanks for your message! We\'ll get back to you soon.');
  };
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#227DFF]/10 rounded-full filter blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Build Together
          </h2>
          <p className="text-[#b3b3b3] text-lg">
            Have a project in mind? Get in touch and let's create something amazing.
          </p>
          <div className="mt-3 text-[#227DFF] font-medium">
            Built Swift. Built Smart.
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <GlassCard>
            <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white/80 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#227DFF]/50 text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white/80 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#227DFF]/50 text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white/80 mb-2 font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#227DFF]/50 text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button
                type="submit"
                className="w-full group"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </GlassCard>
          
          <div className="flex flex-col gap-6">
            <GlassCard className="flex items-start gap-4">
              <div className="p-3 bg-[#227DFF]/10 rounded-full">
                <Mail className="h-6 w-6 text-[#227DFF]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <p className="text-[#b3b3b3]">contact@swiftcode.com</p>
                <p className="text-[#b3b3b3]">support@swiftcode.com</p>
              </div>
            </GlassCard>
            
            <GlassCard className="flex items-start gap-4">
              <div className="p-3 bg-[#227DFF]/10 rounded-full">
                <Phone className="h-6 w-6 text-[#227DFF]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Phone</h4>
                <p className="text-[#b3b3b3]">+1 (555) 123-4567</p>
                <p className="text-[#b3b3b3]">+1 (555) 987-6543</p>
              </div>
            </GlassCard>
            
            <GlassCard className="flex items-start gap-4">
              <div className="p-3 bg-[#227DFF]/10 rounded-full">
                <MapPin className="h-6 w-6 text-[#227DFF]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Location</h4>
                <p className="text-[#b3b3b3]">123 Tech Avenue</p>
                <p className="text-[#b3b3b3]">San Francisco, CA 94107</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;