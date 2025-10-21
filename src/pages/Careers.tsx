import { Briefcase, MapPin, Clock, ArrowRight, Users, TrendingUp, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const openPositions = [
  {
    title: "Regional Sales Manager",
    department: "Sales",
    location: "Dubai, UAE",
    type: "Full-time",
    description: "Lead our expansion across Gulf markets, managing key retail partnerships and driving growth for luxury fragrance brands.",
  },
  {
    title: "Brand Partnership Manager",
    department: "Business Development",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Identify and secure partnerships with international luxury beauty brands seeking distribution in India and Middle East.",
  },
  {
    title: "Supply Chain Specialist",
    department: "Operations",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Optimize logistics and inventory management for our premium product portfolio across multiple markets.",
  },
  {
    title: "Marketing & Communications Lead",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Craft compelling narratives for luxury brands and manage our digital presence across B2B channels.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear advancement paths and professional development opportunities",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with passionate professionals in luxury beauty industry",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Performance-based rewards and recognition programs",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible arrangements and comprehensive wellness benefits",
  },
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.1em] mb-6">
            BUILD YOUR <span className="text-luxury-gold">CAREER</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Join a dynamic team at the forefront of luxury beauty distribution. Shape the future of prestigious brands across India and the Middle East.
          </p>
        </div>

        {/* Culture Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                Why Join <span className="text-luxury-gold">Tharakan Traders?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                We're more than distributors—we're custodians of luxury heritage. Our team combines deep market expertise with genuine passion for prestigious beauty brands.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                Working with us means access to exclusive brands, industry connections, and the opportunity to influence luxury retail across rapidly growing markets.
              </p>
              <div className="pt-4">
                <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black">
                  Learn About Our Culture
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-light tracking-wide text-center mb-12">
            Employee <span className="text-luxury-gold">Benefits</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-lg font-light mb-2 tracking-wide">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-light tracking-wide text-center mb-12">
            Open <span className="text-luxury-gold">Positions</span>
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-card border border-white/10 p-8 hover:border-luxury-gold/50 transition-elegant group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light mb-2 group-hover:text-luxury-gold transition-elegant">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-light">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-2" />
                            {position.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {position.type}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {position.description}
                    </p>
                  </div>
                  <Button className="bg-luxury-gold text-black hover:bg-luxury-gold/90 group/btn self-start md:self-center">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Openings CTA */}
        <div className="mt-20 bg-gradient-to-r from-luxury-gold/10 to-luxury-silver/10 border border-white/10 p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-wide">
            Don't See the Right <span className="text-luxury-gold">Role?</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto font-light">
            We're always interested in connecting with talented individuals. Send us your CV and tell us how you'd contribute to our team.
          </p>
          <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black">
            Submit General Application
          </Button>
        </div>
      </div>
    </main>
  );
}
