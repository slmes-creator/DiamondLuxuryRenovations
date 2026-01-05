import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChefHat, Bath, TreeDeciduous, ArrowUpDown, Home, Hammer, ArrowRight } from "lucide-react";

const services = [
  {
    icon: ChefHat,
    title: "Kitchen Renovations",
    description: "Transform your kitchen into a stunning culinary space with custom cabinetry, premium countertops, and modern appliances.",
    path: "/services/kitchen-renovations",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
  },
  {
    icon: Bath,
    title: "Bathroom Remodels",
    description: "Create a spa-like retreat with elegant fixtures, custom tile work, and luxurious finishes that elevate your daily routine.",
    path: "/services/bathroom-remodels",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600",
  },
  {
    icon: TreeDeciduous,
    title: "Hardwood Flooring",
    description: "Premium hardwood installation, refinishing, and restoration that adds warmth and timeless beauty to your home.",
    path: "/services/hardwood-flooring",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
  },
  {
    icon: ArrowUpDown,
    title: "Staircase Refinishing",
    description: "Breathe new life into your staircase with expert refinishing, custom railings, and stunning design upgrades.",
    path: "/services/staircase-refinishing",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600",
  },
  {
    icon: Home,
    title: "Basement Renovations",
    description: "Unlock your basement's potential with complete transformations including home theaters, bars, and additional living spaces.",
    path: "/services/basement-renovations",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
  },
  {
    icon: Hammer,
    title: "Custom Carpentry",
    description: "Bespoke woodworking solutions including built-ins, custom closets, trim work, and architectural details.",
    path: "/services/custom-carpentry",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
  },
];

export default function Services() {
  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="Premium renovation services crafted with expertise and attention to detail"
        backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-diamond-900 mb-4" data-testid="text-services-title">
              Comprehensive Renovation Solutions
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              From kitchens to basements, we deliver exceptional craftsmanship across all areas of home renovation.
              Each project receives our full attention to detail and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-service-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-diamond-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-luxury-400 to-luxury-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-diamond-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <Link href={service.path}>
                    <Button
                      variant="outline"
                      className="w-full border-diamond-900 text-diamond-900 hover:bg-diamond-900 hover:text-white group"
                      data-testid={`button-service-${index}`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-diamond-900 to-diamond-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" data-testid="text-cta-title">
            Ready to Transform Your Home?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-luxury-500 to-luxury-600 hover:from-luxury-600 hover:to-luxury-700 text-white px-8 py-6 text-lg rounded-full" data-testid="button-contact-cta">
                Get Free Quote
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
              onClick={() => window.open("tel:4164149170")}
              data-testid="button-call-cta"
            >
              Call (416) 414-9170
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
