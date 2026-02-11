
import { useEffect, useRef } from "react";

const Clients = () => {
  const clients = [
    { name: "TRIME ANIMAL FEEDS", logo: "T" },
    { name: "NEO-AGENCY ITALY", logo: "N" },
    { name: "ACRE INSIGHTS", logo: "A" },
    { name: "ROBARE SAFARI", logo: "R" },
    // Duplicate for seamless loop
    { name: "TRIME ANIMAL FEEDS", logo: "T" },
    { name: "NEO-AGENCY ITALY", logo: "N" },
    { name: "ACRE INSIGHTS", logo: "A" },
    { name: "ROBARE SAFARI", logo: "R" },
  ];

  return (
    <section id="clients" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-keja-primary/40 text-sm font-medium uppercase tracking-widest">
          Trusted by leading organizations
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f5f7fa] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f5f7fa] to-transparent z-10"></div>

        {/* Sliding track */}
        <div className="flex animate-slide-clients gap-12 w-max">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 py-4 shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-keja-accent/20 border border-keja-accent/30 flex items-center justify-center text-keja-primary font-bold text-lg">
                {client.logo}
              </div>
              <span className="text-keja-primary/50 font-semibold text-lg whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
