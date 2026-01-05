import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer & Mark Thompson",
    location: "Brampton, ON",
    project: "Complete Kitchen Renovation",
    rating: 5,
    review: "Diamond Luxury Renovation transformed our outdated kitchen into a modern masterpiece. From the initial consultation to the final reveal, the entire team was professional, punctual, and incredibly skilled. Ronald's attention to detail is unmatched. We couldn't be happier with our new kitchen!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
  },
  {
    name: "David Chen",
    location: "Mississauga, ON",
    project: "Master Bathroom Remodel",
    rating: 5,
    review: "I had very specific ideas for my bathroom renovation, and the team at Diamond Luxury executed them perfectly. The heated floors, custom tile work, and rainfall shower have turned my bathroom into a personal spa. Worth every penny!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  },
  {
    name: "Sarah Mitchell",
    location: "Vaughan, ON",
    project: "Hardwood Floor Restoration",
    rating: 5,
    review: "Our 40-year-old hardwood floors looked worn and damaged. Diamond Luxury brought them back to life! The refinishing work is flawless, and you'd never know these floors are four decades old. Exceptional craftsmanship.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  },
  {
    name: "The Patel Family",
    location: "Caledon, ON",
    project: "Staircase & Railing Upgrade",
    rating: 5,
    review: "We wanted a dramatic staircase that would make a statement. Diamond Luxury delivered beyond our wildest dreams. The custom iron railings and refinished oak treads are absolutely stunning. Every guest compliments our new staircase!",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200",
  },
  {
    name: "Michael & Lisa Wong",
    location: "Toronto, ON",
    project: "Basement Conversion",
    rating: 5,
    review: "Our basement was a dark, unused space. Now it's a fully finished entertainment suite with a home theater, wet bar, and guest bedroom. The transformation is incredible. Diamond Luxury managed the entire project seamlessly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
  },
  {
    name: "Dr. Emily Richardson",
    location: "Brampton, ON",
    project: "Custom Built-In Cabinetry",
    rating: 5,
    review: "I needed custom built-ins for my home office and library. The craftsmanship from Diamond Luxury is museum-quality. Every joint is perfect, every finish is flawless. These are pieces that will last generations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200",
  },
];

export default function Testimonials() {
  return (
    <Layout>
      <PageHero
        title="Client Testimonials"
        subtitle="Hear from our satisfied clients across the Greater Toronto Area"
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex text-luxury-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-current" />
                ))}
              </div>
              <span className="text-3xl font-bold text-diamond-900">5.0</span>
            </div>
            <p className="text-gray-600" data-testid="text-reviews-count">Based on 35+ verified reviews</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-luxury-400 mb-4" />
                  <div className="flex text-luxury-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic" data-testid={`text-review-${index}`}>
                    "{testimonial.review}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      data-testid={`img-reviewer-${index}`}
                    />
                    <div>
                      <p className="font-bold text-diamond-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <p className="text-sm text-luxury-600">{testimonial.project}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-diamond-900 mb-4" data-testid="text-trust-title">
            Why Clients Trust Us
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mx-auto mb-8 rounded-full" />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-500 mb-2">100%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-500 mb-2">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-500 mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-diamond-900 to-diamond-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-gray-300 mb-8">
            Experience the Diamond Luxury difference for yourself.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-luxury-500 to-luxury-600 hover:from-luxury-600 hover:to-luxury-700 text-white px-8 py-6 text-lg rounded-full" data-testid="button-testimonials-cta">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
