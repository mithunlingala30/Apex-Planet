const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const taskList = document.getElementById("taskList");

// Add new task
function addTask() {
  const taskText = taskInput.value.trim();
  const dateTime = taskDateTime.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  const taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");

  const taskName = document.createElement("span");
  taskName.textContent = taskText;

  const taskTime = document.createElement("small");
  taskTime.textContent = dateTime ? `⏰ ${new Date(dateTime).toLocaleString()}` : "";

  taskInfo.appendChild(taskName);
  taskInfo.appendChild(taskTime);

  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  taskActions.innerHTML = `
    <button class="done" onclick="markDone(this)">✔</button>
    <button class="edit" onclick="editTask(this)">✏️</button>
    <button class="delete" onclick="deleteTask(this)">🗑️</button>
  `;

  li.appendChild(taskInfo);
  li.appendChild(taskActions);
  taskList.appendChild(li);

  taskInput.value = "";
  taskDateTime.value = "";
}

// Mark as completed
function markDone(btn) {
  const li = btn.closest("li");
  li.classList.toggle("completed");
}

// Edit task
function editTask(btn) {
  const li = btn.closest("li");
  const textSpan = li.querySelector(".task-info span");
  const newText = prompt("Edit your task:", textSpan.textContent);
  if (newText !== null && newText.trim() !== "") {
    textSpan.textContent = newText.trim();
  }
}

// Delete task
function deleteTask(btn) {
  const li = btn.closest("li");
  li.remove();
}
