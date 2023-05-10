import showTaskList from './showtasklist.js';
import saveTasks from './savetasks.js';

const deleteTask = (arrTasks, task) =>
{
  const taskIndex = arrTasks.indexOf(task);
  if (taskIndex !== -1) {
    arrTasks.splice(taskIndex, 1);
    showTaskList(arrTasks);
    saveTasks(arrTasks);    
  }
};

export default deleteTask;