import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-warehouse.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image stays the same */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial Material Handling Equipment by Varun Engineering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Updated Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Material Handling Equipment Supplier in Gujarat
            <br />
            <span className="text-primary">Industrial Warehouse Solutions</span>
          </h1>
          <div className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl animate-fade-in delay-100">
            <p className="mb-4">
              Varun Engineering is Gujarat's premier material handling equipment supplier, delivering premium industrial warehouse solutions since 2009. Our comprehensive range of hydraulic pallet trucks, manual stackers, and electric lifting equipment transforms warehouse operations across Ahmedabad, Surat, Vadodara, and Rajkot.
            </p>
            <p className="mb-4">
              As a leading industrial equipment manufacturer, we specialize in heavy-duty material handling solutions that boost productivity by 40% while reducing operational costs. Our warehouse equipment meets international safety standards, ensuring reliable performance in demanding industrial environments.
            </p>
            <p>
              Whether you need hydraulic pallet trucks for logistics operations or customized stackers for manufacturing facilities, our material handling systems deliver exceptional durability and efficiency. With over 3,000 successful installations across Gujarat's industrial sector, we understand the unique challenges of warehouse automation and material transport optimization.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
            <Button size="lg" className="text-base px-8 py-6 group" asChild>
              <a href="#products">
                View Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground backdrop-blur" asChild>
              <a href="#contact">
                Get a Quote
              </a>
            </Button>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 max-w-4xl animate-fade-in delay-300">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Comprehensive Material Handling Solutions for Gujarat Industries
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-white/90">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Warehouse Equipment Specialists</h3>
              <p className="mb-4">
                Our material handling equipment includes hydraulic pallet trucks, manual stackers, semi-electric stackers, and fully electric lifting solutions. Each warehouse equipment piece is engineered for maximum efficiency and safety compliance.
              </p>
              <p>
                We provide customized industrial equipment solutions for manufacturing facilities, logistics centers, retail warehouses, and distribution hubs across Gujarat's major industrial corridors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Service & Support Excellence</h3>
              <p className="mb-4">
                Beyond equipment supply, we offer comprehensive maintenance services, operator training programs, and 24/7 technical support. Our preventive maintenance programs reduce equipment downtime by 60% and extend operational lifespan.
              </p>
              <p>
                With strategic service centers in Ahmedabad, Surat, and Vadodara, we ensure rapid response times and minimal disruption to your warehouse operations.
              </p>
            </div>
          </div>
        </div>

        {/* Updated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl animate-fade-in delay-400">
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3000+</div>
            <div className="text-sm text-white/80 uppercase tracking-wide">Products Delivered</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-white/80 uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-white/80 uppercase tracking-wide">Support Available</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-white/80 uppercase tracking-wide">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
