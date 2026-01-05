import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { MapPin, Phone, ArrowRight, CheckCircle, Star } from "lucide-react";

const services = [
  { name: "Flooring Installation", slug: "flooring" },
  { name: "Staircase Refinishing", slug: "staircase" },
  { name: "Framing", slug: "framing" },
  { name: "Bathroom Renovations", slug: "bathroom" },
  { name: "Basement Renovations", slug: "basement" },
];

interface ServiceAreaProps {
  city: string;
  neighborhoods: string[];
}

export default function ServiceAreaTemplate({ city, neighborhoods }: ServiceAreaProps) {
  return (
    <Layout
      title={`General Contractor ${city} | Diamond Luxury Renovation`}
      description={`Trusted general contractor in ${city} for flooring, bathrooms, basements, and staircases. WSIB covered, fully insured. Call (416) 414-9170.`}
    >
      <section className="py-20 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-luxury-400 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Serving {city}, Ontario</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium General Contractor in {city}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Diamond Luxury Renovation brings premium renovation services to {city} 
            homeowners. Experience the quality and craftsmanship that sets us apart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold">
                Get Free Estimate
              </Button>
            </Link>
            <a href="tel:4164149170">
              <Button size="lg" variant="outline" className="border-luxury-500 text-luxury-400">
                <Phone className="w-5 h-5 mr-2" />
                (416) 414-9170
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-6">
                Your {city} Renovation Experts
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We proudly serve homeowners throughout {city}, bringing the same 
                commitment to excellence that has made us a trusted name in the GTA.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex text-luxury-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700">5.0 rating</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">WSIB Covered</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Fully Insured</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Licensed General Contractor</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2787&auto=format&fit=crop"
                alt={`Home renovation in ${city}`}
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-diamond-900 text-center mb-12">
            Our Services in {city}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.slug} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-diamond-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">
                    Professional {service.name.toLowerCase()} for {city} homeowners.
                  </p>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {neighborhoods.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-diamond-900 text-center mb-8">
              {city} Areas We Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborhoods.map((area) => (
                <span 
                  key={area} 
                  className="px-4 py-2 bg-diamond-100 text-diamond-800 rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-diamond-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your {city} Renovation?
          </h2>
          <p className="text-gray-300 mb-8">
            Get a free estimate from the GTA's trusted renovation experts.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold">
              Get Free Estimate
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
