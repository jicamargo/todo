import saveTasks from "./savetasks.js";

const checkTask = (taskCheckbox, arrTasks, task) => {

    task.completed = taskCheckbox.checked;
    const taskDescription = taskCheckbox.nextElementSibling;
    taskDescription.classList.toggle('completed');

    saveTasks(arrTasks);
  };

export default checkTask;

