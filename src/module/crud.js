import * as variable from './globalvar.js';
import { createTaskTemplate } from './taskTemplate.js';
import TasksToDo from "./tasksToDo.js"

const taskController = new TasksToDo();

const removeAllChildren = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};

const readTask = (tasks) => {
  removeAllChildren(variable.tasksContainer);
  tasks.forEach((element) => {
    variable.tasksContainer.appendChild(createTaskTemplate(element));
  });
  updateListener();
};

const readTaskListener = () => {
  window.addEventListener('DOMContentLoaded', readTask(taskController.taskArray));
};

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
    variable.formTodo.reset();
    readTask(taskController.taskArray);
  })
}

const updateTask = (index, newtaskContent) => {
  const newTask = taskController.taskArray[index];
  newTask['description'] = newtaskContent;
  taskController.taskArray[index] = newTask;
  localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
};


const updateListener = () => {
  document.querySelectorAll('#taskContent').forEach((taskDescription, index) => {
    const taskValue = taskDescription.textContent;

    taskDescription.addEventListener('click', () => {
      taskDescription.readOnly = false;
      taskDescription.classList.add('textEditing');
      taskDescription.parentElement.classList.add('textEditing');
    });
    taskDescription.addEventListener('blur', (el) => {
      taskDescription.readOnly = true;
      taskDescription.classList.remove('textEditing');
      taskDescription.parentElement.classList.remove('textEditing');

      if (taskValue !== el.target.value) {
        updateTask(index, el.target.value);
        readTask(taskController.taskArray);
      }
    })
  })
}

export { createTaskListener, readTaskListener, updateListener };
