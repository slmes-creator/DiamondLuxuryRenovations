import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy | Diamond Luxury Renovation"
      description="Diamond Luxury Renovation privacy policy. Learn how we collect, use, and protect your personal information."
    >
      <section className="py-16 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Diamond Luxury Renovation ("we," "our," or "us") respects your privacy and is committed 
            to protecting your personal information. This Privacy Policy explains how we collect, 
            use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Name, email address, and phone number when you contact us or request an estimate</li>
            <li>Project details and preferences you share with us</li>
            <li>Address and location information for service delivery</li>
            <li>Website usage data through cookies and analytics</li>
          </ul>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Respond to your inquiries and provide estimates</li>
            <li>Deliver our renovation services</li>
            <li>Communicate about your project</li>
            <li>Send relevant updates about our services (with your consent)</li>
            <li>Improve our website and customer experience</li>
          </ul>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Information Sharing</h2>
          <p className="text-gray-700 mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may 
            share information with trusted service providers who assist in our operations, subject 
            to confidentiality agreements.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Data Security</h2>
          <p className="text-gray-700 mb-6">
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the internet is 100% secure, and we cannot 
            guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-6">
            You have the right to access, correct, or delete your personal information. 
            Contact us at diamondluxuryrenovations@gmail.com to exercise these rights.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have questions about this Privacy Policy, please contact us at:<br />
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
