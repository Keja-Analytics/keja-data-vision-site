
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Empowering Your Business Through Intelligent{" "}
                <span className="text-keja-secondary">Data & AI Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                Keja Analytics transforms complex data into clear, actionable insights and builds cutting-edge AI solutions to drive business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-keja-secondary hover:bg-keja-primary text-white px-8 py-6 text-lg flex items-center gap-2 transition-all transform hover:translate-y-[-2px]"
                onClick={() => window.location.href = '#contact'}
              >
                Let's Unlock Your Data's Potential
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-keja-secondary text-white hover:bg-keja-secondary/20 px-8 py-6 text-lg"
                onClick={() => window.location.href = '#services'}
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative glass rounded-lg p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-keja-primary/80 to-keja-accent/80 rounded-md flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                    <path d="M8 7h8" />
                    <path d="M8 10h8" />
                    <path d="M8 13h5" />
                  </svg>
                </div>
                
                {/* Tech circuit pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="circuitPattern" patternUnits="userSpaceOnUse" width="100" height="100">
                        <path d="M0,50 H100 M50,0 V100 M25,25 H75 V75 H25 Z" fill="none" stroke="white" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeWidth="0.5" />
                        <circle cx="25" cy="25" r="3" fill="white" />
                        <circle cx="75" cy="25" r="3" fill="white" />
                        <circle cx="25" cy="75" r="3" fill="white" />
                        <circle cx="75" cy="75" r="3" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuitPattern)" />
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
