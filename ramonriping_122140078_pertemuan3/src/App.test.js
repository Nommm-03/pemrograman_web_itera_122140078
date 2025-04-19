// App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>, // Palsukan BrowserRouter
  Routes: ({ children }) => <div>{children}</div>,       // Palsukan Routes
  Route: ({ element }) => element,                      // Palsukan Route
}));

// Mock BookContext
jest.mock('./context/BookContext', () => ({
  BookProvider: ({ children }) => <div>{children}</div>, // Palsukan BookProvider
}));

test('renders App component without crashing', () => {
  render(<App />);

  // Periksa apakah Navbar dirender
  const navbarElement = screen.getByText(/home/i); // Ganti dengan teks yang ada di Navbar
  expect(navbarElement).toBeInTheDocument();

  // Periksa apakah Home page dirender
  const homeElement = screen.getByText(/welcome/i); // Ganti dengan teks yang ada di halaman Home
  expect(homeElement).toBeInTheDocument();
});