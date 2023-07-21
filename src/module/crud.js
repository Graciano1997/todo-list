import * as variable from './globalvar.js';
import { createTaskTemplate } from './taskTemplate.js';
import TasksToDo from "./tasksToDo.js"

const taskController = new TasksToDo();

const removeAllChildren = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};

const deleteTask = (index,value=null) => {
  
  if((value==='' || value===null) && (index>=0 && index!==null) ){
  taskController.taskArray.splice(index, 1);
  localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
}else{
  taskController.taskArray.filter((el)=>{if(el.description===value){
    taskController.taskArray.splice(taskController.taskArray.indexOf(el),1);
    localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
  }});
}
readTask(taskController.taskArray);
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
  if (newtaskContent.length === 0) {
    deleteTask(index);
  } else {
    const newTask = taskController.taskArray[index];
    newTask['description'] = newtaskContent;
    taskController.taskArray[index] = newTask;
  }
  localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
};

const updateListener = () => {
  document.querySelectorAll('#taskContent').forEach((taskDescription, index) => {
    const taskValue = taskDescription.textContent;

    taskDescription.addEventListener('click', () => {
      taskDescription.readOnly = false;
      taskDescription.classList.add('textEditing');
      taskDescription.parentElement.classList.add('textEditing');
      taskDescription.nextSibling.classList.add('hide');
      taskDescription.nextSibling.nextSibling.classList.remove('hide');

      taskDescription.nextSibling.nextSibling.addEventListener('click', () => {
        // console.log(taskDescription.textContent);
        deleteTask(null,taskDescription.textContent);
        taskDescription.parentNode.parentNode.remove();
      });

      taskDescription.addEventListener('dblclick', (el) => {
        taskDescription.nextSibling.classList.remove('hide');
        taskDescription.nextSibling.nextSibling.classList.add('hide');
        taskDescription.readOnly = true;
        taskDescription.classList.remove('textEditing');
        taskDescription.parentElement.classList.remove('textEditing');

        if (taskValue !== el.target.value) {
          updateTask(index, el.target.value);
          readTask(taskController.taskArray);
        }
      })
    });
  });



}

export { createTaskListener, readTaskListener, updateListener };
