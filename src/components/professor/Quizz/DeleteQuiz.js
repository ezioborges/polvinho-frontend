import {
	clickEventCancelButton,
	openDialog,
} from '../../../utils/eventListeners.js';
import newElement from '../../../utils/newElement.js';

export const DeleteQuiz = () => {
	const deleteContent = newElement('div');
	deleteContent.classList.add('delete-button-content');

	const deleteButton = newElement('div');
	deleteButton.textContent = 'Deletar Quiz';
	deleteButton.classList.add('textMd');
	deleteButton.classList.add('delete-quiz-button');
	openDialog(
		deleteButton,
		'Tem Certeza?',
		`Você irá eliminar o quiz "NOME DO QUIZ". Esta ação não pode ser desfeita.`,
		'Cancelar',
		clickEventCancelButton,
		'mais pra from arrumar Eliminar',
		clickEventCancelButton,
		'var(--red-500',
	);

	deleteContent.appendChild(deleteButton);

	return deleteContent;
};
