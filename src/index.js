document.addEventListener("DOMContentLoaded", () => {
  // your code here
 const form = document.getElementById("create-task-form")

 form.addEventListener("submit", function(event){
    event.preventDefault()
     // Prevent the default behavior of the submit event

 const taskInput = document.getElementById("taskInput");
 const addButton = document.getElementById("addButton");
 const taskList = document.getElementById("taskList");

//  Event listener for the addtask button
addButton.addEventListener("click", addTask)

// Event listener for pressing "Enter key" to add task
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Add a task to the list
function addTask(){
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }


  const taskItem = document.createElement("li");
  
  const taskDescription = document.createElement("span");
  taskDescription.innerText = taskText;
  taskItem.appendChild(taskDescription);

  const userInput = document.createElement("input");
  userInput.type = "text";
  userInput.className = "task user"
  userInput.placeholder = "User"
  taskItem.appendChild(userInput);

  const durationInput = document.createElement("input");
  durationInput.type = "text";
  durationInput.className = "task-duration";
  durationInput.placeholder = "Duration";
  taskItem.appendChild(durationInput);

  const dateDueInput = document.createElement("input");
  dateDueInput.type = "date";
  dateDueInput.className = "task-date-due";
  taskItem.appendChild(dateDueInput);

  const editButton = document.createElement("button");
  editButton.className = "editButton";
  editButton.innerText = "Edit";
  editButton.addEventListener("click", function() {
    // Code to edit the task
    const editedDescription = prompt("Edit task:", taskDescription.innerText);
    if (editedDescription !== null) {
      taskDescription.innerText = editedDescription;
    }
  });
  taskItem.appendChild(editButton);





  // Add a delete button to remove the task
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(taskItem);
  })

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem)


  const prioritySelect = document.createElement("select");
  prioritySelect.className = "task-priority";
  const priorityOptions = ["high", "medium", "low"];
  for (const option of priorityOptions) {
    const priorityOption = document.createElement("option");
    priorityOption.value = option;
    priorityOption.textContent = option.charAt(0).toUpperCase() + option.slice(1);
    prioritySelect.appendChild(priorityOption);
  }
  taskItem.appendChild(prioritySelect);
 
  // Clear the input field
  taskInput.value = "";
}




 }) 
 });

