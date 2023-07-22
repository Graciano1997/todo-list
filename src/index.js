import './style.css';
import { createTaskListener, readTaskListener, updateListener } from './module/crud.js';
import { refreshPage, setSubmitIcon } from './module/taskTemplate.js';

createTaskListener();
readTaskListener();
updateListener();
setSubmitIcon();
refreshPage();