import newElement from '../../utils/newElement.js';

export const questionsGenerateButton = (title, btnClass) => {
	const buttonContent = newElement('button');
	buttonContent.classList.add(btnClass);
	buttonContent.textContent = title;

	return buttonContent;
};
