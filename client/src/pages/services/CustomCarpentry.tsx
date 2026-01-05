import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Built-in shelving & bookcases",
  "Custom closet systems",
  "Wainscoting & trim work",
  "Crown molding installation",
  "Custom entertainment centers",
  "Window seats & benches",
  "Mudroom built-ins",
  "Architectural millwork",
];

export default function CustomCarpentry() {
  return (
    <Layout>
      <PageHero
        title="Custom Carpentry in Brampton"
        subtitle="Bespoke woodworking solutions crafted with exceptional skill and attention to detail"
        backgroundImage="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-4" data-testid="text-carpentry-title">
                Expert Custom Carpentry
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mb-6 rounded-full" />
              <p className="text-gray-700 mb-6">
                Custom carpentry adds character and functionality to your home. Our skilled craftsmen create
                bespoke pieces that fit perfectly into your space and match your unique style.
              </p>
              <p className="text-gray-700 mb-8">
                From elegant built-ins to intricate trim work, we bring old-world craftsmanship to modern homes.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-luxury-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800"
                alt="Custom carpentry"
                className="rounded-2xl shadow-2xl"
                data-testid="img-carpentry-main"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-diamond-900 to-diamond-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Custom Carpentry?</h2>
          <p className="text-gray-300 mb-8">Contact us to discuss your project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-luxury-500 to-luxury-600 hover:from-luxury-600 hover:to-luxury-700 text-white px-8 py-6 text-lg rounded-full">
                Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
