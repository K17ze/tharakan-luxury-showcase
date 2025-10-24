import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { brand, slug } = useParams();
  const { toast } = useToast();
  
  const product = products.find(
    (p) => p.brand.toLowerCase().replace(/\s+/g, '-') === brand &&
    p.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

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

  const similarProducts = products
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Product link copied to clipboard",
    });
  };

  const handleInquiry = () => {
    const subject = `Inquiry about ${product.name}`;
    const body = `I am interested in learning more about:\n\n${product.name}\nBrand: ${product.brand}\nCategory: ${product.category}\n\nPlease provide more information about availability and pricing.`;
    window.location.href = `mailto:trade@tharakantraders.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-8">
        <Link
          to="/products"
          className="inline-flex items-center text-sm font-light text-white/60 hover:text-white transition-elegant"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </div>

      {/* Product Detail */}
      <section className="container mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image */}
          <div className="relative aspect-[3/4] bg-black overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-luxury-silver mb-4 font-light">
                {product.brand}
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
                {product.name}
              </h1>
              <div className="flex gap-4 mb-8">
                <span className="text-xs tracking-[0.2em] uppercase px-4 py-2 border border-white/20 text-white/60 font-light">
                  {product.category}
                </span>
                <span className="text-xs tracking-[0.2em] uppercase px-4 py-2 border border-white/20 text-white/60 font-light">
                  {product.gender}
                </span>
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
            </div>

            <div className="flex gap-4 pt-8">
              <Button
                onClick={handleInquiry}
                size="lg"
                variant="luxury"
                className="flex-1 text-xs tracking-[0.25em] uppercase font-light"
              >
                <Mail className="mr-2 h-4 w-4" />
                Request Information
              </Button>
              <Button
                onClick={handleShare}
                size="lg"
                variant="ghost"
                className="text-xs tracking-[0.25em] uppercase font-light border border-white/20"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-xs text-white/40 font-light leading-relaxed">
                For wholesale inquiries and availability in your region, please contact our distribution team. We serve premium retailers across India and the Middle East.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="py-32 bg-black border-t border-white/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-light mb-16 text-center tracking-wide">
              More from <span className="italic text-luxury-silver">{product.brand}</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {similarProducts.map((similar) => (
                <Link
                  key={similar.id}
                  to={`/products/${similar.brand.toLowerCase().replace(/\s+/g, '-')}/${similar.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group"
                >
                  <div className="relative aspect-[3/4] bg-black overflow-hidden mb-4">
                    <img
                      src={similar.image}
                      alt={similar.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                    />
                  </div>
                  <div className="text-xs tracking-[0.15em] uppercase text-luxury-silver mb-2 font-light">
                    {similar.brand}
                  </div>
                  <div className="text-sm font-light group-hover:text-luxury-gold transition-elegant">
                    {similar.name}
                  </div>
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