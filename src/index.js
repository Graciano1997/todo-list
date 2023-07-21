import './style.css';
import enterImg from './enter.png';

const taskArray = [
  {
    description: 'Take care of my baby Hosanna ',
    completed: false,
    index: 0,
  },
  {
    description: 'Meet my Coding Partner',
    completed: false,
    index: 1,
  },
  {
    description: 'Meet my friend Kiko Arora',
    completed: false,
    index: 2,
  },
  {
    description: 'To be Present in Microverse Program during 8:00 to 17:15',
    completed: false,
    index: 3,
  },
];

const createTaskTemplate = (task) => {
  const divTask = document.createElement('div');
  divTask.classList.add('task');

  const textArea = document.createElement('textarea');
  textArea.classList.add('taskContent');
  textArea.maxLength = 250;
  textArea.spellcheck = false;
  textArea.autocomplete = false;
  textArea.textContent = task.description;

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.name = 'check';
  const i = '<i class=\'fa-solid fa-ellipsis-vertical\'></i>';

  const span = document.createElement('span');
  span.innerHTML = i;

  divTask.append(check, textArea, span);

  const li = document.createElement('li');
  li.classList.add('task-item');
  li.append(divTask);
  return li;
};

const populate = (taskArray) => {
  const img = new Image();
  img.src = enterImg;
  document.querySelector('#enter').appendChild(img);

  taskArray.forEach((element) => {
    document.querySelector('.list-container').append(createTaskTemplate(element));
  });
};

window.addEventListener('load', populate(taskArray));
