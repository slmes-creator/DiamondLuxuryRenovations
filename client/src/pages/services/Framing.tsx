import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";

const benefits = [
  "Structural framing for renovations and additions",
  "Basement framing and finishing prep",
  "Load-bearing wall modifications",
  "Custom room layouts and partitions",
  "Window and door rough-ins",
  "Code-compliant construction",
];

const process = [
  { step: 1, title: "Consultation", description: "Review plans and structural requirements." },
  { step: 2, title: "Permits", description: "Handle necessary building permits." },
  { step: 3, title: "Materials", description: "Source quality lumber and supplies." },
  { step: 4, title: "Framing", description: "Expert construction to specifications." },
  { step: 5, title: "Inspection", description: "Pass all required inspections." },
];

const faqs = [
  {
    question: "Do I need permits for framing work?",
    answer: "Yes, most structural framing requires permits. We handle the permit process for you as part of our service.",
  },
  {
    question: "Can you modify load-bearing walls?",
    answer: "Absolutely. We work with structural engineers when needed to safely modify load-bearing walls with proper support.",
  },
  {
    question: "How long does basement framing take?",
    answer: "A typical basement framing project takes 3-7 days depending on complexity and size.",
  },
  {
    question: "Do you do electrical and plumbing rough-ins?",
    answer: "We coordinate with licensed electricians and plumbers to complete all rough-in work required for your project.",
  },
];

export default function Framing() {
  return (
    <Layout
      title="Framing Services Brampton | Diamond Luxury Renovation"
      description="Professional framing services in Brampton. Basement framing, structural modifications, and additions. Free estimates. Call (416) 414-9170."
    >
      <section className="relative py-24 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop"
            alt="Professional framing services in Brampton"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-framing">
              Professional Framing in Brampton
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Quality structural framing for renovations, additions, and basement finishing. 
              Built to code with precision craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-6">
                Expert Framing for Your Project
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you're finishing a basement, adding a room, or reconfiguring your 
                home's layout, proper framing is the foundation of a successful renovation. 
                Our experienced team delivers precise, code-compliant work.
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
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop"
                alt="Professional framing construction"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-diamond-900 text-center mb-12">Our Process</h2>
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
          <h2 className="text-3xl font-bold text-diamond-900 text-center mb-12">FAQs</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-gray-50 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-diamond-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-diamond-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Start Your Project Today</h2>
          <p className="text-gray-300 mb-8">
            Get a free estimate for your framing project.
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
