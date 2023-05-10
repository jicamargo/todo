import iconMore from './images/icon-more-vert.svg';
import iconTrash from './images/icon-trash.svg';  
import deleteTask from './deletetask.js';
import editTask from './edittask.js';
import checkTask from './checktask.js';

// builds the elements and show the todo list inside the placeholder
function showTaskList(arrTasks, parentElemId='list') {
  const placeholder = document.getElementById(parentElemId);
  placeholder.innerHTML = '';

  // create and append task list items
  arrTasks.forEach((task) => {

    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    placeholder.appendChild(listItem);

    const taskCheckbox = document.createElement('input');
    taskCheckbox.classList = 'task-check';
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.completed;
    taskCheckbox.addEventListener('change', () => checkTask(taskCheckbox, arrTasks, task));
      
    listItem.appendChild(taskCheckbox);

    const taskDescription = document.createElement('span');
    taskDescription.classList = 'task-label task-description';
    taskDescription.textContent = task.description;
    if (task.completed) {
      taskDescription.classList.add('completed');
    }
    listItem.appendChild(taskDescription);

    // create an input field for editing the task description, initially hidden
    const taskEditDescription = document.createElement('input');
    taskEditDescription.type = 'text';
    taskEditDescription.classList = 'task-edit hidden';
    taskEditDescription.value = task.description;
    listItem.appendChild(taskEditDescription);
    
    taskDescription.addEventListener('click', (event) => editTask(event, arrTasks, task));

    const taskMoreButton = document.createElement('div');
    taskMoreButton.classList = 'task-btn';
    taskMoreButton.innerHTML = `<img class="icon-task icon-more" src="${iconMore}" alt="more options">`;
    taskMoreButton.addEventListener('click', () => moveTask());
    listItem.appendChild(taskMoreButton);


    const taskDelButton = document.createElement('div');
    taskDelButton.classList = 'task-btn';
    taskDelButton.innerHTML = `<img class="icon-task icon-trash" src="${iconTrash}" alt="delete trash">`;
    taskDelButton.addEventListener('click', () => deleteTask(arrTasks, task)) ; 
    listItem.appendChild(taskDelButton);

    placeholder.appendChild(listItem);
  });
}



export default showTaskList;