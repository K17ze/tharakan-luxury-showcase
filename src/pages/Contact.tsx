import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Mail, Download, FileText, Building, Briefcase, Users, PenTool, Globe2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    inquiryType: "",
    region: "",
    position: ""
  });

  const handleSubmit = (formType: string) => (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: `Your ${formType} inquiry has been received. We'll respond within 24 hours.`
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "", inquiryType: "", region: "", position: "" });
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const regionalOffices = [
    {
      region: "India - Head Office",
      address: "Tharakan Towers, Marine Drive, Kochi, Kerala 682031, India",
      phone: "+91 484 2345678",
      email: "india@tharakantraders.com",
      coverage: "Pan-India distribution covering major metros and tier-2 cities"
    },
    {
      region: "Middle East - Dubai Office",
      address: "Dubai Silicon Oasis, DDP Building A2, Dubai, UAE",
      phone: "+971 4 1234567",
      email: "dubai@tharakantraders.com",
      coverage: "UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman"
    }
  ];

  const businessResources = [
    {
      title: "Brand Catalog 2024",
      description: "Complete portfolio of luxury brands and products",
      fileSize: "12.5 MB",
      icon: FileText
    },
    {
      title: "Partnership Guidelines",
      description: "Requirements and process for becoming a retail partner",
      fileSize: "2.3 MB",
      icon: Building
    },
    {
      title: "Product Specifications",
      description: "Detailed specifications, authenticity certificates, and compliance documents",
      fileSize: "8.7 MB",
      icon: Download
    },
    {
      title: "Price List (Trade Partners Only)",
      description: "Wholesale pricing and terms for authorized distributors",
      fileSize: "1.5 MB",
      icon: Briefcase
    }
  ];

  const marketInfo = [
    {
      market: "India Market",
      highlights: [
        "Fastest-growing luxury beauty market in Asia",
        "Distribution to 500+ premium retail locations",
        "Temperature-controlled logistics across 20+ cities",
        "Full regulatory compliance (FSSAI, BIS)"
      ]
    },
    {
      market: "Middle East Market",
      highlights: [
        "Established presence in GCC region",
        "Dubai Customs approved distributor",
        "Multilingual customer service (English, Arabic, Hindi)",
        "Halal-certified product range available"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-24 md:py-32 bg-black text-white border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-[0.08em]" data-testid="text-page-title">
            GET IN <span className="italic text-luxury-silver">TOUCH</span>
          </h1>
          <p className="text-xs text-white/50 max-w-3xl mx-auto font-light tracking-wide leading-loose">
            Partner with us for luxury beauty distribution across India and the Middle East
          </p>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
            Specialized <span className="italic text-luxury-silver">Inquiry Forms</span>
          </h2>
          
          <Tabs defaultValue="brand" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="brand" className="text-xs tracking-wide" data-testid="tab-brand-partnership">
                <Building className="h-4 w-4 mr-2" />
                Brand Partnership
              </TabsTrigger>
              <TabsTrigger value="retailer" className="text-xs tracking-wide" data-testid="tab-retailer">
                <Briefcase className="h-4 w-4 mr-2" />
                Retailer
              </TabsTrigger>
              <TabsTrigger value="media" className="text-xs tracking-wide" data-testid="tab-media">
                <PenTool className="h-4 w-4 mr-2" />
                Media
              </TabsTrigger>
              <TabsTrigger value="careers" className="text-xs tracking-wide" data-testid="tab-careers">
                <Users className="h-4 w-4 mr-2" />
                Careers
              </TabsTrigger>
            </TabsList>

            {/* Brand Partnership Form */}
            <TabsContent value="brand">
              <Card className="p-8 bg-card border border-white/10">
                <h3 className="text-2xl font-light mb-6 tracking-wide">Brand Partnership Inquiry</h3>
                <form onSubmit={handleSubmit("brand partnership")} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="brand-name">Brand Name *</Label>
                      <Input 
                        id="brand-name" 
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Your brand name"
                        required
                        data-testid="input-brand-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brand-email">Email *</Label>
                      <Input 
                        id="brand-email" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="contact@brand.com"
                        required
                        data-testid="input-brand-email"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="brand-phone">Phone Number</Label>
                      <Input 
                        id="brand-phone" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        data-testid="input-brand-phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brand-region">Target Region *</Label>
                      <Select value={formData.region} onValueChange={(value) => updateField("region", value)} required>
                        <SelectTrigger id="brand-region" data-testid="select-brand-region">
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="middle-east">Middle East</SelectItem>
                          <SelectItem value="both">Both Markets</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand-message">Tell us about your brand and distribution needs *</Label>
                    <Textarea 
                      id="brand-message" 
                      rows={6}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Brand category, product range, distribution goals..."
                      required
                      data-testid="textarea-brand-message"
                    />
                  </div>
                  <Button type="submit" variant="luxury" className="w-full text-xs tracking-[0.25em] uppercase" data-testid="button-submit-brand">
                    Submit Partnership Inquiry
                  </Button>
                </form>
              </Card>
            </TabsContent>

            {/* Retailer Form */}
            <TabsContent value="retailer">
              <Card className="p-8 bg-card border border-white/10">
                <h3 className="text-2xl font-light mb-6 tracking-wide">Retailer Partnership Inquiry</h3>
                <form onSubmit={handleSubmit("retailer partnership")} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="retailer-name">Contact Name *</Label>
                      <Input 
                        id="retailer-name" 
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Your name"
                        required
                        data-testid="input-retailer-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="retailer-company">Store/Company Name *</Label>
                      <Input 
                        id="retailer-company" 
                        value={formData.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        placeholder="Your business name"
                        required
                        data-testid="input-retailer-company"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="retailer-email">Email *</Label>
                      <Input 
                        id="retailer-email" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        data-testid="input-retailer-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="retailer-phone">Phone Number *</Label>
                      <Input 
                        id="retailer-phone" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                        data-testid="input-retailer-phone"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retailer-location">Store Location *</Label>
                    <Input 
                      id="retailer-location" 
                      value={formData.region}
                      onChange={(e) => updateField("region", e.target.value)}
                      placeholder="City, State/Emirate"
                      required
                      data-testid="input-retailer-location"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retailer-message">Describe your retail business and interests *</Label>
                    <Textarea 
                      id="retailer-message" 
                      rows={6}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Store type, brands currently carried, target brands..."
                      required
                      data-testid="textarea-retailer-message"
                    />
                  </div>
                  <Button type="submit" variant="luxury" className="w-full text-xs tracking-[0.25em] uppercase" data-testid="button-submit-retailer">
                    Submit Retailer Inquiry
                  </Button>
                </form>
              </Card>
            </TabsContent>

            {/* Media Form */}
            <TabsContent value="media">
              <Card className="p-8 bg-card border border-white/10">
                <h3 className="text-2xl font-light mb-6 tracking-wide">Media & Press Inquiry</h3>
                <form onSubmit={handleSubmit("media")} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="media-name">Name *</Label>
                      <Input 
                        id="media-name" 
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Your name"
                        required
                        data-testid="input-media-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="media-outlet">Media Outlet *</Label>
                      <Input 
                        id="media-outlet" 
                        value={formData.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        placeholder="Publication/Channel name"
                        required
                        data-testid="input-media-outlet"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="media-email">Email *</Label>
                      <Input 
                        id="media-email" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        data-testid="input-media-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="media-type">Inquiry Type *</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => updateField("inquiryType", value)} required>
                        <SelectTrigger id="media-type" data-testid="select-media-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="press-release">Press Release</SelectItem>
                          <SelectItem value="interview">Interview Request</SelectItem>
                          <SelectItem value="feature">Feature Story</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="media-message">Details of your inquiry *</Label>
                    <Textarea 
                      id="media-message" 
                      rows={6}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Please provide details about your media inquiry..."
                      required
                      data-testid="textarea-media-message"
                    />
                  </div>
                  <Button type="submit" variant="luxury" className="w-full text-xs tracking-[0.25em] uppercase" data-testid="button-submit-media">
                    Submit Media Inquiry
                  </Button>
                </form>
              </Card>
            </TabsContent>

            {/* Careers Form */}
            <TabsContent value="careers">
              <Card className="p-8 bg-card border border-white/10">
                <h3 className="text-2xl font-light mb-6 tracking-wide">Career Opportunities</h3>
                <form onSubmit={handleSubmit("career")} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="career-name">Full Name *</Label>
                      <Input 
                        id="career-name" 
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        data-testid="input-career-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="career-email">Email *</Label>
                      <Input 
                        id="career-email" 
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        data-testid="input-career-email"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="career-phone">Phone Number *</Label>
                      <Input 
                        id="career-phone" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                        data-testid="input-career-phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="career-position">Position of Interest *</Label>
                      <Select value={formData.position} onValueChange={(value) => updateField("position", value)} required>
                        <SelectTrigger id="career-position" data-testid="select-career-position">
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales">Sales & Business Development</SelectItem>
                          <SelectItem value="operations">Operations & Logistics</SelectItem>
                          <SelectItem value="marketing">Marketing & Brand Management</SelectItem>
                          <SelectItem value="finance">Finance & Administration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="career-message">Cover Letter / Message *</Label>
                    <Textarea 
                      id="career-message" 
                      rows={6}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Tell us about your experience and why you'd like to join our team..."
                      required
                      data-testid="textarea-career-message"
                    />
                  </div>
                  <p className="text-xs text-white/40 font-light">
                    Please attach your resume to the follow-up email we'll send you after submission.
                  </p>
                  <Button type="submit" variant="luxury" className="w-full text-xs tracking-[0.25em] uppercase" data-testid="button-submit-career">
                    Submit Application
                  </Button>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Business Resources */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
            Business <span className="italic text-luxury-silver">Resources</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {businessResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.title} className="p-6 bg-card border border-white/10 hover-lift transition-elegant cursor-pointer" data-testid={`resource-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Icon className="h-10 w-10 text-luxury-gold mb-4" />
                  <h3 className="text-base font-light mb-2 tracking-wide">{resource.title}</h3>
                  <p className="text-xs text-white/60 font-light mb-3 leading-relaxed">{resource.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">{resource.fileSize}</span>
                    <Download className="h-4 w-4 text-luxury-gold" />
                  </div>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-xs text-white/40 mt-8 font-light">
            For access to trade-only resources, please contact your account manager or submit a retailer inquiry
          </p>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-background border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
            Regional <span className="italic text-luxury-silver">Offices</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {regionalOffices.map((office) => (
              <Card key={office.region} className="p-8 bg-card border border-white/10" data-testid={`office-${office.region.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-luxury-gold/10 border border-luxury-gold/20">
                    <MapPin className="h-6 w-6 text-luxury-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light mb-2 tracking-wide">{office.region}</h3>
                    <p className="text-sm text-white/60 font-light">{office.address}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-luxury-gold" />
                    <a href={`tel:${office.phone}`} className="text-white/70 hover:text-luxury-gold transition-elegant font-light">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-luxury-gold" />
                    <a href={`mailto:${office.email}`} className="text-white/70 hover:text-luxury-gold transition-elegant font-light">
                      {office.email}
                    </a>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-start gap-2">
                    <Globe2 className="h-4 w-4 text-luxury-silver mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-white/50 font-light leading-relaxed">{office.coverage}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market-Specific Information */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
            Market <span className="italic text-luxury-silver">Insights</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {marketInfo.map((market) => (
              <Card key={market.market} className="p-8 bg-card border border-white/10" data-testid={`market-${market.market.toLowerCase().replace(/\s+/g, '-')}`}>
                <h3 className="text-2xl font-light mb-6 tracking-wide">{market.market}</h3>
                <ul className="space-y-4">
                  {market.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0" />
                      <p className="text-sm text-white/70 font-light leading-relaxed">{highlight}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* General Contact */}
      <section className="py-20 bg-background border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">
            General <span className="italic text-luxury-silver">Inquiries</span>
          </h2>
          <p className="text-sm text-white/60 font-light mb-8 max-w-2xl mx-auto">
            For general questions or if you're not sure which form to use, feel free to reach out directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:trade@tharakantraders.com" className="inline-flex items-center gap-2 text-sm font-light text-white/70 hover:text-luxury-gold transition-elegant">
              <Mail className="h-4 w-4" />
              trade@tharakantraders.com
            </a>
            <span className="text-white/20 hidden sm:block">|</span>
            <a href="tel:+914842345678" className="inline-flex items-center gap-2 text-sm font-light text-white/70 hover:text-luxury-gold transition-elegant">
              <Phone className="h-4 w-4" />
              +91 484 2345678
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
