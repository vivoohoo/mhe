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
            Trusted Material
            <br />
            <span className="text-primary">Handling Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Gujarat's leading manufacturer of premium material handling equipment. Specializing in hydraulic pallet trucks, stackers, and customized solutions for your warehouse needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
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

        {/* Updated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
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
