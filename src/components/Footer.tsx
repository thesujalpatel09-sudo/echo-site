import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex flex-col items-center gap-1 mb-4">
              <img 
                src="https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/WhatsApp_Image_2025-11-16_at_3.29.06_PM-removebg-preview.png" 
                alt="AISHINI ENTERPRISES Logo" 
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
                width="96"
                height="96"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = "/logo.png";
                }}
              />
              <div className="flex flex-col items-center">
                <div className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight text-center">
                  <span className="text-[#D4AF37]">AISHINI</span>
                  <br />
                  <span className="text-[#D4AF37]">ENTERPRISES</span>
                </div>
                <div className="text-[10px] sm:text-xs text-primary font-medium mt-1">
                  ECO. SMART. SUSTAINABLE.
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-gray-300 text-xs sm:text-sm">
              <p className="leading-relaxed">Plot No.9, Adarsh Welfare Society,<br />Dachkul Pada Mira Road (E)<br />Near Kheteshwar Ashram<br />Thane - 401107</p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919892126510" className="hover:text-primary">+91 9892126510</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:sales@aishinient.com" className="hover:text-primary text-xs break-all">sales@aishinient.com</a>
              </p>
              <a 
                href="https://www.google.com/maps/dir//PLOT+NO9,+ADARSH+WELFARE+SOCIETY,+Dachkul+Pada+Rd,+near+KHETESHWAR+ASHRAM,+Dajkul+Pada,+Mashachapada,+Mira+Road+East,+Mira+Bhayandar,+Maharashtra+401107/@19.2733546,72.8110148,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7b1023d88140d:0x25f3ee621a245726!2m2!1d72.8934165!2d19.2733731?entry=ttu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3"
              >
                <Button size="sm" className="bg-primary hover:bg-secondary text-primary-foreground text-xs px-4 py-2">
                  GET DIRECTION
                </Button>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">Product</h3>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <Link to="/products/glass" className="text-gray-300 hover:text-primary transition-colors">
                  Disposable Glass
                </Link>
              </li>
              <li>
                <Link to="/products/disposable-plate-bowl" className="text-gray-300 hover:text-primary transition-colors">
                  Disposable Plate & Bowl
                </Link>
              </li>
              <li>
                <Link to="/products/cutlery" className="text-gray-300 hover:text-primary transition-colors">
                  Cutlery
                </Link>
              </li>
              <li>
                <Link to="/products/cake-bakery" className="text-gray-300 hover:text-primary transition-colors">
                  Cake and Bakery
                </Link>
              </li>
            </ul>
          </div>

          {/* Find Us */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">Find Us</h3>
            <div className="bg-gray-800 rounded-lg overflow-hidden h-32 sm:h-40 md:h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5!2d72.8934165!3d19.2733731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1023d88140d%3A0x25f3ee621a245726!2sPLOT%20NO9%2C%20ADARSH%20WELFARE%20SOCIETY%2C%20Dachkul%20Pada%20Rd%2C%20near%20KHETESHWAR%20ASHRAM%2C%20Dajkul%20Pada%2C%20Mashachapada%2C%20Mira%20Road%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401107!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Google Reviews */}
      <div className="border-t border-gray-800 py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <a 
              href="https://share.google/IKBAeDSl4NkTBuHPD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors inline-block"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs sm:text-sm font-medium">View Our Google Reviews</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-400 text-xs">
            Copyright © 2025 | All Rights Reserved AISHINA ENTERPRISES
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
