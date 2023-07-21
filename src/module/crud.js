import * as variable from './globalvar.js';
import { createTaskTemplate } from './taskTemplate.js';
import TasksToDo from "./tasksToDo.js"

const taskController = new TasksToDo();

const removeAllChildren = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

const readTask = (tasks) => {
  removeAllChildren(variable.tasksContainer);
  tasks.forEach((element) => {
    variable.tasksContainer.appendChild(createTaskTemplate(element));
  });
};

const readTaskListener = () => {
  window.addEventListener('load', readTask(taskController.taskArray));
};

const createTask = (task) => {
  taskController.taskArray.push(task);
  localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
  readTask(taskController.taskArray);
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

export { createTaskListener, readTaskListener };
