export function Nav() {
  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-serif text-teal-800">Solace</div>
        <div className="flex items-center gap-6">
          <button className="text-gray-700 hover:text-teal-800">Discover</button>
          <button className="text-gray-700 hover:text-teal-800">Who We Serve</button>
          <button className="text-gray-700 hover:text-teal-800">Resources</button>
          <button className="text-gray-700 hover:text-teal-800">Sign in</button>
          <button className="bg-teal-800 text-white px-6 py-2 rounded hover:bg-teal-900">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}