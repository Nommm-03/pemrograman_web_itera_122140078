from abc import ABC, abstractmethod

# Abstract Base Class
class LibraryItem(ABC):
	"""
  Kelas abstrak sebagai dasar untuk semua item di perpustakaan.
  """
	def __init__(self, id:str, judul:str):
		self._id = id
		self.judul = judul

	"""Getter untuk mendapatkan judul item perpustakaan."""
	@property
	def title(self):
		return self.judul

	"""Metode abstrak untuk menampilkan informasi item perpustakaan."""
	@abstractmethod
	def tampilkan(self):
		pass
	
	"""Metode untuk menampilkan ID item perpustakaan jika item diprint secara default."""
	def __str__(self):
		return f"Judul: {self.judul} (ID: {self._id})"

# Subclass for Book
class Book(LibraryItem):
	"""
  Kelas untuk representasi buku di perpustakaan.
  """
	def __init__(self, id:str, judul:str, author:str):
		super().__init__(id, judul)
		self.author = author

	def tampilkan(self):
		print(f"=========Daftar Buku==============")
		print(f"Buku: {self.judul}, Penulis: {self.author}")

# Subclass for Magazine
class Magazine(LibraryItem):
	"""
  Kelas untuk representasi majalah di perpustakaan.
  """
	def __init__(self, id:str, judul:str, issue_number:int):
		super().__init__(id, judul)
		self.issue_number = issue_number

	def tampilkan(self):
		print(f"=========Daftar Majalah==============")
		print(f"Majalah: {self.judul}, Edisi: {self.issue_number}")

# Kelas untuk mengelola koleksi perpustakaan
class Library:
	"""
  Kelas untuk mengelola sistem perpustakaan.
  """
	def __init__(self):
		self.__items = [] # Koleksi item perpustakaan

	def tambah_item(self, item:LibraryItem):
		"""Menambahkan item ke koleksi perpustakaan."""
		self.__items.append(item)

	def tampilkan_semua_item(self):
		"""Menampilkan semua item di koleksi perpustakaan."""
		for item in self.__items:
			print("\n")
			item.tampilkan()

	def cari_item_by_id(self, id:str):
		"""Mencari item berdasarkan ID."""
		for item in self.__items:
			if item._id == id:
				return item
		return None
	
	def cari_item_by_judul(self, judul:str):
		"""Mencari item berdasarkan judul."""
		for item in self.__items:
			if item.title == judul:
				return item
		return None
	
# Fungsi Main untuk menjalankan program
def main():
	library = Library()

	while True:
		print("\n=================================")
		print("       Sistem Perpustakaan       ")
		print("=================================")
		print("1. Tambah Buku")
		print("2. Tambah Majalah")
		print("3. Tampilkan Semua Item")
		print("4. Cari Item Berdasarkan ID")
		print("5. Cari Item Berdasarkan Judul")
		print("6. Keluar")
		print("=================================")
		print("Pilih opsi (1-6): ", end="")
		opsi = input()

		if opsi == "1":
			# Menambahkan Buku
			print("\n=================================")
			print("        Menambahkan Buku         ")
			print("=================================")
			id = input("Masukkan ID Buku: ")
			judul = input("Masukkan Judul Buku: ")
			penulis = input("Masukkan Penulis Buku: ")
			library.tambah_item(Book(id, judul, penulis))
			print("Buku berhasil ditambahkan.")
		elif opsi == "2":
			# Menambahkan Majalah
			print("\n=================================")
			print("        Menambahkan Majalah      ")
			print("=================================")
			id = input("Masukkan ID Majalah: ")
			judul = input("Masukkan Judul Majalah: ")
			edisi = int(input("Masukkan Edisi Majalah: "))
			library.tambah_item(Magazine(id, judul, edisi))
			print("Majalah berhasil ditambahkan.")
		elif opsi == "3":
			# Menampilkan semua item di perpust
			print("\n=================================")
			print("     Menampilkan Semua Item      ")
			print("=================================")
			library.tampilkan_semua_item()
		elif opsi == "4":
			# Mencari item berdasarkan ID
			print("\n=================================")
			print("   Mencari Item Berdasarkan ID   ")
			print("=================================")
			id = input("Masukkan ID item yang dicari: ")
			item = library.cari_item_by_id(id)
			if item:
				item.tampilkan()
			else:
				print("Item tidak ditemukan.")
		elif opsi == "5":
			# Mencari item berdasarkan judul
			print("\n=================================")
			print(" Mencari Item Berdasarkan Judul  ")
			print("=================================")
			judul = input("Masukkan judul item yang dicari: ")
			item = library.cari_item_by_judul(judul)
			if item:
				item.tampilkan()
			else:
				print("Item tidak ditemukan.")
		elif opsi == "6":
			# Keluar dari program
			print("Keluar dari program.")
			quit()
		else:
			# Opsi tidak valid
			print("Opsi tidak valid. Silakan coba lagi.")

# Program utama
if __name__ == "__main__":
	main()