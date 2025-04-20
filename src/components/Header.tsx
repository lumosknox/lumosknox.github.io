
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gradient">Portfolio</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative text-foreground/80 hover:text-foreground transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.name}
            </a>
          ))}
          
          <Button 
            className="bg-primary/90 hover:bg-primary text-white"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <MenuIcon />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg md:hidden py-4"
        >
          <nav className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <Button 
              className="bg-primary/90 hover:bg-primary text-white w-full"
              onClick={() => {
                window.open('/resume.pdf', '_blank');
                setMobileMenuOpen(false);
              }}
            >
              Resume
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
