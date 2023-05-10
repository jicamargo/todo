import saveTasks from './savetasks.js';

const deleteTask = (event, arrTasks, task) => {
  const taskIndex = arrTasks.indexOf(task);
  if (taskIndex !== -1) {
    arrTasks.splice(taskIndex, 1);
    saveTasks(arrTasks);
    const listItem = event.target.closest('.list-item');
    listItem.remove();
  }
};

export default deleteTask;