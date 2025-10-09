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
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white stagger-fade">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-[0.05em]">
            Premium Luxury
            <span className="block text-luxury-silver mt-3 italic">Beauty Distribution</span>
          </h1>
          <p className="text-sm md:text-base mb-10 text-white/70 max-w-xl mx-auto leading-relaxed font-light tracking-wide">
            Your trusted partner for authentic luxury cosmetics and fragrances across India and the Middle East
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              variant="ghost"
              size="lg" 
              className="text-xs tracking-[0.2em] uppercase font-light border border-white/30 hover:border-white hover:bg-white/10 hover:scale-105 transition-elegant px-8 py-5 shimmer"
            >
              <Link to="/products">
                Explore Catalogue
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="ghost"
              className="text-xs tracking-[0.2em] uppercase font-light border border-white/30 hover:border-white hover:bg-white/10 hover:scale-105 transition-elegant px-8 py-5 shimmer"
            >
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Brands Strip */}
      <section className="py-12 md:py-16 bg-background border-y border-white/10">
        <div className="container mx-auto px-6">
          <p className="text-center text-[10px] md:text-xs text-white/40 mb-8 md:mb-10 tracking-[0.3em] uppercase font-light">
            Premium Distribution Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 stagger-fade">
            {featuredBrands.map((brand) => (
              <div 
                key={brand}
                className="text-sm md:text-base font-light text-white/50 tracking-[0.15em] hover:text-white hover:scale-110 transition-elegant cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 tracking-wide">
              Why Choose <span className="text-luxury-silver italic">Tharakan Traders</span>
            </h2>
            <p className="text-xs md:text-sm text-white/60 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Setting the standard for luxury beauty distribution with unmatched expertise and service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 stagger-fade">
            {features.map((feature) => (
              <Card 
                key={feature.title}
                className="p-8 md:p-10 text-center bg-background border-0 hover-lift group"
              >
                <feature.icon className="h-8 w-8 md:h-10 md:w-10 mx-auto mb-5 md:mb-6 text-luxury-silver group-hover:text-luxury-gold group-hover:scale-110 transition-elegant" />
                <h3 className="text-base md:text-lg font-light mb-3 md:mb-4 tracking-wider">{feature.title}</h3>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-black text-white border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8 tracking-wide">
            Ready to Elevate Your <span className="italic text-luxury-silver">Business?</span>
          </h2>
          <p className="text-xs md:text-sm mb-8 md:mb-12 text-white/60 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Join leading retailers across India and the Middle East who trust Tharakan Traders for premium beauty brands
          </p>
          <Button 
            asChild 
            size="lg"
            variant="ghost"
            className="text-xs tracking-[0.2em] uppercase font-light border border-white/30 hover:border-white hover:bg-white/10 hover:scale-105 transition-elegant px-10 md:px-12 py-5 md:py-6 shimmer"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4 inline-block" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
