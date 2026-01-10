import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function Accessibility() {
  return (
    <Layout
      title="Accessibility Statement | Diamond Luxury Renovation"
      description="Diamond Luxury Renovation accessibility statement. Our commitment to making our website accessible to everyone."
    >
      <section className="py-16 bg-gradient-to-br from-diamond-900 via-diamond-800 to-diamond-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Accessibility Statement</h1>
          <p className="text-gray-300">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Our Commitment</h2>
          <p className="text-gray-700 mb-6">
            Diamond Luxury Renovation is committed to ensuring digital accessibility for 
            people with disabilities. We are continually improving the user experience for 
            everyone and applying the relevant accessibility standards.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Accessibility Features</h2>
          <p className="text-gray-700 mb-4">We strive to incorporate the following features:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Clear and consistent navigation throughout the website</li>
            <li>Alternative text for images</li>
            <li>Sufficient color contrast for text readability</li>
            <li>Keyboard-accessible navigation</li>
            <li>Resizable text without loss of functionality</li>
            <li>Clear heading structure for screen readers</li>
          </ul>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Standards</h2>
          <p className="text-gray-700 mb-6">
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
            standards. These guidelines explain how to make web content more accessible for 
            people with disabilities.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Alternative Contact Methods</h2>
          <p className="text-gray-700 mb-6">
            If you have difficulty accessing any part of our website, please contact us directly:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>Phone: (416) 414-9170 - We're happy to assist over the phone</li>
            <li>Email: diamondluxuryrenovations@gmail.com</li>
          </ul>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Continuous Improvement</h2>
          <p className="text-gray-700 mb-6">
            We are committed to ongoing efforts to improve accessibility. If you encounter 
            any accessibility barriers or have suggestions for improvement, please let us know.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Feedback</h2>
          <p className="text-gray-700 mb-6">
            We welcome your feedback on the accessibility of our website. Please contact us 
            if you experience any accessibility issues or have suggestions for improvement.
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
