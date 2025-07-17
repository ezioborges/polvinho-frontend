import newElement from '../../../utils/newElement.js';

export const DeleteQuiz = () => {
	const deleteContent = newElement('div');
	deleteContent.classList.add('delete-button-content');

	const deleteButton = newElement('div');
	deleteButton.textContent = 'Deletar Quiz';
	deleteButton.classList.add('textMd');
	deleteButton.classList.add('delete-quiz-button');

	deleteContent.appendChild(deleteButton);

	return deleteContent;
};
