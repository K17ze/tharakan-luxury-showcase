import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/products", label: "PRODUCTS" },
    { path: "/about", label: "ABOUT US" },
    { path: "/contact", label: "CONTACT" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-xl tracking-[0.15em] font-light">
              <span className="text-foreground transition-elegant group-hover:text-luxury-gold">THARAKAN</span>
              <span className="text-luxury-silver ml-3 transition-elegant group-hover:text-luxury-gold">TRADERS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-light tracking-[0.2em] uppercase transition-elegant relative group ${
                  isActive(link.path) ? "text-luxury-gold" : "text-foreground/90 hover:text-foreground"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-luxury-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="ghost" className="text-xs tracking-[0.2em] uppercase font-light border border-white/20 hover:border-luxury-gold hover:bg-transparent hover:text-luxury-gold transition-elegant px-6">
              <Link to="/contact">Inquire</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-8 border-t border-white/10 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-4 text-xs font-light tracking-[0.2em] uppercase transition-elegant ${
                  isActive(link.path) ? "text-luxury-gold" : "text-foreground/90"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="ghost" className="w-full mt-6 text-xs tracking-[0.2em] uppercase font-light border border-white/20">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Inquire
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
