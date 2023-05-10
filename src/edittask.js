import saveTasks from "./savetasks.js";

const editTask = (event, arrTasks, task) => {
  const taskDescription = event.target;
  const taskEditDescription = taskDescription.nextElementSibling;

  // Hide task text and show edit task text
  taskDescription.classList.add('hidden');
  taskEditDescription.classList.remove('hidden');
  // Set focus on edit task text
  taskEditDescription.focus();
  
  // Add blur event listener to each edit task text input
  taskEditDescription.addEventListener('blur', () => {
    task.description = taskEditDescription.value;
    taskDescription.textContent = taskEditDescription.value;
    // Hide input text field and show task label
    taskEditDescription.classList.add('hidden');
    taskDescription.classList.remove('hidden');
    saveTasks(arrTasks);
  });
}

export default editTask;