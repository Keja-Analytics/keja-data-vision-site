
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-keja-primary leading-tight">
                Empowering Your Business Through Intelligent{" "}
                <span className="text-keja-secondary">Data & AI Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-keja-gray max-w-2xl">
                Keja Analytics transforms complex data into clear, actionable insights and builds cutting-edge AI solutions to drive business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-keja-primary hover:bg-keja-secondary text-white px-8 py-6 text-lg flex items-center gap-2 transition-all transform hover:translate-y-[-2px]"
                onClick={() => window.location.href = '#contact'}
              >
                Let's Unlock Your Data's Potential
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-keja-primary text-keja-primary hover:bg-keja-light px-8 py-6 text-lg"
                onClick={() => window.location.href = '#services'}
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-keja-primary/20 via-keja-secondary/20 to-keja-accent/20 rounded-lg transform rotate-3"></div>
            <div className="relative z-10 bg-white p-6 shadow-xl rounded-lg transform -rotate-3">
              <div className="aspect-[4/3] bg-gradient-to-br from-keja-primary to-keja-accent rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                  <path d="M8 7h8" />
                  <path d="M8 10h8" />
                  <path d="M8 13h5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
