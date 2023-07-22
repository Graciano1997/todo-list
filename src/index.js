import './style.css';
import { createTaskListener, readTaskListener, updateListener } from './module/crud.js';
import { setSubmitIcon } from './module/setIcon.js';
import { refreshPage } from './module/taskTemplate';


createTaskListener();
readTaskListener();
updateListener();
setSubmitIcon();
refreshPage();