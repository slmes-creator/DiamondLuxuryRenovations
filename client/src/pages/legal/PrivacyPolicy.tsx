import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PageHero title="Privacy Policy" subtitle="How we collect, use, and protect your information" />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-6">
            We collect information you provide directly, such as your name, email, phone number, and project details when you contact us or request a quote.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-6">
            We use your information to respond to inquiries, provide quotes, schedule consultations, and deliver our renovation services.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Information Protection</h2>
          <p className="text-gray-700 mb-6">
            We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            For questions about this privacy policy, please contact us at gtaprorenovations@gmail.com or call (416) 414-9170.
          </p>
        </div>
      </section>
    </Layout>
  );
}
