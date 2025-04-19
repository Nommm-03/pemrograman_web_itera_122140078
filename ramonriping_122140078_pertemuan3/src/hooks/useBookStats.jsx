import { useMemo } from 'react';

const useBookStats = (books) => {
  // Gunakan useMemo untuk optimalisasi performa
  const stats = useMemo(() => {
    // Validasi input: Pastikan books adalah array
    if (!Array.isArray(books) || books.length === 0) {
      return {
        milik: 0,
        baca: 0,
        beli: 0,
      };
    }

    // Hitung statistik berdasarkan status buku
    return {
      milik: books.filter((book) => book.status === 'milik').length,
      baca: books.filter((book) => book.status === 'baca').length,
      beli: books.filter((book) => book.status === 'beli').length,
    };
  }, [books]); // Recompute hanya jika books berubah

  return stats;
};

export default useBookStats;