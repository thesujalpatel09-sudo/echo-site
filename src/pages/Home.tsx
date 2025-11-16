import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const products = useMemo(() => [
    { 
      name: "Disposable Glass", 
      image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/WhatsApp%20Image%202025-11-16%20at%204.19.20%20PM.jpeg",
      link: "/products/glass"
    },
    { 
      name: "Disposable Plate & Bowl", 
      image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/5inchroundbowl.jpg",
      link: "/products/disposable-plate-bowl"
    },
    { 
      name: "Cutlery", 
      image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/71pye4fAqML._SL1500_.jpg",
      link: "/products/cutlery"
    },
    { 
      name: "Packaging Material", 
      image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/WhatsApp%20Image%202025-11-16%20at%208.54.25%20PM.jpeg",
      link: "/products/cake-bakery"
    },
  ], []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-white py-16 sm:py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/WhatsApp%20Image%202025-11-16%20at%203.49.39%20PM.jpeg)` }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="text-sm sm:text-base md:text-xl mb-3 sm:mb-4 uppercase tracking-wide">WELCOME TO AISHINI ENTERPRISES</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight max-w-5xl mx-auto px-2">
            Leading Manufacturer & Trader of Disposable Items
          </h1>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-24 bg-white" style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }} />
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary">Our Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <Link key={index} to={product.link} className="group">
                <Card className="border-2 border-primary rounded-3xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer h-full animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-100 overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="400"
                        onError={(e) => {
                          e.currentTarget.src = "/logo.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 group-hover:bg-primary/5 transition-colors duration-300">
                      <h3 className="text-center font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
};

export default Home;
