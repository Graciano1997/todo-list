import * as variable from './globalvar.js';

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
    const elipseIcon = '<i class=\'fa-solid fa-ellipsis-vertical\' id=\'elipse\'></i>';
    const trashIcon = '<i class=\'fa-solid fa-trash\' id=\'trash\'></i>';
  
    const span = document.createElement('span');
    span.classList.add('iconTask');
    span.classList.add('elipse');
    span.innerHTML = elipseIcon;
    
    const trashSpan = document.createElement('span');
    trashSpan.classList.add('iconTask');
    trashSpan.classList.add('trash');
    trashSpan.classList.add('hide');

    trashSpan.innerHTML = trashIcon;
  
    divTask.append(check, textArea, span,trashSpan);
  
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.append(divTask);
    return li;
  };

  const refreshPage = () => {
    variable.refresh.addEventListener('click',()=>{
      window.location.reload();
    })
  }
  
  export { createTaskTemplate, refreshPage };