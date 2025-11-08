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
      description: "Premium hydraulic pallet trucks engineered for heavy-duty warehouse operations. These industrial material handling equipment feature robust 3-ton load capacity with precision hydraulic systems. Available in standard sizes (685x1220mm) and (550x1150mm), our warehouse equipment ensures smooth material transport across manufacturing facilities, logistics centers, and distribution warehouses in Gujarat.",
      capacity: "3000 kg Maximum Load",
      features: ["German-engineered hydraulic pump", "Reinforced steel fork construction", "Ergonomic handle with safety grip", "Polyurethane wheels for smooth operation", "CE certified safety standards"],
      image: palletTruckImg,
      applications: ["Warehouse logistics", "Manufacturing facilities", "Retail distribution", "Loading dock operations"],
    },
    {
      icon: Boxes,
      title: "Manual Stackers",
      description: "Versatile manual stackers designed for efficient vertical lifting and precision stacking operations. These warehouse equipment solutions offer exceptional maneuverability in confined spaces, making them ideal for small to medium warehouses, retail storage facilities, and light manufacturing operations across Ahmedabad, Surat, and Vadodara industrial sectors.",
      capacity: "1000-1500 kg Lifting Capacity",
      features: ["Adjustable fork height (80-2000mm)", "Compact turning radius", "Manual hydraulic operation", "Overload protection system", "Low-maintenance design"],
      image: manualStackerImg,
      applications: ["Retail warehousing", "Light manufacturing", "Pharmaceutical storage", "Food processing facilities"],
    },
    {
      icon: Zap,
      title: "Semi-Electric Stackers",
      description: "Advanced semi-electric stackers combining powered lifting efficiency with manual maneuverability. These industrial material handling systems feature electric lift mechanisms while maintaining manual movement control, reducing operator fatigue by 70% compared to fully manual alternatives. Perfect for regular lifting operations in medium-volume warehouse environments.",
      capacity: "1200-1500 kg Electric Lift",
      features: ["24V DC electric lift motor", "Maintenance-free battery system", "Emergency stop safety feature", "Digital battery indicator", "Silent operation technology"],
      image: semiElectricStackerImg,
      applications: ["Medium-volume warehouses", "Automotive parts storage", "Electronics manufacturing", "Chemical industry logistics"],
    },
    {
      icon: Settings,
      title: "Electric Stackers",
      description: "Fully-electric stackers with advanced automation features for maximum warehouse productivity. These premium material handling equipment solutions combine powered lifting with electric movement, delivering 300% efficiency improvement over manual alternatives. Ideal for intensive material handling operations in large warehouses and high-volume distribution centers across Gujarat's industrial corridor.",
      capacity: "2000 kg Full Electric Operation",
      features: ["AC drive motor technology", "Programmable speed control", "Advanced regenerative braking", "Multi-function display panel", "Extended 8-hour battery life"],
      image: electricStackerImg,
      applications: ["Large warehouse operations", "High-volume distribution centers", "E-commerce fulfillment", "Heavy manufacturing logistics"],
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Material Handling Equipment Range
          </h2>
          <div className="text-lg text-muted-foreground max-w-4xl mx-auto space-y-4">
            <p>
              Discover Gujarat's most comprehensive material handling equipment portfolio, featuring hydraulic pallet trucks, manual stackers, semi-electric lifting solutions, and fully automated warehouse equipment. Our industrial equipment range serves manufacturing facilities, logistics centers, and distribution warehouses across Ahmedabad, Surat, Vadodara, and Rajkot.
            </p>
            <p>
              Each warehouse equipment solution is engineered for maximum operational efficiency, safety compliance, and long-term reliability. From heavy-duty hydraulic pallet trucks capable of handling 3000kg loads to precision-engineered electric stackers for automated lifting operations, our material handling systems transform warehouse productivity.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
              <div className="bg-background/50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Industrial Grade Construction</h3>
                <p className="text-sm">Heavy-duty steel construction with powder-coated finishes ensures durability in demanding warehouse environments.</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Safety Certified Equipment</h3>
                <p className="text-sm">All material handling equipment meets international safety standards with comprehensive warranty coverage.</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Customized Solutions</h3>
                <p className="text-sm">Tailored warehouse equipment configurations to match specific operational requirements and facility constraints.</p>
              </div>
            </div>
          </div>
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
                  
                  {/* Applications */}
                  <div className="mb-4">
                    <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Ideal Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span key={appIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border group-hover:border-primary/30 transition-colors duration-300">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      Load Capacity
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
