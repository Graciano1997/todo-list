/**
 * @jest-environment jsdom
 */

import { createTask, taskController, updateTaskIndex, removeAllChildren } from '../crud.js';

const readMockTask = (tasks) => {
  const listContainer = document.querySelector('.list-container');
  removeAllChildren(listContainer);

  tasks.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element.description;
    li.index = element.index;
    document.querySelector('.list-container').append(li);
  });
}

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

describe('Testing Add and remove funcionalities ', () => {

  beforeEach(() => {
    taskController.taskArray = [];
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('Test Add new task-item to the list', () => {
    document.body.innerHTML =
      '<div class="to-do-container">' +
      '  <ul class="list-container"> </ul>' +
      '</div>';
      const task = {
        description: 'task1',
        completed: false,
        index: 1,
      }
  
      const task1 = {
        description: 'task1',
        completed: false,
        index: 2,
      }
      jest.spyOn(Storage.prototype, 'setItem');
    Object.setPrototypeOf(localStorage.setItem, jest.fn());

    createTask(task);
    createTask(task1);
    readMockTask(taskController.taskArray);
    const list = document.querySelectorAll('.list-container > li');
    expect(list).toHaveLength(2);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'taskDB', JSON.stringify(taskController.taskArray)
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });


    jest.spyOn(Storage.prototype, 'setItem');
    Object.setPrototypeOf(localStorage.setItem, jest.fn());

    createTask(task);
    createTask(task1);
    createTask(task3);

    deleteTaskMock(null, taskController.taskArray[0].description);
    readMockTask(taskController.taskArray);

    const list = document.querySelectorAll('.list-container > li');
    expect(list).toHaveLength(2);
    expect(taskController.taskArray).toHaveLength(2);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'taskDB', JSON.stringify(taskController.taskArray)
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(4);
    expect(taskController.taskArray[1].index).toBe(2);
  })
});
