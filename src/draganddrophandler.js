import saveTasks from './savetasks.js';

export const dragStart = (event) => {
  const taskItemContainer = event.target.closest('.list-item');
  event.dataTransfer.setData('text/plain', taskItemContainer.dataset.index);
  taskItemContainer.classList.add('dragging');
};

export const dragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

export const dragEnd = (event) => {
  const taskItemContainer = event.target.closest('.list-item');
  taskItemContainer.classList.remove('dragging');
};

export const dragDrop = (event, arrTasks) => {
  event.preventDefault();

  // Get index of task being dragged, and being dropped on
  const fromIndex = event.dataTransfer.getData('text/plain');

  const taskItemContainer = event.target.closest('.list-item');
  const toIndex = taskItemContainer.dataset.index;

  // Move task to new position
  const taskList = event.target.closest('.list');
  const taskItems = taskList.querySelectorAll('.list-item');
  const fromItem = taskItems[fromIndex];
  const toItem = taskItems[toIndex];

  if (fromItem.dataset.index > toItem.dataset.index) {
    taskList.insertBefore(fromItem, toItem);
  } else {
    taskList.insertBefore(fromItem, toItem.nextSibling);
  }

  // Update the data-index attribute on each task item
  const NewtaskItems = taskList.querySelectorAll('.list-item');
  for (let i = 0; i < NewtaskItems.length; i += 1) {
    NewtaskItems[i].dataset.index = i;
  }

  // Update the array that holds the tasks
  arrTasks.splice(toIndex, 0, arrTasks.splice(fromIndex, 1)[0]);

  saveTasks(arrTasks);
};
