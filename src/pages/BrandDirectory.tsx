import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { Search } from "lucide-react";
import { useState } from "react";

const BrandDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const uniqueBrands = Array.from(new Set(products.map(p => p.brand))).sort();

  const filteredBrands = uniqueBrands.filter((brand) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const brandsByLetter = filteredBrands.reduce((acc, brand) => {
    const firstLetter = brand[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(brand);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-24 bg-black text-white border-b border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-[0.08em]">
            Brand <span className="italic text-luxury-silver">Directory</span>
          </h1>
          <p className="text-sm text-white/60 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            Explore our portfolio of the world's most prestigious beauty and fragrance houses
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 bg-background border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search brands..."
              className="w-full bg-transparent border border-white/20 pl-12 pr-6 py-4 text-sm focus:border-luxury-gold focus:outline-none transition-elegant text-white placeholder:text-white/30 font-light tracking-wide"
            />
          </div>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex items-start gap-16">
            {/* Letter Navigation */}
            <div className="hidden lg:block sticky top-32 w-20">
              <div className="space-y-2">
                {Object.keys(brandsByLetter).map((letter) => (
                  <a
                    key={letter}
                    href={`#letter-${letter}`}
                    className="block text-center text-sm font-light text-white/40 hover:text-luxury-gold transition-elegant"
                  >
                    {letter}
                  </a>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="flex-1 space-y-20">
              {Object.entries(brandsByLetter).map(([letter, brands]) => (
                <div key={letter} id={`letter-${letter}`}>
                  <h2 className="text-5xl font-light mb-10 text-luxury-silver tracking-wider">
                    {letter}
                  </h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {brands.map((brand) => {
                      const brandSlug = brand.toLowerCase().replace(/\s+/g, '-');
                      const brandProductCount = products.filter(
                        (p) => p.brand === brand
                      ).length;
                      
                      return (
                        <Link
                          key={brand}
                          to={`/brands/${brandSlug}`}
                          className="group block p-8 border border-white/10 hover:border-luxury-gold transition-elegant"
                        >
                          <div className="text-lg font-light mb-2 tracking-wide group-hover:text-luxury-gold transition-elegant">
                            {brand}
                          </div>
                          <div className="text-xs text-white/40 font-light">
                            {brandProductCount} {brandProductCount === 1 ? 'product' : 'products'}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredBrands.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/40 font-light">No brands found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BrandDirectory;