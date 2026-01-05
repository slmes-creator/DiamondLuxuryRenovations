import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Custom cabinetry design and installation",
  "Premium countertop materials (quartz, granite, marble)",
  "Modern appliance integration",
  "Custom lighting design",
  "Backsplash installation",
  "Flooring upgrades",
  "Plumbing and electrical updates",
  "Island and peninsula installations",
];

const faqs = [
  {
    question: "How long does a kitchen renovation take?",
    answer: "A typical kitchen renovation takes 4-8 weeks depending on the scope. We provide a detailed timeline during the consultation.",
  },
  {
    question: "Do you provide design services?",
    answer: "Yes! Our design team works with you to create a custom kitchen design that matches your style and functional needs.",
  },
  {
    question: "Can I stay in my home during the renovation?",
    answer: "In most cases, yes. We set up temporary cooking areas and work to minimize disruption to your daily life.",
  },
];

export default function KitchenRenovations() {
  return (
    <Layout>
      <PageHero
        title="Kitchen Renovations in Brampton"
        subtitle="Transform your kitchen into a stunning culinary masterpiece with expert craftsmanship"
        backgroundImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-4" data-testid="text-kitchen-title">
                Premium Kitchen Renovations
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mb-6 rounded-full" />
              <p className="text-gray-700 mb-6">
                Your kitchen is the heart of your home. At Diamond Luxury Renovation, we specialize in creating
                beautiful, functional kitchens that inspire culinary creativity and bring families together.
              </p>
              <p className="text-gray-700 mb-8">
                From modern minimalist designs to classic traditional styles, our expert team delivers exceptional
                craftsmanship with premium materials and meticulous attention to detail.
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
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800"
                alt="Luxury kitchen renovation"
                className="rounded-2xl shadow-2xl"
                data-testid="img-kitchen-main"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-diamond-900 text-center mb-4" data-testid="text-gallery-title">
            Before & After Gallery
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-lg">
                <img
                  src={`https://images.unsplash.com/photo-155690911${i + 3}-f6e7ad7d3136?w=600`}
                  alt={`Kitchen project ${i}`}
                  className="w-full h-64 object-cover"
                  data-testid={`img-gallery-${i}`}
                />
                <CardContent className="p-4">
                  <p className="font-medium text-diamond-900">Kitchen Transformation {i}</p>
                  <p className="text-sm text-gray-600">Brampton, ON</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-diamond-900 text-center mb-4" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us today for a free consultation and detailed quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-luxury-500 to-luxury-600 hover:from-luxury-600 hover:to-luxury-700 text-white px-8 py-6 text-lg rounded-full" data-testid="button-kitchen-cta">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full" data-testid="button-services-link">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
