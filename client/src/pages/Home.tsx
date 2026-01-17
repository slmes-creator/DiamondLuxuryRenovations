import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import PainPointsSolutions from "@/components/PainPointsSolutions";
import OwnerTestimonial from "@/components/OwnerTestimonial";
import Services from "@/components/Services";
import CTASection from "@/components/CTASection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Award, Clock, CheckCircle, ArrowRight } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "WSIB Covered" },
  { icon: Award, label: "Fully Insured" },
  { icon: Clock, label: "10+ Years Experience" },
  { icon: CheckCircle, label: "Licensed Contractor" },
];

export default function Home() {
  return (
    <Layout
      title="Premium General Contractor in Brampton | Diamond Luxury Renovation"
      description="Discover Brampton's trusted luxury contractor for flooring, staircases, framing, bathrooms, and basements. 5-star rated."
    >
      <SchemaMarkup />
      <Hero />
      
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-3" data-testid={`trust-badge-${index}`}>
                <badge.icon className="w-8 h-8 text-luxury-600" />
                <span className="text-diamond-800 font-semibold">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <PainPointsSolutions />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-diamond-900 mb-4">
              Why Homeowners Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional craftsmanship with transparent pricing and reliable timelines.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-luxury-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-luxury-600" />
              </div>
              <h3 className="text-xl font-bold text-diamond-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest materials and proven techniques for lasting results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-luxury-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-luxury-600" />
              </div>
              <h3 className="text-xl font-bold text-diamond-900 mb-3">Fully Protected</h3>
              <p className="text-gray-600">
                WSIB covered and fully insured for your complete peace of mind.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-luxury-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-luxury-600" />
              </div>
              <h3 className="text-xl font-bold text-diamond-900 mb-3">On-Time Delivery</h3>
              <p className="text-gray-600">
                We respect your time with realistic timelines and reliable scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OwnerTestimonial />
      <Services />
      
      <section className="py-16 bg-diamond-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Serving the Greater Toronto Area
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Premium renovation services available throughout Brampton and surrounding communities.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Brampton", "Mississauga", "Vaughan", "Caledon", "Toronto"].map((city) => (
              <Link key={city} href={`/service-area/${city.toLowerCase()}`}>
                <Button 
                  variant="outline" 
                  className="border-luxury-500 text-luxury-400 hover:bg-luxury-500/10"
                  data-testid={`link-area-${city.toLowerCase()}`}
                >
                  {city}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
