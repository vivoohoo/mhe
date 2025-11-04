import { Truck, Boxes, Zap, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import palletTruckImg from "@/assets/pallet-truck.jpg";
import manualStackerImg from "@/assets/manual-stacker.png";
import semiElectricStackerImg from "@/assets/semi-electric-stacker.png";
import electricStackerImg from "@/assets/electric-stacker.png";

const Products = () => {
  const products = [
    {
      icon: Truck,
      title: "Hydraulic Pallet Trucks",
      description: "Premium 3-ton capacity pallet trucks (685x1220mm)&(550x1150mm) with durable hydraulic systems. Ideal for efficient material transport in warehouses and industrial settings.",
      capacity: "Up to 3000 kg",
      features: ["Heavy-duty construction", "Smooth hydraulic operation", "Ergonomic design"],
      image: palletTruckImg,
    },
    {
      icon: Boxes,
      title: "Manual Stackers",
      description: "Versatile manual stackers designed for vertical lifting and stacking operations. Perfect for small to medium warehouses and manufacturing facilities.",
      capacity: "1000-1500 kg",
      features: ["Adjustable fork height", "Compact design", "Low maintenance"],
      image: manualStackerImg,
    },
    {
      icon: Zap,
      title: "Semi-Electric Stackers",
      description: "Advanced semi-electric stackers combining powered lift with manual movement. Ideal for regular lifting operations with reduced operator fatigue.",
      capacity: "1200-1500 kg",
      features: ["Electric lift system", "Manual movement", "Battery indicator"],
      image: semiElectricStackerImg,
    },
    {
      icon: Settings,
      title: "Electric Stackers",
      description: "Fully-electric stackers with advanced features for maximum productivity. Perfect for intensive material handling operations in large warehouses.",
      capacity: "Up to 2000 kg",
      features: ["Full electric operation", "Advanced controls", "Extended battery life"],
      image: electricStackerImg,
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Equipment Range</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive material handling solutions engineered for performance and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden bg-muted/50 h-80">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover scale-90 transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 p-3 rounded-lg bg-primary text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <product.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="pt-4 border-t border-border group-hover:border-primary/30 transition-colors duration-300">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      Capacity
                    </div>
                    <div className="text-sm font-bold text-primary">
                      {product.capacity}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
