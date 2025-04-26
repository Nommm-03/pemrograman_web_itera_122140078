import math_operations as mathops
from math_operations import konversi_suhu

while True:
	print("================================")
	print("--PROGRAM PERHITUNGAN GEOMETRI--")
	print("================================")
	print("Pilih bentuk yang ingin dihitung:")
	print("1. Persegi")
	print("2. Persegi Panjang")
	print("3. Lingkaran")
	print("4. Konversi Suhu")
	print("5. Keluar")
	print("Pilih bentuk yang ingin dihitung (1-5): ", end='')
	choice = int(input())
	print("\n")

	if choice == 1:
			sisi = float(input("Masukkan panjang sisi persegi (cm): "))
			luas_persegi, keliling_persegi = mathops.luas_keliling_persegi(sisi)
			print(f"Persegi dengan sisi {sisi} cm:")
			print(f"- Luas Persegi     : {luas_persegi} cm²")
			print(f"- Keliling Persegi : {keliling_persegi} cm\n")
	elif choice == 2:
			panjang = float(input("Masukkan panjang persegi panjang (cm): "))
			lebar = float(input("Masukkan lebar persegi panjang (cm): "))
			luas_persegi_panjang, keliling_persegi_panjang = mathops.luas_keliling_persegi_panjang(panjang, lebar)
			print(f"Persegi Panjang dengan panjang {panjang} cm dan lebar {lebar} cm:")
			print(f"- Luas Persegi Panjang     : {luas_persegi_panjang} cm²")
			print(f"- Keliling Persegi Panjang : {keliling_persegi_panjang} cm\n")
	elif choice == 3:
			jari_jari = float(input("Masukkan jari-jari lingkaran: "))
			luas_lingkaran, keliling_lingkaran = mathops.luas_keliling_lingkaran(jari_jari)
			print(f"Lingkaran dengan jari-jari {jari_jari} cm:")
			print(f"- Luas Lingkaran     : {luas_lingkaran:.2f} cm²")
			print(f"- Keliling Lingkaran : {keliling_lingkaran:.2f} cm\n")
	elif choice == 4:
			celcius = float(input("Masukkan suhu dalam Celcius: "))
			satuan = input("Masukkan satuan yang diinginkan (fahrenheit, kelvin, reamur): ")
			result = konversi_suhu(celcius, satuan)
			if result is not None:
				print(f"Suhu dalam {satuan}     : {result}\n")
			else:
				print("Satuan salah. Tolong gunakan 'fahrenheit', 'kelvin', atau 'reamur'.\n")
	elif choice == 5:
			print("Terima kasih telah menggunakan program ini.\n")
			exit()
	else:
			print("Pilihan tidak valid. Silakan pilih antara 1-5.\n")
