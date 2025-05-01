export default function PricingSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border rounded-lg shadow-sm flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-2">Freemium</h3>
            <p className="mb-4">3 emails/day, basic features</p>
            <span className="text-3xl font-bold mb-2">Free</span>
            <a href="/signup" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</a>
          </div>
          <div className="p-8 border rounded-lg shadow-sm flex flex-col items-center bg-blue-50">
            <h3 className="font-semibold text-lg mb-2">Pro</h3>
            <p className="mb-4">Unlimited emails, export, save history</p>
            <span className="text-3xl font-bold mb-2">$9<span className="text-base font-normal">/mo</span></span>
            <a href="/signup" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Upgrade</a>
          </div>
        </div>
      </div>
    </section>
  );
}