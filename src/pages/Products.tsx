import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/data/products";
import { Link } from "react-router-dom";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");

  const brands = Array.from(new Set(products.map(p => p.brand))).sort();
  
  const filteredProducts = products.filter(product => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
    if (selectedGender !== "all" && product.gender !== selectedGender && product.gender !== "unisex") return false;
    if (selectedBrand !== "all" && product.brand !== selectedBrand) return false;
    return true;
  });

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "fragrance", label: "Fragrances" },
    { value: "cosmetics", label: "Cosmetics" },
    { value: "skincare", label: "Skincare" },
  ];

  const genders = [
    { value: "all", label: "All" },
    { value: "women", label: "Women" },
    { value: "men", label: "Men" },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-32 bg-black text-white border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-[0.08em]">
            OUR <span className="italic text-luxury-silver">COLLECTION</span>
          </h1>
          <p className="text-xs text-white/50 max-w-3xl mx-auto font-light tracking-wide leading-loose">
            Comprehensive portfolio of luxury fragrances, cosmetics, and skincare from the world's most prestigious beauty houses
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background/95 border-b border-white/5 sticky top-24 z-40 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex gap-6 flex-wrap justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`text-[10px] tracking-[0.25em] uppercase font-light transition-elegant relative group ${
                    selectedCategory === cat.value 
                      ? "text-foreground" 
                      : "text-white/40 hover:text-white/80"
                  }`}
                >
                  {cat.label}
                  <span className={`absolute -bottom-2 left-0 h-px bg-foreground transition-all duration-500 ${
                    selectedCategory === cat.value ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6">
              {/* Gender Filter */}
              <div className="flex gap-4">
                {genders.map((gender) => (
                  <button
                    key={gender.value}
                    onClick={() => setSelectedGender(gender.value)}
                    className={`text-[10px] tracking-[0.2em] uppercase font-light transition-elegant ${
                      selectedGender === gender.value 
                        ? "text-foreground" 
                        : "text-white/40 hover:text-white/80"
                    }`}
                  >
                    {gender.label}
                  </button>
                ))}
              </div>

              {/* Brand Filter */}
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-4 py-2 bg-background border border-white/20 text-white/70 text-[10px] tracking-[0.2em] uppercase font-light focus:border-foreground focus:outline-none transition-elegant"
              >
                <option value="all">All Brands</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {selectedBrand === "all" ? (
            // Group by brand when showing all
            brands.map((brand) => {
              const brandProducts = filteredProducts.filter(p => p.brand === brand);
              if (brandProducts.length === 0) return null;

              return (
                <div key={brand} className="mb-32">
                  <div className="flex items-center justify-between mb-16 pb-6 border-b border-white/5">
                    <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em]">
                      {brand}
                    </h2>
                    <button
                      onClick={() => setSelectedBrand(brand)}
                      className="text-[10px] tracking-[0.25em] uppercase font-light text-white/50 hover:text-foreground transition-elegant relative group"
                    >
                      View All
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-500" />
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                    {brandProducts.slice(0, 8).map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            // Show filtered products
            <div>
              <div className="flex items-center justify-between mb-16 pb-6 border-b border-white/5">
                <h2 className="text-3xl md:text-4xl font-light tracking-[0.15em]">
                  {selectedBrand === "all" ? "All Products" : selectedBrand}
                  <span className="text-white/30 text-sm ml-4 font-light tracking-wide">
                    {filteredProducts.length} Products
                  </span>
                </h2>
                {selectedBrand !== "all" && (
                  <button
                    onClick={() => setSelectedBrand("all")}
                    className="text-[10px] tracking-[0.25em] uppercase font-light text-white/50 hover:text-foreground transition-elegant"
                  >
                    Clear Filter
                  </button>
                )}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-32">
              <p className="text-sm text-white/40 mb-8 font-light tracking-wide">
                No products found matching your selection
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedGender("all");
                  setSelectedBrand("all");
                }}
                variant="luxury"
                className="text-[10px] tracking-[0.25em] uppercase"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-wide text-white">
            Partnership <span className="italic text-luxury-silver">Inquiries</span>
          </h2>
          <p className="text-xs text-white/50 mb-12 max-w-2xl mx-auto font-light tracking-wide leading-loose">
            Connect with us for wholesale opportunities, pricing information, and distribution partnerships
          </p>
          <Button 
            asChild 
            size="xl" 
            variant="luxury"
            className="text-[10px] tracking-[0.25em] uppercase font-light hover-scale"
          >
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/products/${product.brand.toLowerCase().replace(/\s+/g, '-')}/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
      className="group cursor-pointer block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-black mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-elegant opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
      </div>
      <div className="space-y-3">
        <p className="text-[10px] font-light text-white/40 tracking-[0.2em] uppercase">
          {product.brand}
        </p>
        <h3 className="text-sm font-light line-clamp-2 tracking-wide group-hover:text-luxury-gold transition-elegant">
          {product.name}
        </h3>
        <p className="text-xs text-white/40 line-clamp-2 font-light leading-relaxed">
          {product.description}
        </p>
        <div className="flex gap-2 pt-2">
          <span className="text-[9px] px-2 py-1 bg-white/5 border border-white/10 font-light tracking-[0.15em] uppercase">
            {product.category}
          </span>
          {product.gender !== "unisex" && (
            <span className="text-[9px] px-2 py-1 bg-white/5 border border-white/10 font-light tracking-[0.15em] uppercase">
              {product.gender}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Products;
