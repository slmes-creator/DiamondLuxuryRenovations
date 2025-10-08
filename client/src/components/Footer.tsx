import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const serviceAreas = [
  "Brampton",
  "Mississauga",
  "Caledon",
  "Vaughan",
  "Toronto (GTA)"
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(416) 414-9170</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>gtaprorenovations@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 7AM-6PM, Sat: 8AM-4PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Service Area</h4>
            <div className="text-gray-300 space-y-1">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <Button
                onClick={() => window.open('https://facebook.com', '_blank')}
                className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors h-auto"
                data-testid="button-facebook"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open('https://instagram.com', '_blank')}
                className="bg-pink-600 p-3 rounded-lg hover:bg-pink-700 transition-colors h-auto"
                data-testid="button-instagram"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="bg-blue-800 p-3 rounded-lg hover:bg-blue-900 transition-colors h-auto"
                data-testid="button-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-gray-400 text-sm">Licensed & Insured • WSIB Covered</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Diamond Luxury Renovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
