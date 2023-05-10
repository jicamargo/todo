import './style.css';
import iconRefresh from './images/icon-refresh.svg';
import iconReturn from './images/icon-return.svg';
import getTasks from './gettasks';
import showTaskList from './showtasklist';
import addNewTask from './addnewtask';

const iconRefreshElem = document.getElementById('iconRefresh');
const iconReturnElem = document.getElementById('iconReturn');
iconRefreshElem.src = iconRefresh;
iconReturnElem.src = iconReturn;


const arrTasks = getTasks();
showTaskList(arrTasks, 'list');

const newTaskEnterBtn = document.getElementById('newTaskEnterBtn');
newTaskEnterBtn.addEventListener('click', () => {addNewTask(arrTasks);});

const newTaskInput = document.getElementById('new-task');
newTaskInput.addEventListener('change', () => {addNewTask(arrTasks);});
