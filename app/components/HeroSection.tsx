import React from 'react';
import CTAButton from './CTAButton';

const HeroSection = () => {
  return (
    <section className="text-center py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight drop-shadow-lg transition-all duration-300">
        Supercharge Your Productivity with AI
      </h1>
      <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto font-medium transition-all duration-300">
        Save hours every week. Automate, analyze, and accelerate your workflow with next-gen AI tools built for modern teams.
      </p>
      <CTAButton text="Start Free – No Credit Card" href="#" primary={true} />
    </section>
  );
};

export default HeroSection;