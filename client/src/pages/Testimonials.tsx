import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Star, Quote, MapPin, ArrowRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jennifer & Mark Thompson",
    location: "Brampton, ON",
    rating: 5,
    service: "Flooring Installation",
    text: "Diamond Luxury Renovation exceeded all our expectations. The team was professional from start to finish, and our new hardwood floors are absolutely stunning. Ronald personally oversaw every detail. We couldn't be happier with the results!",
    date: "October 2024",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Mississauga, ON",
    rating: 5,
    service: "Basement Renovation",
    text: "Transforming our unfinished basement into a beautiful entertainment space was a dream come true. The craftsmanship is impeccable, and they completed the project on time and within budget. Highly recommend!",
    date: "September 2024",
  },
  {
    id: 3,
    name: "Sarah & David Williams",
    location: "Vaughan, ON",
    rating: 5,
    service: "Bathroom Renovation",
    text: "Our master bathroom renovation was handled with such care and attention to detail. The team kept our home clean, communicated every step of the way, and delivered a spa-like bathroom we love.",
    date: "August 2024",
  },
  {
    id: 4,
    name: "Robert Garcia",
    location: "Caledon, ON",
    rating: 5,
    service: "Staircase Refinishing",
    text: "The staircase was the eyesore of our home. Diamond Luxury Renovation completely transformed it with beautiful oak treads and modern railings. It's now the centerpiece of our entryway!",
    date: "July 2024",
  },
  {
    id: 5,
    name: "Lisa & James Morrison",
    location: "Brampton, ON",
    rating: 5,
    service: "Full Home Renovation",
    text: "We hired Diamond for flooring throughout our entire home plus bathroom updates. Their attention to detail is second to none. Professional, reliable, and the quality speaks for itself.",
    date: "June 2024",
  },
  {
    id: 6,
    name: "Angela Foster",
    location: "Toronto, ON",
    rating: 5,
    service: "Flooring Installation",
    text: "Ronald and his team did an amazing job with our vinyl plank flooring. They were punctual, clean, and incredibly skilled. Our floors look like something out of a magazine!",
    date: "May 2024",
  },
];

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Diamond Luxury Renovation",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "35",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": reviews.map(r => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "reviewRating": { "@type": "Rating", "ratingValue": r.rating },
    "reviewBody": r.text
  }))
};

export default function Testimonials() {
  return (
    <Layout
      title="Customer Reviews | Diamond Luxury Renovation - 5 Star Rated Contractor"
      description="Read reviews from satisfied customers in Brampton and the GTA. Diamond Luxury Renovation is rated 5 stars for flooring, bathroom, and basement renovations."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      
      <section className="py-20 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-luxury-400 fill-current" />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-testimonials">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied customers 
            throughout Brampton and the GTA have to say about their experience.
          </p>
          <div className="mt-8 inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
            <span className="text-3xl font-bold text-white">5.0</span>
            <div className="text-left">
              <div className="flex text-luxury-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-300 text-sm">Based on 35+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="h-full" data-testid={`card-review-${review.id}`}>
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-luxury-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">{review.date}</span>
                  </div>
                  
                  <Quote className="w-8 h-8 text-luxury-200 mb-2" />
                  <p className="text-gray-700 flex-grow mb-4 leading-relaxed">
                    {review.text}
                  </p>
                  
                  <div className="border-t pt-4 mt-auto">
                    <p className="font-semibold text-diamond-900">{review.name}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {review.location}
                      </span>
                      <span className="text-luxury-600">{review.service}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-diamond-900 mb-6">Leave a Review</h2>
          <p className="text-gray-600 mb-8">
            Had a great experience with Diamond Luxury Renovation? We'd love to hear from you!
          </p>
          <a 
            href="https://g.page/review/diamond-luxury-renovation" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold"
            >
              Write a Google Review
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      <section className="py-16 bg-diamond-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-gray-300 mb-8">
            Join our growing list of satisfied customers. Get your free estimate today.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold"
              data-testid="button-testimonials-cta"
            >
              Get Free Estimate
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
