export default function FeaturesList() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">AI-Powered Personalization</h3>
            <p>Generate tailored cold emails using GPT-4 based on LinkedIn or website data.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Freemium & Pro Plans</h3>
            <p>Start free with 3 emails/day, upgrade for unlimited access, export, and history.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Secure & Compliant</h3>
            <p>Data privacy, GDPR compliance, and secure authentication/payment integrations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}