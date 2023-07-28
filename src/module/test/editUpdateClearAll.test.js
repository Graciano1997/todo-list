/**
 * @jest-environment jsdom
 */

import { createTask, taskController, updateTaskIndex, removeAllChildren } from '../crud.js';
import { taskStatusUpdate } from '../interactiveList.js';

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

describe('Testing updateContent,removeAll,changeStates funcionalities ', () => {
  beforeEach(() => {
    taskController.taskArray = [];
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('I want visit Microverse', () => {
    document.body.innerHTML = '<div class="to-do-container">'
      + '  <ul class="list-container"> </ul>'
      + '</div>';

    const task = {
      description: 'Visit Microsoft',
      completed: false,
      index: 1,
    };
    createTask(task);
    readMockTask(taskController.taskArray);
    let list = document.querySelectorAll('.list-container > li');
    expect(list[0].innerHTML).toMatch('Visit Microsoft');
    updateTaskMock(0, 'Visit Microverse', 1);
    readMockTask(taskController.taskArray);
    list = document.querySelector('.list-container > li');
    expect(list.innerHTML).toMatch('Visit Microverse');
  });

  test('I have already visited Microverse', () => {
    document.body.innerHTML = '<div class="to-do-container">'
      + '  <ul class="list-container"> </ul>'
      + '</div>';
    const task = {
      description: 'Visit Microverse',
      completed: false,
      index: 1,
    };
    createTask(task);
    readMockTask(taskController.taskArray);
    taskStatusUpdate(0);
    expect(taskController.taskArray[0].completed).toBe(true);
    expect(taskController.taskArray[0].description).toMatch('Visit Microverse');
    expect(taskController.taskArray[0].index).toBe(1);
  });
  
  test('I need clean all my visited places', () => {
    document.body.innerHTML = '<div class="to-do-container">'
      + '  <ul class="list-container"> </ul>'
      + '</div>';

    const task1 = {
      description: 'Visit Microverse',
      completed: false,
      index: 1,
    };
    const task2 = {
      description: 'Visit India',
      completed: false,
      index: 2,
    };

    const task3 = {
      description: 'Visit EUA',
      completed: false,
      index: 3,
    };

    const task4 = {
      description: 'Visit Caiman Island',
      completed: false,
      index: 4,
    };

    createTask(task1);
    createTask(task2);
    createTask(task3);
    createTask(task4);
    readMockTask(taskController.taskArray);
    taskStatusUpdate(0);
    taskStatusUpdate(3);
    clearAllMockDoneTasks();

    expect(taskController.taskArray.length).toBe(2);
    expect(taskController.taskArray[0].index).toBe(1);
  });
});