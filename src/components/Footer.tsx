
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-keja-border pt-12 pb-6" style={{ background: '#0B0F19' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-foreground">Keja Analytics</h2>
            <p className="mt-2 text-keja-muted max-w-md">
              Empowering businesses through intelligent data and AI solutions
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/company/keja-analytics" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-keja-muted hover:text-keja-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-keja-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-keja-muted/50 text-sm">
            &copy; {currentYear} Keja Analytics. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-keja-muted/50">
              <a href="#about" className="hover:text-keja-cyan transition-colors">About</a>
              <a href="#services" className="hover:text-keja-cyan transition-colors">Services</a>
              <a href="#team" className="hover:text-keja-cyan transition-colors">Team</a>
              <a href="#clients" className="hover:text-keja-cyan transition-colors">Clients</a>
              <a href="#contact" className="hover:text-keja-cyan transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
