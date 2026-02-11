
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/utils/ScrollReveal';

const Index = () => {
  useEffect(() => {
    document.title = "Keja Analytics | Data & AI Solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col tech-pattern">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <ScrollReveal>
          <AboutUs />
        </ScrollReveal>
        
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        
        <ScrollReveal>
          <Clients />
        </ScrollReveal>
        
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
