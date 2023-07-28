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
