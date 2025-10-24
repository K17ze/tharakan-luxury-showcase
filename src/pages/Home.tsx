import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Award, TrendingUp, Mail, MapPin, ChevronLeft, ChevronRight, Instagram, Quote, Calendar, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  const [email, setEmail] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Hero Carousel Setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false })
  ]);

  const heroSlides = [
    {
      type: "image",
      src: heroImage,
      title: "LUXURY BEAUTY",
      subtitle: "Distribution Excellence",
      description: "Connecting the world's most prestigious beauty brands with discerning markets across India and the Middle East"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=90",
      title: "PREMIUM COSMETICS",
      subtitle: "Curated Portfolio",
      description: "Authorized distributor of iconic beauty houses and luxury cosmetics brands"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=1920&q=90",
      title: "EXCLUSIVE FRAGRANCES",
      subtitle: "Artisanal Perfumery",
      description: "From Tom Ford to Amouage, discover the world's finest fragrance collections"
    }
  ];

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setActiveSlide(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  
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

  // Instagram Gallery
  const instagramGallery = [
    { id: 1, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&q=80", alt: "Luxury fragrance bottle" },
    { id: 2, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80", alt: "Perfume collection" },
    { id: 3, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80", alt: "Cosmetic products" },
    { id: 4, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80", alt: "Makeup essentials" },
    { id: 5, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80", alt: "Skincare lineup" },
    { id: 6, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80", alt: "Men's fragrance" },
    { id: 7, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&q=80", alt: "Luxury bottle" },
    { id: 8, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=600&q=80", alt: "Brand showcase" }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Tharakan Traders has been instrumental in bringing authentic luxury beauty brands to our stores. Their expertise in logistics and regulatory compliance is unmatched.",
      author: "Luxury Department Store",
      location: "Mumbai, India",
      role: "Chief Buyer"
    },
    {
      quote: "Working with Tharakan Traders has transformed our fragrance portfolio. Their selection of niche and prestige brands perfectly matches our clientele's expectations.",
      author: "Premium Retailer",
      location: "Dubai, UAE",
      role: "Managing Director"
    },
    {
      quote: "The authenticity guarantee and temperature-controlled logistics give us complete confidence in every product. A true partner in luxury retail.",
      author: "High-End Boutique Chain",
      location: "Bangalore, India",
      role: "Operations Head"
    }
  ];

  // Latest News
  const latestNews = [
    {
      date: "March 2025",
      title: "New Partnership with Maison Francis Kurkdjian",
      description: "Exclusive distribution rights secured for India and Middle East markets",
      category: "Brand Partnership"
    },
    {
      date: "February 2025",
      title: "Expansion into GCC Markets",
      description: "New distribution hub established in Dubai to serve wider Middle East region",
      category: "Expansion"
    },
    {
      date: "January 2025",
      title: "Temperature-Controlled Facility Launch",
      description: "State-of-the-art storage facility inaugurated in Mumbai",
      category: "Infrastructure"
    }
  ];

  // Regional Presence
  const regionalPresence = [
    {
      region: "India",
      icon: MapPin,
      markets: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata"],
      retailers: "300+",
      description: "Comprehensive network across tier-1 cities and premium retail destinations"
    },
    {
      region: "Middle East",
      icon: MapPin,
      markets: ["Dubai", "Abu Dhabi", "Riyadh", "Jeddah", "Doha", "Kuwait"],
      retailers: "200+",
      description: "Strategic partnerships with luxury retailers across GCC region"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {heroSlides.map((slide, index) => (
              <div key={index} className="embla__slide relative h-screen w-full min-w-0 flex-[0_0_100%]">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.src})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                </div>
                
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="container mx-auto px-6 text-center text-white">
                    <div className="animate-fade-in-up">
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-[0.08em]">
                        {slide.title}
                        <span className="block text-luxury-silver mt-4 text-4xl md:text-6xl lg:text-7xl italic font-light">
                          {slide.subtitle}
                        </span>
                      </h1>
                      <p className="text-sm md:text-base mb-12 text-white/60 max-w-2xl mx-auto leading-loose font-light tracking-[0.05em]">
                        {slide.description}
                      </p>
                      {index === 0 && (
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                          <Button 
                            asChild 
                            variant="luxury"
                            size="xl" 
                            className="text-[10px] tracking-[0.25em] uppercase font-light hover-scale"
                            data-testid="button-explore-portfolio"
                          >
                            <Link to="/products">Explore Portfolio</Link>
                          </Button>
                          <Button 
                            asChild 
                            variant="minimal"
                            size="xl" 
                            className="text-[10px] tracking-[0.25em] uppercase font-light"
                            data-testid="button-partnership-inquiries"
                          >
                            <Link to="/contact">Partnership Inquiries</Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={scrollPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-elegant border border-white/20"
          aria-label="Previous slide"
          data-testid="button-prev-slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-elegant border border-white/20"
          aria-label="Next slide"
          data-testid="button-next-slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1 transition-all duration-500 ${
                index === activeSlide ? 'w-12 bg-white' : 'w-6 bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              data-testid={`indicator-slide-${index}`}
            />
          ))}
        </div>

        {/* Enhanced Scroll Indicator with Animation */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in z-20 flex flex-col items-center gap-3">
          <span className="text-white/50 text-[9px] tracking-[0.3em] uppercase font-light">Scroll to Explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse" />
          <ChevronDown className="h-4 w-4 text-white/50 animate-bounce" />
        </div>
      </section>

      {/* Featured Brands Strip */}
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
                data-testid={`link-brand-${brand.toLowerCase().replace(/\s+/g, '-')}`}
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
              data-testid="link-view-all-brands"
            >
              View All Brands →
            </Link>
          </div>
        </div>
      </section>

      {/* Regional Presence Map */}
      <section className="py-32 bg-black border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-[0.05em]">
              Regional <span className="italic text-luxury-silver">Presence</span>
            </h2>
            <p className="text-xs text-white/50 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Strategic distribution network across two of the world's fastest-growing luxury markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {regionalPresence.map((region) => (
              <Card 
                key={region.region} 
                className="p-12 bg-card border border-white/10 hover-lift"
                data-testid={`card-region-${region.region.toLowerCase()}`}
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="p-4 bg-luxury-gold/10 border border-luxury-gold/20">
                    <region.icon className="h-8 w-8 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-light mb-2 tracking-wider">{region.region}</h3>
                    <p className="text-luxury-silver text-sm font-light">{region.retailers} Retail Partners</p>
                  </div>
                </div>
                <p className="text-sm text-white/60 mb-8 leading-relaxed font-light">
                  {region.description}
                </p>
                <div className="space-y-3">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-light">Key Markets</p>
                  <div className="flex flex-wrap gap-3">
                    {region.markets.map((market) => (
                      <span 
                        key={market}
                        className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-light tracking-wide hover:border-luxury-gold/30 hover:bg-luxury-gold/5 transition-elegant"
                      >
                        {market}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
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
                data-testid={`link-category-${category.title.toLowerCase()}`}
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

      {/* Testimonials Section */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-[0.05em]">
              Trusted by <span className="italic text-luxury-silver">Industry Leaders</span>
            </h2>
            <p className="text-xs text-white/50 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              What our retail partners say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-10 bg-card border border-white/10 hover-lift"
                data-testid={`card-testimonial-${index}`}
              >
                <Quote className="h-10 w-10 text-luxury-gold/30 mb-6" />
                <p className="text-sm text-white/70 leading-relaxed font-light mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm font-light tracking-wide mb-1">{testimonial.author}</p>
                  <p className="text-xs text-white/50 font-light">{testimonial.role}</p>
                  <p className="text-xs text-luxury-silver font-light mt-1">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Instagram className="h-8 w-8 text-luxury-silver" />
              <h2 className="text-4xl md:text-6xl font-light tracking-[0.05em]">
                @TharakanTraders
              </h2>
            </div>
            <p className="text-xs text-white/50 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Follow our journey showcasing luxury beauty across India and the Middle East
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramGallery.map((item, index) => (
              <div 
                key={item.id}
                className="relative aspect-square overflow-hidden bg-black group cursor-pointer"
                data-testid={`gallery-item-${index}`}
              >
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-elegant opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-elegant flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="minimal" 
              size="lg"
              className="text-[10px] tracking-[0.25em] uppercase"
              data-testid="button-follow-instagram"
            >
              <a href="https://instagram.com/tharakantraders" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" />
                Follow Us on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-[0.05em]">
              Latest <span className="italic text-luxury-silver">Updates</span>
            </h2>
            <p className="text-xs text-white/50 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Stay informed about new partnerships, market expansion, and company milestones
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <Card 
                key={index} 
                className="p-10 bg-card border border-white/10 hover-lift group cursor-pointer"
                data-testid={`card-news-${index}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="h-5 w-5 text-luxury-gold" />
                  <span className="text-xs text-white/50 font-light tracking-wide">{news.date}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-[9px] tracking-[0.2em] uppercase font-light mb-6">
                  {news.category}
                </span>
                <h3 className="text-xl font-light mb-4 tracking-wide group-hover:text-luxury-gold transition-elegant">
                  {news.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {news.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-background">
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
                className="p-12 text-center bg-background border-0 hover-lift group"
                data-testid={`card-feature-${index}`}
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
      <section className="py-32 bg-black">
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
              <Button 
                asChild 
                variant="minimal" 
                size="lg" 
                className="text-[10px] tracking-[0.25em] uppercase"
                data-testid="button-learn-more"
              >
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
      <section className="py-32 bg-background border-y border-white/5">
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
              data-testid="input-email-newsletter"
            />
            <Button 
              type="submit" 
              variant="luxury" 
              size="lg"
              className="text-[10px] tracking-[0.25em] uppercase font-light"
              data-testid="button-subscribe-newsletter"
            >
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-black">
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
            data-testid="button-contact-cta"
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
