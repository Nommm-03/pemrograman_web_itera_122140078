import React from 'react';
import PropTypes from 'prop-types';
import './BookItem.css';

function BookItem({ book, onEdit, onDelete }) {
  // Jangan render jika data buku tidak valid
  if (!book || !book.id) {
    console.error('Invalid book data:', book);
    return null;
  }

  return (
    <div className="book-item">
      {/* {Bagian Konten Buku} */}
      <div className="book-content">
        <span className="book-title">{book.title || 'Untitled Book'}</span>
        <span className="book-author"> - By : {book.author || 'Unknown Author'}</span>
      </div>
      {/* {Bagian Tombol Actions} */}
      <div className="book-actions">
        {/* {Tombol Edit} */}
        <button 
          className="edit-btn" 
          onClick={() => onEdit?.(book.id)}
          aria-label={`Edit book: ${book.title}`}
        >
          Edit
        </button>
        <button 
          className="delete-btn" 
          onClick={() => onDelete?.(book.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookItem;