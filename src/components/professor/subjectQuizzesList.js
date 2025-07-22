import { getQuizzesBySubjectApi } from '../../api/quizzes.js';
import newElement from '../../utils/newElement.js';

// chamo essa função dentro da subjectBodySide
export const subjectQuizzesList = async (isPosted, subject) => {
	// const quizzes = await getAllQuizzesApi();

	const { quizzes } = await getQuizzesBySubjectApi(subject._id);

	const quizzesList = newElement('div');

	if (isPosted) {
		quizzes.forEach(quiz => {
			// TODO: COLOCAR AQUI UM ONCLICK PRA CONSEGUIR NEVEGAR ATÉ A DISCIPLINA
			if (quiz.isPublished === true) {
				const quizItem = newElement('div');
				quizItem.classList.add('quizzes-content');
				quizItem.classList.add('textLG');
				quizItem.textContent = quiz.title;
				quizItem.onclick = () =>
					(window.location.hash = `#/quiz/${quiz._id}`);

				quizzesList.appendChild(quizItem);
			}
		});
	}

	if (!isPosted) {
		quizzes.forEach(quiz => {
			if (quiz.isPublished === false) {
				const quizItem = newElement('div');
				quizItem.classList.add('quizzes-content');
				quizItem.classList.add('textLG');
				quizItem.textContent = quiz.title;
				quizItem.onclick = () =>
					(window.location.hash = `#/quiz/${quiz._id}`);

				quizzesList.appendChild(quizItem);
			}
		});
	}

	// return isPosted ? se for true : se for false
	return quizzesList;
};
