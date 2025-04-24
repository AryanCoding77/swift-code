import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Sparkles, Shield, Crown, Check, Star } from 'lucide-react';
import PricingCard from './funnel/PricingCard';

const PricingSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [hoverCard, setHoverCard] = useState<number | null>(null);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        type: "spring",
        stiffness: 100
      },
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const floatingCircleVariants = {
    initial: (i: number) => ({
      x: i % 2 === 0 ? -10 : 10,
      y: i % 3 === 0 ? -15 : 15,
      opacity: 0.5
    }),
    animate: (i: number) => ({
      x: i % 2 === 0 ? 10 : -10,
      y: i % 3 === 0 ? 15 : -15,
      opacity: 0.7,
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    })
  };

  // Pricing plans data
  const pricingPlans = [
    {
      name: "Swift Start",
      price: 999,
      gradient: "from-blue-400 to-cyan-500",
      icon: <Zap className="h-7 w-7 text-white" />,
      description: "Perfect for MVPs and quick launches",
      features: [
        "Custom AI-powered solution",
        "48-hour delivery",
        "Basic integrations",
        "User authentication",
        "Mobile responsive",
        "1 revision round"
      ],
      ctaText: "Start Building"
    },
    {
      name: "Swift Pro",
      price: 2499,
      gradient: "from-cyan-400 to-blue-600",
      icon: <Sparkles className="h-7 w-7 text-white" />,
      description: "Full-featured solution for businesses",
      isPopular: true,
      features: [
        "Advanced AI integration",
        "Priority 48-hour delivery",
        "Full API integration",
        "Custom branding",
        "Analytics dashboard",
        "3 revision rounds"
      ],
      ctaText: "Go Pro"
    },
    {
      name: "Swift Enterprise",
      price: "Custom",
      gradient: "from-blue-600 to-cyan-700",
      icon: <Crown className="h-7 w-7 text-white" />,
      description: "For larger, complex projects",
      features: [
        "Custom AI solution",
        "Dedicated project manager",
        "Enterprise integrations",
        "Advanced security",
        "Training & support",
        "Unlimited revisions"
      ],
      ctaText: "Contact Us"
    }
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full animate-pulse-slow"
            style={{
              width: `${(i+1) * 50 + 100}px`,
              height: `${(i+1) * 50 + 100}px`,
              left: `${(i * 15) + 5}%`,
              top: `${(i * 10) + 10}%`,
              background: `radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(0, 0, 0, 0) 70%)`,
              zIndex: 0
            }}
            custom={i}
            variants={floatingCircleVariants}
            initial="initial"
            animate="animate"
          />
        ))}
      </div>

      {/* Star particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-cyan-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full filter blur-[100px]" />
      
      <motion.div 
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div 
          variants={headerVariants} 
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.div 
            className="inline-block mb-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 p-px rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="bg-black bg-opacity-50 backdrop-blur-xl px-4 py-1 rounded-lg">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-cyan-300" />
                <span className="text-white font-medium text-sm">Premium Solutions</span>
              </div>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Choose Your Swift Solution
          </motion.h2>
          
          <motion.p 
            className="text-[#b3b3b3] text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Fast, efficient, and tailored to your needs. All projects delivered in 48 hours.
          </motion.p>
          
          <motion.div 
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-cyan-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Zap className="h-5 w-5 text-cyan-400" />
            <span className="font-medium text-white">Built Swift. Built Smart.</span>
          </motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              custom={i}
              onHoverStart={() => setHoverCard(i)}
              onHoverEnd={() => setHoverCard(null)}
              className="relative"
            >
              <AnimatePresence>
                {hoverCard === i && (
                  <motion.div 
                    className={`absolute -inset-2 rounded-2xl bg-gradient-to-r ${plan.gradient} opacity-20 blur-xl -z-10`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              
              <div className="relative">
                {plan.isPopular && (
                  <motion.div 
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  >
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </motion.div>
                )}
                
                <div className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden 
                  ${plan.isPopular ? 'mt-2 shadow-xl shadow-cyan-500/20' : 'shadow-lg'} 
                  transition-all duration-300`}
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${plan.gradient}`}></div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      <div className={`p-2 rounded-full bg-gradient-to-r ${plan.gradient}`}>
                        {plan.icon}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-white">${plan.price}</span>
                        {typeof plan.price === 'number' && <span className="text-white/60 ml-1">/project</span>}
                      </div>
                      <p className="text-white/80 mt-2">{plan.description}</p>
                    </div>
                    
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center text-white/80"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + idx * 0.05 + i * 0.1, duration: 0.3 }}
                        >
                          <div className={`mr-3 p-1 rounded-full bg-gradient-to-r ${plan.gradient} bg-opacity-20`}>
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.button
                      className={`w-full py-3 px-4 rounded-xl font-medium text-white transition-all 
                        bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-cyan-500/20
                        transform hover:-translate-y-1 active:translate-y-0 duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.ctaText}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;