import * as variable from './globalvar.js';
import { createTaskTemplate } from './taskTemplate.js';
import TasksToDo from './tasksToDo.js';

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
};

const updateTaskIndex = (index) => {
  taskController.taskArray.filter((task) => {
    if (task.index > index) {
      task.index -= 1;
    }
    return true;
  });
};

const deleteTask = (index, value = null, taskIndex) => {
  if ((value === null) && (index !== null)) {
    taskController.taskArray.splice(index, 1);
    updateTaskIndex(taskIndex);
    localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
  } else {
    taskController.taskArray.filter((el) => {
      if (el.description === value) {
        const taskToDeleteIndex = el.index;
        taskController.taskArray.splice(taskController.taskArray.indexOf(el), 1);
        updateTaskIndex(taskToDeleteIndex);
        localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
      }
      return true;
    });
  }
  readTask(taskController.taskArray);
};

const updateListener = () => {
  const updateTask = (index, newtaskContent, taskIndex) => {
    if (newtaskContent.length === 0) {
      deleteTask(index, null, taskIndex);
    } else {
      const newTask = taskController.taskArray[index];
      newTask.description = newtaskContent;
      taskController.taskArray[index] = newTask;
      localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
    }
  };

  document.querySelectorAll('#taskContent').forEach((taskDescription, index) => {
    const taskValue = taskDescription.textContent;
    const taskIndex = taskController.taskArray[index].index;

    taskDescription.parentElement.addEventListener('click', () => {
      taskDescription.addEventListener('click', () => {
        taskDescription.readOnly = false;
        taskDescription.parentElement.classList.add('textEditing');
        taskDescription.nextSibling.classList.add('hide');
        taskDescription.nextSibling.nextSibling.classList.remove('hide');
      });
    });

    taskDescription.parentElement.addEventListener('dblclick', () => {
      taskDescription.nextSibling.classList.remove('hide');
      taskDescription.nextSibling.nextSibling.classList.add('hide');
      taskDescription.readOnly = true;
      taskDescription.parentElement.classList.remove('textEditing');
      if (taskValue !== taskDescription.value) {
        updateTask(index, taskDescription.value, taskIndex);
        readTask(taskController.taskArray);
        updateListener();
      }
    });

    taskDescription.nextSibling.nextSibling.addEventListener('click', () => {
      deleteTask(null, taskDescription.textContent);
      taskDescription.parentNode.parentNode.remove();
      updateListener();
    });
  });
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
    };

    if (task.description.length > 0) {
      createTask(task);
    }
    variable.formTodo.reset();
    readTask(taskController.taskArray);
    updateListener();
    window.location.reload();
  });
};

export {
  createTaskListener,
  readTaskListener,
  updateListener,
  deleteTask,
  taskController,
  updateTaskIndex,
  readTask,
};
