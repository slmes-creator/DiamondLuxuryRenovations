import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { MapPin, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";

import bathroomAfter6 from "@/assets/bathroom-after6.jpg";
import bathroomAfter1 from "@/assets/bathroom-after-1.jpg";
import bathroomAfter8 from "@/assets/bathroom-after8.jpg";

import flooringAfter5 from "@/assets/flooring-after5.jpg";
import flooringAfter11 from "@/assets/flooring-after11.jpg";
import flooringAfter3 from "@/assets/flooring-after3.jpg";

import staircaseAfter1 from "@/assets/staircase-after1.jpg";
import staircaseAfter6 from "@/assets/staircase-after6.jpg";
import staircaseAfter2 from "@/assets/staircase-after-2.jpg";

import interiorAfter from "@/assets/interior-remodel-after.jpg";
import tilesAfter1 from "@/assets/tiles-after-1.jpg";
import kitchenAfter1 from "@/assets/kitchen-after1.jpg";
import kitchenAfter2 from "@/assets/kitchen-after2.jpg";

const categories = ["All", "Kitchen", "Bathroom", "Flooring", "Staircase", "Interior", "Tiles"];

const projects = [
  {
    id: 1,
    title: "Modern Chef's Kitchen",
    location: "Brampton, ON",
    category: "Kitchen",
    description: "Complete kitchen overhaul featuring custom white cabinetry, high-end stainless steel appliances, and a beautiful subway tile backsplash.",
    image: kitchenAfter1,
  },
  {
    id: 2,
    title: "Luxury Kitchen Remodel",
    location: "Mississauga, ON",
    category: "Kitchen",
    description: "Premium kitchen renovation with dark wood cabinetry, integrated lighting, and a modern open-concept layout perfect for entertaining.",
    image: kitchenAfter2,
  },
  {
    id: 3,
    title: "Luxury Marble Shower Suite",
    location: "Brampton, ON",
    category: "Bathroom",
    description: "Stunning walk-in shower featuring premium marble tiles with dramatic veining, matte black rain shower fixtures, built-in LED lighting niches, and a modern mosaic floor.",
    image: bathroomAfter6,
  },
  {
    id: 4,
    title: "Modern Grey Tile Bathroom",
    location: "Mississauga, ON",
    category: "Bathroom",
    description: "Elegant shower and tub combo with contemporary grey porcelain tiles, brushed nickel fixtures, and recessed lighting for a clean, spa-like feel.",
    image: bathroomAfter1,
  },
  {
    id: 5,
    title: "Premium Stone Shower Installation",
    location: "Vaughan, ON",
    category: "Bathroom",
    description: "Sophisticated shower enclosure with natural stone-look tiles featuring soft veining patterns, modern dark accent trim, and seamless glass door installation.",
    image: bathroomAfter8,
  },
  {
    id: 6,
    title: "Dark Oak Hardwood Flooring",
    location: "Brampton, ON",
    category: "Flooring",
    description: "Beautiful wide-plank dark oak hardwood installation with rich wood grain patterns, professional trim work, and immaculate finishing throughout.",
    image: flooringAfter5,
  },
  {
    id: 7,
    title: "Light Ash Vinyl Plank Flooring",
    location: "Caledon, ON",
    category: "Flooring",
    description: "Premium luxury vinyl plank flooring in a light ash tone, featuring seamless room-to-room transitions and professional threshold installations.",
    image: flooringAfter11,
  },
  {
    id: 8,
    title: "Grey Wood-Look Laminate",
    location: "Oakville, ON",
    category: "Flooring",
    description: "Contemporary grey laminate flooring with authentic wood grain texture, installed throughout hallways with precise cutting and professional baseboards.",
    image: flooringAfter3,
  },
  {
    id: 9,
    title: "Curved Staircase with Iron Balusters",
    location: "Vaughan, ON",
    category: "Staircase",
    description: "Elegant curved staircase renovation featuring rich dark wood handrail, decorative wrought iron balusters with basket designs, and premium oak treads.",
    image: staircaseAfter1,
  },
  {
    id: 10,
    title: "Modern White & Black Railing System",
    location: "Brampton, ON",
    category: "Staircase",
    description: "Contemporary staircase update with light oak handrail, matte black twisted metal balusters, and matching hardwood flooring for a cohesive look.",
    image: staircaseAfter6,
  },
  {
    id: 11,
    title: "Natural Wood Stair Treads",
    location: "Milton, ON",
    category: "Staircase",
    description: "Complete stair tread replacement with beautiful natural wood grain finish, coordinated risers, and professional nosing for a seamless appearance.",
    image: staircaseAfter2,
  },
  {
    id: 12,
    title: "Modern Entryway Transformation",
    location: "Brampton, ON",
    category: "Interior",
    description: "Stunning entryway renovation featuring elegant wainscoting panels, large format porcelain tiles, black interior doors, carpeted staircase with black railing, and modern French door.",
    image: interiorAfter,
  },
  {
    id: 13,
    title: "Premium Tile Installation",
    location: "Mississauga, ON",
    category: "Tiles",
    description: "Expert tile installation showcasing precise cutting, seamless grout lines, and professional finishing for a polished, long-lasting result.",
    image: tilesAfter1,
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout
      title="Renovation Portfolio Brampton | Diamond Luxury Renovation Projects"
      description="View our portfolio of completed renovation projects in Brampton and the GTA. Professional galleries of flooring, staircases, bathrooms, and interior transformations."
    >
      <section className="py-20 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-portfolio">
            Our Project Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of completed renovations throughout Brampton and the 
            Greater Toronto Area. Each project showcases our commitment to excellence and craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-100 border-b sticky top-[72px] z-40" data-testid="section-portfolio-filters">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 flex-wrap" data-testid="container-filter-buttons">
            <Filter className="w-5 h-5 text-diamond-700 mr-2" aria-hidden="true" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden group cursor-default transition-all duration-300 hover:shadow-xl"
                data-testid={`card-project-${project.id}`}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} - Professional renovation by Diamond Luxury Renovations in ${project.location}`}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-luxury-500 text-diamond-900 text-sm font-semibold rounded-full shadow-lg">
                      {project.category}
                    </span>
                    <div 
                      className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                      data-testid={`text-project-description-${project.id}`}
                    >
                      <p className="text-white text-sm overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 
                      className="text-lg font-bold text-diamond-900 mb-2 truncate"
                      data-testid={`text-project-title-${project.id}`}
                    >
                      {project.title}
                    </h3>
                    <div 
                      className="flex items-center text-gray-500 text-sm"
                      data-testid={`text-project-location-${project.id}`}
                    >
                      <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                      {project.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
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
