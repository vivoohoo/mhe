import { Shield, Wrench, TrendingUp, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Industrial-Grade Durability",
      description: "Our material handling equipment features reinforced steel construction with premium powder-coated finishes, ensuring 15+ year operational lifespan in demanding warehouse environments. Each hydraulic pallet truck and stacker undergoes rigorous 50-point quality testing before delivery.",
      details: ["CE certified safety standards", "IP54 protection rating", "Corrosion-resistant coating", "Heavy-duty bearing systems"],
    },
    {
      icon: Wrench,
      title: "Comprehensive Maintenance Support",
      description: "Reduce equipment downtime by 60% with our proactive maintenance programs. Our certified technicians provide scheduled servicing, emergency repairs, and genuine spare parts availability across Ahmedabad, Surat, and Vadodara service centers within 4-hour response time.",
      details: ["24/7 technical support hotline", "Preventive maintenance schedules", "Genuine parts guarantee", "On-site service capabilities"],
    },
    {
      icon: TrendingUp,
      title: "Operational Efficiency Enhancement",
      description: "Boost warehouse productivity by 40% with ergonomically designed material handling systems. Our electric stackers and hydraulic pallet trucks reduce operator fatigue while increasing material transport speed, directly impacting your bottom line through optimized workflow processes.",
      details: ["Ergonomic handle design", "Precision control systems", "Reduced operator strain", "Faster cycle times"],
    },
    {
      icon: Clock,
      title: "Rapid Deployment & Service",
      description: "Minimize operational disruption with our streamlined delivery and installation process. We maintain ready stock of popular warehouse equipment models, ensuring 48-hour delivery across Gujarat. Our expert installation team completes setup and operator training within one business day.",
      details: ["Ready stock availability", "48-hour delivery guarantee", "Professional installation", "Operator training included"],
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Gujarat Industries Choose Varun Engineering
          </h2>
          <div className="text-lg text-white/80 max-w-4xl mx-auto space-y-4">
            <p>
              Varun Engineering stands as Gujarat's most trusted material handling equipment supplier, delivering industrial warehouse solutions that transform operational efficiency across manufacturing, logistics, and distribution sectors. Our commitment to quality, innovation, and customer success has established us as the preferred warehouse equipment partner for over 300 businesses statewide.
            </p>
            <p>
              With 15+ years of specialized experience in material handling systems, we combine technical expertise with deep understanding of Gujarat's industrial landscape. From Ahmedabad's textile hubs to Surat's diamond processing facilities, our industrial equipment solutions are engineered to meet the unique challenges of diverse operational environments.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group bg-white/5 backdrop-blur p-6 rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-6 inline-flex p-5 rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <benefit.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {benefit.description}
              </p>
              <div className="space-y-2">
                {benefit.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="text-xs text-white/60 flex items-center justify-center">
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industry Expertise Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Serving Gujarat's Key Industrial Sectors</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur p-6 rounded-lg border border-white/10">
              <h4 className="text-lg font-semibold text-primary mb-3">Manufacturing Excellence</h4>
              <p className="text-white/70 text-sm mb-3">
                Supporting automotive, textile, pharmaceutical, and chemical manufacturing with specialized material handling equipment designed for production line efficiency and safety compliance.
              </p>
              <div className="text-xs text-white/60">
                <div>• Automotive parts handling</div>
                <div>• Textile material transport</div>
                <div>• Pharmaceutical logistics</div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur p-6 rounded-lg border border-white/10">
              <h4 className="text-lg font-semibold text-primary mb-3">Logistics & Distribution</h4>
              <p className="text-white/70 text-sm mb-3">
                Enhancing warehouse operations across Gujarat's logistics hubs with high-capacity pallet trucks and automated stacking solutions for e-commerce fulfillment and third-party logistics providers.
              </p>
              <div className="text-xs text-white/60">
                <div>• E-commerce fulfillment centers</div>
                <div>• Third-party logistics (3PL)</div>
                <div>• Cold storage facilities</div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur p-6 rounded-lg border border-white/10">
              <h4 className="text-lg font-semibold text-primary mb-3">Retail & Wholesale</h4>
              <p className="text-white/70 text-sm mb-3">
                Optimizing retail warehousing and wholesale distribution with compact material handling equipment designed for high-turnover inventory management and space-constrained environments.
              </p>
              <div className="text-xs text-white/60">
                <div>• Retail distribution centers</div>
                <div>• Wholesale warehouses</div>
                <div>• Multi-level storage systems</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur px-8 py-6 rounded-lg border border-white/20">
            <p className="text-2xl md:text-3xl font-bold mb-2">
              Your Trusted Material Handling Partner Across Gujarat
            </p>
            <p className="text-white/80">
              Ahmedabad • Surat • Vadodara • Rajkot • Anand • Bharuch • Vapi • Gandhidham
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
