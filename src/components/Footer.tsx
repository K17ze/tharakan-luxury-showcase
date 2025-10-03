import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="luxury-gradient text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-white">THARAKAN</span>
              <span className="text-luxury-gold ml-2">TRADERS</span>
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Premier luxury cosmetics and fragrance distributor serving India and the Middle East with the world's most prestigious beauty brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-luxury-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-luxury-gold transition-luxury text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-luxury-gold transition-luxury text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-luxury-gold transition-luxury text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-luxury-gold transition-luxury text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-luxury-gold">Categories</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Women's Fragrances</li>
              <li>Men's Fragrances</li>
              <li>Luxury Cosmetics</li>
              <li>Premium Skincare</li>
              <li>Beauty Accessories</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-luxury-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:trade@tharakantraders.com"
                  className="text-white/80 hover:text-luxury-gold transition-luxury text-sm"
                >
                  trade@tharakantraders.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Serving India & Middle East Markets
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Tharakan Traders. All rights reserved. | Authorized distributor of premium luxury brands.
          </p>
        </div>
      </div>
    </footer>
  );
};
