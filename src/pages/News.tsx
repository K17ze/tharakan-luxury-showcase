import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    id: 1,
    category: "Brand Partnership",
    title: "New Partnership with Clive Christian",
    excerpt: "We're thrilled to announce our exclusive distribution partnership with Clive Christian, bringing the world's most luxurious perfumes to our markets.",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1590156206637-22a1aaaf0be3?w=800&q=80",
  },
  {
    id: 2,
    category: "Market Expansion",
    title: "Expanding Our Middle East Presence",
    excerpt: "Tharakan Traders announces strategic expansion into new Gulf markets, strengthening our position as a leading luxury distributor.",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1512941675424-1c8f9a9c4d7c?w=800&q=80",
  },
  {
    id: 3,
    category: "Industry Insights",
    title: "The Rise of Niche Fragrances in Asia",
    excerpt: "Exploring the growing demand for artisanal and niche perfume houses among discerning consumers in Indian and Middle Eastern markets.",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
  },
  {
    id: 4,
    category: "Trade Shows",
    title: "Beautyworld Middle East 2024 Highlights",
    excerpt: "Recap of our successful presence at the region's premier beauty trade event, showcasing our expanded luxury portfolio.",
    date: "2024-02-28",
    image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=800&q=80",
  },
  {
    id: 5,
    category: "Fragrance Education",
    title: "Understanding Oud: The Liquid Gold",
    excerpt: "A deep dive into the world of oud fragrances, their cultural significance, and why they're cherished in Middle Eastern perfumery.",
    date: "2024-02-20",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&q=80",
  },
  {
    id: 6,
    category: "Seasonal",
    title: "Spring 2024 Fragrance Trends",
    excerpt: "Discover the fresh, floral, and vibrant scents that are defining the spring season across luxury fragrance houses.",
    date: "2024-02-15",
    image: "https://images.unsplash.com/photo-1619451683874-8a8e64b6e07c?w=800&q=80",
  },
];

export default function News() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.1em] mb-6">
            NEWS & <span className="text-luxury-gold">INSIGHTS</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Stay informed with the latest updates on brand partnerships, market trends, and industry insights from the world of luxury beauty.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-20 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 bg-card border border-white/10 overflow-hidden group">
            <div className="relative overflow-hidden h-[400px]">
              <img
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-luxury-gold text-black px-4 py-1.5 text-xs tracking-wider uppercase font-light">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-12 flex flex-col justify-center">
              <span className="text-luxury-silver text-xs tracking-[0.2em] uppercase mb-4 font-light">
                {newsArticles[0].category}
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6 leading-tight">
                {newsArticles[0].title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                {newsArticles[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground font-light">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(newsArticles[0].date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <Button variant="ghost" className="group/btn text-luxury-gold hover:text-luxury-gold">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="border border-white/10 bg-card overflow-hidden hover:border-luxury-gold/50 transition-elegant">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-luxury-silver text-xs tracking-[0.2em] uppercase mb-3 block font-light">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-light mb-3 leading-tight group-hover:text-luxury-gold transition-elegant">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed font-light line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground font-light">
                      <Calendar className="h-3 w-3 mr-2" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <ArrowRight className="h-4 w-4 text-luxury-gold opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-luxury-gold/10 to-luxury-silver/10 border border-white/10 p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-wide">
            Stay <span className="text-luxury-gold">Informed</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto font-light">
            Subscribe to our newsletter for exclusive insights, brand updates, and industry news.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-background border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-luxury-gold transition-elegant"
            />
            <Button className="bg-luxury-gold text-black hover:bg-luxury-gold/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
