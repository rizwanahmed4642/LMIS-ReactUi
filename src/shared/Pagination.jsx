import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using Next.js. Use 'a' or another Link method if you're not.

const Pagination = ({ totalItems, pageSize, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / pageSize));

  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Prevent invalid page numbers
    setCurrentPage(page);
    onPageChange(page); // Trigger callback to fetch new data
  };

  // Handle previous and next navigation
  const handlePrevClick = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / pageSize)); // Update total pages if total items or page size change
  }, [totalItems, pageSize]);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <Link
        href="#"
        className={`pagination-link ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={handlePrevClick}
      >
        Previous
      </Link>
      {pageNumbers.map((page) => (
        <Link
          key={page}
          href="#"
          className={`pagination-link ${currentPage === page ? 'active' : ''}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Link>
      ))}
      {totalPages > 5 && <span>...</span>}
      <Link
        href="#"
        className={`pagination-link ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={handleNextClick}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
