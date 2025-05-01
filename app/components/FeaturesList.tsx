import React from 'react';

const FeaturesList = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-white tracking-tight drop-shadow-lg transition-all duration-300">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="group p-8 bg-gray-800 rounded-3xl shadow-xl border border-blue-800/40 hover:scale-105 hover:shadow-blue-900 transition-all duration-500 flex flex-col items-center text-center cursor-pointer">
            <div className="mb-5 text-blue-400 bg-blue-900/30 rounded-full p-4 shadow-lg transition-all duration-300 group-hover:bg-blue-700/60">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 4h-1v-4h-1m-4 4h-1v-4h-1m4 4h-1v-4h-1" /></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">AI-Powered Automation</h3>
            <p className="text-gray-300 mb-2">Automate repetitive tasks and focus on what matters most.</p>
          </div>
          {/* Feature 2 */}
          <div className="group p-8 bg-gray-800 rounded-3xl shadow-xl border border-blue-800/40 hover:scale-105 hover:shadow-blue-900 transition-all duration-500 flex flex-col items-center text-center cursor-pointer">
            <div className="mb-5 text-blue-400 bg-blue-900/30 rounded-full p-4 shadow-lg transition-all duration-300 group-hover:bg-blue-700/60">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">Real-Time Analytics</h3>
            <p className="text-gray-300 mb-2">Gain instant insights with live dashboards and smart reports.</p>
          </div>
          {/* Feature 3 */}
          <div className="group p-8 bg-gray-800 rounded-3xl shadow-xl border border-blue-800/40 hover:scale-105 hover:shadow-blue-900 transition-all duration-500 flex flex-col items-center text-center cursor-pointer">
            <div className="mb-5 text-blue-400 bg-blue-900/30 rounded-full p-4 shadow-lg transition-all duration-300 group-hover:bg-blue-700/60">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5" /></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-white">Collaboration Tools</h3>
            <p className="text-gray-300 mb-2">Work seamlessly with your team, wherever you are.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;