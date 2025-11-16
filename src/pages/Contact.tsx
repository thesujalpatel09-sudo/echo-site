import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Get In Touch</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        WH 3, Al Qusais Industrial Area 5<br />
                        Dubai, UAE
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+971562109540" className="hover:text-primary">
                          +971 56 210 9540
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:murtaza@alkahfgroup.com" className="hover:text-primary">
                          murtaza@alkahfgroup.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Saturday - Thursday: 9:00 AM - 6:00 PM<br />
                        Friday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Your Name *</label>
                        <Input placeholder="John Doe" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Your Email *</label>
                        <Input type="email" placeholder="john@example.com" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Mobile Number *</label>
                        <Input placeholder="+971 XX XXX XXXX" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Product Interest</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="thermal">Thermal Paper Rolls</SelectItem>
                            <SelectItem value="labels">Thermal Transfer Labels</SelectItem>
                            <SelectItem value="ribbons">Wax & Resin Ribbons</SelectItem>
                            <SelectItem value="pos">POS Paper Rolls</SelectItem>
                            <SelectItem value="office">Office Supplies</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Your Message *</label>
                      <Textarea 
                        rows={5} 
                        placeholder="Tell us about your requirements..." 
                        required
                        className="resize-none"
                      />
                    </div>

                    <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground h-12 text-lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.4871861891!2d55.38!3d25.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzI0LjAiTiA1NcKwMjInNDguMCJF!5e0!3m2!1sen!2sae!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default Contact;
