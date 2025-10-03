import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";

const Home = () => {
  const featuredBrands = [
    "TOM FORD", "AMOUAGE", "LOUIS VUITTON", "PRADA", 
    "DIOR", "CHANEL", "CREED", "GIVENCHY"
  ];

  const features = [
    {
      icon: Shield,
      title: "Authentic Products",
      description: "100% genuine luxury brands with full authenticity guarantee"
    },
    {
      icon: Globe,
      title: "Regional Expertise",
      description: "Specialized distribution across India and Middle East markets"
    },
    {
      icon: Award,
      title: "Premium Selection",
      description: "Curated portfolio of the world's most prestigious beauty brands"
    },
    {
      icon: TrendingUp,
      title: "Market Leaders",
      description: "Trusted partner for luxury retailers and department stores"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-light mb-8 animate-fade-in-up tracking-[0.08em]">
            Premium Luxury
            <span className="block text-luxury-silver mt-4 italic">Beauty Distribution</span>
          </h1>
          <p className="text-base md:text-lg mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Your trusted partner for authentic luxury cosmetics and fragrances across India and the Middle East
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              variant="ghost"
              size="lg" 
              className="text-xs tracking-[0.2em] uppercase font-light border border-white/30 hover:border-white hover:bg-transparent hover:text-white transition-elegant px-10 py-6"
            >
              <Link to="/products">
                Explore Catalogue
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="ghost"
              className="text-xs tracking-[0.2em] uppercase font-light border border-white/30 hover:border-white hover:bg-transparent hover:text-white transition-elegant px-10 py-6"
            >
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Brands Strip */}
      <section className="py-16 bg-background border-y border-white/10">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs text-white/40 mb-10 tracking-[0.3em] uppercase font-light">
            Authorized Distributor
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {featuredBrands.map((brand) => (
              <div 
                key={brand}
                className="text-base md:text-lg font-light text-white/60 tracking-[0.15em] hover:text-white transition-elegant cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
              Why Choose <span className="text-luxury-silver italic">Tharakan Traders</span>
            </h2>
            <p className="text-sm text-white/60 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Setting the standard for luxury beauty distribution with unmatched expertise and service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {features.map((feature) => (
              <Card 
                key={feature.title}
                className="p-10 text-center bg-background border-0 hover-lift group"
              >
                <feature.icon className="h-10 w-10 mx-auto mb-6 text-luxury-silver group-hover:text-luxury-gold transition-elegant" />
                <h3 className="text-lg font-light mb-4 tracking-wider">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-wide">
            Ready to Elevate Your <span className="italic text-luxury-silver">Business?</span>
          </h2>
          <p className="text-sm mb-12 text-white/60 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Join leading retailers across India and the Middle East who trust Tharakan Traders for premium beauty brands
          </p>
          <Button 
            asChild 
            size="lg"
            variant="ghost"
            className="text-xs tracking-[0.2em] uppercase font-light border border-white/30 hover:border-white hover:bg-transparent hover:text-white transition-elegant px-12 py-6"
          >
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
