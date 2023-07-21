
const createTaskTemplate = (task) => {
    const divTask = document.createElement('div');
    divTask.classList.add('task');
  
    const textArea = document.createElement('textarea');
    textArea.id='taskContent';
    textArea.readOnly=true;
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
  
  export { createTaskTemplate };