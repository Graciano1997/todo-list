import { taskController, updateTaskIndex, removeAllChildren } from '../crud.js';

const readMockTask = (tasks) => {
  const listContainer = document.querySelector('.list-container');
  removeAllChildren(listContainer);
  tasks.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element.description;
    li.index = element.index;
    document.querySelector('.list-container').append(li);
  });
};
const deleteTaskMock = (index, value = null, taskIndex) => {
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
  readMockTask(taskController.taskArray);
};

const clearAllMockDoneTasks = () => {
  const completedTasks = taskController.taskArray.filter((task) => task.completed === true);
  completedTasks.forEach((task) => {
    taskController.taskArray.splice(taskController.taskArray.indexOf(task), 1);
    updateTaskIndex(task.index);
  });
  jest.spyOn(Storage.prototype, 'setItem');
  Object.setPrototypeOf(localStorage.setItem, jest.fn());

  localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
  readMockTask(taskController.taskArray);
};
const updateTaskMock = (index, newtaskContent, taskIndex) => {
  if (newtaskContent.length === 0) {
    deleteTaskMock(index, null, taskIndex);
  } else {
    const newTask = taskController.taskArray[index];
    newTask.description = newtaskContent;
    taskController.taskArray[index] = newTask;
    jest.spyOn(Storage.prototype, 'setItem');
    Object.setPrototypeOf(localStorage.setItem, jest.fn());
    localStorage.setItem('taskDB', JSON.stringify(taskController.taskArray));
  }
};
export { readMockTask, deleteTaskMock, clearAllMockDoneTasks, updateTaskMock }
