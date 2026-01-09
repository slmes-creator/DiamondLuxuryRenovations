import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import kitchenAfter from "@/assets/kitchen-after.jpg";
import kitchenAfter1 from "@/assets/kitchen-after-1.jpg";

const benefits = [
  "Custom cabinet design and installation",
  "Premium countertop options including quartz and granite",
  "Modern backsplash tile work",
  "Updated fixtures and hardware",
  "Improved lighting solutions",
  "Energy-efficient appliance installation",
];

const process = [
  { step: 1, title: "Design Consultation", description: "We discuss your vision, needs, and budget for your dream kitchen." },
  { step: 2, title: "Custom Design", description: "Our designers create detailed plans and 3D renderings of your new kitchen." },
  { step: 3, title: "Material Selection", description: "Choose from premium cabinets, countertops, and finishes." },
  { step: 4, title: "Expert Installation", description: "Our skilled team transforms your kitchen with precision craftsmanship." },
  { step: 5, title: "Final Walkthrough", description: "We ensure every detail exceeds your expectations." },
];

const faqs = [
  {
    question: "How long does a kitchen renovation take?",
    answer: "Most kitchen renovations take 4-8 weeks depending on the scope. Custom cabinets may add additional time. We'll provide a detailed timeline during your consultation.",
  },
  {
    question: "Can I use my kitchen during the renovation?",
    answer: "There will be periods when the kitchen is not usable. We work efficiently to minimize disruption and can help you set up a temporary kitchen space.",
  },
  {
    question: "What's included in a full kitchen renovation?",
    answer: "A full renovation typically includes cabinets, countertops, backsplash, flooring, lighting, plumbing fixtures, and appliance installation. We customize each project to your needs.",
  },
  {
    question: "Do you handle permits?",
    answer: "Yes, we manage all necessary permits for electrical, plumbing, and structural work. This is included in our full-service approach.",
  },
  {
    question: "Can you work with my existing layout?",
    answer: "Absolutely! We can refresh your kitchen within the existing layout or redesign the entire space. Both options can dramatically transform your kitchen.",
  },
];

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kitchen Renovation Brampton",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Diamond Luxury Renovation"
  },
  "areaServed": "Brampton, Ontario",
  "description": "Professional kitchen renovation services in Brampton including custom cabinets, countertops, and modern fixtures."
};

export default function Kitchen() {
  return (
    <Layout
      title="Kitchen Renovation Brampton | Diamond Luxury Renovation"
      description="Professional kitchen renovations in Brampton. Custom cabinets, countertops, backsplash, and modern fixtures. Free estimates. Call (416) 414-9170."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      
      <section className="relative py-24 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="absolute inset-0">
          <img
            src={kitchenAfter}
            alt="Kitchen renovation in Brampton"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-kitchen">
              Kitchen Renovation in Brampton
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your kitchen into the heart of your home with custom designs, 
              premium materials, and expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold"
                  data-testid="button-kitchen-cta-top"
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
                Your Dream Kitchen Awaits
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A kitchen renovation is one of the most rewarding home improvements you can make. 
                Whether you're looking for a complete transformation or a refresh of your existing space, 
                our team delivers stunning results that combine beauty and functionality.
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
                src={kitchenAfter1}
                alt="Modern kitchen renovation in Brampton"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-diamond-900 mb-4">Our Kitchen Renovation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From initial concept to final reveal, we guide you through every step of your kitchen transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item) => (
              <Card key={item.step} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-luxury-500 text-diamond-900 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-diamond-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-diamond-900 mb-8 text-center">
            Kitchen Renovation FAQs
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-diamond-900 font-semibold">
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
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-gray-300 mb-8">
            Let's discuss your vision and create the kitchen you've always wanted. 
            Get a free consultation and detailed estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold"
                data-testid="button-kitchen-cta-bottom"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:4164149170">
              <Button size="lg" variant="outline" className="border-luxury-500 text-luxury-400">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
