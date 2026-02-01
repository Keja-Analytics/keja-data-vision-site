
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Keja Analytics transformed our approach to data, enabling us to make more informed decisions that have directly improved our bottom line.",
      name: "Trime Animal Feeds",
      title: "Position, Company"
    },
    {
      quote: "Working with the Keja Analytics team has been a game-changer for our business. Their AI solutions are innovative and deliver real results.",
      name: "Robare Safaris", 
      title: "Position, Company"
    },
    {
      quote: "The depth of insights provided by Keja Analytics has helped us understand our market in ways we never thought possible.",
      name: "Acre Insights",
      title: "Position, Company"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-keja-light/20 to-transparent py-20 md:py-32">
      <div className="section-container">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MessageSquare className="h-5 w-5 text-keja-secondary" />
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <p className="section-subtitle">
          Don't just take our word for it - hear what our clients have to say about working with us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="glass-card border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-keja-accent to-keja-copper"></div>
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="text-keja-accent/30 fill-current">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-keja-gray mb-6 italic leading-relaxed">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-keja-primary">{testimonial.name}</p>
                  <p className="text-sm text-keja-gray">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
