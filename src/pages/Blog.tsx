import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Ultimate Guide to Thermal Paper Rolls in UAE",
      excerpt: "Learn everything about thermal paper rolls, their applications, and how to choose the right size for your POS system.",
      date: "January 15, 2025",
      author: "Admin",
      category: "Product Guide"
    },
    {
      title: "Why Quality Matters in POS Consumables",
      excerpt: "Discover why investing in high-quality POS consumables can save your business money in the long run.",
      date: "January 10, 2025",
      author: "Admin",
      category: "Industry Insights"
    },
    {
      title: "Thermal Transfer vs. Direct Thermal Labels: Which is Right for You?",
      excerpt: "A comprehensive comparison to help you choose the best label type for your business needs.",
      date: "January 5, 2025",
      author: "Admin",
      category: "Product Guide"
    },
    {
      title: "Top 10 Office Supplies Every Business Needs in 2025",
      excerpt: "Essential stationery items that can boost productivity and organization in your workplace.",
      date: "December 28, 2024",
      author: "Admin",
      category: "Office Tips"
    },
    {
      title: "Sustainable Packaging Solutions for UAE Businesses",
      excerpt: "Explore eco-friendly packaging options that meet environmental standards while maintaining quality.",
      date: "December 20, 2024",
      author: "Admin",
      category: "Sustainability"
    },
    {
      title: "How to Maintain Your Thermal Printer for Optimal Performance",
      excerpt: "Essential maintenance tips to extend the life of your thermal printer and ensure consistent print quality.",
      date: "December 15, 2024",
      author: "Admin",
      category: "Maintenance Tips"
    }
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl">Insights, Tips, and Industry News</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Blog Image</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>

                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Button variant="link" className="p-0 h-auto text-primary hover:gap-2 transition-all group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8">Get the latest updates, tips, and industry insights delivered to your inbox</p>
          
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
