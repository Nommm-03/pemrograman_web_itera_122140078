import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useBooks } from '../../context/BookContext';
import './Home.css';
import BookFilter from '../../components/BookFilter/BookFilter';

function Home() {
  // State untuk menyimpan daftar books
  const { books, dispatch } = useBooks();
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingBook, setEditingBook] = useState(null);

  // Handler untuk menambah book baru
  const handleAddBook = (newBook) => {
    dispatch({ type: 'ADD_BOOK', payload: newBook });
  };

  // Handler untuk filter buku
  const handleFilterChange = (status) => {
    setFilter(status);
  };

  // Handler untuk pencarian buku
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  // Filter dan cari buku
  const filteredBooks = books
    .filter((book) => !filter || book.status === filter)
    .filter((book) =>
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery)
    );

  // Handler untuk menghapus book
  const handleDeleteBook = (bookId) => {
    dispatch({ type: 'DELETE_BOOK', payload: bookId });
  };

  // Handler untuk mengedit buku
  const handleEditBook = (updatedBook) => {
    console.log('Dispatching UPDATE_BOOK with payload:', updatedBook); // Debugging
    dispatch({ type: 'UPDATE_BOOK', payload: updatedBook });
    setEditingBook(null); // Reset mode edit setelah disimpan
  };

  return (
    <div className="home">
      <Header
        title="React Book Manager"
        description="Kelola buku anda dengan mudah"
      />

      <main className="container">
        {/* Statistik hanya menampilkan total buku */}
        <div className="stats">
          <p>Total: {books.length} buku</p>
        </div>

        <BookFilter onFilterChange={handleFilterChange} />
        <SearchBar onSearch={handleSearch} />

        <BookForm
          onAddBook={handleAddBook}
          editingBook={editingBook}
          onEditBook={handleEditBook}
        />

        <BookList
          books={filteredBooks}
          onEdit={(book) => setEditingBook(book)}
          onDelete={handleDeleteBook}
        />
      </main>
    </div>
  );
}

export default Home;