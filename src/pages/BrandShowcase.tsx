import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const BrandShowcase = () => {
  const { brandSlug } = useParams();
  const brandName = brandSlug?.toUpperCase().replace(/-/g, ' ');
  
  const brandProducts = products.filter(
    (p) => p.brand.toLowerCase().replace(/\s+/g, '-') === brandSlug
  );

  if (brandProducts.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Brand Not Found</h1>
          <Link to="/brands" className="text-luxury-gold hover:underline">
            View All Brands
          </Link>
        </div>
      </div>
    );
  }

  const categories = {
    fragrance: brandProducts.filter((p) => p.category === "fragrance"),
    cosmetics: brandProducts.filter((p) => p.category === "cosmetics"),
    skincare: brandProducts.filter((p) => p.category === "skincare"),
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-8">
        <Link
          to="/brands"
          className="inline-flex items-center text-sm font-light text-white/60 hover:text-white transition-elegant"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          All Brands
        </Link>
      </div>

      {/* Brand Header */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-light mb-8 tracking-[0.08em]">
            {brandName}
          </h1>
          <p className="text-sm text-white/60 max-w-2xl mx-auto font-light tracking-wide leading-relaxed mb-12">
            Explore our curated collection from {brandName}, one of the world's most prestigious luxury beauty brands.
          </p>
          <Button
            asChild
            variant="luxury"
            size="lg"
            className="text-xs tracking-[0.25em] uppercase font-light"
          >
            <a href="mailto:trade@tharakantraders.com">
              <Mail className="mr-2 h-4 w-4" />
              Inquire About This Brand
            </a>
          </Button>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          {Object.entries(categories).map(([category, items]) => (
            items.length > 0 && (
              <div key={category} className="mb-32 last:mb-0">
                <h2 className="text-3xl md:text-4xl font-light mb-16 tracking-wide capitalize">
                  {category}
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {items.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.brand.toLowerCase().replace(/\s+/g, '-')}/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group"
                    >
                      <div className="relative aspect-[3/4] bg-black overflow-hidden mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
                      </div>
                      <div className="text-xs tracking-[0.15em] uppercase text-luxury-silver mb-2 font-light">
                        {product.gender}
                      </div>
                      <div className="text-sm font-light group-hover:text-luxury-gold transition-elegant line-clamp-2">
                        {product.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide">
            Interested in <span className="italic text-luxury-silver">{brandName}</span>?
          </h2>
          <p className="text-sm text-white/60 mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Contact our distribution team to learn about wholesale opportunities and regional availability
          </p>
          <Button
            asChild
            size="xl"
            variant="luxury"
            className="text-xs tracking-[0.25em] uppercase font-light"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BrandShowcase;