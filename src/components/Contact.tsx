
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally submit to a backend API
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-keja-primary/10 to-keja-accent/10">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Mail className="h-5 w-5 text-keja-secondary" />
          <h2 className="section-title">Get in Touch</h2>
        </div>
        <p className="section-subtitle">
          Ready to transform your data into a strategic asset? Let's connect!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-keja-primary mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-keja-gray mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-keja-gray mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-keja-gray mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-keja-primary hover:bg-keja-secondary text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold text-keja-primary mb-6">Connect with us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-keja-light flex items-center justify-center mr-4">
                    <Linkedin className="h-5 w-5 text-keja-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-keja-secondary">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/company/keja-analytics" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-keja-primary hover:text-keja-secondary transition-colors"
                    >
                      linkedin.com/company/keja-analytics
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-keja-light flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-keja-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-keja-secondary">Email</h4>
                    <p className="text-keja-gray">info@keja-analytics.com</p>
                    <p className="text-xs text-keja-gray mt-1">(Placeholder for future email address)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-keja-primary to-keja-secondary rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to transform your data?</h3>
              <p className="mb-6">
                Let's work together to unlock the full potential of your data and help your business thrive with AI-powered solutions.
              </p>
              <Button 
                variant="secondary" 
                className="bg-white text-keja-primary hover:bg-keja-light"
                onClick={() => {
                  const formElement = document.querySelector('form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Reach Out Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
