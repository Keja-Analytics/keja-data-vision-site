import { Users, Linkedin } from "lucide-react";

const Team = () => {
  const founders = [
    {
      name: "Jakinda Oluoch",
      role: "Data Engineer",
      bio: "Skilled data engineer with expertise in building robust data pipelines and infrastructure to support advanced analytics.",
      linkedin: "https://www.linkedin.com/in/jakinda-oluoch/",
    },
    {
      name: "Ken Mbaya",
      role: "Data Analyst",
      bio: "Experienced data analyst with a proven track record of transforming complex data into actionable business insights.",
      linkedin: "https://www.linkedin.com/in/kenmbaya/",
    }
  ];

  return (
    <section id="team" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-keja-accent/3 to-transparent"></div>
      
      <div className="section-container relative">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Users className="h-5 w-5 text-keja-accent" />
          <h2 className="section-title">Meet the Founders</h2>
        </div>
        <p className="section-subtitle">
          Our leadership team brings together expertise in data engineering and analytics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden"
            >
              <div className="aspect-[3/2] bg-gradient-to-br from-keja-accent/10 to-keja-copper/10 relative border-b border-white/10">
                <div className="absolute inset-0 flex items-center justify-center text-white/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                <p className="text-keja-accent font-medium">{founder.role}</p>
                <p className="text-white/50 mt-4">{founder.bio}</p>
                
                <div className="mt-6">
                  <a 
                    href={founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-white/60 hover:text-keja-accent transition-colors"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
