
import { Briefcase, FileSearch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const dataServices = [
    {
      title: "Data Analysis",
      description: "Transforming raw data into understandable insights to drive informed decision-making."
    },
    {
      title: "Data Engineering",
      description: "Building robust data pipelines and infrastructure to ensure efficient data processing and storage."
    },
    {
      title: "Data Strategy",
      description: "Developing comprehensive data roadmaps for business growth aligned with your strategic objectives."
    },
    {
      title: "Market Analysis & Forecasting",
      description: "Predicting trends and understanding market dynamics to help you stay ahead of competition."
    }
  ];

  const aiServices = [
    {
      title: "AI R&D Projects",
      description: "Pioneering research and development in artificial intelligence to solve complex business challenges."
    },
    {
      title: "Machine Learning",
      description: "Developing predictive models and automated systems that improve with experience."
    },
    {
      title: "LLM & AI Agent Projects",
      description: "Crafting advanced natural language and intelligent agent solutions tailored to your specific needs."
    },
    {
      title: "AI Implementation",
      description: "Seamlessly integrating AI solutions into your existing business processes and systems."
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Briefcase className="h-5 w-5 text-keja-secondary" />
          <h2 className="section-title">Our Services</h2>
        </div>
        <p className="section-subtitle">
          We specialize in transforming complex data challenges into clear, actionable solutions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Data Management */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-keja-light flex items-center justify-center">
                <FileSearch className="h-6 w-6 text-keja-primary" />
              </div>
              <h3 className="text-2xl font-bold text-keja-primary">Data Management & Analytics</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dataServices.map((service, index) => (
                <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-keja-secondary mb-2">{service.title}</h4>
                    <p className="text-sm text-keja-gray">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Development */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-keja-light flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-keja-primary">
                  <path d="M12 2H2v10h10V2Z" />
                  <path d="M12 12H2v10h10V12Z" />
                  <path d="M22 2h-5v5h5V2Z" />
                  <path d="M22 12h-5v10h5V12Z" />
                  <path d="M17 7h-5v5h5V7Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-keja-primary">AI & Machine Learning Innovation</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiServices.map((service, index) => (
                <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-keja-secondary mb-2">{service.title}</h4>
                    <p className="text-sm text-keja-gray">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
