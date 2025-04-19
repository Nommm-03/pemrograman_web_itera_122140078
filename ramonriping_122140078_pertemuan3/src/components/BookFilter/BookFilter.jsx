import React from 'react';
import './BookFilter.css'

function BookFilter({ onFilterChange }) {
  // Handler untuk mengupdate filter saat dropdown berubah
  const handleChange = (e) => {
    onFilterChange(e.target.value); // Kirim nilai filter ke parent component
  };

  return (
    <div className="book-filter">
      {/* Label untuk dropdown filter */}
      <label>Filter by Status:</label>
      {/* Dropdown untuk memilih status filter */}
      <select onChange={handleChange}>
        <option value="">Semua</option> {/* Tampilkan semua buku */}
        <option value="milik">Dimiliki</option> {/* Filter buku dimiliki */}
        <option value="baca">Sedang Dibaca</option> {/* Filter buku sedang dibaca */}
        <option value="beli">Ingin Dibeli</option> {/* Filter buku ingin dibeli */}
      </select>
    </div>
  );
}

export default BookFilter;