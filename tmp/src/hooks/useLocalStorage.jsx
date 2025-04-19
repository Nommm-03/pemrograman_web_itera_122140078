import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Dapatkan dari localStorage berdasarkan key
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      console.log(`Reading from localStorage for key "${key}":`, item); // Debugging
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Effect untuk update localStorage ketika storedValue berubah
  useEffect(() => {
    try {
      console.log(`Updating localStorage for key "${key}" with value:`, storedValue); // Debugging
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error updating localStorage for key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;