import React, { useState } from 'react';
import './SearchBar.css'

function SearchBar({ onSearch }) {
  // State untuk menyimpan query pencarian
  const [query, setQuery] = useState('');

  // Handler untuk mengupdate query pencarian
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase(); // Ambil nilai dari input dan konversi ke lower case
    setQuery(value); // Update state query
    onSearch(value); // Kirim query ke parent component
  };

  return (
    <div className="search-bar">
      {/* Input untuk pencarian */}
      <input
        type="text"
        placeholder="Cari buku..."
        value={query} // Bind nilai input ke state
        onChange={handleChange} // Panggil handler saat input berubah
      />
    </div>
  );
}

export default SearchBar;