import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

export default function Accessibility() {
  return (
    <Layout>
      <PageHero title="Accessibility Statement" subtitle="Our commitment to accessibility" />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Our Commitment</h2>
          <p className="text-gray-700 mb-6">
            Diamond Luxury Renovation is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply accessibility standards.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Accessibility Features</h2>
          <p className="text-gray-700 mb-6">
            Our website includes features such as keyboard navigation, descriptive alt text for images, proper heading structure, and sufficient color contrast for readability.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Feedback</h2>
          <p className="text-gray-700">
            We welcome your feedback on the accessibility of our website. Please contact us at gtaprorenovations@gmail.com if you encounter any accessibility barriers.
          </p>
        </div>
      </section>
    </Layout>
  );
}
