import './style.css';

const taskArray = [
  {
    description: "Take care of my baby Hosanna ",
    completed: false,
    index: 0,
  },
  {
    description: "Meet my Coding Partner",
    completed: false,
    index: 1,
  },
  {
    description: "Meet my friend Kiko Arora",
    completed: false,
    index: 2,
  },
  {
    description: "To be Present in Microverse Program during 8:00 to 17:15",
    completed: false,
    index: 3,
  }
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
  check.type='checkbox';
  check.id=''; 
  check.name = 'check';

  const span = document.createElement('span');
  span.textContent = 'Icon';

  divTask.append(check, textArea, span);

  const li = document.createElement('li');
  li.classList.add('task-item');
  li.append(divTask);
  return li;
};

const populate = (taskArray) => {
  taskArray.forEach(element => {
    document.querySelector('.list-container').append(createTaskTemplate(element));
  });
};

window.addEventListener('load',populate(taskArray));

