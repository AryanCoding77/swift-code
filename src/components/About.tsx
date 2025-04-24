import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent"></div>
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tr from-purple-500/5 to-transparent"></div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header with two-column layout */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <div className="mb-4">
                <span className="bg-blue-500 bg-opacity-20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                We build <span className="text-blue-400">exceptional</span> digital experiences
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our team of passionate developers and designers are committed to delivering solutions that drive real business value through innovation and technical excellence.
              </p>
              <motion.button
                className="inline-flex items-center text-white bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 rounded-lg group font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn more about us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* 3D card stack effect */}
              <div className="relative h-full">
                <div className="absolute top-4 -right-4 w-full h-72 bg-purple-600/20 rounded-xl transform rotate-6 backdrop-blur-sm"></div>
                <div className="absolute top-2 -right-2 w-full h-72 bg-blue-600/20 rounded-xl transform rotate-3 backdrop-blur-sm"></div>
                <div className="relative w-full h-72 bg-gradient-to-br from-blue-900/80 to-purple-900/80 rounded-xl shadow-2xl backdrop-blur-md p-8 border border-white/10">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <Target className="h-6 w-6 text-blue-400" />
                        </div>
                        <div className="flex space-x-1">
                          {[1, 2, 3].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-white/60"></div>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mt-6">Our Mission</h3>
                      <p className="text-white/70 mt-2">
                        To create innovative digital solutions that transform businesses and deliver exceptional value.
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-blue-300 text-sm">Since 2018</span>
                      <span className="text-white/60 text-xs">Swift Solutions Inc.</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Feature Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                }
              }
            }}
          >
            {[
              {
                icon: <Users className="h-10 w-10 text-blue-400" />,
                title: "Expert Team",
                description: "Our diverse team brings years of industry experience and technical expertise to every project.",
                color: "from-blue-600/10 to-blue-600/5",
                border: "border-blue-500/20"
              },
              {
                icon: <Target className="h-10 w-10 text-emerald-400" />,
                title: "Client-Focused",
                description: "We prioritize understanding your unique needs and delivering solutions that exceed expectations.",
                color: "from-emerald-600/10 to-emerald-600/5",
                border: "border-emerald-500/20"
              },
              {
                icon: <Award className="h-10 w-10 text-purple-400" />,
                title: "Quality First",
                description: "Our commitment to excellence ensures the highest quality in every project we deliver.",
                color: "from-purple-600/10 to-purple-600/5",
                border: "border-purple-500/20"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`relative rounded-xl p-8 bg-gradient-to-br ${feature.color} border ${feature.border} border-opacity-20 shadow-lg backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all duration-300`}
                style={{ 
                  backgroundImage: 'linear-gradient(to bottom right, rgba(25, 25, 35, 0.5), rgba(15, 15, 25, 0.6))',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
                <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  
                  <p className="text-white/70 mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-blue-400 text-sm font-medium cursor-pointer group">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Stats Section */}
          <motion.div 
            className="mt-24 grid md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { value: "150+", label: "Happy Clients" },
              { value: "300+", label: "Projects Completed" },
              { value: "5+", label: "Years Experience" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-blue-400 text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;