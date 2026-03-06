
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-keja-primary leading-tight max-w-6xl mx-auto">
              Transform Your Business with{" "}
              <span className="font-medium bg-gradient-to-r from-keja-copper to-keja-accent bg-clip-text text-transparent">Data Transformation</span>
              {" "}&{" "}
              <span className="font-medium bg-gradient-to-r from-keja-copper to-keja-accent bg-clip-text text-transparent">AI Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-keja-secondary max-w-4xl mx-auto font-light leading-relaxed">
              From no-code AI implementation to demand forecasting and secure analytics dashboards - we help businesses leverage technology to reduce costs, prevent lost sales, and make data-driven decisions with confidence.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              className="group bg-keja-accent hover:bg-keja-accent/80 text-white font-semibold px-8 py-6 text-lg flex items-center gap-3 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg border-0"
              onClick={() => window.location.href = '#contact'}
            >
              Start Your AI Transformation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              className="group bg-white hover:bg-keja-light text-keja-primary font-semibold border border-keja-gray hover:border-keja-accent px-8 py-6 text-lg flex items-center gap-3 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
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
