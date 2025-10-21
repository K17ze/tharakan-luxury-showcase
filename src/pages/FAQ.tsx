import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqCategories = [
  {
    category: "Distribution & Partnership",
    questions: [
      {
        q: "What regions do you serve?",
        a: "We exclusively distribute luxury beauty and fragrance products across India and key Middle Eastern markets, including the UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman.",
      },
      {
        q: "How can I become a retail partner?",
        a: "We work with established luxury retailers, department stores, and specialty boutiques. Please submit a partnership inquiry through our contact form with details about your retail operations, and our business development team will review your application.",
      },
      {
        q: "What are your minimum order requirements?",
        a: "Minimum order quantities vary by brand and product category. Our team will discuss specific requirements during the partnership onboarding process based on your market and retail format.",
      },
      {
        q: "Do you offer exclusive distribution agreements?",
        a: "We evaluate exclusive territory arrangements on a case-by-case basis. Exclusivity depends on factors such as market coverage, sales commitments, and strategic alignment with brand objectives.",
      },
    ],
  },
  {
    category: "Product Authenticity",
    questions: [
      {
        q: "How do you guarantee product authenticity?",
        a: "All products are sourced directly from authorized brand distributors or manufacturers. We maintain complete chain-of-custody documentation and can provide certificates of authenticity for every item in our portfolio.",
      },
      {
        q: "What measures prevent counterfeit products?",
        a: "We implement rigorous verification protocols including direct sourcing relationships, batch tracking, secure warehousing, and regular quality audits. Our entire supply chain is documented and traceable.",
      },
      {
        q: "Can you provide proof of authorization from brands?",
        a: "Yes, we maintain current authorization letters from all brands in our portfolio. These documents are available to verified retail partners upon request.",
      },
    ],
  },
  {
    category: "Logistics & Shipping",
    questions: [
      {
        q: "What are your delivery timelines?",
        a: "Standard delivery within India is 3-7 business days. Middle Eastern deliveries typically take 5-10 business days. Express shipping options are available for urgent orders.",
      },
      {
        q: "How do you handle product storage and temperature control?",
        a: "Our climate-controlled warehouses maintain optimal conditions (15-25°C) to preserve product integrity. We follow strict FIFO (First In, First Out) inventory management and regular quality checks.",
      },
      {
        q: "What is your shipping and packaging process?",
        a: "All products are carefully packed with protective materials, and fragile items receive special handling. We use discrete, professional packaging and work with premium logistics partners experienced in luxury goods.",
      },
      {
        q: "Do you handle customs and import documentation?",
        a: "Yes, we manage all customs clearance, import permits, and regulatory documentation required for cross-border shipments. Our team ensures compliance with local regulations in each market.",
      },
    ],
  },
  {
    category: "Payment & Terms",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers (NEFT/RTGS/SWIFT), letters of credit, and for established partners, credit terms subject to approval. Payment terms are established during the partnership agreement.",
      },
      {
        q: "Do you offer credit facilities to retailers?",
        a: "Credit terms are available to qualified retail partners after credit assessment and approval. Terms typically range from 30 to 60 days based on order volume and payment history.",
      },
      {
        q: "What is your pricing structure?",
        a: "We offer competitive wholesale pricing based on order volume, product category, and partnership level. Pricing is provided under NDA as part of the partnership discussion.",
      },
    ],
  },
  {
    category: "Returns & Support",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns for damaged or defective products within 7 days of delivery. Products must be unused and in original packaging. Return policies for other situations are outlined in partnership agreements.",
      },
      {
        q: "How do you handle damaged shipments?",
        a: "Report any damage within 48 hours of delivery with photographic evidence. We'll arrange immediate replacement or credit, and handle all logistics for the return.",
      },
      {
        q: "What kind of ongoing support do you provide?",
        a: "Partners receive dedicated account management, regular product training, marketing support materials, and access to brand representatives for events or activations.",
      },
      {
        q: "Do you provide marketing materials and brand assets?",
        a: "Yes, we supply approved brand imagery, product information, display materials, and marketing assets to support your retail activities, all in compliance with brand guidelines.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.1em] mb-6">
            FREQUENTLY ASKED <span className="text-luxury-gold">QUESTIONS</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Find answers to common questions about distribution, partnership, logistics, and product authenticity.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqCategories.map((section, sectionIndex) => (
            <div
              key={section.category}
              className="animate-fade-in"
              style={{ animationDelay: `${sectionIndex * 0.1}s` }}
            >
              <h2 className="text-2xl font-light tracking-wide mb-6 text-luxury-gold">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((item, index) => {
                  const key = `${section.category}-${index}`;
                  const isOpen = openItems[key];

                  return (
                    <div
                      key={key}
                      className="border border-white/10 bg-card overflow-hidden hover:border-luxury-gold/50 transition-elegant"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left group"
                      >
                        <span className="text-base md:text-lg font-light pr-8 group-hover:text-luxury-gold transition-elegant">
                          {item.q}
                        </span>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <Minus className="h-5 w-5 text-luxury-gold" />
                          ) : (
                            <Plus className="h-5 w-5 text-muted-foreground group-hover:text-luxury-gold transition-elegant" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 animate-fade-in">
                          <p className="text-muted-foreground leading-relaxed font-light border-t border-white/10 pt-4">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 bg-gradient-to-r from-luxury-gold/10 to-luxury-silver/10 border border-white/10 p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-wide">
            Still Have <span className="text-luxury-gold">Questions?</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto font-light">
            Our team is here to help. Reach out with any questions about distribution, partnerships, or our portfolio of luxury brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-luxury-gold text-black hover:bg-luxury-gold/90 transition-elegant text-sm tracking-wider uppercase font-light"
            >
              Contact Us
            </a>
            <a
              href="mailto:trade@tharakantraders.com"
              className="inline-flex items-center justify-center px-8 py-3 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-elegant text-sm tracking-wider uppercase font-light"
            >
              Email Directly
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
