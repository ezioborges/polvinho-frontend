import newElement from '../../../utils/newElement.js';

export const InputAnswer = (id, isCorrect) => {
	let classResponse = '';
	let icon = '';
	let placeHolder = '';

	if (isCorrect) {
		icon = '../../../../assets/CheckCircle.png';
		classResponse = 'input-answer-options-correct';
		placeHolder = 'Digite aqui a resposta correta...';
	}

	if (!isCorrect) {
		icon = '../../../../assets/ErrorCircle.png';
		classResponse = 'input-answer-options-wrong';
		placeHolder = 'Digite aqui uma alternativa incorreta...';
	}

	const inputArea = newElement('div');
	inputArea.classList.add('input-create-answer');

	const iconArea = newElement('div');
	iconArea.classList.add('quiz-create-question-icon-area');

	const iconChecked = newElement('img');
	iconChecked.style.marginTop = '0.4rem';
	iconChecked.src = icon || '../../../../assets/Vector-error.png';
	iconChecked.alt = 'circulo de confirmação';

	const inputAnswerArea = newElement('div');
	inputAnswerArea.classList.add('input-answer-area');

	const inputAnswerOptions = newElement('input');
	inputAnswerOptions.id = id;
	inputAnswerOptions.classList.add('input-answer-options');
	inputAnswerOptions.classList.add(classResponse);
	inputAnswerOptions.placeholder = placeHolder;

	iconArea.appendChild(iconChecked);

	inputAnswerArea.appendChild(inputAnswerOptions);

	inputArea.appendChild(iconArea);
	inputArea.appendChild(inputAnswerArea);

	return inputArea;
};
