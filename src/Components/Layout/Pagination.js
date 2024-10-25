import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [];

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const generatePageNumbers = () => {
    if (totalPages <= 5) {
      // Show all pages if total pages is 5 or less
      return [...Array(totalPages).keys()].map((_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        // Show first 3 pages, last page, and ellipsis
        return [1, 2, 3, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        // Show first page, ellipsis, and last 3 pages
        return [1, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        // Show first page, ellipsis, current page - 1, current page, current page + 1, ellipsis, last page
        return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
      }
    }
  };

  return (
    <div className="flex items-center justify-between mt-4 w-full">
      <div className="text-gray-600">
        {startItem}-{endItem} of {totalItems}
      </div>
      <div className="flex items-center">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 mx-1 w-8 border rounded-lg ${
            currentPage === 1
              ? "text-gray-300 border-gray-300 bg-gray-100 cursor-not-allowed"
              : "text-gray-600 border-gray-400 hover:text-orange-500 hover:border-orange-500"
          }`}
        >
          &lt;
        </button>
        {generatePageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && handlePageClick(page)}
            className={`px-3 py-1 mx-1 w-8 border rounded-lg ${
              page === currentPage
                ? "bg-orange-500 text-white"
                : "text-gray-600 border-gray-400 hover:text-orange-500 hover:border-orange-500"
            } ${typeof page === "string" ? "cursor-default" : ""}`}
            disabled={typeof page === "string"}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 mx-1 w-8 border rounded-lg ${
            currentPage === totalPages
              ? "text-gray-300 border-gray-300 bg-gray-100 cursor-not-allowed"
              : "text-gray-600 border-gray-400 hover:text-orange-500 hover:border-orange-500"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
