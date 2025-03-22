function cekinput(nama, email, password) {
  if (nama === "" || email === "" || password === "") {
    alert("Data tidak boleh kosong");
  } else if (nama.length < 3) {
    alert("Nama harus lebih dari 3 karakter");
  } else if (email.indexOf("@") < 0) {
    alert("Email harus mengandung karakter '@'");
  } else if (password.length < 8) {
    alert("Password harus lebih dari 8 karakter");
  } else {
    alert("Data berhasil diinput");
  }
}

document.getElementById("btn-simpan").addEventListener("click", function () {
  const nama = document.getElementById("nama-input").value;
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  cekinput(nama, email, password);
});
