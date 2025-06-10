
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-keja-dark leading-tight max-w-5xl mx-auto">
              Transform Your Business with{" "}
              <span className="font-medium text-keja-primary">AI Solutions</span>
              {" "}&{" "}
              <span className="font-medium text-keja-accent">Data Intelligence</span>
            </h1>
            <p className="text-lg md:text-xl text-keja-gray max-w-3xl mx-auto font-light leading-relaxed">
              From no-code AI implementation to demand forecasting and secure analytics dashboards - we help businesses leverage technology to reduce costs, prevent lost sales, and make data-driven decisions with confidence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="glass-card hover:glass bg-keja-accent/20 hover:bg-keja-accent/30 text-keja-primary border-keja-accent/30 px-8 py-6 text-lg flex items-center gap-2 transition-all transform hover:translate-y-[-2px] font-medium"
              onClick={() => window.location.href = '#contact'}
            >
              Start Your AI Transformation
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="glass-card border-keja-primary/30 text-keja-primary hover:bg-keja-primary/10 px-8 py-6 text-lg font-medium"
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
