import newElement from '../../../utils/newElement.js';

export const CreateQuestionButton = title => {
	const buttonContent = newElement('div');
	buttonContent.textContent = title;
	buttonContent.classList.add('textMd');
	buttonContent.classList.add('create-question-quiz-button');

	return buttonContent;
};
