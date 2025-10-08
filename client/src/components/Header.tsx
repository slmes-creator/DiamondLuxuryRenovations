import { Star } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-diamond-900 via-diamond-800 to-diamond-900 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-gradient-to-br from-luxury-400 to-luxury-600 rounded-xl flex items-center justify-center shadow-lg">
            <Star className="w-10 h-10 text-white fill-current" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-wide" data-testid="text-company-name">
              Diamond Luxury Renovation
            </h1>
            <p className="text-luxury-300 font-medium tracking-wider text-sm uppercase">
              Premium General Contractor
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
          <div className="flex text-luxury-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-white font-bold text-lg" data-testid="text-rating">5.0</span>
          <span className="text-gray-300 text-sm">(35 reviews)</span>
        </div>
      </div>
    </header>
  );
}
