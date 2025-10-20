import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface QuickViewModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export const QuickViewModal = ({ product, open, onClose }: QuickViewModalProps) => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(() => {
    if (!product) return false;
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    return wishlist.includes(product.id);
  });

  if (!product) return null;

  const images = product.images || [product.image];

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    
    if (isWishlisted) {
      const updated = wishlist.filter((id: string) => id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(updated));
      setIsWishlisted(false);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} removed from your wishlist`
      });
    } else {
      wishlist.push(product.id);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      setIsWishlisted(true);
      toast({
        title: "Added to wishlist",
        description: `${product.name} added to your wishlist`
      });
    }
  };

  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.origin + `/products/${product.brand.toLowerCase().replace(/\s+/g, '-')}/${product.id}`
      });
    } else {
      toast({
        title: "Share",
        description: "Sharing not supported on this browser"
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-background border border-white/20" data-testid="modal-quick-view">
        <DialogHeader>
          <DialogTitle className="sr-only">Quick View: {product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-black overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                data-testid="img-product-quickview"
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square bg-black overflow-hidden border-2 transition-elegant ${
                      selectedImage === idx ? 'border-luxury-gold' : 'border-white/10 hover:border-white/30'
                    }`}
                    data-testid={`button-image-${idx}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-white/40 font-light mb-2">
                    {product.brand}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-4" data-testid="text-product-name">
                    {product.name}
                  </h2>
                  {product.fragranceFamily && (
                    <span className="inline-block px-3 py-1 bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-[9px] tracking-[0.2em] uppercase font-light">
                      {product.fragranceFamily}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={toggleWishlist}
                    className={`p-3 backdrop-blur-md transition-elegant ${
                      isWishlisted 
                        ? 'bg-luxury-gold text-black' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    aria-label="Add to wishlist"
                    data-testid="button-wishlist-quickview"
                  >
                    <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={shareProduct}
                    className="p-3 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-elegant"
                    aria-label="Share product"
                    data-testid="button-share-quickview"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-white/70 leading-relaxed font-light mb-8">
                {product.description}
              </p>

              {/* Fragrance Notes */}
              {product.notes && (
                <div className="space-y-4 mb-8">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-white/50 font-light">Fragrance Notes</h3>
                  <div className="space-y-3">
                    {product.notes.top && (
                      <div>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-luxury-gold mb-1 font-light">Top Notes</p>
                        <p className="text-xs text-white/60 font-light">{product.notes.top.join(', ')}</p>
                      </div>
                    )}
                    {product.notes.heart && (
                      <div>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-luxury-gold mb-1 font-light">Heart Notes</p>
                        <p className="text-xs text-white/60 font-light">{product.notes.heart.join(', ')}</p>
                      </div>
                    )}
                    {product.notes.base && (
                      <div>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-luxury-gold mb-1 font-light">Base Notes</p>
                        <p className="text-xs text-white/60 font-light">{product.notes.base.join(', ')}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6 border-t border-white/10">
              <Button
                asChild
                variant="luxury"
                className="flex-1 text-[10px] tracking-[0.25em] uppercase"
                data-testid="button-view-full-details"
              >
                <Link to={`/products/${product.brand.toLowerCase().replace(/\s+/g, '-')}/${product.id}`}>
                  View Full Details <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
              <Button
                asChild
                variant="minimal"
                className="text-[10px] tracking-[0.25em] uppercase"
                data-testid="button-inquire"
              >
                <Link to="/contact">
                  Inquire
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
