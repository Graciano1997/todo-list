import './style.css';
import { createTaskListener, readTaskListener} from './module/crud.js';
import { setSubmitIcon } from './module/setIcon.js';

createTaskListener();
readTaskListener();
setSubmitIcon()