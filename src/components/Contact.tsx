import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch for quotes, consultations, or equipment inquiries
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">+91 9725219119</p>
                  <p className="text-sm text-muted-foreground">+91 8200158816</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">varunengineering24@hotmail.com</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Rajkot, Gujarat <br />

                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="px-12"
                asChild
              >
                <a 
                  href="https://wa.me/919725219119?text=Hi%2C%20I%27m%20interested%20in%20your%20material%20handling%20equipment" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
