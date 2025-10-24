import { Card } from "@/components/ui/card";
import { Product } from "@/data/products";
import { Link } from "react-router-dom";
import { Heart, Eye, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { isInWishlist, addToWishlist, removeFromWishlist } from "@/utils/wishlist";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const { toast } = useToast();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(0);

  // Sync wishlist state with localStorage on mount and when product changes
  useEffect(() => {
    setIsWishlisted(isInWishlist(product.id));
  }, [product.id]);

  // Listen for storage changes to sync across components
  useEffect(() => {
    const handleStorageChange = () => {
      setIsWishlisted(isInWishlist(product.id));
    };

    window.addEventListener('storage', handleStorageChange);
    // Also listen for custom wishlist update events
    window.addEventListener('wishlistUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('wishlistUpdated', handleStorageChange);
    };
  }, [product.id]);

  const images = product.images || [product.image];

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
      setIsWishlisted(false);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} removed from your wishlist`
      });
    } else {
      addToWishlist(product.id);
      setIsWishlisted(true);
      toast({
        title: "Added to wishlist",
        description: `${product.name} added to your wishlist`
      });
    }
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    onQuickView(product);
  };

  return (
    <Link
      to={`/products/${product.brand.toLowerCase().replace(/\s+/g, '-')}/${product.id}`}
      className="group block"
      data-testid={`card-product-${product.id}`}
    >
      <Card className="overflow-hidden bg-card border border-white/10 hover-lift transition-elegant">
        {/* Image Container */}
        <div 
          className="relative aspect-[3/4] overflow-hidden bg-black"
          onMouseEnter={() => images.length > 1 && setHoveredImage(1)}
          onMouseLeave={() => setHoveredImage(0)}
        >
          <img
            src={images[hoveredImage]}
            alt={product.name}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-elegant"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {product.isNew && (
              <span className="px-3 py-1 bg-luxury-gold text-black text-[9px] tracking-[0.2em] uppercase font-light" data-testid={`badge-new-${product.id}`}>
                New
              </span>
            )}
            {product.isFeatured && (
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-[9px] tracking-[0.2em] uppercase font-light flex items-center gap-1" data-testid={`badge-featured-${product.id}`}>
                <Sparkles className="h-3 w-3" />
                Featured
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-elegant z-10">
            <button
              onClick={toggleWishlist}
              className={`p-3 backdrop-blur-md transition-elegant ${
                isWishlisted 
                  ? 'bg-luxury-gold text-black' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Add to wishlist"
              data-testid={`button-wishlist-${product.id}`}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleQuickView}
              className="p-3 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-elegant"
              aria-label="Quick view"
              data-testid={`button-quickview-${product.id}`}
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="mb-2">
            <p className="text-[9px] tracking-[0.25em] uppercase text-white/40 font-light mb-2">
              {product.brand}
            </p>
            <h3 className="text-base font-light tracking-wide group-hover:text-luxury-gold transition-elegant line-clamp-2">
              {product.name}
            </h3>
          </div>
          
          {product.fragranceFamily && (
            <div className="mt-3">
              <span className="text-[8px] tracking-[0.2em] uppercase text-luxury-silver font-light">
                {product.fragranceFamily}
              </span>
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};
