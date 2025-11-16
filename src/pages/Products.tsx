import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      name: "Thermal Paper Rolls",
      description: "High-quality thermal paper rolls in various sizes for POS systems, ATMs, and receipt printers",
      items: ["57mm x 40mm", "80mm x 80mm", "Custom sizes available"]
    },
    {
      name: "Thermal Transfer Labels",
      description: "Durable labels for barcode printing, shipping, and product identification",
      items: ["White labels", "Colored labels", "Custom printed labels"]
    },
    {
      name: "Pricing Labels",
      description: "Plain and pre-printed pricing labels for retail and supermarket use",
      items: ["Plain white", "Pre-printed designs", "Custom sizes"]
    },
    {
      name: "Wax & Resin Ribbons",
      description: "Premium quality ribbons for thermal transfer printing",
      items: ["Wax ribbons", "Resin ribbons", "Wax-resin blend"]
    },
    {
      name: "POS Paper Rolls",
      description: "Standard and premium POS paper rolls for various applications",
      items: ["Credit card rolls", "Kitchen printer rolls", "ATM rolls"]
    },
    {
      name: "Office Supplies",
      description: "Complete range of office stationery and supplies",
      items: ["A4 paper", "Notebooks", "Writing instruments"]
    },
    {
      name: "Printer Consumables",
      description: "Toner cartridges, ink cartridges, and printer accessories",
      items: ["HP cartridges", "Canon cartridges", "Compatible options"]
    },
    {
      name: "Packaging Materials",
      description: "Paper bags, sandwich paper, and food packaging solutions",
      items: ["Kraft paper bags", "Printed sandwich paper", "Food containers"]
    },
    {
      name: "Safety Products",
      description: "Personal protective equipment and safety supplies",
      items: ["Nitrile gloves", "Disposable hairnets", "Face masks"]
    },
    {
      name: "Tapes & Adhesives",
      description: "Various types of tapes for industrial and office use",
      items: ["Masking tape", "Packing tape", "Double-sided tape"]
    }
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl">Comprehensive Range of POS Consumables & Stationery</p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
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
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-primary/20 hover:border-primary">
                <CardContent className="p-6">
                  <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground text-center px-4">{category.name}</span>
                  </div>
                  
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

                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
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
