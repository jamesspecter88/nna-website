export default function HeroSection() {
  return (
    <section className="py-16 text-center bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">AI-Powered Cold Email Generation</h1>
      <p className="text-lg md:text-2xl mb-6 text-gray-700">Personalize, automate, and scale your outreach with GPT-4</p>
      <div className="flex justify-center gap-4">
        <a href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started Free</a>
        <a href="#demo" className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">See Demo</a>
      </div>
    </section>
  );
}