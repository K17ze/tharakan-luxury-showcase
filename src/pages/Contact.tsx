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
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Interested in partnering with us or learning more about our portfolio? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info) => (
              <Card key={info.title} className="p-8 text-center hover:shadow-xl transition-luxury border-2 hover:border-luxury-gold">
                <info.icon className="h-12 w-12 mx-auto mb-4 text-luxury-gold" />
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-lg font-medium mb-2 text-primary">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Business <span className="text-luxury-gold">Inquiry Form</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <Card className="p-8 md:p-12 border-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
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
                  className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark font-semibold text-lg"
                >
                  Send Inquiry
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by Tharakan Traders regarding business opportunities.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">
              What to Expect
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-luxury-gold text-4xl font-bold mb-2">24h</div>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within one business day
                </p>
              </div>
              <div className="text-center">
                <div className="text-luxury-gold text-4xl font-bold mb-2">100%</div>
                <p className="text-sm text-muted-foreground">
                  Confidential consultation about your business needs
                </p>
              </div>
              <div className="text-center">
                <div className="text-luxury-gold text-4xl font-bold mb-2">∞</div>
                <p className="text-sm text-muted-foreground">
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
