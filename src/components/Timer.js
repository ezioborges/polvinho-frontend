import newElement from "../utils/newElement.js";

const Timer = () => {
    const timerContent = newElement('div')
    timerContent.classList.add('timer-content')
    timerContent.textContent = '23 : 40'

    return timerContent;
}

export default Timer;