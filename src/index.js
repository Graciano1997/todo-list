import './style.css';
import { createTaskListener, readTaskListener, updateListener } from './module/crud.js';
import { refreshPage, setSubmitIcon } from './module/taskTemplate.js';
import { updateTaskStatusListener, clearAllDoneTasksListener } from './module/interactiveList.js';

createTaskListener();
readTaskListener();
updateListener();
setSubmitIcon();
refreshPage();
clearAllDoneTasksListener();
updateTaskStatusListener();