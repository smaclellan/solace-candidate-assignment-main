import { AdvocateCard } from './AdvocateCard';

interface Advocate {
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: string;
}

interface AdvocatesListProps {
  advocates: Advocate[];
}

export function AdvocatesList({ advocates }: AdvocatesListProps) {
  if (advocates.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center text-gray-500">
        No advocates found. Try adjusting your search.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {advocates.map((advocate, index) => (
        <AdvocateCard key={index} advocate={advocate} />
      ))}
    </div>
  );
}