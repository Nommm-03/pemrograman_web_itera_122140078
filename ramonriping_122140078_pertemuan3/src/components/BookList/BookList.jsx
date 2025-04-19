import React from 'react';
import PropTypes from 'prop-types';
import BookItem from '../BookItem/BookItem';

function BookList({ books, onEdit, onDelete }) {
  // Jika tidak ada buku, tampilkan pesan bahwa list kosong
  if (!Array.isArray(books) || books.length === 0) {
    return <p className="empty-message">Belum ada buku. Tambahkan buku baru!</p>;
  }

  return (
    <div className="book-list">
      {/* Render setiap buku menggunakan BookItem */}
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onEdit={() => {
            console.log('Editing book:', book); // Debugging
            onEdit(book);
          }}
          onDelete={onDelete || (() => {})} // Fallback jika onDelete tidak tersedia
        />
      ))}
    </div>
  );
}

// Validasi tipe props menggunakan PropTypes
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;