import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Al Kahf Group</h1>
          <p className="text-xl">Your Trusted Partner in POS Consumables & Stationery</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-primary text-center">Who We Are</h2>
            <div className="space-y-6 text-lg text-foreground">
              <p>
                <strong>Al Kahf General Trading LLC</strong> is a fast-growing import/export/wholesale company based in the UAE. We specialize in providing comprehensive solutions for POS consumables, medical and non-medical disposable products, personal protective equipment, safety products, and general supplies across GCC, Africa, and international markets.
              </p>
              <p>
                With years of experience in the industry, we have built a reputation for delivering high-quality products, competitive pricing, and exceptional customer service. Our extensive product range includes thermal paper rolls, labels, ribbons, office supplies, and much more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-foreground leading-relaxed">
                  To deliver high-quality products such as nitrile gloves, disposable hairnets, printed sandwich paper, pantry office supplies, and paper bags, ensuring affordability, reliability, and timely delivery for our clients across the globe.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-foreground leading-relaxed">
                  To become the leading supplier of POS consumables and stationery products in the Middle East and Africa, known for our commitment to quality, innovation, and customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary text-center">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wide Product Range",
                description: "Comprehensive selection of POS consumables, stationery, and disposable products"
              },
              {
                title: "Quality Assurance",
                description: "All products meet international quality standards and certifications"
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
                description: "Dedicated customer service team ready to assist you"
              },
              {
                title: "Global Reach",
                description: "Serving clients across UAE, GCC, Africa, and international markets"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Quality</h3>
              <p>We never compromise on product quality</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Integrity</h3>
              <p>Honest and transparent in all dealings</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Innovation</h3>
              <p>Continuously improving our products and services</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Customer Focus</h3>
              <p>Your satisfaction is our top priority</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
