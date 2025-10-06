import React, { createContext, useContext, useState, useEffect } from "react";

const CompanyContext = createContext();
export const useCompany = () => useContext(CompanyContext);

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  // Fetch companies from JSON server
  useEffect(() => {
    fetch("http://localhost:5000/companies")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch company data");
        return res.json();
      })
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter & sort companies
  useEffect(() => {
    let result = [...companies];

    if (search) {
      result = result.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (industry) {
      result = result.filter((c) => c.industry === industry);
    }

    if (location) {
      result = result.filter((c) => c.location === location);
    }

    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "employees") {
      result.sort((a, b) => a.employees - b.employees);
    } else if (sortBy === "founded") {
      result.sort((a, b) => a.founded - b.founded);
    }

    setFiltered(result);
    setPage(1); // reset to first page on filter change
  }, [search, industry, location, sortBy, companies]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedData = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <CompanyContext.Provider
      value={{
        companies,
        filtered: paginatedData,
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
        page,
        setPage,
        totalPages,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
