export function Hero() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-serif text-gray-900 mb-6">
          Don't navigate your health alone.
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Find an advocate who will help untangle your healthcare by phone or
          video—no matter what you need—covered by Medicare.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-amber-500 text-white px-8 py-3 rounded hover:bg-amber-600 font-medium">
            Find an Advocate
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded hover:bg-gray-50 font-medium">
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
}