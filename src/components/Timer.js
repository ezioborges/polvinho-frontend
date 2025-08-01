import newElement from '../utils/newElement.js';

const Timer = () => {
	const timerContent = newElement('div');
	timerContent.classList.add('timer-content');
	timerContent.classList.add('textMd');
	timerContent.textContent = '23 : 40';

	return timerContent;
};

export default Timer;
