import PageTitle from '../../components/PageTitle.js';
import { instructionsFromTheProfessor } from '../../components/Quizz/instructionsFromTheProfessor.js';
import { quizzesData } from '../../data/quizzesData.js';
import newElement from '../../utils/newElement.js';

const QuizPage = () => {
	const quizzes = quizzesData;
	const quizId = window.location.hash.split('/')[2];
	const quizData = quizzes.find(quiz => quiz.id === +quizId);

	const quizContent = newElement('div');

	const quizTitleArea = newElement('div');
	quizTitleArea.classList.add('body-title-area');

	const pageTitle = PageTitle(
		`${quizData.name}`,
		'quando quiz estiver cadastrado no back decidir o que fazer aqui',
	);

	const instructions = instructionsFromTheProfessor(quizData);

	quizTitleArea.appendChild(pageTitle);

	quizContent.appendChild(quizTitleArea);
	quizContent.appendChild(instructions);

	return quizContent;
};

export default QuizPage;
