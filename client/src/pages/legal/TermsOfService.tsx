import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

export default function TermsOfService() {
  return (
    <Layout>
      <PageHero title="Terms of Service" subtitle="Terms and conditions for using our services" />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Agreement to Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing our website or engaging our services, you agree to be bound by these terms and conditions.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Services</h2>
          <p className="text-gray-700 mb-6">
            Diamond Luxury Renovation provides renovation and contracting services in the Greater Toronto Area. All projects are subject to written contracts outlining scope, pricing, and timelines.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Quotes and Pricing</h2>
          <p className="text-gray-700 mb-6">
            Quotes provided are estimates based on available information. Final pricing may vary based on actual project requirements and material costs.
          </p>

          <h2 className="text-2xl font-bold text-diamond-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700">
            Diamond Luxury Renovation maintains comprehensive liability insurance and WSIB coverage. Specific liability terms are outlined in individual project contracts.
          </p>
        </div>
      </section>
    </Layout>
  );
}
