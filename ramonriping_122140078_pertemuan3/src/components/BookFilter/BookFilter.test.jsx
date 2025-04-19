import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from './BookFilter';

describe('BookFilter', () => {
  const mockOnFilterChange = jest.fn();

  it('should call onFilterChange when dropdown value changes', () => {
    render(<BookFilter onFilterChange={mockOnFilterChange} />);

    const dropdown = screen.getByRole('combobox');
    fireEvent.change(dropdown, { target: { value: 'baca' } });

    expect(mockOnFilterChange).toHaveBeenCalledWith('baca');
  });
});