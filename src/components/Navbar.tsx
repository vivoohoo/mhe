import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="w-full px-0"> {/* Changed from container class */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center pl-8 md:pl-12">
            <img
              src={logo}
              alt="Varun Engineering Logo"
              className="h-48 lg:h-56 w-auto object-contain" /* Increased height significantly */
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 pr-4">
            {/* ... rest of the navigation code ... */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
