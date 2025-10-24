import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Award, TrendingUp, Mail } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";
import { useState } from "react";

const Home = () => {
  const [email, setEmail] = useState("");
  
  const featuredBrands = [
    "TOM FORD", "AMOUAGE", "LOUIS VUITTON", "PRADA", 
    "DIOR", "CHANEL", "CREED", "GIVENCHY", "HERMÈS", 
    "YSL", "VERSACE", "BVLGARI", "BURBERRY", "LA MER"
  ];

  const categories = [
    { 
      title: "Fragrances", 
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      description: "Discover our curated collection of luxury perfumes",
      link: "/products?category=fragrance"
    },
    { 
      title: "Cosmetics", 
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      description: "Premium makeup from iconic beauty houses",
      link: "/products?category=cosmetics"
    },
    { 
      title: "Skincare", 
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
      description: "Advanced skincare solutions for every need",
      link: "/products?category=skincare"
    }
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
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center parallax-scroll"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-[0.08em]">
              LUXURY BEAUTY
              <span className="block text-luxury-silver mt-4 text-4xl md:text-6xl lg:text-7xl italic font-light">
                Distribution Excellence
              </span>
            </h1>
            <p className="text-sm md:text-base mb-12 text-white/60 max-w-2xl mx-auto leading-loose font-light tracking-[0.05em]">
              Connecting the world's most prestigious beauty brands with discerning markets across India and the Middle East
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild 
                variant="luxury"
                size="xl" 
                className="text-[10px] tracking-[0.25em] uppercase font-light hover-scale"
              >
                <Link to="/products">Explore Portfolio</Link>
              </Button>
              <Button 
                asChild 
                variant="minimal"
                size="xl" 
                className="text-[10px] tracking-[0.25em] uppercase font-light"
              >
                <Link to="/contact">Partnership Inquiries</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </section>

      {/* Featured Brands Strip - Enhanced with more brands */}
      <section className="py-20 bg-background border-y border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-[9px] text-white/30 mb-12 tracking-[0.4em] uppercase font-light">
            Authorized Distribution Partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
            {featuredBrands.map((brand, index) => (
              <Link
                key={brand}
                to={`/brands/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-center opacity-0 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="text-sm md:text-base font-light text-white/40 tracking-[0.15em] group-hover:text-foreground group-hover:scale-105 transition-elegant cursor-pointer">
                  {brand}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              to="/brands"
              className="inline-block text-xs tracking-[0.2em] uppercase text-white/60 hover:text-luxury-gold transition-elegant underline-offset-4 hover:underline font-light"
            >
              View All Brands →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-[0.05em]">
              Product <span className="italic text-luxury-silver">Categories</span>
            </h2>
            <p className="text-xs text-white/50 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Comprehensive range of luxury beauty products across all categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={category.title} 
                to={category.link}
                className="group relative aspect-[3/4] overflow-hidden bg-black"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-elegant opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <h3 className="text-3xl font-light mb-3 tracking-wide group-hover:text-luxury-gold transition-elegant">
                    {category.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light tracking-wide mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center text-[10px] tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-elegant">
                    Discover More <ArrowRight className="ml-2 h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-[0.05em]">
              Why <span className="italic text-luxury-silver">Tharakan Traders</span>
            </h2>
            <p className="text-xs text-white/50 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Unparalleled expertise in luxury beauty distribution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-12 text-center bg-black border-0 hover-lift group"
              >
                <feature.icon className="h-12 w-12 mx-auto mb-8 text-white/30 group-hover:text-luxury-gold group-hover:scale-110 transition-elegant" />
                <h3 className="text-base font-light mb-4 tracking-[0.15em] uppercase text-[11px]">{feature.title}</h3>
                <p className="text-xs text-white/50 leading-loose font-light">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Distribution <span className="italic text-luxury-silver">Network</span>
              </h2>
              <div className="space-y-6 text-sm text-white/60 leading-loose font-light">
                <p>
                  With an extensive network spanning India and the Middle East, we connect luxury beauty brands with premium retailers, department stores, and specialty boutiques.
                </p>
                <p>
                  Our infrastructure includes temperature-controlled storage facilities, regulatory compliance expertise, and seamless logistics management to ensure every product reaches its destination in perfect condition.
                </p>
                <p>
                  From Mumbai to Dubai, our established relationships and market knowledge make us the preferred distribution partner for luxury beauty brands entering these dynamic markets.
                </p>
              </div>
              <Button asChild variant="minimal" size="lg" className="text-[10px] tracking-[0.25em] uppercase">
                <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-3 w-3" /></Link>
              </Button>
            </div>
            <div className="relative aspect-[4/5] bg-black overflow-hidden luxury-border">
              <img 
                src="https://images.unsplash.com/photo-1629198735700-6f8c0db1b815?w=800&q=80" 
                alt="Luxury Distribution"
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            Stay <span className="italic text-luxury-silver">Informed</span>
          </h2>
          <p className="text-xs text-white/50 mb-12 font-light tracking-wide leading-relaxed">
            Subscribe to receive updates on new brand partnerships, market insights, and exclusive opportunities
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-sm focus:border-foreground focus:outline-none transition-elegant text-white placeholder:text-white/30 font-light tracking-wide"
            />
            <Button 
              type="submit" 
              variant="luxury" 
              size="lg"
              className="text-[10px] tracking-[0.25em] uppercase font-light"
            >
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-wide">
            Ready to <span className="italic text-luxury-silver">Partner?</span>
          </h2>
          <p className="text-xs text-white/50 mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Explore partnership opportunities with India and Middle East's leading luxury beauty distributor
          </p>
          <Button 
            asChild 
            size="xl"
            variant="luxury"
            className="text-[10px] tracking-[0.25em] uppercase font-light hover-scale"
          >
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
