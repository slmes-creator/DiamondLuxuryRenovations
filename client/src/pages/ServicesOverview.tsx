import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Layers, GitBranch, Frame, Bath, Home } from "lucide-react";

import flooringImg from "@/assets/flooring-after-1.jpg";
import staircaseImg from "@/assets/staircase-after-1.jpg";
import framingImg from "@/assets/framing.jpg";
import bathroomImg from "@/assets/bathroom-after-1.jpg";
import interiorImg from "@/assets/interior-remodel-after-1.jpg";

const services = [
  {
    icon: Layers,
    title: "Flooring Installation",
    slug: "flooring",
    description: "Premium hardwood, laminate, vinyl, and tile flooring installed with precision craftsmanship.",
    features: ["Hardwood", "Laminate", "Vinyl Plank", "Tile"],
    image: flooringImg,
  },
  {
    icon: GitBranch,
    title: "Staircase Refinishing",
    slug: "staircase",
    description: "Transform worn staircases into stunning focal points with expert refinishing and custom designs.",
    features: ["Refinishing", "Custom Rails", "Treads & Risers", "Modern Updates"],
    image: staircaseImg,
  },
  {
    icon: Frame,
    title: "Demolition & Framing",
    slug: "framing",
    description: "Professional demolition and structural framing for renovations, additions, and new construction.",
    features: ["Safe Demolition", "Basement Framing", "Load-Bearing Walls", "Structural Work"],
    image: framingImg,
  },
  {
    icon: Bath,
    title: "Bathroom Renovations",
    slug: "bathroom",
    description: "Complete bathroom transformations from concept to completion, featuring luxury finishes.",
    features: ["Full Remodels", "Tile Work", "Fixtures", "Vanities"],
    image: bathroomImg,
  },
  {
    icon: Home,
    title: "Basement Renovations",
    slug: "basement",
    description: "Unlock your basement's potential with custom finishing and functional living spaces.",
    features: ["Full Finishing", "Home Theaters", "Bars & Kitchens", "Bedrooms"],
    image: interiorImg,
  },
];

export default function ServicesOverview() {
  return (
    <Layout
      title="Renovation Services in Brampton | Diamond Luxury Renovation"
      description="Explore our premium renovation services in Brampton: flooring installation, staircase refinishing, framing, bathroom and basement renovations."
    >
      <section className="py-20 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-services">
            Our Renovation Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From flooring to full basement renovations, we deliver premium craftsmanship 
            for homeowners throughout Brampton and the Greater Toronto Area.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow" data-testid={`card-service-${service.slug}`}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={`${service.title} in Brampton`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-luxury-100 rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-luxury-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-diamond-900">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <span key={i} className="px-3 py-1 bg-diamond-100 text-diamond-800 text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link href={`/services/${service.slug}`}>
                      <Button className="w-fit bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-diamond-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-gray-300 mb-8">
            Our team can assess your project and recommend the best approach. 
            Get a free consultation and detailed estimate.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold"
              data-testid="button-services-cta"
            >
              Get Free Estimate
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
