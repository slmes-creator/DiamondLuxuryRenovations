import { Star, Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="bg-gradient-to-r from-diamond-900 via-diamond-800 to-diamond-900 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-4 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-luxury-400 to-luxury-600 rounded-xl flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide" data-testid="text-company-name">
                  Diamond Luxury Renovation
                </h1>
                <p className="text-luxury-300 font-medium tracking-wider text-xs uppercase hidden sm:block">
                  Premium General Contractor
                </p>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    location === link.href
                      ? "bg-luxury-500/20 text-luxury-300"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
              <div className="flex text-luxury-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-white font-bold text-sm" data-testid="text-rating">5.0</span>
            </div>

            <Link href="/contact">
              <Button 
                className="bg-gradient-to-r from-luxury-500 to-luxury-600 hover:from-luxury-600 hover:to-luxury-700 text-diamond-900 font-semibold hidden sm:flex"
                data-testid="button-header-cta"
              >
                Get Free Estimate
              </Button>
            </Link>

            <a href="tel:4164149170" className="lg:hidden">
              <Button size="icon" variant="ghost" className="text-white">
                <Phone className="w-5 h-5" />
              </Button>
            </a>

            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      location === link.href
                        ? "bg-luxury-500/20 text-luxury-300"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <a href="tel:4164149170" className="block">
                <Button className="w-full bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold mt-2">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (416) 414-9170
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
