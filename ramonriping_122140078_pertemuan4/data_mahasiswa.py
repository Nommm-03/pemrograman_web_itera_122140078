data_mahasiswa = [
		{
			"nama": "Budi",
			"nim": "122110001",
			"nilai_uts": 65,
			"nilai_uas": 70,
			"nilai_tugas": 30,
		},
		{
			"nama": "Siti",
			"nim": "122110002",
			"nilai_uts": 78,
			"nilai_uas": 80,
			"nilai_tugas": 83,
		},
		{
			"nama": "Andi",
			"nim": "122110003",
			"nilai_uts": 85,
			"nilai_uas": 90,
			"nilai_tugas": 90,
		},
		{
			"nama": "Dewi",
			"nim": "122110004",
			"nilai_uts": 90,
			"nilai_uas": 95,
			"nilai_tugas": 88,
		},
		{
			"nama": "Rina",
			"nim": "122110005",
			"nilai_uts": 82,
			"nilai_uas": 87,
			"nilai_tugas": 80,
		}
	]

# Rumus untuk menghitung nilai akhir
for mahasiswa in data_mahasiswa:
	nilai_akhir = mahasiswa["nilai_uts"] * 0.3 + mahasiswa["nilai_uas"] * 0.4 + mahasiswa["nilai_tugas"] * 0.3
	if nilai_akhir >= 80:
		mahasiswa["grade"] = "A"
	elif nilai_akhir >= 70:
		mahasiswa["grade"] = "B"
	elif nilai_akhir >= 60:
		mahasiswa["grade"] = "C"
	elif nilai_akhir >= 50:
		mahasiswa["grade"] = "D"
	else:
		mahasiswa["grade"] = "E"

# Format Table
print("\nPENGELOLAAN DATA NILAI MAHASISWA")
print("============================================")
print("No | Nama  | NIM       | Nilai Akhir | Grade")
print("--------------------------------------------")
for i, mahasiswa in enumerate(data_mahasiswa, start=1):
	nilai_akhir = mahasiswa["nilai_uts"] * 0.3 + mahasiswa["nilai_uas"] * 0.4 + mahasiswa["nilai_tugas"] * 0.3
	mahasiswa["nilai_akhir"] = nilai_akhir
	print(f"{i:<2} | {mahasiswa['nama']:<5} | {mahasiswa['nim']:<9} |    {nilai_akhir:.2f}    |   {mahasiswa['grade']}")
print("=============================================")
print("Nilai Tertinggi:", max(mahasiswa["nilai_akhir"] for mahasiswa in data_mahasiswa))
print("Nilai Terendah:", min(mahasiswa["nilai_akhir"] for mahasiswa in data_mahasiswa))
print("\n")