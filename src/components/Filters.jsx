import React from "react";

export default function Filters({
  search,
  setSearch,
  industry,
  setIndustry,
  location,
  setLocation,
  sortBy,
  setSortBy,
  industries,
  locations,
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 bg-white p-4 rounded-2xl shadow-md mt-6 mb-8 border border-gray-100">
      <input
        type="text"
        placeholder="🔍 Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
      />

      <select
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className="w-full sm:w-48 px-4 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
      >
        <option value="">All Industries</option>
        {industries.map((ind) => (
          <option key={ind} value={ind}>
            {ind}
          </option>
        ))}
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full sm:w-48 px-4 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full sm:w-40 px-4 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
      >
        <option value="">Sort</option>
        <option value="name">Name (A-Z)</option>
        <option value="employees">Employees</option>
        <option value="founded">Founded Year</option>
      </select>
    </div>
  );
}
