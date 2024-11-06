// Simulate an API call to fetch tasks from a server
function fetchTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Finish JavaScript project', completed: false },
        { id: 2, text: 'Read a book', completed: true },
        { id: 3, text: 'Go grocery shopping', completed: false },
      ]);
    }, 1000);
  });
}

// DOM Elements (Fixed element ID typo for taskInput)
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');  // Fixed typo: 'task-input' is the correct ID
const addButton = document.getElementById('add-button');
const errorMessage = document.getElementById('error-message');

// Task storage (in-memory for now)
let tasks = [];

// Function to render tasks to the screen
function renderTasks() {
  taskList.innerHTML = ''; // Clear the list before rendering

  if (tasks.length === 0) {
    taskList.innerHTML = '<li>No tasks to show</li>';
  } else {
    tasks.forEach(task => {
      const taskElement = document.createElement('li');
      taskElement.className = task.completed ? 'completed' : '';

      const taskText = document.createElement('span');
      taskText.textContent = task.text;
      taskText.className = 'task-text';
      taskElement.appendChild(taskText);

      // Edit Button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'edit-btn';
      editButton.onclick = () => editTask(task.id);
      taskElement.appendChild(editButton);

      // Delete Button (Fixed missing delete handler)
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-btn';
      deleteButton.onclick = () => deleteTask(task.id);  // Added delete handler
      taskElement.appendChild(deleteButton);

      // Mark as Completed Button
      const completeButton = document.createElement('button');
      completeButton.textContent = task.completed ? 'Undo' : 'Complete';
      completeButton.className = 'complete-btn';
      completeButton.onclick = () => toggleComplete(task.id);
      taskElement.appendChild(completeButton);

      taskList.appendChild(taskElement);
    });
  }
}

// Function to add a new task
function addTask(text) {
  if (!text.trim()) {
    showError('Task cannot be empty.');
    return;
  }

  const newTask = {
    id: Date.now(), // Using timestamp as a unique ID
    text: text,
    completed: false,
  };

  tasks.push(newTask);
  renderTasks();
  taskInput.value = ''; // Clear the input field
  hideError();
}

// Function to edit an existing task
function editTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  const newText = prompt('Edit task:', task.text);
  if (newText !== null && newText.trim()) {
    task.text = newText;
    renderTasks();
  }
}

// Function to delete a task (Fixed implementation)
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

// Function to toggle the completion status of a task
function toggleComplete(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  task.completed = !task.completed;
  renderTasks();
}

// Function to show error message
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

// Function to hide error message
function hideError() {
  errorMessage.style.display = 'none';
}

// Event listener for adding a task
addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  addTask(taskText);
});

// Event listener for Enter key press to add a task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const taskText = taskInput.value.trim();
    addTask(taskText);
  }
});

// Fetch tasks and render them when the page loads
async function init() {
  try {
    const fetchedTasks = await fetchTasks();
    tasks = fetchedTasks;
    renderTasks();
  } catch (error) {
    showError('Failed to load tasks. Please try again later.');
  }
}

// Initialize the app
init();
