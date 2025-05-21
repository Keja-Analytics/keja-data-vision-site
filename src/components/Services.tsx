
import { Briefcase, Database, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<"data" | "ai">("data");

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

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
          <ToggleGroup 
            type="single" 
            value={activeCategory} 
            onValueChange={(value) => value && setActiveCategory(value as "data" | "ai")}
            className="border rounded-full p-1 bg-keja-dark/30 backdrop-blur-sm"
          >
            <ToggleGroupItem 
              value="data" 
              aria-label="Toggle data services" 
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                activeCategory === "data" 
                  ? "bg-keja-secondary text-white shadow-md" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Database className="h-4 w-4 mr-2" />
              Data Management
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="ai" 
              aria-label="Toggle AI services" 
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                activeCategory === "ai" 
                  ? "bg-keja-secondary text-white shadow-md" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Brain className="h-4 w-4 mr-2" />
              AI & Machine Learning
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Conditional Content Based on Toggle */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 max-w-5xl mx-auto">
          {activeCategory === "data" ? (
            // Data Services Content
            <>
              {dataServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="border border-keja-light/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:bg-white/10"
                >
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-keja-secondary text-lg mb-2">{service.title}</h4>
                    <p className="text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </>
          ) : (
            // AI Services Content
            <>
              {aiServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="border border-keja-light/10 bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:bg-white/10"
                >
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-keja-secondary text-lg mb-2">{service.title}</h4>
                    <p className="text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
