import './style.css';
import { createTaskListener, readTaskListener, updateListener } from './module/crud.js';
import { refreshPage, setSubmitIcon } from './module/taskTemplate.js';
import { updateTaskStatusListener,taskStatusUpdate } from './module/interactiveList.js';

//taskStatusUpdate(0);
createTaskListener();
readTaskListener();
updateListener();
setSubmitIcon();
refreshPage();
updateTaskStatusListener();