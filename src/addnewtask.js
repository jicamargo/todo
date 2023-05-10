import Task from './task.js';
import showTaskList from './showtasklist.js';
import saveTasks from './savetasks.js';

const addNewTask = (taskList) => {
  const newTaskInput = document.getElementById('new-task');
  const newTaskDescription = newTaskInput.value.trim();

  if (newTaskDescription !== '') {
    const newTask = new Task(newTaskDescription);
    const lastTaskIndex = taskList.length - 1;
    newTask.index = lastTaskIndex >= 0 ? taskList[lastTaskIndex].index + 1 : 0;
    taskList.push(newTask);
    newTaskInput.value = '';
    saveTasks(taskList);
    showTaskList(taskList);
  }
};

export default addNewTask;