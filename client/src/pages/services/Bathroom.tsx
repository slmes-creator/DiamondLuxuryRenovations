import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import bathroomAfter1 from "@/assets/bathroom-after-1.jpg";
import bathroomAfter6V2 from "@/assets/bathroom-after6-v2.jpg";

const benefits = [
  "Complete bathroom remodels from design to finish",
  "Custom tile work and shower installations",
  "Vanity and countertop upgrades",
  "Heated floors and luxury fixtures",
  "Accessibility modifications",
  "Plumbing and electrical coordination",
];

const process = [
  { step: 1, title: "Design", description: "Create your dream bathroom layout." },
  { step: 2, title: "Selection", description: "Choose fixtures, tiles, and finishes." },
  { step: 3, title: "Demolition", description: "Careful removal of existing features." },
  { step: 4, title: "Construction", description: "Expert installation by our team." },
  { step: 5, title: "Completion", description: "Final details and walkthrough." },
];

const faqs = [
  {
    question: "How long does a bathroom renovation take?",
    answer: "A typical bathroom renovation takes 2-4 weeks depending on scope. We provide a detailed timeline during your consultation.",
  },
  {
    question: "Can I use my bathroom during renovation?",
    answer: "The bathroom being renovated won't be usable. If it's your only bathroom, we can discuss staging options.",
  },
  {
    question: "Do you handle permits?",
    answer: "Yes, we handle all necessary permits for plumbing and electrical work included in your renovation.",
  },
  {
    question: "Can you work with my existing layout?",
    answer: "Absolutely. We can work within your existing layout or redesign the space completely based on your needs.",
  },
];

export default function Bathroom() {
  return (
    <Layout
      title="Bathroom Renovations Brampton | Diamond Luxury Renovation"
      description="Luxury bathroom renovations in Brampton. Complete remodels, custom tile work, and modern fixtures. Free estimates. Call (416) 414-9170."
    >
      <section className="relative py-24 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="absolute inset-0">
          <img
            src={bathroomAfter1}
            alt="Luxury bathroom renovation in Brampton"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-bathroom">
              Bathroom Renovations in Brampton
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Create your dream bathroom with our expert renovation team. 
              From spa-like retreats to functional family bathrooms.
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
                Transform Your Bathroom Into a Sanctuary
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your bathroom should be a place of relaxation and rejuvenation. 
                Our team specializes in creating beautiful, functional bathrooms 
                that exceed expectations.
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
                src={bathroomAfter6V2}
                alt="High-end marble shower renovation by Diamond Luxury Renovations"
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready for Your Dream Bathroom?</h2>
          <p className="text-gray-300 mb-8">
            Get a free estimate for your bathroom renovation today.
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
