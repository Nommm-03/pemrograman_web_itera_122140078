PI = 3.14159

def luas_keliling_persegi(sisi : float) -> None:
		luas = sisi ** 2
		keliling = 4 * sisi
		return luas, keliling

def luas_keliling_persegi_panjang(panjang : float, lebar : float ):
		luas = panjang * lebar
		keliling = 2 * (panjang + lebar)
		return luas, keliling

def luas_keliling_lingkaran(jari_jari : float):
		luas = PI * float(jari_jari ** 2)
		keliling = 2 * PI * jari_jari
		return luas, keliling

def konversi_suhu(celcius : float, satuan : str):
		fahrenheit = (celcius * 9/5) + 32
		kelvin = celcius + 273.15
		reamur = celcius * 4/5
		if satuan.lower() == 'fahrenheit':
			return fahrenheit
		elif satuan.lower() == 'reamur':
			return reamur
		elif satuan.lower() == 'kelvin':
			return kelvin
		else:
			return None
