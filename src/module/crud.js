import * as variable from './globalvar.js';
import { createTaskTemplate } from './taskTemplate.js';
import TasksToDo from "./tasksToDo.js"

const taskController = new TasksToDo();
let control=false;

const removeAllChildren = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};

const updateTaskIndex = (index) => {
  taskController.taskArray.filter((task) => {
    if (task.index > index) {
      task.index -= 1;
    }
  })
}

const deleteTask = (index, value=null,taskIndex) => {
  
  if ((value === null) && (index !== null)) {
   
    // for(let i=0; i<taskController.taskArray.length;i++){

      // if (taskController.taskArray.indexOf(taskController.taskArray[i]) === index) {

        
        //  console.log('tarefa a apagar '+ taskToDeleteIndex);
        //   updateTaskIndex(taskToDeleteIndex);
        
    
          taskController.taskArray.splice(index, 1);
          updateTaskIndex(taskIndex);
            localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
          //console.log(index);
          
        
        
         
      
      
    // }

    // taskController.taskArray.forEach((el) => {
    //   if (taskController.taskArray.indexOf(el) === index) {
    //      const taskToDeleteIndex = el.index;
    //     taskController.taskArray.splice(taskController.taskArray.indexOf(el), 1);
    //     console.log(taskToDeleteIndex);
    //      updateTaskIndex('tarefa a apagar' + taskToDeleteIndex);
    //     localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
      
    //   }
    // });
    


    // if(taskController.taskArray[index]){
    //   const taskToDeleteIndex = taskController.taskArray[index].index;
    //   taskController.taskArray.splice(index, 1);
    //   console.log('to delete' + taskToDeleteIndex);
    //   updateTaskIndex(taskToDeleteIndex);
    //   localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));  
    // }
  } else {
    taskController.taskArray.filter((el) => {
      if (el.description === value) {
         const taskToDeleteIndex = el.index;
        taskController.taskArray.splice(taskController.taskArray.indexOf(el), 1);
         updateTaskIndex(taskToDeleteIndex);
         localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
      }
    });
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

const updateTask = (index, newtaskContent,taskIndex) => {
  if (newtaskContent.length === 0) {
   // taskController.taskArray.splice(index, 1);
    deleteTask(index,null,taskIndex);
    console.log('executei');
    // localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
  } else {
    const newTask = taskController.taskArray[index];
    newTask['description'] = newtaskContent;
    taskController.taskArray[index] = newTask;
    localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
  }
};

const updateListener = () => {
  document.querySelectorAll('#taskContent').forEach((taskDescription, index) => {
    const taskValue = taskDescription.textContent;
    const taskIndex= taskController.taskArray[index].index;

    taskDescription.addEventListener('click', () => {
      taskDescription.readOnly = false;
      taskDescription.classList.add('textEditing');
      taskDescription.parentElement.classList.add('textEditing');
      taskDescription.nextSibling.classList.add('hide');
      taskDescription.nextSibling.nextSibling.classList.remove('hide');
    });

    taskDescription.addEventListener('blur', (el) => {
      taskDescription.nextSibling.classList.remove('hide');
      taskDescription.nextSibling.nextSibling.classList.add('hide');
      taskDescription.readOnly = true;
      taskDescription.classList.remove('textEditing');
      taskDescription.parentElement.classList.remove('textEditing');

      if (taskValue !== el.target.value) {
        updateTask(index, el.target.value,taskIndex);
        readTask(taskController.taskArray);
      }
    });

    taskDescription.nextSibling.nextSibling.addEventListener('click', () => {
      deleteTask(null, taskDescription.textContent);
      taskDescription.parentNode.parentNode.remove();
    });
  });
}

export { createTaskListener, readTaskListener, updateListener };
