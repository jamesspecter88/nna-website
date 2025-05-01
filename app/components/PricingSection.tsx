import React from 'react';
import CTAButton from './CTAButton';

const PricingSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-white tracking-tight drop-shadow-lg transition-all duration-300">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Basic Plan */}
          <div className="flex flex-col p-10 bg-gray-900 rounded-3xl shadow-xl border border-blue-800/40 hover:scale-105 hover:shadow-blue-900 transition-all duration-500 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-white">Basic</h3>
            <p className="text-3xl font-bold mb-4 text-blue-400">$10<span className="text-lg text-gray-400">/mo</span></p>
            <ul className="mb-8 text-gray-300 space-y-2">
              <li>AI Automation</li>
              <li>Basic Analytics</li>
              <li>Email Support</li>
            </ul>
            <CTAButton text="Choose Basic" href="#" primary={false} />
          </div>
          {/* Pro Plan */}
          <div className="flex flex-col p-10 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 rounded-3xl shadow-2xl border-2 border-blue-500/80 scale-105 z-10 hover:scale-110 hover:shadow-blue-900 transition-all duration-500 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-white">Pro</h3>
            <p className="text-3xl font-bold mb-4 text-white">$25<span className="text-lg text-blue-200">/mo</span></p>
            <ul className="mb-8 text-blue-100 space-y-2">
              <li>Everything in Basic</li>
              <li>Advanced Analytics</li>
              <li>Priority Support</li>
              <li>Team Collaboration</li>
            </ul>
            <CTAButton text="Choose Pro" href="#" primary={true} />
          </div>
          {/* Enterprise Plan */}
          <div className="flex flex-col p-10 bg-gray-900 rounded-3xl shadow-xl border border-blue-800/40 hover:scale-105 hover:shadow-blue-900 transition-all duration-500 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-white">Enterprise</h3>
            <p className="text-3xl font-bold mb-4 text-blue-400">Contact Us</p>
            <ul className="mb-8 text-gray-300 space-y-2">
              <li>All Pro Features</li>
              <li>Dedicated Account Manager</li>
              <li>Custom Integrations</li>
              <li>24/7 Premium Support</li>
            </ul>
            <CTAButton text="Contact Us" href="#" primary={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;