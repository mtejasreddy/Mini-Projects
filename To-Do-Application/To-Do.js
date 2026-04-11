document.addEventListener("DOMContentLoaded", loadTasks);
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task..");
    return;
  }

  createTask(taskText);
  saveTask(taskText);

  taskInput.value = "";
}

function createTask(taskText, isCompleted = false) {
  const li = document.createElement("li");
  li.textContent = taskText;

  if (isCompleted) {
    li.classList.add("completed");
  }

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateLocalStorage();
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    updateLocalStorage();
  });
  li.appendChild(deleteButton);
  document.getElementById("taskList").appendChild(li);
}

function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: taskText, isCompleted: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => createTask(task.text, task.isCompleted));
}

function updateLocalStorage() {
  const taskElements = document.querySelectorAll("#taskList li");
  const tasks = [];
  taskElements.forEach((li) => {
    tasks.push({
      text: li.firstChild.textContent,
      isCompleted: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
