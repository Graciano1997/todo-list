import './style.css';
import enterImg from './enter.png';
import { createTaskListener } from './module/crud.js';

const populate = () => {
   const img = new Image();
   img.src = enterImg;
   document.querySelector('#enter').appendChild(img);
   
   // taskArray.forEach((element) => {
     //   document.querySelector('.list-container').append(createTaskTemplate(element));
     // });
};


populate();
createTaskListener();
