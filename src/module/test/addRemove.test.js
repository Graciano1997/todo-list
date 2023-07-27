import 'jest-localstorage-mock';

import { createTask, deleteTask, taskController } from '../crud.js';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;


const todoListContainerMock = document.createElement('div');
const addBtnMock = document.createElement('button');
const clearBtnMock = document.createElement('button');
document.getElementById = jest.fn((id) => {
  if (id === 'todoList') return todoListContainerMock;
  if (id === 'addBtn') return addBtnMock;
});
document.querySelector = jest.fn((selector) => {
  if (selector === '.clear-completed') return clearBtnMock;
});

describe('taskFunctions', () => {
  beforeEach(() => {
    tasks.length = 0;
    jest.clearAllMocks();
  });

  describe('addTask', () => {
    test('should add a new task to the tasks array and update localStorage', () => {
      const taskDescription = 'Task 1';
      addTask(taskDescription);

      expect(tasks).toHaveLength(1);
      expect(tasks[0].description).toBe(taskDescription);
      expect(tasks[0].completed).toBe(false);
      expect(tasks[0].index).toBe(1);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'Tasks',
        JSON.stringify(tasks),
      );
    });

    test('should not add a task if the description is empty', () => {
      const taskDescription = '';
      addTask(taskDescription);

      expect(tasks).toHaveLength(0);
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });
  });

  describe('deleteTask', () => {
    beforeEach(() => {
      tasks.push(
        {
          description: 'Task 1',
          completed: false,
          index: 1,
        },
        {
          description: 'Task 2',
          completed: true,
          index: 2,
        },
      );
    });
    test('should delete the task at the specified index and update localStorage', () => {
      deleteTask(0);
      expect(tasks).toHaveLength(1);
      expect(tasks[0].description).toBe('Task 2');
      expect(tasks[0].completed).toBe(true);
      expect(tasks[0].index).toBe(1);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'Tasks',
        JSON.stringify(tasks),
      );
    });
  });
});
