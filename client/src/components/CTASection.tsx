import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star } from "lucide-react";

export default function CTASection() {
  const handleCall = () => {
    window.open('tel:+1-416-414-9170', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/14164149170', '_blank');
  };

  const handleReview = () => {
    window.open('https://www.google.com/search?q=Diamond+Luxury+Renovation+reviews', '_blank');
  };

  return (
    <section className="py-16 bg-diamond-800 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleCall}
            className="bg-white text-diamond-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 h-auto"
            data-testid="button-call"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </Button>
          <Button
            onClick={handleWhatsApp}
            className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 h-auto"
            data-testid="button-whatsapp"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </Button>
          <Button
            onClick={handleReview}
            className="bg-luxury-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-luxury-600 transition-colors flex items-center justify-center space-x-2 h-auto"
            data-testid="button-review"
          >
            <Star className="w-5 h-5" />
            <span>Leave a Review</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
