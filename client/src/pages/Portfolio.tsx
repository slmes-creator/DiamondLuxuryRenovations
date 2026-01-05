import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Modern Kitchen Transformation",
    location: "Brampton, ON",
    category: "Kitchen",
    description: "Complete kitchen overhaul featuring custom white cabinetry, quartz countertops, and premium stainless steel appliances.",
    beforeImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
    afterImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600",
    testimonial: "Diamond Luxury Renovation exceeded all our expectations. Our kitchen is now the heart of our home!",
    client: "The Johnson Family",
  },
  {
    title: "Spa-Inspired Bathroom",
    location: "Mississauga, ON",
    category: "Bathroom",
    description: "Luxurious master bathroom featuring a freestanding soaker tub, walk-in rainfall shower, and heated marble floors.",
    beforeImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600",
    afterImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600",
    testimonial: "It's like having a spa in our own home. The attention to detail is incredible.",
    client: "Maria S.",
  },
  {
    title: "Hardwood Floor Restoration",
    location: "Vaughan, ON",
    category: "Flooring",
    description: "Complete restoration of original 50-year-old hardwood floors, bringing back their natural beauty and luster.",
    beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    testimonial: "They brought our old floors back to life. You can't tell they're 50 years old now!",
    client: "Robert & Linda T.",
  },
  {
    title: "Custom Staircase Makeover",
    location: "Caledon, ON",
    category: "Staircase",
    description: "Elegant staircase refinishing with custom iron railings and rich oak treads, creating a stunning focal point.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600",
    afterImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600",
    testimonial: "Our staircase is now the first thing guests compliment when they visit.",
    client: "The Patel Family",
  },
  {
    title: "Basement Entertainment Suite",
    location: "Brampton, ON",
    category: "Basement",
    description: "Full basement conversion featuring a home theater, wet bar, and recreation area with luxury finishes throughout.",
    beforeImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
    afterImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
    testimonial: "Our basement went from forgotten storage to our family's favorite hangout spot.",
    client: "James & Patricia W.",
  },
  {
    title: "Custom Built-In Library",
    location: "Toronto, ON",
    category: "Carpentry",
    description: "Floor-to-ceiling custom built-in bookshelves with integrated lighting and a cozy reading nook.",
    beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    afterImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    testimonial: "The craftsmanship is exceptional. Every detail was carefully considered.",
    client: "Dr. Emily Chen",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <PageHero
        title="Our Portfolio"
        subtitle="Browse our collection of stunning transformations across the Greater Toronto Area"
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-diamond-900 mb-4" data-testid="text-portfolio-title">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each project showcases our commitment to excellence and our ability to transform spaces into
              stunning environments that exceed our clients' expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-testid={`img-project-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-diamond-900/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-luxury-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-luxury-300 text-sm">{project.location}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex text-luxury-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm italic">"{project.testimonial}"</p>
                    <p className="text-diamond-900 font-medium text-sm mt-2">- {project.client}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-diamond-900 to-diamond-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" data-testid="text-cta-title">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how we can transform your space into something extraordinary.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-luxury-500 to-luxury-600 hover:from-luxury-600 hover:to-luxury-700 text-white px-8 py-6 text-lg rounded-full" data-testid="button-portfolio-cta">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
