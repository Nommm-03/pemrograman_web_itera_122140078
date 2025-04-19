import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';

describe('BookForm', () => {
  const mockOnAddBook = jest.fn();
  const mockOnEditBook = jest.fn();

  it('should add a new book on submit', () => {
    render(<BookForm onAddBook={mockOnAddBook} />);

    const titleInput = screen.getByPlaceholderText('Judul Buku');
    const authorInput = screen.getByPlaceholderText('Penulis');
    const submitButton = screen.getByText('Tambah Buku');

    fireEvent.change(titleInput, { target: { value: 'Buku Baru' } });
    fireEvent.change(authorInput, { target: { value: 'Penulis Baru' } });
    fireEvent.click(submitButton);

    expect(mockOnAddBook).toHaveBeenCalledWith({
      title: 'Buku Baru',
      author: 'Penulis Baru',
      status: 'milik',
    });
  });

  it('should show error if inputs are empty', () => {
    render(<BookForm onAddBook={mockOnAddBook} />);
    const submitButton = screen.getByText('Tambah Buku');

    fireEvent.click(submitButton);

    // Periksa apakah pesan error muncul di DOM
    expect(screen.getByText('Judul dan penulis tidak boleh kosong!')).toBeInTheDocument();
  });

  it('should reset error after successful submission', () => {
    render(<BookForm onAddBook={mockOnAddBook} />);

    const titleInput = screen.getByPlaceholderText('Judul Buku');
    const authorInput = screen.getByPlaceholderText('Penulis');
    const submitButton = screen.getByText('Tambah Buku');

    // Submit form tanpa mengisi input
    fireEvent.click(submitButton);
    expect(screen.getByText('Judul dan penulis tidak boleh kosong!')).toBeInTheDocument();

    // Isi input dan submit form
    fireEvent.change(titleInput, { target: { value: 'Buku Baru' } });
    fireEvent.change(authorInput, { target: { value: 'Penulis Baru' } });
    fireEvent.click(submitButton);

    // Pastikan pesan error hilang setelah submit berhasil
    expect(screen.queryByText('Judul dan penulis tidak boleh kosong!')).not.toBeInTheDocument();
  });
});