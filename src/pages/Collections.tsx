import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      slug: "new-arrivals",
      name: "New Arrivals",
      description: "The latest additions to our luxury portfolio",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80",
    },
    {
      slug: "bestsellers",
      name: "Bestsellers",
      description: "Our most sought-after fragrances and cosmetics",
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=1200&q=80",
    },
    {
      slug: "oud-masters",
      name: "Oud Masters",
      description: "The finest oud fragrances from prestigious houses",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&q=80",
    },
    {
      slug: "floral-elegance",
      name: "Floral Elegance",
      description: "Exquisite floral compositions for the refined palate",
      image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=1200&q=80",
    },
    {
      slug: "mens-powerhouse",
      name: "Men's Powerhouse",
      description: "Bold and sophisticated fragrances for men",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&q=80",
    },
    {
      slug: "skincare-essentials",
      name: "Skincare Essentials",
      description: "Premium skincare from iconic beauty houses",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-24 bg-black text-white border-b border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-[0.08em]">
            Curated <span className="italic text-luxury-silver">Collections</span>
          </h1>
          <p className="text-sm text-white/60 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            Expertly curated selections from our luxury portfolio, designed to showcase the finest in beauty and fragrance
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {collections.map((collection, index) => (
              <Link
                key={collection.slug}
                to={`/collections/${collection.slug}`}
                className="group relative aspect-[4/5] overflow-hidden bg-black"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-elegant opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <h3 className="text-4xl font-light mb-4 tracking-wide group-hover:text-luxury-gold transition-elegant">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-white/60 font-light tracking-wide mb-6 leading-relaxed">
                    {collection.description}
                  </p>
                  <div className="flex items-center text-xs tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-elegant">
                    Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;