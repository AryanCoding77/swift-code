import React from 'react';
import GlassCard from './ui/GlassCard';
import { team } from '../data';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#227DFF]/10 rounded-full filter blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-[#b3b3b3] text-lg">
            The innovators behind Swift App Solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <GlassCard 
              key={member.id}
              className="text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-[#227DFF]/30"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-[#227DFF] font-medium mb-4">{member.role}</p>
              <p className="text-[#b3b3b3]">{member.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;