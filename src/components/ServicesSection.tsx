import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlassCard from './ui/GlassCard';
import { services } from '../data';
import { Brain, Code, MessageCircle, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  // Custom color schemes for each card
  const cardStyles = [
    {
      background: "linear-gradient(135deg, rgba(28, 34, 89, 0.9) 0%, rgba(44, 53, 117, 0.8) 100%)",
      iconBg: "bg-gradient-to-br from-blue-500/30 to-indigo-600/20",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/20",
      shadowColor: "shadow-blue-500/20",
      buttonColor: "text-blue-400",
    },
    {
      background: "linear-gradient(135deg, rgba(26, 60, 75, 0.9) 0%, rgba(40, 85, 104, 0.8) 100%)",
      iconBg: "bg-gradient-to-br from-cyan-500/30 to-blue-600/20",
      iconColor: "text-cyan-400",
      borderColor: "border-cyan-500/20",
      shadowColor: "shadow-cyan-500/20",
      buttonColor: "text-cyan-400",
    },
    {
      background: "linear-gradient(135deg, rgba(54, 28, 76, 0.9) 0%, rgba(84, 44, 117, 0.8) 100%)",
      iconBg: "bg-gradient-to-br from-purple-500/30 to-pink-600/20",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/20",
      shadowColor: "shadow-purple-500/20",
      buttonColor: "text-purple-400",
    },
  ];

  const renderIcon = (iconName: string, style: any) => {
    const iconClass = `h-14 w-14 p-3 rounded-xl ${style.iconBg} ${style.iconColor} mb-6 shadow-lg ${style.shadowColor}`;
    
    switch(iconName) {
      case 'brain-circuit':
        return <Brain className={iconClass} />;
      case 'code':
        return <Code className={iconClass} />;
      case 'message-circle':
        return <MessageCircle className={iconClass} />;
      default:
        return <Code className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/15 rounded-full filter blur-[120px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-block mb-3">
            <span className="inline-block py-1 px-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white text-sm font-medium rounded-full border border-blue-500/20">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white/80">What I Offer</h2>
          <p className="text-[#b3b3b3] text-lg max-w-2xl mx-auto">
            Transforming businesses with AI-powered solutions and rapid development.
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 md:gap-10"
        >
          {services.map((service, index) => {
            const style = cardStyles[index % cardStyles.length];
            
            return (
              <motion.div 
                key={service.id} 
                variants={cardVariants} 
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div 
                  className={`h-full rounded-xl p-8 transition-all duration-300 shadow-xl hover:shadow-2xl ${style.shadowColor} border border-opacity-20 ${style.borderColor}`}
                  style={{ background: style.background }}
                >
                  <div className="flex flex-col h-full relative overflow-hidden">
                    {/* Animated glow effect */}
                    <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-700"></div>
                    <div className="absolute -left-4 -bottom-4 w-32 h-32 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-700"></div>
                    
                    {renderIcon(service.icon, style)}
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/70 mb-6 flex-grow">{service.description}</p>
                    
                    <motion.div 
                      className={`inline-flex items-center ${style.buttonColor} text-sm font-medium cursor-pointer group mt-auto`}
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;