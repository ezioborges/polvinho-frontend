import { quizzesData } from '../../data/quizzesData.js';
import newElement from '../../utils/newElement.js';

// chamo essa função dentro da subjectBodySide
export const subjectQuizzesList = async isPosted => {
	const quizzes = quizzesData;

	const quizzesList = newElement('div');

	if (isPosted) {
		quizzes.forEach(quiz => {
			// TODO: COLOCAR AQUI UM ONCLICK PRA CONSEGUIR NEVEGAR ATÉ A DISCIPLINA
			if (quiz.isPosted === true) {
				const quizItem = newElement('div');
				quizItem.classList.add('quizzes-content');
				quizItem.classList.add('textLG');
				quizItem.textContent = quiz.name;
				quizItem.onclick = () =>
					(window.location.hash = `#/quiz/${quiz.id}`);

				quizzesList.appendChild(quizItem);
			}
		});
	}

	if (!isPosted) {
		quizzes.forEach(quiz => {
			if (quiz.isPosted === false) {
				const quizItem = newElement('div');
				quizItem.classList.add('quizzes-content');
				quizItem.classList.add('textLG');
				quizItem.textContent = quiz.name;
				quizItem.onclick = () =>
					(window.location.hash = `#/quiz/${quiz.id}`);

				quizzesList.appendChild(quizItem);
			}
		});
	}

	// return isPosted ? se for true : se for false
	return quizzesList;
};
