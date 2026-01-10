import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin, Star } from "lucide-react";
import logoImg from "@/assets/logo.png";

const serviceAreas = [
  { name: "Brampton", slug: "brampton" },
  { name: "Mississauga", slug: "mississauga" },
  { name: "Vaughan", slug: "vaughan" },
  { name: "Caledon", slug: "caledon" },
  { name: "Toronto (GTA)", slug: "toronto" },
];

const services = [
  { name: "Flooring Installation", slug: "flooring" },
  { name: "Staircase Refinishing", slug: "staircase" },
  { name: "Demolition & Framing", slug: "framing" },
  { name: "Bathroom Renovations", slug: "bathroom" },
  { name: "Basement Renovations", slug: "basement" },
  { name: "Kitchen Renovation", slug: "kitchen" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-diamond-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center p-1 overflow-hidden border border-white/10">
                <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold">Diamond Luxury Renovations</span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium general contractor serving Brampton and the Greater Toronto Area. 
              Quality craftsmanship, guaranteed.
            </p>
            <div className="space-y-3 text-gray-300">
              <a href="tel:4164149170" className="flex items-center space-x-2 hover:text-luxury-400">
                <Phone className="w-4 h-4" />
                <span>(416) 414-9170</span>
              </a>
              <a href="mailto:gtaprorenovations@gmail.com" className="flex items-center space-x-2 hover:text-luxury-400">
                <Mail className="w-4 h-4" />
                <span>gtaprorenovations@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 7AM-6PM, Sat: 8AM-4PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    <span className="text-gray-400 hover:text-luxury-400 cursor-pointer">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.slug} className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 text-luxury-500" />
                  <Link href={`/service-area/${area.slug}`}>
                    <span className="text-gray-400 hover:text-luxury-400 cursor-pointer">
                      {area.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-luxury-400 cursor-pointer">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <Button
                size="icon"
                onClick={() => window.open('https://facebook.com', '_blank')}
                className="bg-blue-600 hover:bg-blue-700"
                data-testid="button-facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                onClick={() => window.open('https://instagram.com', '_blank')}
                className="bg-pink-600 hover:bg-pink-700"
                data-testid="button-instagram"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="bg-blue-800 hover:bg-blue-900"
                data-testid="button-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2025 Diamond Luxury Renovation. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>WSIB Covered</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy">
                <span className="text-gray-500 hover:text-luxury-400 cursor-pointer">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="text-gray-500 hover:text-luxury-400 cursor-pointer">Terms of Service</span>
              </Link>
              <Link href="/accessibility">
                <span className="text-gray-500 hover:text-luxury-400 cursor-pointer">Accessibility</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
