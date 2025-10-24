import { FileText, Download, BookOpen, Shield, FileCheck, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    category: "Brand Catalogs",
    icon: BookOpen,
    items: [
      { name: "Tom Ford Beauty Complete Catalog 2024", size: "12.4 MB", format: "PDF" },
      { name: "Creed Fragrances Portfolio", size: "8.7 MB", format: "PDF" },
      { name: "Le Labo Collection Guide", size: "5.2 MB", format: "PDF" },
      { name: "Byredo Complete Range", size: "9.1 MB", format: "PDF" },
    ],
  },
  {
    category: "Partnership Documents",
    icon: Briefcase,
    items: [
      { name: "Distribution Partnership Guidelines", size: "2.1 MB", format: "PDF" },
      { name: "Retailer Onboarding Package", size: "3.5 MB", format: "PDF" },
      { name: "Wholesale Terms & Conditions", size: "1.8 MB", format: "PDF" },
      { name: "Brand Authorization Template", size: "890 KB", format: "PDF" },
    ],
  },
  {
    category: "Market Reports",
    icon: FileText,
    items: [
      { name: "Luxury Fragrance Market Analysis 2024", size: "6.3 MB", format: "PDF" },
      { name: "Middle East Beauty Sector Overview", size: "4.9 MB", format: "PDF" },
      { name: "Indian Luxury Cosmetics Trends", size: "5.7 MB", format: "PDF" },
      { name: "Niche Perfumery Growth Report", size: "3.2 MB", format: "PDF" },
    ],
  },
  {
    category: "Product Specifications",
    icon: FileCheck,
    items: [
      { name: "Technical Specifications Sheet (All Brands)", size: "7.8 MB", format: "PDF" },
      { name: "Ingredient Declarations & INCI Lists", size: "4.3 MB", format: "PDF" },
      { name: "Packaging Dimensions & Weight Guide", size: "2.6 MB", format: "PDF" },
      { name: "Storage & Handling Requirements", size: "1.4 MB", format: "PDF" },
    ],
  },
  {
    category: "Regulatory Documentation",
    icon: Shield,
    items: [
      { name: "Import Compliance Guide - India", size: "3.1 MB", format: "PDF" },
      { name: "GCC Regulatory Requirements", size: "2.8 MB", format: "PDF" },
      { name: "Certificates of Authenticity", size: "1.2 MB", format: "PDF" },
      { name: "Product Safety Data Sheets", size: "5.4 MB", format: "PDF" },
    ],
  },
];

export default function Resources() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.1em] mb-6">
            BUSINESS <span className="text-luxury-gold">RESOURCES</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Access comprehensive documentation, catalogs, and business resources to support your partnership with Tharakan Traders.
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card border border-white/10 p-8 text-center hover:border-luxury-gold/50 transition-elegant group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-elegant">
              <BookOpen className="h-8 w-8 text-luxury-gold" />
            </div>
            <h3 className="text-lg font-light mb-2 tracking-wide">Brand Catalogs</h3>
            <p className="text-sm text-muted-foreground font-light">Complete product portfolios and lookbooks</p>
          </div>
          <div className="bg-card border border-white/10 p-8 text-center hover:border-luxury-gold/50 transition-elegant group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-elegant">
              <Briefcase className="h-8 w-8 text-luxury-gold" />
            </div>
            <h3 className="text-lg font-light mb-2 tracking-wide">Partnership Docs</h3>
            <p className="text-sm text-muted-foreground font-light">Guidelines and terms for distributors</p>
          </div>
          <div className="bg-card border border-white/10 p-8 text-center hover:border-luxury-gold/50 transition-elegant group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-elegant">
              <Shield className="h-8 w-8 text-luxury-gold" />
            </div>
            <h3 className="text-lg font-light mb-2 tracking-wide">Compliance</h3>
            <p className="text-sm text-muted-foreground font-light">Regulatory and certification documents</p>
          </div>
        </div>

        {/* Resources List */}
        <div className="space-y-12">
          {resources.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <div
                key={section.category}
                className="animate-fade-in"
                style={{ animationDelay: `${sectionIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <Icon className="h-5 w-5 text-luxury-gold mr-3" />
                  <h2 className="text-2xl font-light tracking-wide">{section.category}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-card border border-white/10 p-6 hover:border-luxury-gold/50 transition-elegant group flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-12 h-12 rounded bg-luxury-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-luxury-gold/20 transition-elegant">
                          <FileText className="h-6 w-6 text-luxury-gold" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-light mb-1 text-sm md:text-base group-hover:text-luxury-gold transition-elegant">
                            {item.name}
                          </h3>
                          <div className="flex items-center space-x-3 text-xs text-muted-foreground font-light">
                            <span>{item.format}</span>
                            <span>•</span>
                            <span>{item.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-4 hover:text-luxury-gold hover:bg-luxury-gold/10"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-luxury-gold/10 to-luxury-silver/10 border border-white/10 p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-wide">
            Need Additional <span className="text-luxury-gold">Documentation?</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto font-light">
            Can't find what you're looking for? Our team is here to provide any additional resources or custom documentation you need.
          </p>
          <Button className="bg-luxury-gold text-black hover:bg-luxury-gold/90">
            Request Custom Resources
          </Button>
        </div>
      </div>
    </main>
  );
}
