// en un archivo llamado "task.js"

class Task {
  constructor(description = "new task", completed = false, index = 0) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export default Task;
