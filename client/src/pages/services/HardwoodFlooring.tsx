import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "New hardwood installation",
  "Floor refinishing & restoration",
  "Stain matching & custom colors",
  "Water damage repair",
  "Engineered hardwood options",
  "Dust-free sanding technology",
  "Premium sealant application",
  "Pattern & inlay designs",
];

export default function HardwoodFlooring() {
  return (
    <Layout>
      <PageHero
        title="Hardwood Flooring in Brampton"
        subtitle="Premium hardwood installation and refinishing that adds timeless beauty to your home"
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-4" data-testid="text-flooring-title">
                Expert Hardwood Flooring Services
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mb-6 rounded-full" />
              <p className="text-gray-700 mb-6">
                Nothing transforms a space like beautiful hardwood floors. Whether you're installing new floors
                or breathing life back into worn originals, our expert team delivers stunning results.
              </p>
              <p className="text-gray-700 mb-8">
                We use premium materials and dust-free sanding technology to create floors that will last for generations.
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                alt="Hardwood flooring"
                className="rounded-2xl shadow-2xl"
                data-testid="img-flooring-main"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-diamond-900 to-diamond-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Transform Your Floors Today</h2>
          <p className="text-gray-300 mb-8">Contact us for a free consultation and quote.</p>
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
