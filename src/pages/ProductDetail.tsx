import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const ProductDetail = () => {
  const { productName } = useParams<{ productName: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Product categories data
  const productData: Record<string, {
    categories: Array<{
      name: string;
      products: Array<{
        name: string;
        image: string;
        description: string;
        features?: string[];
      }>;
    }>;
  }> = {
    "glass": {
      categories: [
        {
          name: "Biodegradable Eco-Friendly Glasses",
          products: [
            {
              name: "220 ML Cup",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/WhatsApp%20Image%202025-11-16%20at%204.19.20%20PM.jpeg",
              description: "220ml biodegradable eco-friendly cup made from sustainable materials. Perfect for hot and cold beverages.",
              features: ["100% Biodegradable", "Compostable", "Eco-Friendly", "220ml Capacity"]
            },
            {
              name: "250 ML Cup",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/WhatsApp%20Image%202025-11-16%20at%204.19.20%20PM.jpeg",
              description: "250ml biodegradable eco-friendly cup made from sustainable materials. Ideal for various beverage applications.",
              features: ["100% Biodegradable", "Compostable", "Eco-Friendly", "250ml Capacity"]
            }
          ]
        },
        {
          name: "Paper Glasses",
          products: [
            {
              name: "Plain Paper Cup",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/disposal-paper-cup-1000x1000.webp",
              description: "Standard plain paper cups ideal for hot and cold beverages. Available in multiple sizes.",
              features: ["Leak-Proof", "Various Sizes", "Cost-Effective", "Disposable"]
            },
            {
              name: "Ripple Paper Cup",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/printed-style-ripple-paper-cups-247.jpg",
              description: "Ripple design paper cups with enhanced grip and insulation properties.",
              features: ["Better Grip", "Insulated", "Eco-Friendly", "Multiple Sizes"]
            },
            {
              name: "Double Wall Paper Cup",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/WhatsApp%20Image%202025-11-16%20at%204.30.04%20PM.jpeg",
              description: "Double wall construction provides excellent insulation for hot beverages.",
              features: ["Double Wall", "Hot Beverage Safe", "Insulated", "Premium Quality"]
            }
          ]
        }
      ]
    },
    "disposable-glass": {
      categories: [
        {
          name: "Biodegradable Eco-Friendly Glasses",
          products: [
            {
              name: "220 ML Cup",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/WhatsApp%20Image%202025-11-16%20at%204.19.20%20PM.jpeg",
              description: "220ml biodegradable eco-friendly cup made from sustainable materials.",
              features: ["100% Biodegradable", "Compostable", "Eco-Friendly", "220ml Capacity"]
            },
            {
              name: "250 ML Cup",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/WhatsApp%20Image%202025-11-16%20at%204.19.20%20PM.jpeg",
              description: "250ml biodegradable eco-friendly cup made from sustainable materials.",
              features: ["100% Biodegradable", "Compostable", "Eco-Friendly", "250ml Capacity"]
            }
          ]
        },
        {
          name: "Paper Glasses",
          products: [
            {
              name: "Plain Paper Cup",
              image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=600&fit=crop&q=80",
              description: "Standard plain paper cups ideal for hot and cold beverages.",
              features: ["Leak-Proof", "Various Sizes", "Cost-Effective", "Disposable"]
            }
          ]
        }
      ]
    },
    "disposable-plate-bowl": {
      categories: [
        {
          name: "Areca Products",
          products: [
            {
              name: "Areca Products",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/5inchroundbowl.jpg",
              description: "Eco-friendly areca plates and bowls made from natural areca palm leaves. Biodegradable and sustainable.",
              features: ["100% Biodegradable", "Natural Material", "Eco-Friendly", "Various Sizes"]
            }
          ]
        },
        {
          name: "Bagasse Products",
          products: [
            {
              name: "Bagasse Products",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/Dinearth-Website-Images_50-ml-Bowl.jpg",
              description: "Bagasse plates and bowls made from sugarcane waste. Compostable and microwave-safe.",
              features: ["Compostable", "Microwave Safe", "Eco-Friendly", "Durable"]
            }
          ]
        },
        {
          name: "Paper Products",
          products: [
            {
              name: "Paper Products",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/8-SuperBio-Paper-Round-Plate.jpg",
              description: "High-quality paper plates and bowls. Perfect for parties and events.",
              features: ["Leak-Proof", "Various Sizes", "Cost-Effective", "Disposable"]
            }
          ]
        },
        {
          name: "Pinewood Products",
          products: [
            {
              name: "Pinewood Products",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/Best-Wooden-Plates-Palm-Leaf-Plates-Areca.jpg",
              description: "Natural pinewood plates and bowls. Sustainable and biodegradable.",
              features: ["Natural Wood", "Biodegradable", "Eco-Friendly", "Premium Quality"]
            }
          ]
        },
        {
          name: "Sal Leaf Products",
          products: [
            {
              name: "Sal Leaf Products",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/8-5round-sal-leaf-plate3.jpg",
              description: "Elegant sal leaf plates and bowls. Made from naturally fallen sal leaves.",
              features: ["100% Natural", "Biodegradable", "Eco-Friendly", "Elegant Design"]
            }
          ]
        }
      ]
    },
    "cutlery": {
      categories: [
        {
          name: "Plastic Cutlery",
          products: [
            {
              name: "Plastic Cutlery",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/71pye4fAqML._SL1500_.jpg",
              description: "High-quality plastic cutlery sets. Durable and cost-effective for events and catering.",
              features: ["Durable", "Cost-Effective", "Various Styles", "Disposable"]
            }
          ]
        },
        {
          name: "Wooden Cutlery",
          products: [
            {
              name: "Wooden Cutlery",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/16cm-Wooden-Spoon.jpg",
              description: "Natural wooden cutlery made from sustainable wood. Biodegradable and eco-friendly.",
              features: ["Natural Wood", "Biodegradable", "Eco-Friendly", "Smooth Finish"]
            }
          ]
        },
        {
          name: "Biodegradable Corn Starch Cutlery",
          products: [
            {
              name: "Biodegradable Corn Starch Cutlery",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/Healthy-Biodegradable-Corn-Starch-Spoon.jpg",
              description: "Biodegradable cutlery made from corn starch. Compostable and environmentally friendly.",
              features: ["100% Biodegradable", "Compostable", "Eco-Friendly", "Food Safe"]
            }
          ]
        }
      ]
    },
    "cake-bakery": {
      categories: [
        {
          name: "Packaging Material",
          products: [
            {
              name: "Cake Box",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/WhatsApp%20Image%202025-11-16%20at%208.54.25%20PM.jpeg",
              description: "Premium cake boxes for bakery products. Available in various sizes to fit different cake dimensions.",
              features: ["Various Sizes", "Secure Closure", "Food Safe", "Durable"]
            },
            {
              name: "Pizza Box",
              image: "https://uhbvqqeoujmoyqtkompi.supabase.co/storage/v1/object/public/Company%20logo/WhatsApp%20Image%202025-11-16%20at%209.04.00%20PM.jpeg",
              description: "High-quality pizza boxes for food delivery and takeout. Available in various sizes to accommodate different pizza sizes.",
              features: ["Various Sizes", "Grease Resistant", "Food Safe", "Stackable"]
            }
          ]
        }
      ]
    }
  };

  const product = productData[productName || ""];

  // Get display name for product (memoized)
  const displayName = useMemo(() => {
    if (!productName) return "";
    const displayNames: Record<string, string> = {
      "glass": "Disposable Glass",
      "disposable-glass": "Disposable Glass",
      "disposable-plate-bowl": "Disposable Plate & Bowl",
      "cutlery": "Cutlery",
      "cake-bakery": "Packaging Material"
    };
    return displayNames[productName] || productName.replace(/-/g, " ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }, [productName]);

  // Get all categories (memoized)
  const categories = useMemo(() => {
    return product ? product.categories : [];
  }, [product]);

  // Get selected category products (memoized)
  const selectedCategoryProducts = useMemo(() => {
    if (!selectedCategory || !product) return [];
    return product.categories.find(cat => cat.name === selectedCategory)?.products || [];
  }, [selectedCategory, product]);

  // Handle category selection (memoized callback)
  const handleCategoryClick = useCallback((categoryName: string) => {
    setSelectedCategory(categoryName);
  }, []);

  // Track previous productName to detect changes
  const prevProductNameRef = useRef<string | undefined>(productName);

  // Reset and set default category when product changes
  useEffect(() => {
    // Only reset if productName actually changed
    if (prevProductNameRef.current !== productName) {
      prevProductNameRef.current = productName;
      
      // Reset and set default category in the same render cycle
      if (product && product.categories.length > 0) {
        setSelectedCategory(product.categories[0].name);
      } else {
        setSelectedCategory(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productName]);

  if (!product) {
    return (
      <div className="w-full py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            {displayName}
          </h1>
          <p className="text-base sm:text-lg md:text-xl">Explore our range of products</p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-primary text-center">Product Categories</h2>
            
            {categories.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <p className="text-muted-foreground text-base sm:text-lg">No categories available.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {categories.map((category, index) => (
                    <Card 
                      key={index} 
                      className={`hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 animate-fade-in ${
                        selectedCategory === category.name 
                          ? "border-primary bg-primary/5 scale-105 shadow-lg" 
                          : "border-primary/20 hover:border-primary"
                      }`}
                      onClick={() => handleCategoryClick(category.name)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-4">
                        <h3 className="text-base font-semibold text-foreground text-center">
                          {category.name}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Product Details Section */}
                {selectedCategory && (
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-primary">
                        {selectedCategory}
                      </h3>
                    </div>
                    
                    {selectedCategoryProducts.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {selectedCategoryProducts.map((productItem, idx) => (
                            <Card key={idx} className="overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in group"
                                  style={{ animationDelay: `${idx * 0.1}s` }}>
                              <div className="aspect-square bg-muted overflow-hidden relative">
                                <img 
                                  src={productItem.image} 
                                  alt={productItem.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  loading="lazy"
                                  decoding="async"
                                  width="400"
                                  height="400"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              </div>
                              <CardContent className="p-4 sm:p-6 group-hover:bg-primary/5 transition-colors duration-300">
                                <h4 className="text-lg sm:text-xl font-bold mb-2 text-primary group-hover:scale-105 transition-transform duration-300 inline-block">{productItem.name}</h4>
                                <p className="text-sm sm:text-base text-muted-foreground mb-4">{productItem.description}</p>
                                {productItem.features && productItem.features.length > 0 && (
                                  <div className="space-y-2">
                                    <p className="text-xs sm:text-sm font-semibold text-foreground">Features:</p>
                                    <ul className="space-y-1">
                                      {productItem.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                                          <span className="text-primary mr-2">•</span>
                                          {feature}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 sm:py-12">
                        <p className="text-muted-foreground text-base sm:text-lg">No products available in this category.</p>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

