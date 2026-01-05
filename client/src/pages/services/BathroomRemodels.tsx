import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Custom tile and stonework",
  "Luxury shower installations",
  "Freestanding soaker tubs",
  "Heated flooring systems",
  "Custom vanity design",
  "Modern fixture upgrades",
  "Plumbing renovations",
  "Lighting design",
];

const faqs = [
  {
    question: "How long does a bathroom remodel take?",
    answer: "A typical bathroom remodel takes 2-4 weeks. Complex projects with custom features may take longer.",
  },
  {
    question: "Can you work with my existing plumbing layout?",
    answer: "Yes, we can work with existing layouts or reconfigure plumbing to achieve your desired design.",
  },
  {
    question: "Do you handle permits?",
    answer: "Absolutely. We handle all necessary permits and inspections as part of our service.",
  },
];

export default function BathroomRemodels() {
  return (
    <Layout>
      <PageHero
        title="Bathroom Remodels in Brampton"
        subtitle="Create a spa-inspired bathroom retreat with luxury finishes and expert craftsmanship"
        backgroundImage="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-4" data-testid="text-bathroom-title">
                Spa-Inspired Bathroom Renovations
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mb-6 rounded-full" />
              <p className="text-gray-700 mb-6">
                Transform your bathroom into a personal sanctuary. Our bathroom remodels combine luxury materials,
                expert craftsmanship, and thoughtful design to create spaces that rejuvenate body and soul.
              </p>
              <p className="text-gray-700 mb-8">
                From walk-in rainfall showers to heated marble floors, we bring spa-quality experiences to your home.
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
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800"
                alt="Luxury bathroom remodel"
                className="rounded-2xl shadow-2xl"
                data-testid="img-bathroom-main"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-diamond-900 text-center mb-4">Before & After Gallery</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-lg">
                <img
                  src={`https://images.unsplash.com/photo-155232155${i + 1}-5fefe8c9ef14?w=600`}
                  alt={`Bathroom project ${i}`}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-4">
                  <p className="font-medium text-diamond-900">Bathroom Transformation {i}</p>
                  <p className="text-sm text-gray-600">Mississauga, ON</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-diamond-900 text-center mb-4">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mx-auto mb-12 rounded-full" />
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-diamond-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-diamond-900 to-diamond-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Dream Bathroom?</h2>
          <p className="text-gray-300 mb-8">Contact us today for a free consultation.</p>
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
