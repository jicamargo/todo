import saveTasks from './savetasks.js';
import showTaskList from './showtasklist.js';

const clearCompletedTasks = (arrTasks) => {
  
  const arrTasksFiltered = arrTasks.filter((task) => task.completed === false);
  
  // if there are no completed tasks, do nothing
  if (arrTasksFiltered.length === arrTasks.length) 
    return;
  
  // remove completed tasks from array, because if copy from filteredarray, it is a shallow copy, 
  // and the original array is not modified

  for (let i = arrTasks.length - 1; i >= 0; i--) {
    if (arrTasks[i].completed) {
      arrTasks.splice(i, 1);
    }
  }
 
  saveTasks(arrTasks);
  showTaskList(arrTasks, 'list');
};

export default clearCompletedTasks;
