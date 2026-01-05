import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, CheckCircle } from "lucide-react";

const certifications = [
  { icon: Shield, title: "Fully Insured", description: "Comprehensive liability coverage for your peace of mind" },
  { icon: Award, title: "WSIB Covered", description: "Worker safety protection on every project" },
  { icon: Users, title: "Licensed Trades", description: "Certified professionals in all specialties" },
  { icon: CheckCircle, title: "5-Star Rated", description: "Consistently rated 5 stars by satisfied clients" },
];

const values = [
  { title: "Excellence", description: "We pursue perfection in every detail, from initial design to final finish." },
  { title: "Integrity", description: "Honest communication, transparent pricing, and keeping our promises." },
  { title: "Craftsmanship", description: "Old-world attention to detail with modern techniques and materials." },
  { title: "Client Focus", description: "Your vision drives every decision we make throughout the project." },
];

export default function About() {
  return (
    <Layout>
      <PageHero
        title="About Diamond Luxury Renovation"
        subtitle="Brampton's trusted luxury contractor delivering premium craftsmanship since 2010"
        backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-6" data-testid="text-story-title">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mb-6 rounded-full" />
              <div className="space-y-4 text-gray-700">
                <p>
                  Diamond Luxury Renovation was founded with a simple mission: to bring exceptional craftsmanship
                  and luxury finishes to homeowners in Brampton and the Greater Toronto Area.
                </p>
                <p>
                  Our founder, Ronald, started in the trades over 15 years ago, learning the art of fine carpentry
                  and renovation from master craftsmen. After years of seeing homeowners disappointed by poor
                  workmanship and broken promises, he decided to create a company that would set a new standard.
                </p>
                <p>
                  Today, Diamond Luxury Renovation is recognized as one of the premier contractors in the region,
                  known for our attention to detail, transparent communication, and stunning transformations that
                  exceed our clients' expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800"
                alt="Craftsman at work"
                className="rounded-2xl shadow-2xl"
                data-testid="img-about"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-luxury-400 to-luxury-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-diamond-900 text-center mb-4" data-testid="text-certs-title">
            Certifications & Coverage
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-luxury-400 to-luxury-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-diamond-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-diamond-900 text-center mb-4" data-testid="text-values-title">
            Our Values
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-diamond-900 text-luxury-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-diamond-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-diamond-900 to-diamond-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" data-testid="text-team-title">
            Meet Our Team
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-luxury-400 to-luxury-600 mx-auto mb-8 rounded-full" />
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Our team of skilled craftsmen, designers, and project managers work together to deliver
            exceptional results on every project.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ronald", role: "Founder & Master Craftsman", image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=400" },
              { name: "Michael", role: "Senior Project Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
              { name: "Sarah", role: "Design Consultant", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-luxury-400"
                  data-testid={`img-team-${index}`}
                />
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-luxury-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
