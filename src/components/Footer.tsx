
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <a href="#home" className="text-3xl font-bold text-gradient mb-4 block">Portfolio</a>
            <p className="text-foreground/70 mb-6 max-w-md">
              Creating beautiful and functional web experiences with a focus on user experience and performance.
            </p>
            <div className="flex space-x-4">
              {["github", "linkedin", "twitter", "instagram"].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="bg-white/10 p-2 rounded-full hover:bg-primary/20 transition-colors"
                  aria-label={`Follow on ${platform}`}
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${platform}/ffffff`} 
                    alt={platform}
                    className="w-5 h-5" 
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-foreground/70 hover:text-primary transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-foreground/70">
              <li>San Francisco, CA</li>
              <li>yourname@example.com</li>
              <li>+1 (123) 456-7890</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm mb-4 sm:mb-0">
            © {currentYear} Your Name. All Rights Reserved.
          </p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-foreground/50 text-sm"
          >
            Designed & Built with ❤️
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
