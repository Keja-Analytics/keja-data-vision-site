
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-keja-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Keja Analytics</h2>
            <p className="mt-2 text-gray-300 max-w-md">
              Empowering businesses through intelligent data and AI solutions
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/company/keja-analytics" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-keja-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} Keja Analytics. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
              <a href="#about" className="hover:text-keja-accent transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-keja-accent transition-colors">
                Services
              </a>
              <a href="#team" className="hover:text-keja-accent transition-colors">
                Team
              </a>
              <a href="#clients" className="hover:text-keja-accent transition-colors">
                Clients
              </a>
              <a href="#contact" className="hover:text-keja-accent transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
