import enterImg from '../enter.png';
import * as variable from './globalvar';

const setSubmitIcon = () => {
    const img = new Image();
    img.src = enterImg;
    variable.btnSubmit.appendChild(img);
};

export { setSubmitIcon };