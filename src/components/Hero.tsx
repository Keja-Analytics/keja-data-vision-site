
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-keja-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-keja-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-keja-dark leading-tight max-w-6xl mx-auto">
              Transform Your Business with{" "}
              <span className="font-medium text-keja-primary bg-gradient-to-r from-keja-primary to-keja-secondary bg-clip-text text-transparent">AI Solutions</span>
              {" "}&{" "}
              <span className="font-medium text-keja-accent bg-gradient-to-r from-keja-accent to-keja-copper bg-clip-text text-transparent">Data Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-keja-gray max-w-4xl mx-auto font-light leading-relaxed">
              From no-code AI implementation to demand forecasting and secure analytics dashboards - we help businesses leverage technology to reduce costs, prevent lost sales, and make data-driven decisions with confidence.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button
              className="group glass-card hover:glass bg-gradient-to-r from-keja-accent/20 to-keja-copper/20 hover:from-keja-accent/30 hover:to-keja-copper/30 text-keja-primary border-keja-accent/30 px-8 py-6 text-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-medium shadow-xl"
              onClick={() => window.location.href = '#contact'}
            >
              Start Your AI Transformation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              className="glass-card border-keja-primary/30 text-keja-primary hover:bg-keja-primary/10 px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
              onClick={() => window.location.href = '#services'}
            >
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
