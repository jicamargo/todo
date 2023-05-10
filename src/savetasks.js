const saveTasks = (arrTasks) => {
  // re-assing the index (+1) to each task to always be ordered
  arrTasks = arrTasks.map((task, index) => ({ ...task, index: index + 1 }));
  localStorage.setItem('todoData', JSON.stringify(arrTasks));
}
export default saveTasks;