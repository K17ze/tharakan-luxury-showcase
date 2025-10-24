import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Share2, Mail, Heart, ZoomIn, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import { isInWishlist, addToWishlist, removeFromWishlist } from "@/utils/wishlist";

const ProductDetail = () => {
  const { brand, slug } = useParams();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const product = products.find(
    (p) => p.brand.toLowerCase().replace(/\s+/g, '-') === brand &&
    p.id === slug
  );

  // Initialize wishlist state from localStorage
  useEffect(() => {
    if (product) {
      setIsWishlisted(isInWishlist(product.id));
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Product Not Found</h1>
          <Link to="/products" className="text-luxury-gold hover:underline">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];
  
  const relatedProducts = product.relatedProducts
    ? products.filter(p => product.relatedProducts?.includes(p.id))
    : products.filter((p) => p.brand === product.brand && p.id !== product.id).slice(0, 4);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "Product link copied to clipboard",
      });
    }
  };

  const handleWhatsAppShare = () => {
    const message = `Check out this product: ${product.name} by ${product.brand}\n\n${product.description}\n\n${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleInquiry = () => {
    const subject = `Inquiry about ${product.name}`;
    const body = `I am interested in learning more about:\n\n${product.name}\nBrand: ${product.brand}\nCategory: ${product.category}\n\nPlease provide more information about availability and pricing.`;
    window.location.href = `mailto:trade@tharakantraders.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const toggleWishlist = () => {
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

  return (
    <div className="min-h-screen pt-24">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-8">
        <Link
          to="/products"
          className="inline-flex items-center text-sm font-light text-white/60 hover:text-white transition-elegant"
          data-testid="link-back-products"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </div>

      {/* Product Detail */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div 
              className={`relative aspect-square bg-black overflow-hidden cursor-zoom-in ${isZoomed ? 'scale-150 origin-center z-50' : ''}`}
              onClick={() => setIsZoomed(!isZoomed)}
              data-testid="img-product-main"
            >
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {!isZoomed && (
                <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-3 opacity-0 hover:opacity-100 transition-elegant">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square bg-black overflow-hidden border-2 transition-elegant ${
                      selectedImage === idx ? 'border-luxury-gold' : 'border-white/10 hover:border-white/30'
                    }`}
                    data-testid={`button-gallery-${idx}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col space-y-8">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="text-xs tracking-[0.25em] uppercase text-luxury-silver font-light">
                  {product.brand}
                </div>
                <button
                  onClick={toggleWishlist}
                  className={`p-3 backdrop-blur-md transition-elegant ${
                    isWishlisted 
                      ? 'bg-luxury-gold text-black' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  aria-label="Add to wishlist"
                  data-testid="button-wishlist"
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide" data-testid="text-product-name">
                {product.name}
              </h1>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="text-xs tracking-[0.2em] uppercase px-4 py-2 border border-white/20 text-white/60 font-light">
                  {product.category}
                </span>
                <span className="text-xs tracking-[0.2em] uppercase px-4 py-2 border border-white/20 text-white/60 font-light">
                  {product.gender}
                </span>
                {product.fragranceFamily && (
                  <span className="px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-xs tracking-[0.2em] uppercase font-light">
                    {product.fragranceFamily}
                  </span>
                )}
                {product.isNew && (
                  <span className="px-4 py-2 bg-luxury-gold text-black text-xs tracking-[0.2em] uppercase font-light">
                    New
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-sm tracking-[0.15em] uppercase mb-4 font-light text-luxury-silver">
                  Description
                </h2>
                <p className="text-sm text-white/70 leading-loose font-light">
                  {product.description}
                </p>
              </div>

              {/* Fragrance Pyramid */}
              {product.notes && (
                <div className="border-t border-white/10 pt-6">
                  <h2 className="text-sm tracking-[0.15em] uppercase mb-6 font-light text-luxury-silver">
                    Fragrance Pyramid
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 bg-luxury-gold/10 border-2 border-luxury-gold/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-[9px] tracking-[0.2em] uppercase text-luxury-gold font-light">Top</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-white/50 mb-2 tracking-wide font-light">Top Notes</p>
                        <p className="text-sm text-white/70 font-light">{product.notes.top?.join(', ')}</p>
                      </div>
                    </div>
                    {product.notes.heart && (
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 bg-luxury-silver/10 border-2 border-luxury-silver/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-[9px] tracking-[0.2em] uppercase text-luxury-silver font-light">Heart</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-white/50 mb-2 tracking-wide font-light">Heart Notes</p>
                          <p className="text-sm text-white/70 font-light">{product.notes.heart.join(', ')}</p>
                        </div>
                      </div>
                    )}
                    {product.notes.base && (
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 bg-white/5 border-2 border-white/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-[9px] tracking-[0.2em] uppercase text-white/60 font-light">Base</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-white/50 mb-2 tracking-wide font-light">Base Notes</p>
                          <p className="text-sm text-white/70 font-light">{product.notes.base.join(', ')}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
              <div className="flex gap-4">
                <Button
                  onClick={handleInquiry}
                  size="lg"
                  variant="luxury"
                  className="flex-1 text-xs tracking-[0.25em] uppercase font-light"
                  data-testid="button-request-info"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Request Information
                </Button>
                <Button
                  onClick={handleShare}
                  size="lg"
                  variant="ghost"
                  className="text-xs tracking-[0.25em] uppercase font-light border border-white/20"
                  data-testid="button-share"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
              <Button
                onClick={handleWhatsAppShare}
                size="lg"
                variant="minimal"
                className="w-full text-xs tracking-[0.25em] uppercase font-light"
                data-testid="button-whatsapp"
              >
                <SiWhatsapp className="mr-2 h-5 w-5" />
                Share on WhatsApp
              </Button>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 font-light leading-relaxed">
                For wholesale inquiries and availability in your region, please contact our distribution team. We serve premium retailers across India and the Middle East.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete the Collection */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-black border-t border-white/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-center tracking-wide">
              Complete the <span className="italic text-luxury-silver">Collection</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/products/${related.brand.toLowerCase().replace(/\s+/g, '-')}/${related.id}`}
                  className="group"
                  data-testid={`link-related-${related.id}`}
                >
                  <Card className="overflow-hidden bg-card border border-white/10 hover-lift">
                    <div className="relative aspect-[3/4] overflow-hidden bg-black">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-elegant"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[9px] tracking-[0.25em] uppercase text-white/40 font-light mb-1">
                        {related.brand}
                      </p>
                      <h3 className="text-sm font-light tracking-wide group-hover:text-luxury-gold transition-elegant line-clamp-2">
                        {related.name}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
