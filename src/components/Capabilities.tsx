import { Wrench, Truck, HeartHandshake, Factory, Shield, Clock } from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: Factory,
      title: "Manufacturing Excellence",
      description: "State-of-the-art facility producing high-quality material handling equipment with precision engineering.",
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description: "Tailored material handling solutions designed to meet specific industry requirements and workspace constraints.",
    },
    {
      icon: HeartHandshake,
      title: "After-Sales Support",
      description: "Dedicated service team providing prompt maintenance, repairs, and technical assistance across Gujarat.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every product meets highest industry standards.",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Efficient logistics ensuring quick delivery and installation of equipment across the region.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service for emergency assistance and technical support.",
    },
  ];

  return (
    <section id="capabilities" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Varun Engineering</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence in material handling solutions through expertise, quality, and dedicated support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-background"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                <capability.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
              <p className="text-muted-foreground">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;