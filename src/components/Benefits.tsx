import { Shield, Wrench, TrendingUp, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Built to Last",
      description: "Heavy-duty construction with premium materials ensures longevity and minimal downtime in demanding environments.",
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      description: "Simple, accessible design means faster servicing and lower maintenance costs throughout the equipment lifecycle.",
    },
    {
      icon: TrendingUp,
      title: "Boost Productivity",
      description: "Ergonomic features and intelligent engineering maximize operator efficiency and reduce fatigue.",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times and responsive service ensure your operations never skip a beat.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Varun Engineering</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Young, energetic, and committed to delivering premium industrial solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="mb-6 inline-flex p-5 rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <benefit.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-white/10 backdrop-blur px-8 py-6 rounded-lg border border-white/20">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              Trusted by Leading Industries
            </p>
            <p className="text-white/80">
              Manufacturing • Logistics • Warehousing • Retail • Distribution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
