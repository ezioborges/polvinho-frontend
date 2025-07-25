import { deleteQuizzButton } from '../../../events/quizzes.js';
import { clickEventCancelButton } from '../../../utils/eventListeners.js';
import newElement from '../../../utils/newElement.js';
import { QuestionDialog } from '../../Dialogs/QuestionsDialog.js';

export const DeleteQuiz = quizData => {
	const deleteContent = newElement('div');
	// deleteContent.classList.add('delete-button-content');

	const deleteButton = newElement('div');
	deleteButton.textContent = 'Deletar Quiz';
	deleteButton.classList.add('textMd');
	deleteButton.classList.add('delete-quiz-button');
	QuestionDialog(
		deleteButton,
		'Tem Certeza?',
		`Você irá eliminar o quiz "${quizData.title}". Esta ação não pode ser desfeita.`,
		'Cancelar',
		clickEventCancelButton,
		'Eliminar',
		deleteQuizzButton,
		'var(--red-500)',
		quizData,
	);

	deleteContent.appendChild(deleteButton);

	return deleteContent;
};
