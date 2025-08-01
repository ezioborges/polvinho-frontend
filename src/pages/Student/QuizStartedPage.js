import { getQuizzByIdApi } from '../../api/quizzes.js';
import { StudentAnswers } from '../../components/Students/StudentAnswers.js';
import { StudentstudentsQuestions } from '../../components/Students/StudentsQuestions.js';
import newElement from '../../utils/newElement.js';

const QuizStartedPage = async () => {
	const quizId = window.location.hash.split('/')[2];
	const quizData = await getQuizzByIdApi(quizId);

	const startContent = newElement('div');
	startContent.classList.add('quiz-student-started-content');

	const questionsArea = newElement('div');
	questionsArea.classList.add('quiz-student-questions-area');

	const examArea = await StudentstudentsQuestions(quizData);

	const answersArea = newElement('div');
	answersArea.classList.add('quiz-student-answers-area');

	const studentAnswers = await StudentAnswers();

	questionsArea.appendChild(examArea);
	answersArea.appendChild(studentAnswers);

	startContent.appendChild(questionsArea);
	startContent.appendChild(answersArea);

	return startContent;
};

export default QuizStartedPage;
