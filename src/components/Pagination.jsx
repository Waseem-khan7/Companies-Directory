import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="flex items-center justify-center gap-2 mt-6 ">
      <button
        onClick={prev}
        disabled={page === 1}
        className="px-3 py-1 border rounded-md disabled:opacity-50 transition bg-blue-600 text-white hover:scale-105"
      >
        Prev
      </button>
      <span className="font-medium">
        Page {page} / {totalPages}
      </span>
      <button
        onClick={next}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded-md disabled:opacity-50 transition bg-blue-600 text-white hover:scale-105"
      >
        Next
      </button>
    </div>
  );
}
