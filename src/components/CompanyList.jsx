import React from "react";
import CompanyCard from "./CompanyCard";
import Filters from "./Filters";
import Pagination from "./Pagination";
import { useCompany } from "../context/CompaniesContext";

export default function CompanyList() {
  const {
    filtered,
    loading,
    error,
    search,
    setSearch,
    industry,
    setIndustry,
    location,
    setLocation,
    sortBy,
    setSortBy,
    companies,
    page,
    setPage,
    totalPages,
  } = useCompany();

  const industries = [...new Set(companies.map((c) => c.industry))];
  const locations = [...new Set(companies.map((c) => c.location))];

  if (loading)
    return (
      <p className="text-center mt-6 text-blue-600 font-medium">Loading...</p>
    );
  if (error)
    return <p className="text-center mt-6 text-red-500 font-medium">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 ">
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg w-full">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-8 px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-md tracking-wide">
            Companies Directory
          </h1>
          <p className="text-blue-100 mt-2 text-lg sm:text-xl font-medium">
            Discover and explore top companies by industry and location
          </p>
        </div>
      </header>

      <Filters
        search={search}
        setSearch={setSearch}
        industry={industry}
        setIndustry={setIndustry}
        location={location}
        setLocation={setLocation}
        sortBy={sortBy}
        setSortBy={setSortBy}
        industries={industries}
        locations={locations}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.length ? (
          filtered.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No companies found.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      )}
    </div>
  );
}
