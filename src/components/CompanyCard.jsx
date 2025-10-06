import React from "react";

export default function CompanyCard({ company }) {
  return (
    <div className="p-4 border rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
          {company.industry}
        </span>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-medium">Location:</span> {company.location}
        </p>
        <p>
          <span className="font-medium">Employees:</span> {company.employees}
        </p>
        <p>
          <span className="font-medium">Founded:</span> {company.founded}
        </p>
      </div>

      <div className="mt-3">
        <button
          className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors cursor-pointer hover:scale-105"
          onClick={() => alert(`Viewing ${company.name}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
