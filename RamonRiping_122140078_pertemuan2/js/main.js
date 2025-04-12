// Load data dari localStorage
const loadData = () => JSON.parse(localStorage.getItem("tasks")) || [];

// Simpan data ke localStorage
const saveData = (data) => {
  console.log("Saving data:", data);
  localStorage.setItem("tasks", JSON.stringify(data));
};

// Class Task
class Task {
  constructor(id, title, description, dueDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}

let tasks = loadData();

// Fungsi untuk menambahkan tugas
const addTask = (task) => {
  tasks.push(task);
  saveData(tasks);
  renderTasks();
};

// Fungsi untuk menghapus tugas
const deleteTask = (id) => {
  console.log("Deleting task with ID:", id);
  tasks = tasks.filter((task) => task.id !== id);
  console.log("Updated Tasks :", tasks);
  saveData(tasks);
  renderTasks();
};

// Fungsi untuk mengedit tugas
const editTask = (id) => {
  const taskToEdit = tasks.find((task) => task.id === id);
  if (taskToEdit) {
    console.log("Task to edit:", taskToEdit);
    document.getElementById("task-title").value = taskToEdit.title;
    document.getElementById("task-description").value = taskToEdit.description;
    document.getElementById("task-due").value = taskToEdit.dueDate;
    deleteTask(id);
  } else {
    console.error("Task not found for editing");
  }
};

// Fungsi untuk merender daftar tugas
const renderTasks = () => {
  const taskContainer = document.getElementById("task-container");
  taskContainer.innerHTML = ""; // Kosongkan kontainer

  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("p-4", "bg-white", "rounded-lg", "shadow-md");

    taskElement.innerHTML = `
          <h3 class="text-lg font-semibold">${task.title}</h3>
          <p class="text-gray-600">${task.description}</p>
          <p class="text-sm text-gray-500">Due Date: ${task.dueDate}</p>
          <div class="mt-2 space-x-2">
              <button id="edit-${task.id}" class="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200">Edit</button>
              <button id="delete-${task.id}" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200">Hapus</button>
          </div>
      `;

    // Tambahkan event listener
    taskElement
      .querySelector("#edit-" + task.id)
      .addEventListener("click", () => editTask(task.id));
    taskElement
      .querySelector("#delete-" + task.id)
      .addEventListener("click", () => deleteTask(task.id));

    taskContainer.appendChild(taskElement);
  });
};

// Event listener untuk form submit
document.getElementById("task-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-description").value;
  const dueDate = document.getElementById("task-due").value;

  if (title && description && dueDate) {
    const newTask = new Task(Date.now(), title, description, dueDate);
    addTask(newTask);
    document.getElementById("task-form").reset();
  } else {
    alert("Harap lengkapi semua field!");
  }
});

// Fungsi simulasi untuk mendapatkan tanggal dan waktu dengan delay
const fetchDateTime = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const now = new Date();

      // Format tanggal (contoh: "Minggu, 15 Oktober 2023")
      const optionsDate = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = now.toLocaleDateString("id-ID", optionsDate);

      // Format waktu (contoh: "14:30")
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const formattedTime = `${hours}:${minutes}`;

      resolve({ date: formattedDate, time: formattedTime });
    }, 1000); // Delay 1 detik
  });
};

// Fungsi untuk menampilkan tanggal dan waktu di dashboard
const displayDateTime = async () => {
  const dateTimeContainer = document.getElementById("date-container");

  try {
    const { date, time } = await fetchDateTime(); // Panggil fungsi asinkron
    dateTimeContainer.innerHTML = `
      <p class="text-gray-800 font-semibold">${date}</p>
      <p class="text-gray-600">Waktu: ${time}</p>
    `;
  } catch (error) {
    console.error("Error fetching date and time:", error);
    dateTimeContainer.innerHTML =
      "<p class='text-red-500'>Gagal memuat tanggal dan waktu.</p>";
  }
};

// Perbarui tanggal dan waktu setiap detik
const updateDateTime = () => {
  displayDateTime(); // Tampilkan tanggal dan waktu awal
  setInterval(displayDateTime, 1000); // Perbarui setiap detik
};

// Panggil fungsi updateDateTime saat aplikasi dimuat
document.addEventListener("DOMContentLoaded", () => {
  tasks = loadData();
  renderTasks();
  updateDateTime(); // Memuat dan memperbarui tanggal dan waktu
});
