import React from 'react';

const SearchFilter = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search users..."
        className="search-input"
      />
    </div>
  );
};

export default SearchFilter;
