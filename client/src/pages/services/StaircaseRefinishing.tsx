import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Tread refinishing & replacement",
  "Custom railing design",
  "Iron spindle installations",
  "Wood-to-carpet conversions",
  "Stain matching services",
  "Custom newel posts",
  "Anti-slip treatments",
  "LED lighting integration",
];

export default function StaircaseRefinishing() {
  return (
    <Layout>
      <PageHero
        title="Staircase Refinishing in Brampton"
        subtitle="Create a stunning focal point with expertly refinished stairs and custom railings"
        backgroundImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-4" data-testid="text-staircase-title">
                Beautiful Staircase Transformations
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mb-6 rounded-full" />
              <p className="text-gray-700 mb-6">
                Your staircase is often the first thing guests see when entering your home. Make it unforgettable
                with our expert refinishing and custom design services.
              </p>
              <p className="text-gray-700 mb-8">
                From classic oak treads to modern iron railings, we create staircases that are both beautiful and safe.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-luxury-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800"
                alt="Staircase refinishing"
                className="rounded-2xl shadow-2xl"
                data-testid="img-staircase-main"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-diamond-900 to-diamond-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Staircase?</h2>
          <p className="text-gray-300 mb-8">Contact us for a free consultation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-luxury-500 to-luxury-600 hover:from-luxury-600 hover:to-luxury-700 text-white px-8 py-6 text-lg rounded-full">
                Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
