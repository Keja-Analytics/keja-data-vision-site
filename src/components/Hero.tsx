
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic zoom-out background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'cinematicZoom 20s ease-out forwards',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c192b]/70 via-[#0c192b]/50 to-[#f5f7fa]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center space-y-8">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight max-w-6xl mx-auto">
              Transform Your Business with{" "}
              <span className="inline-block glass-text px-4 py-1 rounded-2xl font-medium">AI Solutions</span>
              {" "}&{" "}
              <span className="inline-block glass-text px-4 py-1 rounded-2xl font-medium">Data Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed">
              From no-code AI implementation to demand forecasting and secure analytics dashboards - we help businesses leverage technology to reduce costs, prevent lost sales, and make data-driven decisions with confidence.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              className="group glass-btn bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-6 text-lg flex items-center gap-3 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-xl border border-white/20 shadow-lg"
              onClick={() => window.location.href = '#contact'}
            >
              Start Your AI Transformation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              className="group glass-btn bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-6 text-lg flex items-center gap-3 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-xl border border-white/20 shadow-lg"
              onClick={() => window.location.href = '#services'}
            >
              Explore Our Solutions
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
