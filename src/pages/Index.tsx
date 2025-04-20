import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeSwitcher from '@/components/ThemeSwitcher';

// Simple fallback component for when sections fail to load
const ErrorFallback = ({ error, componentName }: { error: Error; componentName: string }) => (
  <div className="p-6 max-w-sm mx-auto my-8 bg-secondary/30 rounded-xl shadow-md">
    <h2 className="text-xl font-bold text-destructive mb-2">Something went wrong in {componentName}</h2>
    <p className="text-sm text-muted-foreground">{error.message || "Unknown error"}</p>
  </div>
);

const Index = () => {

  useEffect(() => {
    document.title = "Modern Portfolio | Your Name";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">

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
