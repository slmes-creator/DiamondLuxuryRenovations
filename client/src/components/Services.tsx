import flooringAfter from "@/assets/flooring-after-1.jpg";
import tilesAfter from "@/assets/tiles-after-1.jpg";
import staircaseAfter from "@/assets/staircase-after-1.jpg";
import bathroomAfter from "@/assets/bathroom-after-1.jpg";
import interiorAfter from "@/assets/interior-remodel-after-1.jpg";
import framingImg from "@/assets/framing.jpg";

const services = [
  {
    id: 1,
    title: "Premium Flooring",
    description: "Exquisite hardwood, luxury vinyl, and engineered flooring with lifetime warranties",
    image: flooringAfter,
    alt: "Hardwood flooring installation"
  },
  {
    id: 2,
    title: "Designer Tiles",
    description: "Italian marble, porcelain, and natural stone installations with precision craftsmanship",
    image: tilesAfter,
    alt: "Tile installation work"
  },
  {
    id: 3,
    title: "Custom Staircases",
    description: "Architectural masterpieces with premium materials and flawless finishing",
    image: staircaseAfter,
    alt: "Custom staircase construction"
  },
  {
    id: 4,
    title: "Bathroom Renovations",
    description: "Complete bathroom transformations with luxury fixtures and elegant design",
    image: bathroomAfter,
    alt: "Bathroom renovation project"
  },
  {
    id: 5,
    title: "Interior Remodeling",
    description: "Complete home transformations with designer finishes and premium materials",
    image: interiorAfter,
    alt: "Home renovation project"
  },
  {
    id: 6,
    title: "Demolition & Framing",
    description: "Professional structural work including demolition, framing, and load-bearing modifications",
    image: framingImg,
    alt: "Framing and demolition work"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-diamond-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Services</h3>
          <div className="w-24 h-1 bg-luxury-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Elevating every space with masterful craftsmanship and luxury finishes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              data-testid={`card-service-${service.id}`}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-lg ring-4 ring-luxury-400/20">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-2xl font-bold text-diamond-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
