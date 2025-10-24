import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-lg tracking-[0.15em] font-light">
              <span className="text-white">THARAKAN</span>
              <span className="text-luxury-silver ml-2">TRADERS</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Premier luxury cosmetics and fragrance distributor serving India and the Middle East with the world's most prestigious beauty brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-luxury-silver font-light">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-white transition-elegant text-sm font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/60 hover:text-white transition-elegant text-sm font-light">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-white/60 hover:text-white transition-elegant text-sm font-light">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-white/60 hover:text-white transition-elegant text-sm font-light">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-white transition-elegant text-sm font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-white transition-elegant text-sm font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-luxury-silver font-light">Categories</h4>
            <ul className="space-y-3 text-sm text-white/60 font-light">
              <li>Women's Fragrances</li>
              <li>Men's Fragrances</li>
              <li>Luxury Cosmetics</li>
              <li>Premium Skincare</li>
              <li>Beauty Accessories</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-luxury-silver font-light">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-luxury-silver flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:trade@tharakantraders.com"
                  className="text-white/60 hover:text-white transition-elegant text-sm font-light"
                >
                  trade@tharakantraders.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-luxury-silver flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm font-light">
                  India & Middle East
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-white/40 text-xs tracking-wider font-light">
            © {new Date().getFullYear()} Tharakan Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
