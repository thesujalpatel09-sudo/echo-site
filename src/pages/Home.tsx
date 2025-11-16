import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import ContactFormSection from "@/components/ContactFormSection";
import thermalRolls from "@/assets/thermal-rolls.jpg";
import labels from "@/assets/labels.jpg";
import ribbons from "@/assets/ribbons.jpg";
import posRolls from "@/assets/pos-rolls.jpg";
import officeSupplies from "@/assets/office-supplies.jpg";
import printerConsumables from "@/assets/printer-consumables.jpg";
import packaging from "@/assets/packaging.jpg";
import tapes from "@/assets/tapes.jpg";
import heroImage from "@/assets/hero-paper-rolls.jpg";
import productShowcase from "@/assets/product-showcase.jpg";

const Home = () => {
  const products = [
    { name: "Thermal Paper Rolls", image: thermalRolls },
    { name: "Thermal Transfer Labels", image: labels },
    { name: "Pricing Labels Plain & Printed", image: labels },
    { name: "Thermal Transfer Labels", image: labels },
    { name: "Thermal Paper Roll All Sizes", image: posRolls },
    { name: "Wax Ribbons, Resin", image: ribbons },
    { name: "POS Paper Rolls", image: posRolls },
    { name: "Toner Cartridge", image: printerConsumables },
    { name: "Masking Tape", image: tapes },
    { name: "Printer Ink Cartridges", image: printerConsumables },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-white py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-xl mb-4 uppercase tracking-wide">WELCOME TO AL KAHF GENERAL TRADING LLC</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
            Leading POS Consumables & Stationery Supplier in UAE
          </h1>
          <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 border-2 border-white text-lg px-8 py-6">
            MORE DETAILS
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }} />
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="border-2 border-primary rounded-3xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-center font-semibold text-foreground">{product.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-primary hover:bg-secondary text-primary-foreground px-8">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-primary border-b-4 border-primary inline-block pb-2">
                About Al-Kahf-Group
              </h2>
              <div className="space-y-4 text-foreground">
                <p>
                  Welcome to <strong>Al Kahf General Trading LLC</strong>, your trusted partner for <strong>POS consumables, stationery supplies, and disposable products in UAE</strong>. We specialize in providing a wide range of <strong>thermal cash rolls, ATM rolls, A4 paper, baking sheets, food labels, and customized labels</strong> to meet the diverse needs of businesses across GCC, Africa, and international markets.
                </p>
                <p>
                  Our mission is to deliver <strong>high-quality products</strong> such as <strong>nitrile gloves, disposable hairnets, printed sandwich paper, pantry office supplies, and paper bags</strong>, ensuring affordability, reliability, and timely delivery for our clients.
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src={productShowcase} 
                alt="Paper products showcase"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Solutions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary border-b-4 border-primary inline-block pb-2">
            Discover Our Product Solutions
          </h2>
          <div className="text-center mb-12" />
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Thermal Label Printer for Multi-Industry Applications in UAE
            </h3>
            <p className="text-foreground leading-relaxed">
              Looking for reliable thermal label printers in UAE? Our high-performance thermal printers are perfect for retail, logistics, healthcare, and manufacturing industries. Ideal for printing barcodes, shipping labels, and product tags with precision and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-sm text-gray-600">Warehouse</span>
              </div>
              <h4 className="font-semibold text-foreground text-lg">WAREHOUSE</h4>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-sm text-gray-600">Supermarket</span>
              </div>
              <h4 className="font-semibold text-foreground text-lg">SUPERMARKET</h4>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-sm text-gray-600">Healthcare</span>
              </div>
              <h4 className="font-semibold text-foreground text-lg">HEALTHCARE</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Above Footer */}
      <ContactFormSection />
    </div>
  );
};

export default Home;
