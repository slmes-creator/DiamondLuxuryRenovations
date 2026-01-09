import { Button } from "@/components/ui/button";
import heroImage from "@/assets/interior-remodel-after-1.jpg";

interface HeroProps {
  onViewGallery?: () => void;
}

export default function Hero({ onViewGallery }: HeroProps) {
  const handleCall = () => {
    window.open('tel:+1-416-414-9170', '_self');
  };

  const handleViewWork = () => {
    if (onViewGallery) {
      onViewGallery();
    } else {
      document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center text-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-diamond-900/70 via-diamond-900/80 to-diamond-900/90"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            <span className="block text-white">LUXURY</span>
            <span className="block text-luxury-400">REDEFINED</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mx-auto leading-relaxed">
            Transforming ordinary spaces into extraordinary experiences with unmatched craftsmanship and attention to detail
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Button 
            onClick={handleCall}
            className="bg-luxury-600 hover:bg-luxury-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl h-auto"
            data-testid="button-consultation"
          >
            Get Free Consultation
          </Button>
          <Button 
            onClick={handleViewWork}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-diamond-900 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 h-auto bg-transparent"
            data-testid="button-view-work"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
