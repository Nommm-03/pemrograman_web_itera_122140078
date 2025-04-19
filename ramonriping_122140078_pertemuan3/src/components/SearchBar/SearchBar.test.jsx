import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const mockOnSearch = jest.fn();

  it('should update query on input change', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    // Ambil elemen input berdasarkan placeholder
    const searchInput = screen.getByPlaceholderText('Cari buku...');

    // Simulasikan perubahan input dengan nilai 'React'
    fireEvent.change(searchInput, { target: { value: 'React' } });

    // Pastikan nilai yang dikirim ke mockOnSearch adalah lowercase
    expect(mockOnSearch).toHaveBeenCalledWith('react');
  });
});