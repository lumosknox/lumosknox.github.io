
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { jobTitles } from './hero/jobTitles';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Title rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative hero-gradient overflow-hidden"
      style={{ 
        '--mouse-x': '50%', 
        '--mouse-y': '50%',
      } as React.CSSProperties}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/5 blur-3xl"
            style={{
              width: `${Math.random() * 30 + 10}rem`,
              height: `${Math.random() * 30 + 10}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.4,
              transform: `translate(-50%, -50%)`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto md:mx-0"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">Hi, I am </span>
            <span className="text-gradient">Madhav Kode</span>
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl mt-6 text-foreground/80"
          >
            I'm a{' '}
            <motion.span
              key={currentTitleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-primary font-medium inline-block"
            >
              {jobTitles[currentTitleIndex]}
            </motion.span>
            {' '}passionate about creating beautiful and functional applications.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 hover:bg-white/5 text-white px-6 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ y: 0, opacity: 0.5 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ 
            y: { repeat: Infinity, repeatType: "reverse", duration: 1.5 },
            opacity: { repeat: Infinity, repeatType: "reverse", duration: 1.5 }
          }}
          className="flex flex-col items-center"
        >
          <span className="text-foreground/50 text-sm mb-2">Scroll</span>
          <ArrowRight className="h-5 w-5 text-foreground/50 transform rotate-90" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
