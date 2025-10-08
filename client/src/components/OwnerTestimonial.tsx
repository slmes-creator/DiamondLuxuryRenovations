export default function OwnerTestimonial() {
  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
          <img
            src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ronald, Owner of Diamond Luxury Renovation"
            className="w-32 h-32 rounded-full object-cover object-[70%_50%] scale-125 shadow-xl mx-auto mb-6"
            data-testid="img-owner"
          />
          <h4 className="text-2xl font-bold text-diamond-900 mb-2" data-testid="text-owner-name">Ronald</h4>
          <p className="text-luxury-600 font-semibold mb-4">Owner & Master Craftsman</p>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto italic">
            "I started Diamond Luxury Renovation because I was tired of seeing homeowners disappointed by poor craftsmanship. Every project we complete is a reflection of our commitment to excellence."
          </p>
        </div>
      </div>
    </section>
  );
}
