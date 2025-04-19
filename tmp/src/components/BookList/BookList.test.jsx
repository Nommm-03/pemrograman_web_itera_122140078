import { render, screen, fireEvent } from '@testing-library/react';
import BookList from './BookList';

const mockBooks = [
  { id: '1', title: 'Buku 1', author: 'Penulis 1', status: 'milik' },
  { id: '2', title: 'Buku 2', author: 'Penulis 2', status: 'baca' },
];

describe('BookList', () => {
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  it('should render list of books', () => {
    render(<BookList books={mockBooks} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    expect(screen.getByText('Buku 1')).toBeInTheDocument();
    expect(screen.getByText('Buku 2')).toBeInTheDocument();
  });

  it('should call onEdit when edit button is clicked', () => {
    render(<BookList books={mockBooks} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    const editButton = screen.getAllByText('Edit')[0];
    fireEvent.click(editButton);

    expect(mockOnEdit).toHaveBeenCalledWith(mockBooks[0]);
  });

  it('should call onDelete when delete button is clicked', () => {
    render(<BookList books={mockBooks} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith('1');
  });
});