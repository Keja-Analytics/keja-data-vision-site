
import { Target, TrendingUp, Shield } from "lucide-react";

const AboutUs = () => {
  const solutions = [
    {
      icon: Target,
      title: "No-Code AI Implementation",
      description: "Build functional AI solutions without technical complexity. We help you harness generative AI to produce more value with less cost, making you appear innovative and tech-savvy while avoiding the frustrations of failed implementations."
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

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Solving Real Business Challenges</h2>
          <p className="section-subtitle">
            We understand the specific pain points that prevent businesses from leveraging AI and data analytics effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center hover:shadow-xl transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-keja-accent/10 mb-6">
                <solution.icon className="h-8 w-8 text-keja-accent" />
              </div>
              <h3 className="text-xl font-semibold text-keja-primary mb-4">{solution.title}</h3>
              <p className="text-keja-gray leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="glass p-8 md:p-12 text-center">
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
