import { Users } from "lucide-react";
import acreInsightsLogo from "@/assets/acre-insights-logo.jpeg";
import trimeAnimalFeedsLogo from "@/assets/trime-animal-feeds-logo.png";
import robareSafarisLogo from "@/assets/robare-safaris-logo.gif";

const Clients = () => {
  const clients = [
    { name: "TRIME ANIMAL FEEDS", logo: trimeAnimalFeedsLogo },
    { name: "NEO-AGENCY ITALY", logo: null },
    { name: "ACRE INSIGHTS", logo: acreInsightsLogo },
    { name: "ROBARE SAFARI", logo: robareSafarisLogo }
  ];

  return (
    <section id="clients" className="py-16 md:py-24">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Users className="h-5 w-5 text-keja-primary" />
          <h2 className="section-title">Our Valued Clients</h2>
        </div>
        <p className="section-subtitle">
          We're proud to partner with these organizations to deliver impactful data and AI solutions
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="glass-card p-6 flex flex-col items-center justify-center text-center aspect-square"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/80 border border-[#bfd8ee]/30 flex items-center justify-center mb-4 overflow-hidden">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="w-16 h-16 object-contain" />
                ) : (
                  <span className="text-3xl font-bold text-[#0c192b]">{client.name.charAt(0)}</span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-keja-primary">{client.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-keja-primary/50 max-w-3xl mx-auto">
            We're proud to have partnered with these diverse organizations to deliver impactful data and AI solutions across various industries, helping them harness the power of their data to achieve business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
