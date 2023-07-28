/**
 * @jest-environment jsdom
 */

import { createTask, taskController, updateTaskIndex, removeAllChildren } from '../crud.js';
import { taskStatusUpdate } from '../interactiveList.js';
import * as Mocks from './mocks.js';

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
    Mocks.readMockTask(taskController.taskArray);
    let list = document.querySelectorAll('.list-container > li');
    expect(list[0].innerHTML).toMatch('Visit Microsoft');
    Mocks.updateTaskMock(0, 'Visit Microverse', 1);
    Mocks.readMockTask(taskController.taskArray);
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
      index: 3,
    };
    createTask(task);
    Mocks.readMockTask(taskController.taskArray);
    taskStatusUpdate(0);
    expect(taskController.taskArray[0].completed).toBe(true);
    expect(taskController.taskArray[0].description).toMatch('Visit Microverse');
    expect(taskController.taskArray[0].index).toBe(3);
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

});
