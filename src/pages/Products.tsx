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
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Product Catalogue
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our extensive collection of luxury fragrances, cosmetics, and skincare from the world's most prestigious brands
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  variant={selectedCategory === cat.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={selectedCategory === cat.value ? "bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90" : ""}
                >
                  {cat.label}
                </Button>
              ))}
            </div>

            {/* Gender Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {genders.map((gender) => (
                <Button
                  key={gender.value}
                  variant={selectedGender === gender.value ? "default" : "outline"}
                  onClick={() => setSelectedGender(gender.value)}
                  className={selectedGender === gender.value ? "bg-primary text-primary-foreground" : ""}
                >
                  {gender.label}
                </Button>
              ))}
            </div>

            {/* Brand Filter */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-4 py-2 rounded-md border border-border bg-background text-foreground"
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          {selectedBrand === "all" ? (
            // Group by brand when showing all
            brands.map((brand) => {
              const brandProducts = filteredProducts.filter(p => p.brand === brand);
              if (brandProducts.length === 0) return null;

              return (
                <div key={brand} className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold">
                      <span className="text-luxury-gold">{brand}</span>
                    </h2>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedBrand(brand)}
                      className="hover:border-luxury-gold hover:text-luxury-gold"
                    >
                      View All {brand}
                    </Button>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {selectedBrand === "all" ? "All Products" : selectedBrand}
                  <span className="text-muted-foreground text-xl ml-4">
                    ({filteredProducts.length} products)
                  </span>
                </h2>
                {selectedBrand !== "all" && (
                  <Button
                    variant="outline"
                    onClick={() => setSelectedBrand("all")}
                  >
                    Clear Filter
                  </Button>
                )}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for wholesale inquiries, pricing information, and partnership opportunities
          </p>
          <Button asChild size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark font-semibold">
            <Link to="/contact">Request Information</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-luxury border-2 hover:border-luxury-gold">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-luxury"
        />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-luxury-gold mb-1 tracking-wider">
          {product.brand}
        </p>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex gap-2">
          <span className="text-xs px-2 py-1 bg-muted rounded-full capitalize">
            {product.category}
          </span>
          <span className="text-xs px-2 py-1 bg-muted rounded-full capitalize">
            {product.gender}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Products;
