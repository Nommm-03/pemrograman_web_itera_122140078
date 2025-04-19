import React from 'react';
import { useBooks } from '../../context/BookContext';
import useBookStats from '../../hooks/useBookStats';
import './Stats.css';

function Stats() {
  // Ambil daftar buku dari context
  const { books } = useBooks();

  // Hitung statistik menggunakan custom hook
  const stats = useBookStats(books);

  return (
    <div className="stats-page">
      <h1>Statistik Buku</h1>

      {/* Tampilkan statistik dalam bentuk kartu */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>Buku Dimiliki</h3>
          <p>{stats.milik}</p>
        </div>

        <div className="stat-card">
          <h3>Sedang Dibaca</h3>
          <p>{stats.baca}</p>
        </div>

        <div className="stat-card">
          <h3>Ingin Dibeli</h3>
          <p>{stats.beli}</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;