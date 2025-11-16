import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

const Home = () => {
  const products = [
    { name: "Thermal Paper Rolls", image: "thermal-rolls" },
    { name: "Thermal Transfer Paper", image: "thermal-transfer" },
    { name: "Pricing Labels Plain & Printed", image: "pricing-labels" },
    { name: "Thermal Transfer Labels", image: "transfer-labels" },
    { name: "Thermal Paper Roll All Sizes", image: "paper-rolls" },
    { name: "Wax Ribbons, Resin", image: "wax-ribbons" },
    { name: "POS Paper Rolls", image: "pos-rolls" },
    { name: "Toner Cartridge", image: "toner" },
    { name: "Masking Tape", image: "tape" },
    { name: "Printer Ink Cartridges", image: "ink" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwTDEwMCAxMDBNMTAwIDBMMCAxMDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-2 uppercase tracking-wide">WELCOME TO AL KAHF GENERAL TRADING LLC</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Leading POS Consumables & Stationery Supplier in UAE
              </h1>
              <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-2 border-white">
                MORE DETAILS
              </Button>
            </div>

            {/* Contact Form */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Your name</label>
                      <Input placeholder="" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Your email</label>
                      <Input type="email" placeholder="" className="border-gray-300" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Mobile Number</label>
                      <Input placeholder="" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Select Product</label>
                      <Select>
                        <SelectTrigger className="border-gray-300">
                          <SelectValue placeholder="-Select-" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="thermal">Thermal Paper Rolls</SelectItem>
                          <SelectItem value="labels">Labels</SelectItem>
                          <SelectItem value="ribbons">Ribbons</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Your message (Product Query)</label>
                    <Textarea rows={3} className="border-gray-300 resize-none" />
                  </div>

                  <div className="bg-gray-200 p-3 rounded flex items-center justify-between">
                    <span className="text-lg font-mono font-bold">4×#7~</span>
                    <Button variant="ghost" size="sm">↻</Button>
                  </div>

                  <Input placeholder="Enter CAPTCHA answer" className="border-gray-300" />

                  <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                    SUBMIT
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
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
                <CardContent className="p-6">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-gray-400 text-center text-sm">{product.name}</div>
                  </div>
                  <h3 className="text-center font-semibold text-foreground">{product.name}</h3>
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

            <div className="relative">
              <div className="bg-primary rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {[
                    { top: "10%", left: "20%" },
                    { top: "15%", left: "70%" },
                    { top: "30%", left: "40%" },
                    { top: "45%", left: "15%" },
                    { top: "50%", left: "75%" },
                    { top: "65%", left: "45%" },
                    { top: "70%", left: "85%" },
                  ].map((pos, i) => (
                    <MapPin
                      key={i}
                      className="absolute w-8 h-8 text-red-500 fill-red-500 animate-pulse"
                      style={{ top: pos.top, left: pos.left }}
                    />
                  ))}
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSI0MDAiIHk9IjIwMCIgZm9udC1zaXplPSI0MCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPldvcmxkIE1hcDwvdGV4dD48L3N2Zz4=')]" />
                </div>
              </div>
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
    </div>
  );
};

export default Home;
