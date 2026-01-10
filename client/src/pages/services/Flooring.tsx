import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import flooringAfter5 from "@/assets/flooring-after-5.jpg";
import flooringAfter11 from "@/assets/flooring-after11.jpg";

const benefits = [
  "Premium hardwood, laminate, and vinyl flooring options",
  "Expert installation with manufacturer warranties",
  "Precise subfloor preparation for lasting results",
  "Dust-minimization techniques for cleaner installations",
  "Wide selection of styles, colors, and finishes",
  "Competitive pricing with transparent quotes",
];

const process = [
  { step: 1, title: "Free Consultation", description: "We visit your home to assess your needs, take measurements, and discuss flooring options." },
  { step: 2, title: "Custom Proposal", description: "Receive a detailed quote with material recommendations and timeline." },
  { step: 3, title: "Material Selection", description: "Choose from our curated selection of premium flooring materials." },
  { step: 4, title: "Professional Installation", description: "Our certified installers complete your project with precision and care." },
  { step: 5, title: "Final Walkthrough", description: "We ensure every detail meets your expectations before project completion." },
];

const faqs = [
  {
    question: "How long does flooring installation take?",
    answer: "Most flooring projects take 1-3 days depending on the area size and flooring type. We'll provide a specific timeline during your consultation.",
  },
  {
    question: "What type of flooring is best for my home?",
    answer: "It depends on your lifestyle, budget, and preferences. Hardwood offers timeless beauty, laminate provides durability at a lower cost, and vinyl is excellent for moisture-prone areas. We'll help you choose during your free consultation.",
  },
  {
    question: "Do I need to move my furniture?",
    answer: "We recommend moving small items and valuables. We can assist with moving larger furniture pieces as part of our service.",
  },
  {
    question: "How soon can I walk on new floors?",
    answer: "For most installations, you can walk on your new floors within 24 hours. Hardwood with on-site finishing may require 48-72 hours for curing.",
  },
  {
    question: "Do you offer warranties?",
    answer: "Yes! We provide workmanship warranties on all installations, plus you'll receive the manufacturer's warranty on materials.",
  },
];

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Flooring Installation Brampton",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Diamond Luxury Renovation"
  },
  "areaServed": "Brampton, Ontario",
  "description": "Premium flooring installation services in Brampton including hardwood, laminate, and vinyl flooring."
};

export default function Flooring() {
  return (
    <Layout
      title="Flooring Installation Brampton | Diamond Luxury Renovation"
      description="Premium flooring installation in Brampton. Expert installation of hardwood, laminate, and vinyl flooring. Free estimates. Call (416) 414-9170."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      
      <section className="relative py-24 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="absolute inset-0">
          <img
            src={flooringAfter5}
            alt="Premium flooring installation in Brampton"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-flooring">
              Flooring Installation in Brampton
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your home with premium flooring installed by certified professionals. 
              From elegant hardwood to durable vinyl, we deliver beautiful results that last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold"
                  data-testid="button-flooring-cta-top"
                >
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
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-6">
                Expert Flooring Installation for Brampton Homeowners
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you're updating a single room or renovating your entire home, 
                our flooring specialists deliver exceptional results. We work with all 
                major flooring types including hardwood, engineered wood, laminate, 
                luxury vinyl plank, and tile.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Every installation begins with thorough subfloor preparation to ensure 
                your new floors look beautiful and perform perfectly for years to come.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={flooringAfter11}
                alt="Hardwood flooring installation in Brampton home"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-diamond-900 text-center mb-12">Our Installation Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item) => (
              <Card key={item.step} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-luxury-500 text-diamond-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-diamond-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-diamond-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-gray-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-diamond-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-diamond-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Floors?</h2>
          <p className="text-gray-300 mb-8">
            Get a free, no-obligation estimate for your flooring project. 
            We serve Brampton and the entire Greater Toronto Area.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold"
              data-testid="button-flooring-cta-bottom"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
