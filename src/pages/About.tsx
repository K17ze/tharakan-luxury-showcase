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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About <span className="text-luxury-gold">Tharakan Traders</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Premier distributor of luxury cosmetics and fragrances, connecting the world's most prestigious beauty brands with discerning retailers across India and the Middle East
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-luxury-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Our <span className="text-luxury-gold">Story</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
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
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Why Partner With <span className="text-luxury-gold">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Our commitment to excellence, authenticity, and partnership drives everything we do
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="p-8 hover:shadow-xl transition-luxury border-2 hover:border-luxury-gold">
                <value.icon className="h-12 w-12 mb-4 text-luxury-gold" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="text-luxury-gold">Markets</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              We specialize in two of the world's fastest-growing luxury markets, each with unique opportunities and requirements
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="p-8 border-2">
                <h3 className="text-2xl font-bold mb-4 text-luxury-gold">India</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With a burgeoning middle class and increasing appetite for luxury goods, India represents one of the most exciting opportunities in the global beauty market. We work with premier retailers across major metros and tier-1 cities, ensuring your brands reach India's most discerning consumers.
                </p>
              </Card>

              <Card className="p-8 border-2">
                <h3 className="text-2xl font-bold mb-4 text-luxury-gold">Middle East</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Middle East's sophisticated consumers have long appreciated luxury fragrances and cosmetics. Our established network spans the UAE, Saudi Arabia, and wider GCC region, connecting your brands with high-end department stores, specialty retailers, and luxury outlets.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Expand Your Reach?
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Partner with Tharakan Traders to bring your luxury beauty brands to India and the Middle East
          </p>
          <a 
            href="mailto:trade@tharakantraders.com"
            className="inline-block bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark font-semibold text-lg px-10 py-4 rounded-md transition-luxury"
          >
            trade@tharakantraders.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
