import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">About AISHINA ENTERPRISES</h1>
          <p className="text-base sm:text-lg md:text-xl">Your Trusted Partner in Quality Disposable Products</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-primary text-center">Who We Are</h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-foreground">
              <p>
                <strong>Aishini Enterprises</strong> is a trusted name in the world of high-quality disposable products, committed to delivering convenience, hygiene, and sustainability to businesses and households alike. Founded with a vision to offer reliable and eco-friendly disposable solutions, we have grown to become a dependable partner for a wide range of industries including hospitality, healthcare, food service, and retail.
              </p>
              <p>
                Our product range includes a variety of disposable items such as cups, plates, cutlery, food containers, tissues, and more, designed to meet the everyday needs of modern living while maintaining the highest standards of quality and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-primary text-center">What We Believe In</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in group">
              <CardContent className="p-6 sm:p-8">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary group-hover:text-secondary transition-colors duration-300">Quality First</h3>
                <p className="text-foreground leading-relaxed">
                  Every product is crafted or sourced with strict quality control to ensure the highest standards of excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in stagger-1 group">
              <CardContent className="p-6 sm:p-8">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary group-hover:text-secondary transition-colors duration-300">Customer-Centric Service</h3>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  We focus on timely delivery, competitive pricing, and reliable support to ensure complete customer satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in stagger-2 group">
              <CardContent className="p-6 sm:p-8">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-primary group-hover:text-secondary transition-colors duration-300">Sustainability</h3>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  We are committed to exploring eco-friendly and biodegradable options for a greener future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-primary text-center">Why Choose Us</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Wide Product Range",
                description: "Comprehensive selection of disposable products including cups, plates, cutlery, food containers, and more"
              },
              {
                title: "Quality Assurance",
                description: "Every product is crafted or sourced with strict quality control to meet the highest standards"
              },
              {
                title: "Competitive Pricing",
                description: "Best prices in the market without compromising on quality"
              },
              {
                title: "Timely Delivery",
                description: "Fast and reliable shipping to ensure your business operations run smoothly"
              },
              {
                title: "Expert Support",
                description: "Dedicated customer service team ready to assist you with reliable support"
              },
              {
                title: "Industry Expertise",
                description: "Serving hospitality, healthcare, food service, and retail industries with trusted solutions"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 animate-scale-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 sm:p-6">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
