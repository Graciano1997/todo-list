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
