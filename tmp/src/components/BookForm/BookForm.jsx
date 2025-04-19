import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './BookForm.css';

function BookForm({ onAddBook, editingBook, onEditBook }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    status: 'milik'
  });
  const [error, setError] = useState(''); // State untuk pesan error

  // Jika editingBook berubah, perbarui state form dengan data buku yang diedit
  useEffect(() => {
    if (editingBook) {
      setFormData({
        title: editingBook.title || '',
        author: editingBook.author || '',
        status: editingBook.status || 'milik',
      });
    } else {
      // Reset form jika tidak dalam mode edit
      setFormData({ title: '', author: '', status: 'milik' });
    }
    setError(''); // Reset error saat form direset
  }, [editingBook]);

  // Handler untuk update state saat input berubah
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi input
    if (!formData.title || !formData.author) {
      setError('Judul dan penulis tidak boleh kosong!');
      return;
    }

    // Jika dalam mode edit, panggil handler edit
    if (editingBook) {
      onEditBook({ ...editingBook, ...formData });
    } else {
      // Jika dalam mode tambah, panggil handler tambah
      onAddBook(formData);
    }
    
    // Reset form
    setFormData({ title: '', author: '', status: 'milik'});
    setError(''); // Reset error setelah submit berhasil
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      {/* {Tampikan pesan error jika ada} */}
      {error && <p className="error">{error}</p>}

      {/* Input untuk judul buku */}
      <input
        type="text"
        name='title'
        placeholder="Judul Buku"
        value={formData.title}
        onChange={handleChange}
        required
      />
      {/* Input untuk Penulis */}
      <input
        type="text"
        name='author'
        placeholder="Penulis"
        value={formData.author}
        onChange={handleChange}
        required
      />
      {/* Dropdown untuk memilih status buku */}
      <select 
        name="status" 
        value={formData.status}
        onChange={handleChange}
      >
        <option value="milik">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      {/* Tombol untuk submit form */}
      <button type="submit">{editingBook ? 'Simpan Perubahan' : 'Tambah Buku'}</button>
    </form>
  );
}

// Validasi tipe props menggunakan PropTypes
BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
  editingBook: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
  onEditBook: PropTypes.func,
};

// Nilai default untuk props opsional
BookForm.defaultProps = {
  editingBook: null,
  onEditBook: () => {}
}

export default BookForm;