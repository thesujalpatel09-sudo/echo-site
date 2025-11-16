import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Main Navigation */}
      <div className="bg-background border-b relative z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0 group">
              <img 
                src="https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/WhatsApp_Image_2025-11-16_at_3.29.06_PM-removebg-preview.png" 
                alt="AISHINI ENTERPRISES Logo" 
                className="h-12 sm:h-16 md:h-20 w-auto object-contain flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                width="80"
                height="80"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = "/logo.png";
                }}
              />
              <div className="flex flex-col justify-center min-w-0">
                <div className="text-sm sm:text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                  <span className="text-[#8B4513] group-hover:text-primary transition-colors duration-300">AISHINI</span>
                  <br className="hidden sm:block" />
                  <span className="text-[#8B4513] group-hover:text-primary transition-colors duration-300"> ENTERPRISES</span>
                </div>
                <div className="text-[10px] sm:text-xs text-primary font-medium mt-0.5 sm:mt-1">
                  ECO. SMART. SUSTAINABLE.
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex relative z-50">
              <NavigationMenuList className="flex items-center gap-8">
                <NavigationMenuItem>
                  <Link to="/" className="text-foreground hover:text-primary transition-colors hover:scale-105 inline-block transform duration-300">
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary data-[state=open]:text-primary">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-[100]">
                    <div className="w-[400px] p-4">
                      <ul className="space-y-2">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/products/glass"
                              className="block select-none rounded-md p-3 leading-normal no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary text-foreground"
                            >
                              <div className="text-sm font-medium">Disposable Glass</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/products/disposable-plate-bowl"
                              className="block select-none rounded-md p-3 leading-normal no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary text-foreground"
                            >
                              <div className="text-sm font-medium">Disposable Plate & Bowl</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/products/cutlery"
                              className="block select-none rounded-md p-3 leading-normal no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary text-foreground"
                            >
                              <div className="text-sm font-medium">Cutlery</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/products/cake-bakery"
                              className="block select-none rounded-md p-3 leading-normal no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary text-foreground"
                            >
                              <div className="text-sm font-medium">Cake and Bakery</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className="text-foreground hover:text-primary transition-colors hover:scale-105 inline-block transform duration-300">
                    About Us
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className="text-foreground hover:text-primary transition-colors hover:scale-105 inline-block transform duration-300">
                    Contact Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Home
                  </Link>
                  
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-foreground py-2">Products</div>
                    <div className="pl-4 space-y-2">
                      <Link
                        to="/products/glass"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-base text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        Disposable Glass
                      </Link>
                      <Link
                        to="/products/disposable-plate-bowl"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-base text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        Disposable Plate & Bowl
                      </Link>
                      <Link
                        to="/products/cutlery"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-base text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        Cutlery
                      </Link>
                      <Link
                        to="/products/cake-bakery"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-base text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        Cake and Bakery
                      </Link>
                    </div>
                  </div>

                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    About Us
                  </Link>
                  
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
