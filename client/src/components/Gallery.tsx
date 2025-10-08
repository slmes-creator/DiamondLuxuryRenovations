const projects = [
  {
    id: 1,
    title: "Kitchen Renovation",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    alt: "Kitchen renovation before and after"
  },
  {
    id: 2,
    title: "Hardwood Flooring",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    alt: "Hardwood flooring installation before and after"
  },
  {
    id: 3,
    title: "Bathroom Remodel",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    alt: "Bathroom remodel before and after"
  },
  {
    id: 4,
    title: "Staircase Refinish",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    alt: "Staircase refinishing before and after"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-6xl font-bold text-diamond-900 mb-6">Before & After Gallery</h3>
          <div className="w-24 h-1 bg-luxury-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the stunning transformations that showcase our commitment to excellence
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden shadow-xl relative transform hover:scale-105 transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-bold text-lg">{project.title}</p>
                <p className="text-luxury-300 text-sm font-medium">Before → After</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
