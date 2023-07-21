import './style.css';
import { createTaskListener, readTaskListener, updateListener } from './module/crud.js';
import { setSubmitIcon } from './module/setIcon.js';

createTaskListener();
readTaskListener();
updateListener();
setSubmitIcon();
