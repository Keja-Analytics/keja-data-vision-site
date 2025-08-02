import { Users } from "lucide-react";

const Clients = () => {
  const clients = [
    { name: "TRIME ANIMAL FEEDS", logo: "T" },
    { name: "NEO-AGENCY ITALY", logo: "N" },
    { name: "ACRE INSIGHTS", logo: "A" },
    { name: "ROBARE SAFARI", logo: "R" }
  ];

  // Duplicate logos for seamless loop effect
  const logoLoop = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 md:py-24 bg-gradient-to-br from-keja-primary/5 to-keja-accent/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-keja-light/20 via-transparent to-keja-cream/20"></div>

      <div className="section-container relative">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Users className="h-5 w-5 text-keja-secondary" />
          <h2 className="section-title">Our Valued Clients</h2>
        </div>
        <p className="section-subtitle text-center mb-12">
          Trusted by industry leaders and innovators
        </p>

        {/* Sliding Logo Row */}
        <div className="overflow-hidden relative">
          <div className="flex animate-slide-infinite gap-16 whitespace-nowrap">
            {logoLoop.map((client, index) => (
              <div 
                key={index} 
                className="w-32 h-32 flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl shadow-md"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
