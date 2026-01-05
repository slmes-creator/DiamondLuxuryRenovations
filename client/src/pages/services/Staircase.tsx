import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";

const benefits = [
  "Complete staircase refinishing and restoration",
  "Custom hardwood treads and risers",
  "Modern railing and baluster upgrades",
  "Expert staining and finishing options",
  "Repair of worn or damaged stairs",
  "Code-compliant installations",
];

const process = [
  { step: 1, title: "Assessment", description: "Evaluate current staircase condition and discuss your vision." },
  { step: 2, title: "Design", description: "Select materials, finishes, and railing styles." },
  { step: 3, title: "Preparation", description: "Protect surrounding areas and prepare surfaces." },
  { step: 4, title: "Refinishing", description: "Expert restoration with premium materials." },
  { step: 5, title: "Finishing", description: "Final touches and protective coatings." },
];

const faqs = [
  {
    question: "How long does staircase refinishing take?",
    answer: "Most staircase refinishing projects take 3-5 days, depending on the scope of work and finish curing time.",
  },
  {
    question: "Can you refinish carpeted stairs?",
    answer: "Yes! We can remove existing carpet and refinish the underlying wood, or install new hardwood treads if needed.",
  },
  {
    question: "Do you install new railings?",
    answer: "Absolutely. We offer a full range of railing options from traditional wood to modern metal designs.",
  },
  {
    question: "Will my stairs be usable during the project?",
    answer: "We work in stages when possible to minimize disruption, but there may be periods when stairs are inaccessible.",
  },
];

export default function Staircase() {
  return (
    <Layout
      title="Staircase Refinishing Brampton | Diamond Luxury Renovation"
      description="Professional staircase refinishing in Brampton. Transform worn stairs into stunning focal points. Free estimates. Call (416) 414-9170."
    >
      <section className="relative py-24 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2787&auto=format&fit=crop"
            alt="Staircase refinishing in Brampton"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-staircase">
              Staircase Refinishing in Brampton
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your worn staircase into a stunning architectural feature. 
              Expert refinishing, custom railings, and complete restorations.
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
                Expert Staircase Refinishing Services
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your staircase is often the first thing guests see when entering your home. 
                Don't let worn treads and outdated railings diminish your home's beauty. 
                Our craftsmen specialize in bringing stairs back to life.
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
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2787&auto=format&fit=crop"
                alt="Beautiful refinished staircase"
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Revitalize Your Staircase?</h2>
          <p className="text-gray-300 mb-8">
            Get a free estimate for your staircase refinishing project today.
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
