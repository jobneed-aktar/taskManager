// Select HTML Elements
const input = document.getElementById("input__box");
const btn = document.getElementById("submit__btn");
const taskList = document.getElementById("task__list");

// Iniziaize an array to store task
let tasks = [];
let editIndex = null;

// Function to reander tasks
function randerTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index)=>{
        // create task items
        const taskItem = document.createElement("div");
        taskItem.className = "d-flex justify-content-between align-items-center mt-1 p-2 rounded bg-success text-light ps-5";

        // Tast text
        const taskText = document.createElement("span");
        taskText.textContent = task;

        // Action button
        const actionBtn = document.createElement("div");

        // Edit button
        const editBtn = document.createElement("div");
        editBtn.className = "btn btn-warning text-light btn-sm me-2"; 
        editBtn.textContent = "Edit";
        editBtn.onclick = ()=> handleEdit(index);

        // Delete button
        const deleteBtn = document.createElement("div");
        deleteBtn.className = "btn btn-danger btn-sm";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => handleDelete(index);

        // Append button
        actionBtn.appendChild(editBtn);
        actionBtn.appendChild(deleteBtn);

        // Append text and action button to task items
        taskItem.appendChild(taskText);
        taskItem.appendChild(actionBtn);

        // Add task items to task list
        taskList.appendChild(taskItem);
    });
}

// Function to handle adding a task
function handleAdd() {
    const taskValue = input.value.trim();
    if(!taskValue) {
       return alert("Please inter a task");
    }

    if (editIndex !== null) {
    // Update task if editing
    tasks[editIndex] = taskValue;
    editIndex = null;
    btn.textContent = "Add Task";
    } else {
      // Add new task
      tasks.push(taskValue);
  }
    input.value = "";
    randerTasks();
}

// Handle Edit
function handleEdit(index) {
  input.value = tasks[index];
  editIndex = index;
  btn.textContent = "Update Task";
}


// Function to handle deleting a task
function handleDelete(index) {
  // const confirmDelete = confirm("Do you want to delete?");
  // if(confirmDelete) {
    tasks.splice(index,1);
    randerTasks();
  // }
}


// Event listener for adding / updating task
btn.addEventListener("click",handleAdd);
