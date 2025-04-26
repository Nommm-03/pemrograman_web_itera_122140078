print("====PROGRAM PENGHITUNG BMI====")
print("Selamat datang di program penghitung BMI!")

# Variabel
berat_badan = float(input("Masukkan berat badan (kg) : "))  # Berat badan (kg)
tinggi_badan = float(input("Masukkan tinggi badan (m) : "))  # Tinggi badan (m)

# Rumus untuk menghitung BMI
bmi = berat_badan / (tinggi_badan ** 2)
print(f"BMI Anda : {bmi:.2f}")

# Fungsi untuk menentukan kategori BMI

if bmi < 18.5:
	print("Kategori : Berat badan kurang")
elif 18.5 <= bmi < 25:
	print("Kategori : Berat badan normal")
elif 25 <= bmi < 30:
	print("Kategori : Berat badan berlebih")
else:
	print("Kategori : Obesitas")