import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-primary">Get In Touch</h2>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in">
                  <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1 animate-pulse" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">Address</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Plot No.9, Adarsh Welfare Society<br />
                        Dachkul Pada Mira Road (E)<br />
                        Near Kheteshwar Ashram<br />
                        Thane - 401107
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in stagger-1">
                  <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">Phone</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        <a href="tel:+919892126510" className="hover:text-primary">
                          +91 9892126510
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in stagger-2">
                  <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">Email</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        <a href="mailto:sales@aishinient.com" className="hover:text-primary">
                          sales@aishinient.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in stagger-3">
                  <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">Business Hours</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="animate-fade-in stagger-4">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary">Send Us a Message</h2>
                  
                  <div className="w-full overflow-hidden">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSe78vyV_kKURVGUVOeeT0UqsCxbBEgXcEEgA9FeJBBu3ux8LQ/viewform?embedded=true"
                      width="100%"
                      height="700"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      className="w-full min-h-[600px] sm:min-h-[700px]"
                      title="Contact Form"
                    >
                      Loading…
                    </iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-64 sm:h-80 md:h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5!2d72.8934165!3d19.2733731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1023d88140d%3A0x25f3ee621a245726!2sPLOT%20NO9%2C%20ADARSH%20WELFARE%20SOCIETY%2C%20Dachkul%20Pada%20Rd%2C%20near%20KHETESHWAR%20ASHRAM%2C%20Dajkul%20Pada%2C%20Mashachapada%2C%20Mira%20Road%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401107!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;
