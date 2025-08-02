
import { Users } from "lucide-react";

const Clients = () => {
  const clients = [
    { name: "TRIME ANIMAL FEEDS", logo: "T" },
    { name: "NEO-AGENCY ITALY", logo: "N" },
    { name: "ACRE INSIGHTS", logo: "A" },
    { name: "ROBARE SAFARI", logo: "R" }
  ];

  return (
    <section id="clients" className="py-16 md:py-24">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Users className="h-5 w-5 text-keja-secondary" />
          <h2 className="section-title">Our Valued Clients</h2>
        </div>
        <p className="section-subtitle">
          We're proud to partner with these organizations to deliver impactful data and AI solutions
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all border border-gray-100 aspect-square"
            >
              <div className="w-20 h-20 rounded-full bg-keja-light flex items-center justify-center mb-4 text-keja-primary text-3xl font-bold">
                {client.logo}
              </div>
              <h3 className="text-lg font-semibold text-keja-primary">{client.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-keja-gray max-w-3xl mx-auto">
            We're proud to have partnered with these diverse organizations to deliver impactful data and AI solutions across various industries, helping them harness the power of their data to achieve business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
