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
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Premium Luxury
            <span className="block text-luxury-gold mt-2">Beauty Distribution</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for authentic luxury cosmetics and fragrances across India and the Middle East
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark font-semibold text-lg px-8"
            >
              <Link to="/products">
                Explore Catalogue <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-luxury-dark font-semibold text-lg px-8"
            >
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Brands Strip */}
      <section className="py-12 bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6 tracking-widest uppercase">
            Authorized Distributor For
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {featuredBrands.map((brand) => (
              <div 
                key={brand}
                className="text-lg md:text-xl font-semibold text-luxury-charcoal tracking-wider"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-luxury-gold">Tharakan Traders</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Setting the standard for luxury beauty distribution with unmatched expertise and service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card 
                key={feature.title}
                className="p-8 text-center hover:shadow-xl transition-luxury border-2 hover:border-luxury-gold"
              >
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-luxury-gold" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Join leading retailers across India and the Middle East who trust Tharakan Traders for premium beauty brands
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark font-semibold text-lg px-10"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
