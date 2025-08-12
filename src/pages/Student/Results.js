import { getAllStudentAnswersByQuizIdAndStudentIdApi } from '../../api/questions.js';
import { getQuizzByIdApi } from '../../api/quizzes.js';
import InfoCardResult from '../../components/Exam/InfoCardResult.js';
import PageTitle from '../../components/PageTitle.js';
import { ResultList } from '../../components/Students/ResultList.js';
import newElement from '../../utils/newElement.js';

const Results = async () => {
	const quizId = window.location.hash.split('/')[2];
	const quizData = await getQuizzByIdApi(quizId);
	const student = JSON.parse(localStorage.getItem('userLogin'));
	const studentId = student.user.id;

	// pegar a quantidade de perguntas
	const questions = quizData.questions;

	const correctAnswers = questions.map(question =>
		question.options.find(option => option.isCorrect),
	);
	console.log('🚀 ~ Results ~ correctAnswers:', correctAnswers);

	const questionsAmount = questions.length;
	console.log('🚀 ~ Results ~ questionsAmount:', questionsAmount);

	const correctAnswersAmount = correctAnswers.length;
	console.log('🚀 ~ Results ~ correctAnswersAmount:', correctAnswersAmount);

	const studentAnswers = await getAllStudentAnswersByQuizIdAndStudentIdApi(
		quizId,
		studentId,
	);

	const studentSelectedOptions = studentAnswers.studentAnswers.map(
		answer => answer.selectedOptionId,
	);
	console.log(
		'🚀 ~ Results ~ studentSelectedOptions:',
		studentSelectedOptions,
	);

	let studentRightAnswers = 0;
	correctAnswers.map(answer => {
		if (studentSelectedOptions.includes(answer._id)) {
			console.log('aqui ta batendo', answer);
			studentRightAnswers++;
		}
		console.log('🚀 ~ Results ~ studentRightAnswers:', studentRightAnswers);
	});

	const quizResult = ((studentRightAnswers / questionsAmount) * 10).toFixed(
		1,
	);
	console.log('🚀 ~ Results ~ quizResult:', quizResult);

	const resultContent = newElement('div');
	resultContent.classList.add('quiz-student-content');

	const leftArea = newElement('div');
	leftArea.style.width = '60%';

	const titleArea = newElement('div');
	titleArea.classList.add('body-title-area');

	const title = PageTitle(`${quizData.title}`, `${quizData.subjectId.name}`);

	titleArea.appendChild(title);

	const questionList = await ResultList(quizData.questions);

	const rightArea = newElement('div');

	const buttonArea = newElement('div');

	leftArea.appendChild(titleArea);
	leftArea.appendChild(questionList);

	resultContent.appendChild(leftArea);

	const infoCard = await InfoCardResult(
		`Nota ${quizResult}`,
		quizData.questions,
		quizId,
		studentId,
	);

	rightArea.appendChild(infoCard);

	resultContent.appendChild(rightArea);

	resultContent.appendChild(buttonArea);

	return resultContent;
};

export default Results;
