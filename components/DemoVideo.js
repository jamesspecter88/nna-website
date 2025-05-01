export default function DemoVideo() {
  return (
    <section id="demo" className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">See It In Action</h2>
        <p className="mb-6 text-gray-700">Watch how easy it is to generate a personalized cold email with AI.</p>
        <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 md:h-96"
          ></iframe>
        </div>
      </div>
    </section>
  );
}