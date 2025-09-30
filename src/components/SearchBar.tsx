interface SearchBarProps {
  searchTerm: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

export function SearchBar({ searchTerm, onChange, onReset }: SearchBarProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
      <h2 className="text-2xl font-serif text-gray-900 mb-6">
        Search Advocates
      </h2>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={onChange}
          placeholder="Search by name, city, degree, specialty, or experience..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          onClick={onReset}
          className="bg-gray-100 text-gray-700 px-6 py-3 rounded hover:bg-gray-200 font-medium"
        >
          Reset Search
        </button>
      </div>
      {searchTerm && (
        <p className="text-sm text-gray-600">
          Searching for: <span className="font-medium">{searchTerm}</span>
        </p>
      )}
    </div>
  );
}