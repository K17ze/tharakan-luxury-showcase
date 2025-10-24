import { Card } from "@/components/ui/card";
import { Globe, Shield, TrendingUp, Users, Award, Package, CheckCircle, MapPin, Building, Truck, Clock } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TiltCard } from "@/components/TiltCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const milestones = [
    { year: "1985", title: "Company Founded", description: "Tharakan Traders established in Kerala, India" },
    { year: "1995", title: "Market Expansion", description: "Extended operations to major Indian metros" },
    { year: "2005", title: "International Partnerships", description: "Began partnerships with European luxury brands" },
    { year: "2010", title: "Middle East Entry", description: "Expanded distribution to UAE and GCC markets" },
    { year: "2015", title: "Digital Transformation", description: "Implemented advanced inventory and logistics systems" },
    { year: "2020", title: "Portfolio Growth", description: "Added 20+ new prestigious brands to portfolio" },
    { year: "2024", title: "Sustainability Initiative", description: "Launched eco-friendly distribution programs" }
  ];

  const team = [
    {
      name: "Rajesh Tharakan",
      position: "Founder & CEO",
      bio: "Visionary leader with 40+ years in luxury distribution",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
    },
    {
      name: "Priya Menon",
      position: "Chief Operations Officer",
      bio: "Expert in supply chain and logistics management",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
    },
    {
      name: "Ahmed Al-Rashid",
      position: "Regional Director - Middle East",
      bio: "20+ years experience in GCC luxury retail",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      name: "Sarah Krishnan",
      position: "Brand Partnerships Director",
      bio: "Leading relationships with global beauty houses",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    }
  ];

  const facilities = [
    {
      title: "Climate-Controlled Warehouses",
      description: "State-of-the-art facilities maintaining optimal conditions for luxury products",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      specs: ["Temperature controlled 15-25°C", "Humidity controlled 40-60%", "24/7 monitoring"]
    },
    {
      title: "Distribution Centers",
      description: "Strategically located hubs for efficient pan-regional delivery",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      specs: ["Mumbai, Delhi, Dubai", "Next-day delivery coverage", "Automated inventory"]
    },
    {
      title: "Quality Control Labs",
      description: "Advanced testing and authentication facilities",
      image: "https://images.unsplash.com/photo-1582719471137-c3967cfbb253?w=800&q=80",
      specs: ["Product authentication", "Quality assurance", "Compliance testing"]
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems" },
    { name: "GDP Certified", description: "Good Distribution Practice" },
    { name: "FSSAI Licensed", description: "Food Safety Standards Authority of India" },
    { name: "Dubai Customs Approved", description: "UAE Import/Export Compliance" }
  ];

  const distributionProcess = [
    { step: 1, title: "Brand Partnership", icon: Users, description: "Establish exclusive distribution agreements" },
    { step: 2, title: "Procurement", icon: Package, description: "Direct sourcing from authorized channels" },
    { step: 3, title: "Quality Check", icon: CheckCircle, description: "Rigorous authentication and testing" },
    { step: 4, title: "Warehousing", icon: Building, description: "Climate-controlled storage facilities" },
    { step: 5, title: "Distribution", icon: Truck, description: "Efficient delivery to retail partners" },
    { step: 6, title: "After-Sales", icon: Clock, description: "Ongoing support and inventory management" }
  ];

  const csrInitiatives = [
    {
      title: "Sustainable Packaging",
      description: "Transitioning to eco-friendly packaging materials for all distributions"
    },
    {
      title: "Community Support",
      description: "Supporting local communities through employment and skill development programs"
    },
    {
      title: "Women Empowerment",
      description: "40% of our workforce comprises women in leadership and operational roles"
    }
  ];

  const pressRecognition = [
    {
      title: "Best Luxury Distributor Award 2023",
      source: "India Retail Excellence Awards",
      year: "2023"
    },
    {
      title: "Featured in Gulf Business Magazine",
      source: "Top 50 Distribution Companies in MENA",
      year: "2023"
    },
    {
      title: "Supply Chain Excellence Award",
      source: "Middle East Logistics Awards",
      year: "2022"
    }
  ];

  const testimonials = [
    {
      quote: "Tharakan Traders has been instrumental in bringing our prestigious brands to the Indian market with unmatched professionalism.",
      author: "Luxury Brand Executive",
      company: "European Perfume House"
    },
    {
      quote: "Their understanding of Middle Eastern markets and commitment to quality makes them our trusted distribution partner.",
      author: "Regional Manager",
      company: "Global Cosmetics Brand"
    }
  ];

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
    { number: 50, label: "Luxury Brands", suffix: "+" },
    { number: 2, label: "Key Markets", suffix: "" },
    { number: 500, label: "Retail Partners", suffix: "+" },
    { number: 100, label: "Authentic Products", suffix: "%" }
  ];

  const timelineRef = useScrollAnimation({ stagger: 0.2 });
  const teamRef = useScrollAnimation({ stagger: 0.15 });
  const facilitiesRef = useScrollAnimation({ stagger: 0.15 });

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
            <h1 className="text-6xl md:text-7xl font-light mb-8 text-white tracking-[0.05em]" data-testid="text-page-title">
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
              <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <AnimatedCounter 
                  end={stat.number}
                  suffix={stat.suffix}
                  className="text-5xl md:text-6xl font-light text-gradient-gold mb-3 tracking-wider"
                />
                <div className="text-white/50 font-light text-xs tracking-[0.15em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-32 bg-black border-b border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20 tracking-wide">
            Our <span className="italic text-gradient-gold">Journey</span>
          </h2>
          <div className="relative" ref={timelineRef}>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-luxury-gold/20 hidden md:block" />
            <div className="space-y-16">
              {milestones.map((milestone, idx) => (
                <div
                  key={milestone.year}
                  data-animate
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  data-testid={`milestone-${milestone.year}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="text-5xl font-light text-luxury-gold mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-light mb-2 tracking-wide">{milestone.title}</h3>
                    <p className="text-sm text-white/60 font-light">{milestone.description}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-luxury-gold border-4 border-background flex-shrink-0 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 bg-background border-b border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20 tracking-wide">
            Leadership <span className="italic text-gradient-gold">Team</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={teamRef}>
            {team.map((member) => (
              <TiltCard key={member.name} data-animate>
                <Card className="overflow-hidden bg-card border border-white/10 h-full" data-testid={`team-member-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="aspect-square overflow-hidden bg-black image-overlay">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-light mb-1 tracking-wide">{member.name}</h3>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-luxury-gold mb-3 font-light">
                      {member.position}
                    </p>
                    <p className="text-xs text-white/60 font-light leading-relaxed">{member.bio}</p>
                  </div>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-32 bg-black border-b border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20 tracking-wide">
            World-Class <span className="italic text-gradient-gold">Facilities</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8" ref={facilitiesRef}>
            {facilities.map((facility) => (
              <TiltCard key={facility.title} data-animate>
                <Card className="overflow-hidden bg-card border border-white/10 h-full" data-testid={`facility-${facility.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="aspect-video overflow-hidden bg-black image-overlay">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-3 tracking-wide">{facility.title}</h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-4">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-xs text-white/50 font-light">
                        <CheckCircle className="h-3 w-3 text-luxury-gold" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  </div>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background border-b border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
            Certifications & <span className="italic text-luxury-silver">Compliance</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center p-6 border border-white/10" data-testid={`certification-${cert.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Award className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-sm font-light mb-2 tracking-wide">{cert.name}</h3>
                <p className="text-xs text-white/50 font-light">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Process */}
      <section className="py-32 bg-black border-b border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20 tracking-wide">
            Distribution <span className="italic text-luxury-silver">Process</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {distributionProcess.map((process) => {
              const Icon = process.icon;
              return (
                <div key={process.step} className="text-center" data-testid={`process-step-${process.step}`}>
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 mx-auto rounded-full border-2 border-luxury-gold/30 bg-luxury-gold/10 flex items-center justify-center mb-2">
                      <Icon className="h-8 w-8 text-luxury-gold" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-luxury-gold text-black flex items-center justify-center text-sm font-light mx-auto left-0 right-0 w-fit">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-light mb-2 tracking-wide">{process.title}</h3>
                  <p className="text-xs text-white/60 font-light">{process.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CSR Initiatives */}
      <section className="py-32 bg-background border-b border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20 tracking-wide">
            Corporate Social <span className="italic text-luxury-silver">Responsibility</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {csrInitiatives.map((initiative) => (
              <Card key={initiative.title} className="p-8 bg-card border border-white/10" data-testid={`csr-${initiative.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <h3 className="text-xl font-light mb-4 tracking-wide">{initiative.title}</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">{initiative.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Recognition */}
      <section className="py-32 bg-black border-b border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20 tracking-wide">
            Press & <span className="italic text-luxury-silver">Recognition</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pressRecognition.map((press) => (
              <div key={press.title} className="text-center p-8 border border-white/10" data-testid={`press-${press.year}`}>
                <div className="text-3xl font-light text-luxury-gold mb-4">{press.year}</div>
                <h3 className="text-lg font-light mb-2 tracking-wide">{press.title}</h3>
                <p className="text-xs text-white/50 font-light">{press.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-32 bg-background border-b border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20 tracking-wide">
            What Our <span className="italic text-luxury-silver">Partners Say</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-10 bg-card border border-white/10" data-testid={`testimonial-${idx}`}>
                <p className="text-lg font-light italic mb-6 leading-relaxed text-white/80">
                  "{testimonial.quote}"
                </p>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm font-light tracking-wide">{testimonial.author}</p>
                  <p className="text-xs text-white/50 font-light">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20 tracking-wide">
            Our <span className="italic text-luxury-silver">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-8 bg-card border border-white/10" data-testid={`value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Icon className="h-12 w-12 text-luxury-gold mb-6" />
                  <h3 className="text-xl font-light mb-4 tracking-wide">{value.title}</h3>
                  <p className="text-sm text-white/60 font-light leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
