/**
 * @jest-environment jsdom
 */

import {
  createTask, taskController,
} from '../crud.js';
import * as Mocks from './mocks.js';

describe('Testing Add and remove funcionalities ', () => {
  beforeEach(() => {
    taskController.taskArray = [];
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('Test Add new task-item to the list', () => {
    document.body.innerHTML = '<div class="to-do-container">'
      + '  <ul class="list-container"> </ul>'
      + '</div>';
    const task = {
      description: 'task1',
      completed: false,
      index: 1,
    };

    const task1 = {
      description: 'task1',
      completed: false,
      index: 2,
    };
    jest.spyOn(Storage.prototype, 'setItem');
    Object.setPrototypeOf(localStorage.setItem, jest.fn());

    createTask(task);
    createTask(task1);
    Mocks.readMockTask(taskController.taskArray);
    const list = document.querySelectorAll('.list-container > li');
    expect(list).toHaveLength(2);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'taskDB', JSON.stringify(taskController.taskArray),
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });
  test('remove a task from the list', () => {
    document.body.innerHTML = '<div class="to-do-container">'
      + '  <ul class="list-container"> </ul>'
      + '</div>';

    const task = {
      description: 'fighting with-jest',
      completed: true,
      index: 1,
    };

    const task1 = {
      description: 'understanding-jest',
      completed: false,
      index: 2,
    };

    const task3 = {
      description: 'Visit Microverse',
      completed: false,
      index: 3,
    };

    jest.spyOn(Storage.prototype, 'setItem');
    Object.setPrototypeOf(localStorage.setItem, jest.fn());

    createTask(task);
    createTask(task1);
    createTask(task3);

    Mocks.deleteTaskMock(null, taskController.taskArray[0].description);
    Mocks.readMockTask(taskController.taskArray);

    const list = document.querySelectorAll('.list-container > li');
    expect(list).toHaveLength(2);
    expect(taskController.taskArray).toHaveLength(2);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'taskDB', JSON.stringify(taskController.taskArray),
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(4);
    expect(taskController.taskArray[1].index).toBe(2);
  });
});
