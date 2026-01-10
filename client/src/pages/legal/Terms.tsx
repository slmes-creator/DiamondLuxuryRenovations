import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function Terms() {
  return (
    <Layout
      title="Terms of Service | Diamond Luxury Renovation"
      description="Diamond Luxury Renovation terms of service. Read our terms and conditions for using our website and services."
    >
      <section className="py-16 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-300">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing our website or using our services, you agree to be bound by these 
            Terms of Service. If you disagree with any part of these terms, you may not 
            access our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Our Services</h2>
          <p className="text-gray-700 mb-6">
            Diamond Luxury Renovation provides home renovation services including flooring 
            installation, staircase refinishing, framing, bathroom renovations, and basement 
            renovations. All services are subject to separate written agreements.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Estimates and Pricing</h2>
          <p className="text-gray-700 mb-6">
            Estimates provided are based on information available at the time of assessment. 
            Final pricing may vary based on actual conditions discovered during the project. 
            Any changes will be communicated and agreed upon before proceeding.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Project Terms</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Work schedules are estimates and may be affected by unforeseen circumstances</li>
            <li>Clients must provide reasonable access to work areas</li>
            <li>Payment terms are specified in individual project contracts</li>
            <li>Changes to project scope require written approval</li>
          </ul>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            Diamond Luxury Renovation shall not be liable for any indirect, incidental, or 
            consequential damages arising from the use of our services or website. Our total 
            liability shall not exceed the amount paid for the specific service.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 mb-6">
            All content on this website, including text, images, and design, is the property 
            of Diamond Luxury Renovation and is protected by copyright laws.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Governing Law</h2>
          <p className="text-gray-700 mb-6">
            These terms shall be governed by the laws of the Province of Ontario, Canada.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Contact</h2>
          <p className="text-gray-700 mb-6">
            For questions about these Terms, contact us at:<br />
            Email: diamondluxuryrenovations@gmail.com<br />
            Phone: (416) 414-9170
          </p>

          <div className="mt-8 pt-8 border-t">
            <Link href="/" className="text-luxury-600 hover:text-luxury-700">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
