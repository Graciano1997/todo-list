import { readTask, taskController, updateTaskIndex } from './crud.js';
import * as variable from './globalvar.js';

const taskStatusUpdate = (index) => {
  const compledTask = {
    ...taskController.taskArray[index],
    completed: !taskController.taskArray[index].completed,
  };
  taskController.taskArray[index] = compledTask;
  localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
};

const updateTaskStatusListener = () => {
  document.querySelectorAll('#taskContent').forEach((taskDescription, index) => {
    taskDescription.previousSibling.addEventListener('change', () => {
      if (taskDescription.previousSibling.checked) {
        taskDescription.classList.add('taskDone');
      } else {
        taskDescription.classList.remove('taskDone');
      }
      taskStatusUpdate(index);
    });
  });
};

const clearAllDoneTasks = () => {
  const completedTasks = taskController.taskArray.filter((task) => task.completed === true);

  completedTasks.forEach((task) => {
    taskController.taskArray.splice(taskController.taskArray.indexOf(task), 1);
    updateTaskIndex(task.index);
  });
  localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
  readTask(taskController.taskArray);
  window.location.reload();
};

const clearAllDoneTasksListener = () => {
  variable.btnClear.addEventListener('click', clearAllDoneTasks);
};

export { updateTaskStatusListener, clearAllDoneTasksListener };