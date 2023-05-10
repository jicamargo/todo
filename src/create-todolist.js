import arrTasks from './gettasks.js';
import iconMore from './icon-more-vert.svg';
import iconRefresh from './icon-refresh.svg';
import iconReturn from './icon-return.svg';

// builds the elements and show the todo list inside the placeholder
function createTodoList(parentElemId) {
  const placeholder = document.getElementById(parentElemId);
  placeholder.textContent = '';

  // add the main container
  const selectedList = document.createElement('div');
  placeholder.appendChild(selectedList);
  selectedList.classList = 'selected-list';

  // add the DIV for title
  const title = document.createElement('div');
  selectedList.appendChild(title);
  title.classList = 'title';
  title.innerHTML = `<div>
      <label>To Do List</label>
      <img class="icon refresh-btn icon-refresh" src="${iconRefresh}" alt="refresh">
    </div>`;

  // add the UL and li element for adding new items
  const newitem = document.createElement('ul');
  selectedList.appendChild(newitem);
  newitem.classList = 'new-item ul-list';
  newitem.innerHTML = `<li>Add to your list...</li>
                       <li class="ReturnBtn"><img class="icon return-btn icon-return" src="${iconReturn}" alt="refresh"></li>`;

  // add the UL and li element for each task

  const list = document.createElement('ul');
  selectedList.appendChild(list);
  list.classList = 'list ul-list';

  list.innerHTML = arrTasks.map((task) => `<li class="list-item">
    <div class='task-check'><input type="checkbox" value=${task.completed}></div>
    <div class='task-label'>${task.description}</div>
    <div class='task-btn'><img class="icon icon-more" src="${iconMore}" alt="more options"></div>
    </li>`).join(' ');

  const btnClear = document.createElement('button');
  selectedList.appendChild(btnClear);
  btnClear.classList = 'button clearCompleted';
  btnClear.textContent = 'Clear all completed';
}

export default createTodoList;