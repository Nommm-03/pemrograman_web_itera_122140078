// Manipulasi DOM
const domOutput = document.getElementById("dom-output");

// Fungsi untuk menambahkan item
document
  .getElementById("btn-tambah-item")
  .addEventListener("click", function () {
    const newItem = document.createElement("div");
    const act = document.getElementById("act-input").value;
    const checkbox = document.createElement("input");
    newItem.className = "p-2 mb-2 bg-gray-100 rounded";
    newItem.innerText = `${act}`;
    checkbox.type = "checkbox";
    checkbox.className = "mr-2";
    newItem.prepend(checkbox);
    domOutput.appendChild(newItem);
    saveToLocalStorage(); // Simpan data setelah menambahkan item
  });

// Fungsi untuk menghapus item
document
  .getElementById("btn-hapus-item")
  .addEventListener("click", function () {
    if (domOutput.lastChild) {
      domOutput.removeChild(domOutput.lastChild);
    }
    saveToLocalStorage(); // Simpan data setelah menghapus item
  });

// Fungsi untuk menyimpan data ke Local Storage
function saveToLocalStorage() {
  const items = [];
  domOutput.querySelectorAll("div").forEach((item) => {
    const text = item.innerText.trim();
    const isChecked = item.querySelector("input[type='checkbox']").checked;
    items.push({ text, isChecked });
  });
  localStorage.setItem("todoList", JSON.stringify(items));
}

// Fungsi untuk memuat data dari Local Storage
function loadFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("todoList")) || [];
  items.forEach(({ text, isChecked }) => {
    const newItem = document.createElement("div");
    const checkbox = document.createElement("input");
    newItem.className = "p-2 mb-2 bg-gray-100 rounded";
    newItem.innerText = text;
    checkbox.type = "checkbox";
    checkbox.className = "mr-2";
    checkbox.checked = isChecked;
    newItem.prepend(checkbox);
    domOutput.appendChild(newItem);
  });
}

// Panggil fungsi untuk memuat data saat halaman dimuat
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

// Event listener untuk tombol simpan data
document
  .getElementById("btn-simpan-item")
  .addEventListener("click", function () {
    saveToLocalStorage(); // Simpan data secara eksplisit
    alert("Data berhasil disimpan!");
  });
