import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Products = () => {
  const navigate = useNavigate();

  const productCategories = [
    {
      name: "Disposable Glass",
      description: "High-quality disposable glass products including biodegradable options and paper cups",
      items: ["Biodegradable Eco-Friendly Glasses", "Plain Paper Cup", "Ripple Paper Cup", "Double Wall Paper Cup", "Lid For Paper Cups"],
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=600&fit=crop&q=80",
      subcategories: [
        "Biodegradable Eco-Friendly Glasses",
        "Plain Paper Cup",
        "Ripple Paper Cup",
        "Double Wall Paper Cup",
        "Lid For Paper Cups"
      ]
    },
    {
      name: "Thermal Paper Rolls",
      description: "High-quality thermal paper rolls in various sizes for POS systems, ATMs, and receipt printers",
      items: ["57mm x 40mm", "80mm x 80mm", "Custom sizes available"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop&q=80"
    },
    {
      name: "Thermal Transfer Labels",
      description: "Durable labels for barcode printing, shipping, and product identification",
      items: ["White labels", "Colored labels", "Custom printed labels"],
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=600&fit=crop&q=80"
    },
    {
      name: "Pricing Labels",
      description: "Plain and pre-printed pricing labels for retail and supermarket use",
      items: ["Plain white", "Pre-printed designs", "Custom sizes"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop&q=80"
    },
    {
      name: "Wax & Resin Ribbons",
      description: "Premium quality ribbons for thermal transfer printing",
      items: ["Wax ribbons", "Resin ribbons", "Wax-resin blend"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop&q=80"
    },
    {
      name: "POS Paper Rolls",
      description: "Standard and premium POS paper rolls for various applications",
      items: ["Credit card rolls", "Kitchen printer rolls", "ATM rolls"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop&q=80"
    },
    {
      name: "Office Supplies",
      description: "Complete range of office stationery and supplies",
      items: ["A4 paper", "Notebooks", "Writing instruments"],
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=600&fit=crop&q=80"
    },
    {
      name: "Printer Consumables",
      description: "Toner cartridges, ink cartridges, and printer accessories",
      items: ["HP cartridges", "Canon cartridges", "Compatible options"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop&q=80"
    },
    {
      name: "Packaging Materials",
      description: "Paper bags, sandwich paper, and food packaging solutions",
      items: ["Kraft paper bags", "Printed sandwich paper", "Food containers"],
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=600&fit=crop&q=80"
    },
    {
      name: "Safety Products",
      description: "Personal protective equipment and safety supplies",
      items: ["Nitrile gloves", "Disposable hairnets", "Face masks"],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=600&fit=crop&q=80"
    },
    {
      name: "Tapes & Adhesives",
      description: "Various types of tapes for industrial and office use",
      items: ["Masking tape", "Packing tape", "Double-sided tape"],
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=600&fit=crop&q=80"
    }
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=600&fit=crop&q=80" 
            alt="Products Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl">Comprehensive Range of POS Consumables & Stationery</p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-muted relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=400&fit=crop&q=80" 
            alt="Search Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search for products..." 
                className="pl-12 h-12 text-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const isDisposableGlass = category.name === "Disposable Glass";
              
              return (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-shadow border-2 border-primary/20 hover:border-primary overflow-hidden ${
                  isDisposableGlass ? "cursor-pointer" : ""
                }`}
                onClick={isDisposableGlass ? (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log("Disposable Glass card clicked!");
                  navigate("/products/disposable-glass");
                } : undefined}
              >
                <CardContent className="p-0">
                  {isDisposableGlass ? (
                    <div style={{ cursor: 'pointer' }}>
                      <div className="aspect-square bg-muted rounded-t-lg overflow-hidden relative">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <span className="text-muted-foreground text-center px-4 font-semibold">{category.name}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-primary">{category.name}</h3>
                        <p className="text-foreground mb-4">{category.description}</p>
                        
                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          View Categories
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="aspect-square bg-muted rounded-t-lg overflow-hidden relative">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <span className="text-muted-foreground text-center px-4 font-semibold">{category.name}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-primary">{category.name}</h3>
                        <p className="text-foreground mb-4">{category.description}</p>
                        
                        <ul className="space-y-2 mb-4">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        <Button 
                          variant="outline" 
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          Learn More
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1920&h=600&fit=crop&q=80" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8">We offer customized products and bulk orders tailored to your business needs</p>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
            Contact Us for Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
