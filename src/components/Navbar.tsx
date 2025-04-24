import React, { useState, useEffect } from 'react';
import { Code, Menu, X, Home, FileText, BarChart2, Users, Award } from 'lucide-react';
import Button from './ui/Button';
import { NavBar } from './ui/tubelight-navbar';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
];

const tubelightNavItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "Services", url: "#services", icon: BarChart2 },
  { name: "About", url: "#about", icon: Users },
  { name: "Team", url: "#team", icon: Award },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleNavItemClick = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/10' 
          : 'py-6 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Code className="h-8 w-8 text-[#227DFF]" />
            <span className="text-xl font-bold text-white">SwiftCode</span>
          </a>

          {/* Centered Tubelight Navbar - Desktop Only */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <NavBar 
              items={tubelightNavItems} 
              onItemClick={handleNavItemClick}
            />
          </div>

          {/* Contact Button - Desktop Only */}
          <div className="hidden md:block">
            <Button onClick={handleContactClick}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavItemClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  onClick={handleContactClick}
                  className="w-full"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;