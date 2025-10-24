import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    region: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Business Inquiry from ${formData.company || formData.name}`;
    const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Region: ${formData.region}

Message:
${formData.message}
    `.trim();

    window.location.href = `mailto:trade@tharakantraders.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast({
      title: "Opening email client...",
      description: "Your inquiry will be sent via your email application.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "trade@tharakantraders.com",
      description: "For all business inquiries and partnership opportunities"
    },
    {
      icon: MapPin,
      title: "Our Markets",
      content: "India & Middle East",
      description: "Serving premium retailers across key regions"
    },
    {
      icon: Building,
      title: "Business Type",
      content: "B2B Distribution",
      description: "Wholesale and distribution partnerships"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-24 bg-black text-white border-b border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-[0.08em]">
            Get in <span className="italic text-luxury-silver">Touch</span>
          </h1>
          <p className="text-sm text-white/60 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            Interested in partnering with us or learning more about our portfolio? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {contactInfo.map((info) => (
              <Card key={info.title} className="p-10 text-center bg-card border border-white/10 hover-lift">
                <info.icon className="h-10 w-10 mx-auto mb-6 text-luxury-silver" />
                <h3 className="text-lg font-light mb-3 tracking-wider">{info.title}</h3>
                <p className="text-base font-light mb-3 text-luxury-silver tracking-wide">{info.content}</p>
                <p className="text-xs text-white/50 font-light">{info.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
                Business <span className="italic text-luxury-silver">Inquiry</span>
              </h2>
              <p className="text-sm text-white/60 font-light tracking-wide">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <Card className="p-10 md:p-14 bg-card border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-light mb-3 tracking-[0.15em] uppercase text-white/70">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <Input
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 / +971 ..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="region" className="block text-sm font-medium mb-2">
                    Region of Interest *
                  </label>
                  <select
                    id="region"
                    name="region"
                    required
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-white/20 text-white/80 text-sm font-light focus:border-luxury-gold focus:outline-none transition-elegant"
                  >
                    <option value="">Select a region</option>
                    <option value="india">India</option>
                    <option value="uae">United Arab Emirates</option>
                    <option value="saudi">Saudi Arabia</option>
                    <option value="gcc">Other GCC Countries</option>
                    <option value="multiple">Multiple Regions</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and how we can help..."
                    rows={6}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  variant="ghost"
                  className="w-full text-xs tracking-[0.2em] uppercase font-light border border-white/30 hover:border-white hover:bg-transparent hover:text-white transition-elegant py-6"
                >
                  Send Inquiry
                </Button>

                <p className="text-xs text-white/40 text-center font-light tracking-wide">
                  By submitting this form, you agree to be contacted by Tharakan Traders regarding business opportunities.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-light mb-16 text-center tracking-wider">
              What to Expect
            </h3>
            <div className="grid md:grid-cols-3 gap-16">
              <div className="text-center">
                <div className="text-luxury-silver text-5xl font-light mb-4">24h</div>
                <p className="text-xs text-white/50 font-light tracking-wide leading-relaxed">
                  We respond to all inquiries within one business day
                </p>
              </div>
              <div className="text-center">
                <div className="text-luxury-silver text-5xl font-light mb-4">100%</div>
                <p className="text-xs text-white/50 font-light tracking-wide leading-relaxed">
                  Confidential consultation about your business needs
                </p>
              </div>
              <div className="text-center">
                <div className="text-luxury-silver text-5xl font-light mb-4">∞</div>
                <p className="text-xs text-white/50 font-light tracking-wide leading-relaxed">
                  Tailored solutions for your specific requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
