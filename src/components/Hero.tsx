
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-keja-dark leading-tight">
                Empowering Your Business Through{" "}
                <span className="font-medium text-keja-primary">Intelligent Data</span>
                {" "}&{" "}
                <span className="font-medium text-keja-accent">AI Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-keja-gray max-w-2xl font-light leading-relaxed">
                Keja Analytics transforms complex data into clear, actionable insights and builds cutting-edge AI solutions to drive business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="glass-card hover:glass bg-keja-accent/20 hover:bg-keja-accent/30 text-keja-primary border-keja-accent/30 px-8 py-6 text-lg flex items-center gap-2 transition-all transform hover:translate-y-[-2px] font-medium"
                onClick={() => window.location.href = '#contact'}
              >
                Let's Unlock Your Data's Potential
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="glass-card border-keja-primary/30 text-keja-primary hover:bg-keja-primary/10 px-8 py-6 text-lg font-medium"
                onClick={() => window.location.href = '#services'}
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative glass p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-float">
              <div className="aspect-[4/3] bg-gradient-to-br from-keja-accent/10 to-keja-primary/10 rounded-lg flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
                <div className="relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-keja-primary">
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                    <path d="M8 7h8" />
                    <path d="M8 10h8" />
                    <path d="M8 13h5" />
                  </svg>
                </div>
                
                {/* Subtle geometric pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="minimalistPattern" patternUnits="userSpaceOnUse" width="40" height="40">
                        <circle cx="20" cy="20" r="2" fill="currentColor" className="text-keja-primary" />
                        <path d="M0,20 H40 M20,0 V40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-keja-primary" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#minimalistPattern)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
