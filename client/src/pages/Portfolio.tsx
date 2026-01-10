import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";

import staircaseBefore1 from "@/assets/staircase-before-1.jpg";
import staircaseAfter1 from "@/assets/staircase-after-1.jpg";
import bathroomBefore1 from "@/assets/bathroom-before1.jpg";
import bathroomAfter1 from "@/assets/bathroom-after1.jpg";
import interiorBefore1 from "@/assets/interior-remodel-before-1.jpg";
import interiorAfter1 from "@/assets/interior-remodel-after-1.jpg";
import tilesBefore1 from "@/assets/tiles-before-1.jpg";
import tilesAfter1 from "@/assets/tiles-after-1.jpg";

const projects = [
  {
    id: 1,
    title: "Staircase Refinishing & Railing Update",
    location: "Brampton, ON",
    category: "Staircase",
    description: "Complete staircase transformation with new oak treads, modern railings, and premium finish.",
    beforeImage: staircaseBefore1,
    afterImage: staircaseAfter1,
  },
  {
    id: 2,
    title: "Luxury Bathroom Renovation",
    location: "Brampton, ON",
    category: "Bathroom",
    description: "Full master bathroom remodel featuring heated floors, walk-in shower, and custom vanity.",
    beforeImage: bathroomBefore1,
    afterImage: bathroomAfter1,
  },
  {
    id: 3,
    title: "Complete Interior Remodel",
    location: "Brampton, ON",
    category: "Interior",
    description: "Transformed dated interior into modern open-concept living space with premium finishes.",
    beforeImage: interiorBefore1,
    afterImage: interiorAfter1,
  },
  {
    id: 4,
    title: "Tile Backsplash & Flooring",
    location: "Brampton, ON",
    category: "Tiles",
    description: "Beautiful tile installation featuring subway tile backsplash and modern floor tiles.",
    beforeImage: tilesBefore1,
    afterImage: tilesAfter1,
  },
];

export default function Portfolio() {
  return (
    <Layout
      title="Renovation Portfolio Brampton | Diamond Luxury Renovation Projects"
      description="View our portfolio of completed renovation projects in Brampton and the GTA. Before and after galleries of flooring, staircases, bathrooms, and basements."
    >
      <section className="py-20 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-portfolio">
            Our Project Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of completed renovations throughout Brampton and the 
            Greater Toronto Area. Each project showcases our commitment to excellence.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden" data-testid={`card-project-${project.id}`}>
                <CardContent className="p-0">
                  <div className="p-6 bg-diamond-900">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="px-3 py-1 bg-luxury-500/20 text-luxury-400 text-sm rounded-full">
                          {project.category}
                        </span>
                        <h2 className="text-2xl font-bold text-white mt-2">{project.title}</h2>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-300">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {project.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative">
                      <img
                        src={project.beforeImage}
                        alt={`${project.title} - Before`}
                        className="w-full h-72 object-cover"
                      />
                      <span className="absolute top-4 left-4 px-4 py-2 bg-gray-900/80 text-white font-semibold rounded-lg">
                        Before
                      </span>
                    </div>
                    <div className="relative">
                      <img
                        src={project.afterImage}
                        alt={`${project.title} - After`}
                        className="w-full h-72 object-cover"
                      />
                      <span className="absolute top-4 left-4 px-4 py-2 bg-luxury-500 text-diamond-900 font-semibold rounded-lg">
                        After
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-diamond-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss your renovation project and create something beautiful together.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold"
              data-testid="button-portfolio-cta"
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
