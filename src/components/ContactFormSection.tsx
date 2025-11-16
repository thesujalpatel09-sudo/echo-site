import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw } from "lucide-react";

const ContactFormSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwTDEwMCAxMDBNMTAwIDBMMCAxMDAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-white/90 text-lg">Have a question about our products? Send us a message!</p>
          </div>

          <Card className="bg-white shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Your name</label>
                    <Input placeholder="" className="border-gray-300 h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Your email</label>
                    <Input type="email" placeholder="" className="border-gray-300 h-12" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Mobile Number</label>
                    <Input placeholder="" className="border-gray-300 h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Select Product</label>
                    <Select>
                      <SelectTrigger className="border-gray-300 h-12">
                        <SelectValue placeholder="-Select-" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thermal">Thermal Paper Rolls</SelectItem>
                        <SelectItem value="labels">Labels</SelectItem>
                        <SelectItem value="ribbons">Ribbons</SelectItem>
                        <SelectItem value="pos">POS Paper</SelectItem>
                        <SelectItem value="office">Office Supplies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Your message (Product Query)</label>
                  <Textarea rows={4} className="border-gray-300 resize-none" />
                </div>

                <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-between">
                  <span className="text-2xl font-mono font-bold text-foreground">4×#7~</span>
                  <Button type="button" variant="ghost" size="sm" className="hover:bg-gray-300">
                    <RefreshCw className="w-5 h-5" />
                  </Button>
                </div>

                <Input placeholder="Enter CAPTCHA answer" className="border-gray-300 h-12" />

                <Button type="submit" className="w-full bg-primary hover:bg-secondary text-primary-foreground h-14 text-lg font-semibold">
                  SUBMIT
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }} />
    </section>
  );
};

export default ContactFormSection;
