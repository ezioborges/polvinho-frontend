import { quizzesData } from '../../data/quizzesData.js';
import newElement from '../../utils/newElement.js';

export const subjectQuizzesList = async isPosted => {
	const quizzes = quizzesData;

	const quizzesList = newElement('div');

	if (isPosted) {
		quizzes.forEach(quiz => {
			if (quiz.isPosted === true) {
				const quizItem = newElement('div');
				quizItem.classList.add('quizzes-content');
				quizItem.classList.add('textLG');
				quizItem.textContent = quiz.name;
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
				quizzesList.appendChild(quizItem);
			}
		});
	}

	// return isPosted ? se for true : se for false
	return quizzesList;
};
