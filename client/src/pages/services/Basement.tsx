import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import interiorAfter1 from "@/assets/interior-remodel-after-1.jpg";
import interiorAfter2 from "@/assets/interior-remodel-after-2.jpg";

const benefits = [
  "Complete basement finishing from start to end",
  "Custom layouts for any lifestyle",
  "Home theaters and entertainment spaces",
  "In-law suites and guest bedrooms",
  "Wet bars and kitchenettes",
  "Egress windows and code compliance",
];

const process = [
  { step: 1, title: "Vision", description: "Discuss how you want to use your space." },
  { step: 2, title: "Design", description: "Create detailed floor plans and layouts." },
  { step: 3, title: "Permits", description: "Obtain all necessary approvals." },
  { step: 4, title: "Build", description: "Professional construction by our team." },
  { step: 5, title: "Finish", description: "Final touches and handover." },
];

const faqs = [
  {
    question: "How long does basement finishing take?",
    answer: "A full basement finishing typically takes 4-8 weeks depending on size and complexity.",
  },
  {
    question: "Do I need permits for basement renovation?",
    answer: "Yes, basement finishing requires permits. We handle the entire permit process for you.",
  },
  {
    question: "Can you add a bathroom to my basement?",
    answer: "Absolutely! We can add full bathrooms including rough-in plumbing if needed.",
  },
  {
    question: "What about moisture issues?",
    answer: "We address any moisture concerns before finishing, including waterproofing and proper drainage solutions.",
  },
];

export default function Basement() {
  return (
    <Layout
      title="Basement Renovations Brampton | Diamond Luxury Renovation"
      description="Professional basement renovations in Brampton. Complete finishing, home theaters, in-law suites. Free estimates. Call (416) 414-9170."
    >
      <section className="relative py-24 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="absolute inset-0">
          <img
            src={interiorAfter1}
            alt="Basement renovation in Brampton"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-basement">
              Basement Renovations in Brampton
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Unlock your basement's full potential. From entertainment spaces to 
              rental suites, we create functional living areas that add value.
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
                Transform Unused Space Into Living Space
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your basement represents untapped potential. Whether you need extra 
                bedrooms, a home office, entertainment area, or rental income, we 
                can design and build the perfect solution.
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
                src={interiorAfter2}
                alt="Finished basement living space"
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Finish Your Basement?</h2>
          <p className="text-gray-300 mb-8">
            Get a free estimate for your basement renovation today.
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
