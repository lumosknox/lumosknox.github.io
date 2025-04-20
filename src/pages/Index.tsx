import { useEffect, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { motion, useScroll, useSpring } from 'framer-motion';

// Simple fallback component for when sections fail to load
const ErrorFallback = ({ error, componentName }: { error: Error; componentName: string }) => (
  <div className="p-6 max-w-sm mx-auto my-8 bg-secondary/30 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-destructive mb-2">Something went wrong in {componentName}</h2>
    <p className="text-sm text-muted-foreground">{error.message || "Unknown error"}</p>
  </div>
);

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Modern Portfolio | Your Name";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left" 
        style={{ scaleX }}
      />

      <ErrorBoundary fallbackRender={({ error }) => <ErrorFallback error={error} componentName="Header" />}>
        <Header />
      </ErrorBoundary>
      
      <main>
        <ErrorBoundary fallbackRender={({ error }) => <ErrorFallback error={error} componentName="Hero" />}>
          <Hero />
        </ErrorBoundary>
        
        <ErrorBoundary fallbackRender={({ error }) => <ErrorFallback error={error} componentName="Projects" />}>
          <Projects />
        </ErrorBoundary>
        
        <ErrorBoundary fallbackRender={({ error }) => <ErrorFallback error={error} componentName="About" />}>
          <About />
        </ErrorBoundary>
        
        <ErrorBoundary fallbackRender={({ error }) => <ErrorFallback error={error} componentName="Contact" />}>
          <Contact />
        </ErrorBoundary>
      </main>
      
      <ErrorBoundary fallbackRender={({ error }) => <ErrorFallback error={error} componentName="Footer" />}>
        <Footer />
      </ErrorBoundary>
      
      <ErrorBoundary fallbackRender={({ error }) => <ErrorFallback error={error} componentName="ThemeSwitcher" />}>
        <ThemeSwitcher />
      </ErrorBoundary>
    </div>
  );
};

export default Index;
