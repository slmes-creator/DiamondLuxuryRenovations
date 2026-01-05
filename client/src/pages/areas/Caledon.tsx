import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, CheckCircle, ArrowRight } from "lucide-react";

const services = ["Kitchen Renovations", "Bathroom Remodels", "Hardwood Flooring", "Staircase Refinishing", "Basement Renovations", "Custom Carpentry"];

export default function Caledon() {
  return (
    <Layout>
      <PageHero
        title="Contractor Services in Caledon"
        subtitle="Premium renovation services for Caledon homeowners"
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-4" data-testid="text-caledon-title">
                Luxury Renovations in Caledon
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mb-6 rounded-full" />
              <p className="text-gray-700 mb-6">
                Diamond Luxury Renovation brings exceptional craftsmanship to Caledon's beautiful estate homes and country properties.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-luxury-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" alt="Caledon renovation" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-diamond-900 mb-8">What Caledon Clients Say</h2>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex justify-center text-luxury-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <p className="text-gray-700 text-lg italic mb-4">
                "Exceptional work on our Caledon estate. The craftsmanship is museum quality!"
              </p>
              <p className="font-bold text-diamond-900">- Dr. Emily Richardson, Caledon</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-diamond-900 to-diamond-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Transform Your Caledon Home</h2>
          <p className="text-gray-300 mb-8">Contact us for a free consultation.</p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-luxury-500 to-luxury-600 hover:from-luxury-600 hover:to-luxury-700 text-white px-8 py-6 text-lg rounded-full">
              Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
