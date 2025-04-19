import { render, screen } from '@testing-library/react';
import Stats from './Stats';
import { useBooks } from '../../context/BookContext';
import useBookStats from '../../hooks/useBookStats';

jest.mock('../../context/BookContext', () => ({
  useBooks: jest.fn(),
}));

jest.mock('../../hooks/useBookStats', () => jest.fn());

describe('Stats', () => {
  it('should display book statistics', () => {
    useBooks.mockReturnValue({
      books: [
        { id: '1', status: 'milik' },
        { id: '2', status: 'baca' },
        { id: '3', status: 'beli' },
      ],
    });

    useBookStats.mockReturnValue({
      milik: 1,
      baca: 1,
      beli: 1,
    });

    render(<Stats />);

    // Periksa judul statistik
    expect(screen.getByText('Buku Dimiliki')).toBeInTheDocument();
    expect(screen.getByText('Sedang Dibaca')).toBeInTheDocument();
    expect(screen.getByText('Ingin Dibeli')).toBeInTheDocument();

    // Periksa nilai statistik menggunakan within
    const ownedCard = screen.getByText('Buku Dimiliki').closest('.stat-card');
    const readingCard = screen.getByText('Sedang Dibaca').closest('.stat-card');
    const wishlistCard = screen.getByText('Ingin Dibeli').closest('.stat-card');

    expect(ownedCard).toHaveTextContent('1'); // Nilai Buku Dimiliki
    expect(readingCard).toHaveTextContent('1'); // Nilai Sedang Dibaca
    expect(wishlistCard).toHaveTextContent('1'); // Nilai Ingin Dibeli
  });
});