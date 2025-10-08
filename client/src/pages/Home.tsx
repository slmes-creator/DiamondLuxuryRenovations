import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import PainPointsSolutions from "@/components/PainPointsSolutions";
import OwnerTestimonial from "@/components/OwnerTestimonial";
import Services from "@/components/Services";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-['Montserrat',sans-serif]">
      <Header />
      <Hero />
      <Gallery />
      <PainPointsSolutions />
      <OwnerTestimonial />
      <Services />
      <CTASection />
      <Footer />
    </div>
  );
}
