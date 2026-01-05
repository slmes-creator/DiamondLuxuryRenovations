import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Kitchen Renovations", path: "/services/kitchen-renovations" },
      { label: "Bathroom Remodels", path: "/services/bathroom-remodels" },
      { label: "Hardwood Flooring", path: "/services/hardwood-flooring" },
      { label: "Staircase Refinishing", path: "/services/staircase-refinishing" },
      { label: "Basement Renovations", path: "/services/basement-renovations" },
      { label: "Custom Carpentry", path: "/services/custom-carpentry" },
    ],
  },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-diamond-900/95 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="hidden lg:flex items-center justify-center space-x-1 py-2">
          {navItems.map((item) => (
            <div key={item.path} className="relative group">
              {item.children ? (
                <div className="relative">
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
                      location.startsWith("/services")
                        ? "text-luxury-400 bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    data-testid="nav-services-dropdown"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-diamond-800 rounded-xl shadow-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <div className="py-2">
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10"
                        data-testid="nav-services-overview"
                      >
                        All Services
                      </Link>
                      <div className="border-t border-white/10 my-1" />
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location === child.path
                              ? "text-luxury-400 bg-white/10"
                              : "text-white/80 hover:text-white hover:bg-white/10"
                          }`}
                          data-testid={`nav-${child.path.replace("/services/", "")}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    location === item.path
                      ? "text-luxury-400 bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="lg:hidden py-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>

          {mobileMenuOpen && (
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
                        data-testid="nav-services-mobile"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {servicesOpen && (
                        <div className="ml-4 space-y-1">
                          <Link
                            href="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg"
                          >
                            All Services
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              href={child.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2 rounded-lg ${
                        location === item.path
                          ? "text-luxury-400 bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
