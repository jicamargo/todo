import Task from './task.js';
import showTaskList from './showtasklist.js';
import saveTasks from './savetasks.js';

const addNewTask = (arrTasks) => {
  const newTaskInput = document.getElementById('new-task');
  const newTaskDescription = newTaskInput.value.trim();

  if (newTaskDescription !== '') {
    const newTask = new Task(newTaskDescription);
    const lastTaskIndex = arrTasks.length - 1;
    newTask.index = lastTaskIndex >= 0 ? arrTasks[lastTaskIndex].index + 1 : 0;
    arrTasks.push(newTask);
    newTaskInput.value = '';
    saveTasks(arrTasks);
    showTaskList(arrTasks);
  }
};

export default addNewTask;