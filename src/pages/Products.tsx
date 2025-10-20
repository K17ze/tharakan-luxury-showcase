import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { QuickViewModal } from "@/components/QuickViewModal";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Save, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const { toast } = useToast();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFragranceFamilies, setSelectedFragranceFamilies] = useState<string[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [showQuickView, setShowQuickView] = useState(false);
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);

  // Load saved filter preferences
  useEffect(() => {
    const saved = localStorage.getItem('filterPreferences');
    if (saved) {
      try {
        const prefs = JSON.parse(saved);
        setSelectedCategories(prefs.categories || []);
        setSelectedGenders(prefs.genders || []);
        setSelectedBrands(prefs.brands || []);
        setSelectedFragranceFamilies(prefs.fragranceFamilies || []);
      } catch (e) {
        console.error('Failed to load filter preferences', e);
      }
    }
  }, []);

  const brands = Array.from(new Set(products.map(p => p.brand))).sort();
  const fragranceFamilies = ["Oriental", "Woody", "Floral", "Fresh", "Citrus", "Spicy"];
  
  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
    
    // Gender filter
    if (selectedGenders.length > 0 && !selectedGenders.includes(product.gender) && product.gender !== "unisex") return false;
    
    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    
    // Fragrance Family filter
    if (selectedFragranceFamilies.length > 0) {
      if (!product.fragranceFamily || !selectedFragranceFamilies.includes(product.fragranceFamily)) return false;
    }

    // Wishlist filter
    if (showWishlistOnly) {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      if (!wishlist.includes(product.id)) return false;
    }
    
    return true;
  });

  const categories = [
    { value: "fragrance", label: "Fragrances" },
    { value: "cosmetics", label: "Cosmetics" },
    { value: "skincare", label: "Skincare" },
  ];

  const genders = [
    { value: "women", label: "Women" },
    { value: "men", label: "Men" },
    { value: "unisex", label: "Unisex" },
  ];

  const toggleCategory = (value: string) => {
    setSelectedCategories(prev =>
      prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
    );
  };

  const toggleGender = (value: string) => {
    setSelectedGenders(prev =>
      prev.includes(value) ? prev.filter(g => g !== value) : [...prev, value]
    );
  };

  const toggleBrand = (value: string) => {
    setSelectedBrands(prev =>
      prev.includes(value) ? prev.filter(b => b !== value) : [...prev, value]
    );
  };

  const toggleFragranceFamily = (value: string) => {
    setSelectedFragranceFamilies(prev =>
      prev.includes(value) ? prev.filter(f => f !== value) : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedGenders([]);
    setSelectedBrands([]);
    setSelectedFragranceFamilies([]);
    setShowWishlistOnly(false);
  };

  const saveFilterPreferences = () => {
    const prefs = {
      categories: selectedCategories,
      genders: selectedGenders,
      brands: selectedBrands,
      fragranceFamilies: selectedFragranceFamilies
    };
    localStorage.setItem('filterPreferences', JSON.stringify(prefs));
    toast({
      title: "Filter preferences saved",
      description: "Your filter selections have been saved for future visits"
    });
  };

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setShowQuickView(true);
  };

  const activeFiltersCount = selectedCategories.length + selectedGenders.length + selectedBrands.length + selectedFragranceFamilies.length + (showWishlistOnly ? 1 : 0);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-24 md:py-32 bg-black text-white border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-[0.08em]" data-testid="text-page-title">
            OUR <span className="italic text-luxury-silver">COLLECTION</span>
          </h1>
          <p className="text-xs text-white/50 max-w-3xl mx-auto font-light tracking-wide leading-loose">
            Comprehensive portfolio of luxury fragrances, cosmetics, and skincare from the world's most prestigious beauty houses
          </p>
        </div>
      </section>

      {/* Filters Sidebar + Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filters Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="sticky top-32 space-y-8">
                {/* Filter Header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-light tracking-wide">
                    Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                  </h2>
                  <div className="flex gap-2">
                    {activeFiltersCount > 0 && (
                      <>
                        <Button
                          onClick={saveFilterPreferences}
                          variant="ghost"
                          size="sm"
                          className="text-[9px] tracking-[0.2em] uppercase"
                          data-testid="button-save-filters"
                        >
                          <Save className="h-3 w-3 mr-1" />
                          Save
                        </Button>
                        <Button
                          onClick={clearAllFilters}
                          variant="ghost"
                          size="sm"
                          className="text-[9px] tracking-[0.2em] uppercase"
                          data-testid="button-clear-filters"
                        >
                          <X className="h-3 w-3 mr-1" />
                          Clear
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                {/* Wishlist Filter */}
                <div className="border-t border-white/10 pt-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <Checkbox
                      checked={showWishlistOnly}
                      onCheckedChange={(checked) => setShowWishlistOnly(checked as boolean)}
                      data-testid="checkbox-wishlist-only"
                    />
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-luxury-gold" />
                      <span className="text-sm font-light tracking-wide group-hover:text-luxury-gold transition-elegant">
                        Wishlist Only
                      </span>
                    </div>
                  </label>
                </div>

                {/* Category Filter */}
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-[10px] tracking-[0.25em] uppercase text-white/50 mb-4 font-light">
                    Category
                  </h3>
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <label key={cat.value} className="flex items-center gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedCategories.includes(cat.value)}
                          onCheckedChange={() => toggleCategory(cat.value)}
                          data-testid={`checkbox-category-${cat.value}`}
                        />
                        <span className="text-sm font-light tracking-wide group-hover:text-luxury-gold transition-elegant">
                          {cat.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Gender Filter */}
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-[10px] tracking-[0.25em] uppercase text-white/50 mb-4 font-light">
                    Gender
                  </h3>
                  <div className="space-y-3">
                    {genders.map((gender) => (
                      <label key={gender.value} className="flex items-center gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedGenders.includes(gender.value)}
                          onCheckedChange={() => toggleGender(gender.value)}
                          data-testid={`checkbox-gender-${gender.value}`}
                        />
                        <span className="text-sm font-light tracking-wide group-hover:text-luxury-gold transition-elegant">
                          {gender.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Fragrance Family Filter */}
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-[10px] tracking-[0.25em] uppercase text-white/50 mb-4 font-light">
                    Fragrance Family
                  </h3>
                  <div className="space-y-3">
                    {fragranceFamilies.map((family) => (
                      <label key={family} className="flex items-center gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedFragranceFamilies.includes(family)}
                          onCheckedChange={() => toggleFragranceFamily(family)}
                          data-testid={`checkbox-fragrance-${family.toLowerCase()}`}
                        />
                        <span className="text-sm font-light tracking-wide group-hover:text-luxury-gold transition-elegant">
                          {family}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-[10px] tracking-[0.25em] uppercase text-white/50 mb-4 font-light">
                    Brand
                  </h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                          data-testid={`checkbox-brand-${brand.toLowerCase().replace(/\s+/g, '-')}`}
                        />
                        <span className="text-sm font-light tracking-wide group-hover:text-luxury-gold transition-elegant">
                          {brand}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-8">
                <p className="text-sm text-white/50 font-light tracking-wide" data-testid="text-product-count">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-32">
                  <p className="text-sm text-white/40 mb-8 font-light tracking-wide">
                    No products found matching your selection
                  </p>
                  <Button
                    onClick={clearAllFilters}
                    variant="minimal"
                    className="text-[10px] tracking-[0.25em] uppercase"
                  >
                    Clear All Filters
                  </Button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {filteredProducts.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product}
                      onQuickView={handleQuickView}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        open={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
    </div>
  );
};

export default Products;
