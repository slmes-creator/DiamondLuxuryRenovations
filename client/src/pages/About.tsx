import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Award, Clock, Users, CheckCircle, MapPin, Phone } from "lucide-react";
import houseImg from "@/assets/house.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We never compromise on quality. Every detail matters in our pursuit of perfection.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest pricing, transparent communication, and reliable timelines you can count on.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside you to bring your vision to life, treating your home as our own.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We show up on time, every time, and complete projects within agreed schedules.",
  },
];

const certifications = [
  "Licensed General Contractor",
  "10+ Years Industry Experience",
  "Certified Installation Specialists",
];

export default function About() {
  return (
    <Layout
      title="About Us | Diamond Luxury Renovation - Brampton's Trusted Contractor"
      description="Learn about Diamond Luxury Renovation's commitment to excellence in home renovations. Serving Brampton and the GTA with premium craftsmanship."
    >
      <section className="py-20 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-about">
            About Diamond Luxury Renovation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Diamond Luxury Renovations started with Ronald's strong belief in doing work the right way.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                He spent over ten years learning the building and fixing trades. During that time, he saw how much it meant to homeowners to have someone who showed up, listened carefully, and truly cared about every small detail.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Ronald built this company around those important ideas. We try to do our best and avoid taking shortcuts. We focus on solid, good work and always treat the people who trust us with their homes with respect. Whether it's a big basement renovation or just a small project like new flooring, every job should be high-quality and impress the homeowner.
              </p>
              <p className="text-gray-700 leading-relaxed">
                That's the high standard Ronald believes in, and it's the standard our team brings to every home we work on.
              </p>
            </div>
            <div className="bg-gray-100 rounded-3xl p-8">
              <img
                src={houseImg}
                alt="Diamond Luxury Renovation team at work"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-diamond-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-14 h-14 bg-luxury-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-luxury-600" />
                </div>
                <h3 className="text-xl font-bold text-diamond-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-6">Certifications & Credentials</h2>
              <p className="text-gray-700 mb-6">
                Your peace of mind is paramount. We maintain proper licensing and 
                certifications to ensure quality workmanship on every project.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-diamond-900 mb-6">Service Areas</h2>
              <p className="text-gray-700 mb-6">
                We proudly serve homeowners throughout the Greater Toronto Area, 
                bringing our premium renovation services to communities including:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Brampton", "Mississauga", "Vaughan", "Caledon", "Toronto", "Etobicoke"].map((city) => (
                  <div key={city} className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-luxury-600" />
                    <span className="text-gray-700 font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-diamond-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how we can transform your space. Get a free, no-obligation estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-diamond-900 font-semibold"
                data-testid="button-about-cta"
              >
                Get Free Estimate
              </Button>
            </Link>
            <a href="tel:4164149170">
              <Button size="lg" variant="outline" className="border-luxury-500 text-luxury-400">
                <Phone className="w-5 h-5 mr-2" />
                (416) 414-9170
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
