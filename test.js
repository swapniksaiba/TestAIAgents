// A non-optimized to-do list application with redundant logic and poor performance
let toDoList = [];
// Function to add a task (overcomplicated and inefficient)
function addTask(task) {
 if (task === "") {
 alert("Task cannot be empty!");
 return;
 }
 let taskId = Date.now(); // Using Date.now() as a unique ID, not optimal for large data
 let taskObject = {
 id: taskId,
 text: task,
 completed: false
 };
 toDoList.push(taskObject);
 // Rebuild the entire list every time
 let listContainer = document.getElementById('task-list');
 listContainer.innerHTML = ''; // Inefficient clearing of the entire list
 for (let i = 0; i < toDoList.length; i++) {
 let taskItem = document.createElement('li');
 taskItem.textContent = toDoList[i].text;
 listContainer.appendChild(taskItem);
 }
}
// Function to mark a task as completed (no proper search)
function markTaskAsCompleted(taskId) {
 for (let i = 0; i < toDoList.length; i++) {
 if (toDoList[i].id === taskId) {
 toDoList[i].completed = true;
 break;
 }
 }
 // Rebuild the list every time a task is marked as complete
 let listContainer = document.getElementById('task-list');
 listContainer.innerHTML = '';
 for (let i = 0; i < toDoList.length; i++) {
 let taskItem = document.createElement('li');
 taskItem.textContent = toDoList[i].text + (toDoList[i].completed ? " (Completed)" : "");
 listContainer.appendChild(taskItem);
 }
}
// Function to delete a task (inefficient removal)
function deleteTask(taskId) {
 for (let i = 0; i < toDoList.length; i++) {
 if (toDoList[i].id === taskId) {
 toDoList.splice(i, 1);
 break;
 }
 }
 // Rebuild the list every time a task is deleted
 let listContainer = document.getElementById('task-list');
 listContainer.innerHTML = '';
 for (let i = 0; i < toDoList.length; i++) {
 let taskItem = document.createElement('li');
 taskItem.textContent = toDoList[i].text;
 listContainer.appendChild(taskItem);
 }
}
// Function to edit a task (inefficient edit operation)
function editTask(taskId, newText) {
 for (let i = 0; i < toDoList.length; i++) {
 if (toDoList[i].id === taskId) {
 toDoList[i].text = newText;
 break;
 }
 }
 // Rebuild the entire list after editing
 let listContainer = document.getElementById('task-list');
 listContainer.innerHTML = '';
 for (let i = 0; i < toDoList.length; i++) {
 let taskItem = document.createElement('li');
 taskItem.textContent = toDoList[i].text;
 listContainer.appendChild(taskItem);
 }
}
// Function to handle button click to add task
document.getElementById('add-button').addEventListener('click', function() {
 let taskInput = document.getElementById('task-input');
 addTask(taskInput.value);
 taskInput.value = ''; // Clear the input field
});
// Function to handle task completion click (bad event handling)
document.getElementById('mark-complete').addEventListener('click', function() {
 let taskId = 1; // Hardcoded taskId (non-optimal)
 markTaskAsCompleted(taskId);
});
// Function to handle delete button click (again, bad event handling)
document.getElementById('delete-button').addEventListener('click', function() {
 let taskId = 1; // Hardcoded taskId (non-optimal)
 deleteTask(taskId);
});
// Function to initialize the list (inefficient DOM manipulation)
function initializeList() {
 let listContainer = document.getElementById('task-list');
 listContainer.innerHTML = ''; // Clear the list first (inefficient)
 for (let i = 0; i < toDoList.length; i++) {
 let taskItem = document.createElement('li');
 taskItem.textContent = toDoList[i].text;
 listContainer.appendChild(taskItem);
 }
}
// Adding some sample tasks for initialization
toDoList.push({ id: 1, text: "Sample Task 1", completed: false });
toDoList.push({ id: 2, text: "Sample Task 2", completed: true });
// Initialize the list on page load
initializeList();
 
