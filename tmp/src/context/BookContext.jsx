import React, { createContext, useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Context API
const BookContext = createContext();

// Reducer untuk mengelola state books
const bookReducer = (state, action) => {
  console.log('Reducer action:', action); // Debugging

  switch (action.type) {
    case 'ADD_BOOK':
      // Pastikan payload memiliki struktur yang benar
      const newBook = {
        id: action.payload.id || Date.now().toString(),
        title: action.payload.title || 'Untitled Book',
        author: action.payload.author || 'Unknown Author',
        status: action.payload.status || 'milik',
      };
      return [...state, newBook];

    case 'DELETE_BOOK':
      return state.filter((book) => book.id !== action.payload);

    case 'UPDATE_BOOK':
      return state.map((book) =>
        book.id === action.payload.id ? { ...book, ...action.payload } : book
      );

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

// Komponen BookProvider
export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage('books', []);

  // Validasi dan perbaiki data saat pertama kali dimuat
  const validatedBooks = Array.isArray(books)
    ? books.map((book, index) => ({
        id: book.id || `${index + 1}`,
        title: book.title || 'Untitled Book',
        author: book.author || 'Unknown Author',
        status: book.status || 'milik',
      }))
    : [];

  // State lokal dengan reducer
  const [state, dispatch] = useReducer(bookReducer, validatedBooks);

  // Sinkronisasi state ke LocalStorage saat berubah
  React.useEffect(() => {
    console.log('Current state:', state); // Debugging
    console.log('Syncing state to localStorage:', state); // Debugging
    setBooks(state); // Pastikan ini dipanggil dengan nilai yang benar
  }, [state, setBooks]);

  // Provider Value
  const value = { books: state, dispatch };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
}

// Custom hook untuk menggunakan context
export function useBooks() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBooks must be used within a BookProvider');
  }
  return context;
}