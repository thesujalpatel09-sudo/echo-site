import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-top-bar text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-6">
              <a href="tel:+971562109540" className="flex items-center gap-2 hover:opacity-80">
                <Phone className="w-4 h-4" />
                <span>+971 56 210 9540</span>
              </a>
              <a href="mailto:murtaza@alkahfgroup.com" className="flex items-center gap-2 hover:opacity-80">
                <Mail className="w-4 h-4" />
                <span>murtaza@alkahfgroup.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>WH 3, Al Qusais Industrial Area 5, Dubai UAE</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center">
              <div className="text-3xl font-bold text-primary">KAHF</div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <div className="relative group">
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                  Product
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>

            <Button className="bg-primary hover:bg-secondary text-primary-foreground">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
