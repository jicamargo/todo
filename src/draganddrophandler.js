import saveTasks from './savetasks.js';

export const dragStart = (event) => {
  const taskItemContainer = event.target.closest('.list-item');
  event.dataTransfer.setData('text/plain', taskItemContainer.dataset.index);
  taskItemContainer.classList.add('dragging');
};

export const dragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  const taskItemContainer = event.target.closest('.list-item');
  if (!taskItemContainer.classList.contains('dragging')) {
    taskItemContainer.classList.add('dragging-over');
  }
};

export const dragLeave = (event) => {
  const taskItemContainer = event.target.closest('.list-item');
  taskItemContainer.classList.remove('dragging-over');
};

export const dragEnd = (event) => {
  const taskItemContainer = event.target.closest('.list-item');
  taskItemContainer.classList.remove('dragging');
};

export const dragDrop = (event, arrTasks) => {
  event.preventDefault();
  const taskItemContainer = event.target.closest('.list-item');

  // Get index of task being dragged, and being dropped on
  const fromIndex = event.dataTransfer.getData('text/plain');
  const toIndex = taskItemContainer.dataset.index;

  taskItemContainer.classList.remove('dragging-over');

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
