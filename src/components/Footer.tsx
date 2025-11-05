import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Varun Engineering</h3>
            <p className="text-muted-foreground mb-4">
              Leading supplier of material handling equipment in Gujarat. Specializing in hydraulic pallet trucks, stackers, and custom solutions since 2008.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1A21nd3ABf/" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/varunengg3?igsh=MWwxY3VsNGxjem81Ng==" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-muted-foreground hover:text-primary">Hydraulic Pallet Trucks</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-primary">Manual Stackers</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-primary">Semi-Electric Stackers</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-primary">Electric Stackers</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-primary">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+918200158816, +919725219119" className="text-muted-foreground hover:text-primary">+918200158816, +919725219119</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:varunengineering24@hotmail.com" className="text-muted-foreground hover:text-primary">varunengineering24@hotmail.com</a>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <p className="text-muted-foreground mb-2">
              Serving industries across Gujarat including:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>Ahmedabad</li>
              <li>Vadodara</li>
              <li>Surat</li>
              <li>Rajkot</li>
              <li>Bhavnagar</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Varun Engineering. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Material Handling Equipment Supplier in Gujarat | Hydraulic Pallet Trucks | Industrial Stackers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
