
import { FileText, Info } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Info className="h-5 w-5 text-keja-secondary" />
          <h2 className="section-title">Who We Are</h2>
        </div>
        <p className="section-subtitle">
          Keja Analytics is dedicated to transforming data into actionable insights and building cutting-edge AI solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="bg-white rounded-xl shadow-md p-8 transform transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-keja-light rounded-full flex items-center justify-center mr-4">
                <FileText className="h-6 w-6 text-keja-primary" />
              </div>
              <h3 className="text-xl font-semibold text-keja-primary">Our Vision</h3>
            </div>
            <p className="text-keja-gray">
              To be the leading innovator in data analytics and AI solutions, empowering businesses to make informed decisions that drive growth and create lasting value.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 transform transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-keja-light rounded-full flex items-center justify-center mr-4">
                <FileText className="h-6 w-6 text-keja-primary" />
              </div>
              <h3 className="text-xl font-semibold text-keja-primary">Our Mission</h3>
            </div>
            <p className="text-keja-gray">
              To provide exceptional data analytics and AI solutions that turn complex information into clear insights, enabling our clients to optimize operations, enhance decision-making, and achieve sustainable growth.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-keja-primary mb-6 text-center">Our Core Focus</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-keja-light rounded-lg p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-keja-secondary mb-3">Analytical Projects</h4>
              <ul className="space-y-2 text-keja-gray">
                <li className="flex items-start">
                  <span className="text-keja-accent mr-2">•</span>
                  <span>Online marketing data analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-keja-accent mr-2">•</span>
                  <span>Data engineering projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-keja-accent mr-2">•</span>
                  <span>Analytical reporting and dashboards</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-keja-light rounded-lg p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-keja-secondary mb-3">AI Research & Development</h4>
              <ul className="space-y-2 text-keja-gray">
                <li className="flex items-start">
                  <span className="text-keja-accent mr-2">•</span>
                  <span>Specialized AI R&D projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-keja-accent mr-2">•</span>
                  <span>Machine learning model development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-keja-accent mr-2">•</span>
                  <span>AI agent and automation solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-keja-gray max-w-3xl mx-auto">
            At Keja Analytics, we are committed to delivering data-driven solutions, engineering robust data pipelines, and pioneering AI innovation to empower our clients in navigating the complexities of today's business landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
