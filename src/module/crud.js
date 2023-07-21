import * as variable from './globalvar.js';
import TasksToDo from "./tasksToDo.js"

const taskController = new TasksToDo();
taskController.taskArray = [];

const createTask = (task) => {
  taskController.taskArray.push(task);
  localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
};

const createTaskListener = () => {
  variable.formTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = {
      description: variable.fieldTask.value,
      completed: false,
      index: taskController.taskArray.length === 0 ? 1 : taskController.taskArray.length + 1,
    }
    if (task.description.length > 0) {
      createTask(task);
    }
  })
}

export { createTaskListener };
