import { Link } from "react-router-dom";
import { products } from "@/data/products";

export const MegaMenu = () => {
  const uniqueBrands = Array.from(new Set(products.map(p => p.brand)))
    .sort()
    .slice(0, 12);

  const categories = [
    { name: "Fragrances", path: "/products?category=fragrance", description: "Luxury perfumes & colognes" },
    { name: "Cosmetics", path: "/products?category=cosmetics", description: "Premium makeup" },
    { name: "Skincare", path: "/products?category=skincare", description: "Advanced care" },
  ];

  const featured = [
    { name: "New Arrivals", path: "/collections/new-arrivals", description: "Latest additions" },
    { name: "Bestsellers", path: "/collections/bestsellers", description: "Customer favorites" },
    { name: "Oud Collection", path: "/collections/oud-masters", description: "Oriental luxury" },
  ];

  return (
    <div className="absolute left-0 right-0 top-full bg-background/98 backdrop-blur-sm border-b border-white/10 animate-fade-in shadow-2xl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Categories */}
          <div className="col-span-3">
            <h3 className="text-xs tracking-[0.25em] uppercase text-luxury-silver mb-6 font-light">
              Shop by Category
            </h3>
            <div className="space-y-4">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.path}
                  className="block group"
                >
                  <div className="text-sm font-light tracking-wide mb-1 group-hover:text-luxury-gold transition-elegant">
                    {cat.name}
                  </div>
                  <div className="text-xs text-white/40 font-light">
                    {cat.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="col-span-6">
            <h3 className="text-xs tracking-[0.25em] uppercase text-luxury-silver mb-6 font-light">
              Featured Brands
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {uniqueBrands.map((brand) => (
                <Link
                  key={brand}
                  to={`/brands/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-light tracking-wide hover:text-luxury-gold transition-elegant"
                >
                  {brand}
                </Link>
              ))}
            </div>
            <Link
              to="/brands"
              className="inline-block mt-8 text-xs tracking-[0.2em] uppercase text-white/60 hover:text-luxury-gold transition-elegant underline-offset-4 hover:underline font-light"
            >
              View All Brands →
            </Link>
          </div>

          {/* Featured Collections */}
          <div className="col-span-3">
            <h3 className="text-xs tracking-[0.25em] uppercase text-luxury-silver mb-6 font-light">
              Featured Collections
            </h3>
            <div className="space-y-4">
              {featured.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block group"
                >
                  <div className="text-sm font-light tracking-wide mb-1 group-hover:text-luxury-gold transition-elegant">
                    {item.name}
                  </div>
                  <div className="text-xs text-white/40 font-light">
                    {item.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};