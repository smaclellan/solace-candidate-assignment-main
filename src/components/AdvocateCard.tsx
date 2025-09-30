interface Advocate {
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: string;
}

interface AdvocateCardProps {
  advocate: Advocate;
}

export function AdvocateCard({ advocate }: AdvocateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {advocate.firstName} {advocate.lastName}, {advocate.degree}
          </h3>
          <div className="space-y-2 text-gray-600">
            <p className="flex items-center gap-2">
              <span className="font-medium">Location:</span>
              {advocate.city}
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium">Experience:</span>
              {advocate.yearsOfExperience} years
            </p>
            <p className="flex items-center gap-2">
              <span className="font-medium">Phone:</span>
              {advocate.phoneNumber}
            </p>
            <div>
              <span className="font-medium">Specialties:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {advocate.specialties.map((specialty, i) => (
                  <span
                    key={i}
                    className="inline-block bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button className="bg-teal-800 text-white px-6 py-2 rounded hover:bg-teal-900 ml-4">
          Contact
        </button>
      </div>
    </div>
  );
}