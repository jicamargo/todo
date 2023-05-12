import saveTasks from './savetasks.js';
import blinkEffect from './blinkeffect.js';

const checkTask = (taskCheckbox, arrTasks, task) => {
  task.completed = taskCheckbox.checked;
  const taskDescription = taskCheckbox.nextElementSibling;
  taskDescription.classList.toggle('task-completed');
  taskDescription.parentElement.classList.toggle('shine-task-completed');
  blinkEffect(taskDescription.parentElement);

  saveTasks(arrTasks);
};

export default checkTask;
