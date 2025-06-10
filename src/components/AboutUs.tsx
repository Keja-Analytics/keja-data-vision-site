
import { Target, TrendingUp, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      icon: Target,
      title: "Generative AI Integration",
      description: "Seamlessly incorporate advanced AI and machine learning capabilities into your business workflows. We help you harness generative AI to automate processes, enhance decision-making, and create innovative solutions without the technical complexity."
    },
    {
      icon: TrendingUp,
      title: "Demand Forecasting Solutions",
      description: "Prevent lost sales and overstocking with accurate demand forecasts. Our algorithms help manufacturers and retailers optimize inventory, protect revenue, and maintain their reputation for reliable stock availability."
    },
    {
      icon: Shield,
      title: "Secure Analytics Dashboards",
      description: "Access clear, secure, and easy-to-use reports without compromising sensitive business data. Our solutions let you control and analyze data locally while appearing competent and self-sufficient to stakeholders."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0');
            setVisibleCards(prev => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-card-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-keja-light/20 to-transparent"></div>
      
      <div className="section-container relative">
        <div className="text-center mb-20">
          <h2 className="section-title animate-fade-in">Solving Real Business Challenges</h2>
          <p className="section-subtitle animate-fade-in delay-100">
            We understand the specific pain points that prevent businesses from leveraging AI and data analytics effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              data-card-index={index}
              className={`glass-card p-8 text-center hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-105 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-keja-accent/20 to-keja-copper/20 mb-6 transition-transform duration-300 hover:scale-110">
                <solution.icon className="h-8 w-8 text-keja-accent" />
              </div>
              <h3 className="text-xl font-semibold text-keja-primary mb-4">{solution.title}</h3>
              <p className="text-keja-gray leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="glass p-8 md:p-12 text-center hover:shadow-2xl transition-all duration-500">
          <h3 className="text-2xl md:text-3xl font-bold text-keja-primary mb-6">
            Why Choose Keja Analytics?
          </h3>
          <p className="text-lg text-keja-gray max-w-4xl mx-auto leading-relaxed">
            We bridge the gap between complex AI technology and practical business solutions. Our approach focuses on reducing technical barriers, protecting your bottom line, and ensuring you maintain control over your sensitive data while achieving measurable ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
