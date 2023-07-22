
// import { deleteTask } from './crud.js';
import TasksToDo from './tasksToDo.js';
import * as variable from './globalvar.js';

const taskController = new TasksToDo();


const taskStatusUpdate = (index) => {
  const compledTask = {
    ...taskController.taskArray[index],
    completed: !taskController.taskArray[index].completed,
  }
  taskController.taskArray[index] = compledTask;
  localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
};

const updateTaskStatusListener = () => {
    document.querySelectorAll('#taskContent').forEach((taskDescription, index) => {
  
      taskDescription.previousSibling.addEventListener('change', () => {
      (taskDescription.previousSibling.checked) ? (taskDescription.classList.add('taskDone')) : (taskDescription.classList.remove('taskDone'));
        taskStatusUpdate(index);
        });
      });
  };



  export { updateTaskStatusListener };