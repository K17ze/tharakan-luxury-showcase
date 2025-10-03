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
      <section className="py-24 bg-black text-white border-b border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-[0.08em]">
            Product <span className="italic text-luxury-silver">Catalogue</span>
          </h1>
          <p className="text-sm text-white/60 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            Explore our extensive collection of luxury fragrances, cosmetics, and skincare from the world's most prestigious brands
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-background border-b border-white/10 sticky top-24 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Category Filter */}
            <div className="flex gap-3 flex-wrap justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  variant="ghost"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`text-xs tracking-[0.15em] uppercase font-light transition-elegant ${
                    selectedCategory === cat.value 
                      ? "text-luxury-gold border-b border-luxury-gold" 
                      : "text-white/60 hover:text-white border-b border-transparent"
                  }`}
                >
                  {cat.label}
                </Button>
              ))}
            </div>

            {/* Gender Filter */}
            <div className="flex gap-3 flex-wrap justify-center border-l border-white/10 pl-6">
              {genders.map((gender) => (
                <Button
                  key={gender.value}
                  variant="ghost"
                  onClick={() => setSelectedGender(gender.value)}
                  className={`text-xs tracking-[0.15em] uppercase font-light transition-elegant ${
                    selectedGender === gender.value 
                      ? "text-luxury-gold" 
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {gender.label}
                </Button>
              ))}
            </div>

            {/* Brand Filter */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-2 bg-background border border-white/20 text-white/80 text-xs tracking-wider font-light focus:border-luxury-gold focus:outline-none transition-elegant"
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
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {selectedBrand === "all" ? (
            // Group by brand when showing all
            brands.map((brand) => {
              const brandProducts = filteredProducts.filter(p => p.brand === brand);
              if (brandProducts.length === 0) return null;

              return (
                <div key={brand} className="mb-24">
                  <div className="flex items-center justify-between mb-12 pb-4 border-b border-white/10">
                    <h2 className="text-4xl md:text-5xl font-light tracking-wider">
                      <span className="text-luxury-silver">{brand}</span>
                    </h2>
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedBrand(brand)}
                      className="text-xs tracking-[0.15em] uppercase font-light border border-white/20 hover:border-luxury-gold hover:text-luxury-gold transition-elegant"
                    >
                      View All
                    </Button>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {brandProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            // Show filtered products
            <div>
              <div className="flex items-center justify-between mb-12 pb-4 border-b border-white/10">
                <h2 className="text-4xl md:text-5xl font-light tracking-wider">
                  {selectedBrand === "all" ? "All Products" : selectedBrand}
                  <span className="text-white/40 text-base ml-4 font-light">
                    ({filteredProducts.length})
                  </span>
                </h2>
                {selectedBrand !== "all" && (
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedBrand("all")}
                    className="text-xs tracking-[0.15em] uppercase font-light text-white/60 hover:text-white transition-elegant"
                  >
                    Clear
                  </Button>
                )}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-6">
                No products found matching your criteria
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedGender("all");
                  setSelectedBrand("all");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-white">
            Interested in Our <span className="italic text-luxury-silver">Products?</span>
          </h2>
          <p className="text-sm text-white/60 mb-10 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Contact us for wholesale inquiries, pricing information, and partnership opportunities
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="ghost"
            className="text-xs tracking-[0.2em] uppercase font-light border border-white/30 hover:border-white hover:bg-transparent hover:text-white transition-elegant px-10 py-6"
          >
            <Link to="/contact">Request Information</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="group overflow-hidden bg-card border border-white/10 hover-lift">
      <div className="aspect-square overflow-hidden bg-black">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-elegant opacity-90 group-hover:opacity-100"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-light text-luxury-silver mb-2 tracking-[0.15em] uppercase">
          {product.brand}
        </p>
        <h3 className="text-base font-light mb-3 line-clamp-2 tracking-wide">
          {product.name}
        </h3>
        <p className="text-xs text-white/50 mb-4 line-clamp-2 font-light leading-relaxed">
          {product.description}
        </p>
        <div className="flex gap-2">
          <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 font-light tracking-wider capitalize">
            {product.category}
          </span>
          <span className="text-xs px-3 py-1 bg-white/5 border border-white/10 font-light tracking-wider capitalize">
            {product.gender}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Products;
