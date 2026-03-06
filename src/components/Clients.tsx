import { Users } from "lucide-react";
import acreInsightsLogo from "@/assets/acre-insights-logo.jpeg";
import trimeAnimalFeedsLogo from "@/assets/trime-animal-feeds-logo.png";
import robareSafarisLogo from "@/assets/robare-safaris-logo.gif";
import robinLogo from "@/assets/robin-logo.jpeg";
import utuLogo from "@/assets/utu-logo.png";

const Clients = () => {
  const clients = [
    { name: "TRIME ANIMAL FEEDS", logo: trimeAnimalFeedsLogo },
    { name: "NEO-AGENCY ITALY", logo: null },
    { name: "ACRE INSIGHTS", logo: acreInsightsLogo },
    { name: "ROBARE SAFARI", logo: robareSafarisLogo },
    { name: "ROBIN", logo: robinLogo },
    { name: "UTU", logo: utuLogo },
  ];

  const allClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Users className="h-5 w-5 text-keja-primary" />
          <h2 className="section-title">Our Valued Clients</h2>
        </div>
        <p className="section-subtitle">
          We're proud to partner with these organizations to deliver impactful data and AI solutions
        </p>

        <div className="mt-12 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee gap-8">
            {allClients.map((client, index) => (
              <div
                key={index}
                className="glass-card p-6 flex flex-col items-center justify-center text-center min-w-[180px] h-[200px] shrink-0 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white border border-keja-gray flex items-center justify-center mb-4 overflow-hidden">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="w-16 h-16 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                    />
                  ) : (
                    <span className="text-3xl font-bold text-keja-primary">{client.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-keja-primary">{client.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-keja-secondary max-w-3xl mx-auto">
            We're proud to have partnered with these diverse organizations to deliver impactful data and AI solutions across various industries, helping them harness the power of their data to achieve business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
