import { Card } from "@/components/ui/card";
import { Globe, Shield, TrendingUp, Users, Award, Package } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description: "We source directly from authorized channels, ensuring every product is 100% genuine with full traceability"
    },
    {
      icon: Globe,
      title: "Regional Expertise",
      description: "Deep understanding of India and Middle East markets with established distribution networks and regulatory compliance"
    },
    {
      icon: TrendingUp,
      title: "Market Leadership",
      description: "Trusted partner for premium retailers, department stores, and luxury outlets across our target regions"
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We work closely with our partners to understand their needs and deliver tailored solutions for success"
    },
    {
      icon: Award,
      title: "Premium Portfolio",
      description: "Curated selection of the world's most prestigious beauty and fragrance brands"
    },
    {
      icon: Package,
      title: "Reliable Logistics",
      description: "Efficient supply chain management with temperature-controlled storage and timely delivery"
    }
  ];

  const stats = [
    { number: "50+", label: "Luxury Brands" },
    { number: "2", label: "Key Markets" },
    { number: "500+", label: "Retail Partners" },
    { number: "100%", label: "Authentic Products" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section 
        className="relative py-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-light mb-8 text-white tracking-[0.05em]">
              About <span className="italic text-luxury-silver">Tharakan Traders</span>
            </h1>
            <p className="text-base text-white/80 leading-relaxed font-light tracking-wide">
              Premier distributor of luxury cosmetics and fragrances, connecting the world's most prestigious beauty brands with discerning retailers across India and the Middle East
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-light text-luxury-silver mb-3 tracking-wider">
                  {stat.number}
                </div>
                <div className="text-white/50 font-light text-xs tracking-[0.15em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-light mb-12 text-center tracking-wide">
              Our <span className="italic text-luxury-silver">Story</span>
            </h2>
            <div className="space-y-8 text-sm leading-loose text-white/70 font-light">
              <p>
                Tharakan Traders was founded with a singular vision: to bridge the gap between the world's most prestigious luxury beauty brands and the rapidly growing markets of India and the Middle East.
              </p>
              <p>
                With years of experience in luxury goods distribution, we understand the nuances of these dynamic markets. From regulatory compliance and customs clearance to temperature-controlled logistics and retail partnerships, we handle every aspect of the distribution chain with precision and care.
              </p>
              <p>
                Our portfolio includes fragrances from iconic houses like Tom Ford, Amouage, and Creed, alongside premium cosmetics and skincare from Dior, Chanel, and Louis Vuitton. Each brand in our collection represents the pinnacle of luxury, craftsmanship, and innovation.
              </p>
              <p>
                We work exclusively with authorized channels, ensuring that every product we distribute is authentic, properly stored, and delivered with the quality that luxury consumers expect. Our partnerships with leading retailers, department stores, and specialty boutiques across India and the Middle East reflect our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-center tracking-wide">
            Why Partner With <span className="italic text-luxury-silver">Us</span>
          </h2>
          <p className="text-sm text-white/60 text-center mb-20 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            Our commitment to excellence, authenticity, and partnership drives everything we do
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {values.map((value) => (
              <Card key={value.title} className="p-10 bg-black border-0 hover-lift group">
                <value.icon className="h-10 w-10 mb-6 text-luxury-silver group-hover:text-luxury-gold transition-elegant" />
                <h3 className="text-lg font-light mb-4 tracking-wider">{value.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-light mb-10 tracking-wide">
              Our <span className="italic text-luxury-silver">Markets</span>
            </h2>
            <p className="text-sm text-white/60 mb-16 leading-relaxed font-light tracking-wide">
              We specialize in two of the world's fastest-growing luxury markets, each with unique opportunities and requirements
            </p>

            <div className="grid md:grid-cols-2 gap-10 text-left">
              <Card className="p-10 bg-card border border-white/10 hover-lift">
                <h3 className="text-2xl font-light mb-6 text-luxury-silver tracking-wider">India</h3>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  With a burgeoning middle class and increasing appetite for luxury goods, India represents one of the most exciting opportunities in the global beauty market. We work with premier retailers across major metros and tier-1 cities, ensuring your brands reach India's most discerning consumers.
                </p>
              </Card>

              <Card className="p-10 bg-card border border-white/10 hover-lift">
                <h3 className="text-2xl font-light mb-6 text-luxury-silver tracking-wider">Middle East</h3>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  The Middle East's sophisticated consumers have long appreciated luxury fragrances and cosmetics. Our established network spans the UAE, Saudi Arabia, and wider GCC region, connecting your brands with high-end department stores, specialty retailers, and luxury outlets.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-wide">
            Ready to Expand Your <span className="italic text-luxury-silver">Reach?</span>
          </h2>
          <p className="text-sm mb-12 text-white/60 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Partner with Tharakan Traders to bring your luxury beauty brands to India and the Middle East
          </p>
          <a 
            href="mailto:trade@tharakantraders.com"
            className="inline-block bg-transparent border border-white/30 hover:border-white text-white font-light text-xs tracking-[0.2em] uppercase px-12 py-6 transition-elegant"
          >
            trade@tharakantraders.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
