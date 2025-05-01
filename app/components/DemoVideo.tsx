import React from 'react';

const DemoVideo = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight drop-shadow-lg transition-all duration-300">See it in Action</h2>
        <div className="aspect-video max-w-3xl mx-auto rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-700/60 bg-gray-900 hover:scale-105 hover:shadow-blue-900 transition-all duration-500">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;