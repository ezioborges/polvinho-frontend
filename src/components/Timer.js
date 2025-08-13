import newElement from '../utils/newElement.js';

const Timer = quiz => {
	console.log('quiz ===> ', quiz.studentStarted);

	let interval;
	let seconds = 0;
	let minutes = quiz.timeMinutes;

	const timerContent = newElement('div');
	timerContent.classList.add('timer-content');
	timerContent.classList.add('textMd');
	timerContent.textContent = `${minutes} : 00`;

	const startQuiz = () => {
		interval = setInterval(() => {
			if (quiz.studentStarted === true) {
				if (seconds === 0) {
					if (minutes === 0) {
						clearInterval(interval);
						timerContent.textContent = 'Tempo esgotado!';
						return;
					}
					minutes--;
					seconds = 59;
				} else {
					seconds--;
				}
				timerContent.textContent = `${minutes} : ${seconds
					.toString()
					.padStart(2, '0')}`;
			}
		}, 1000);
	};

	startQuiz();

	return timerContent;
};

export default Timer;
