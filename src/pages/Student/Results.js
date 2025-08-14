import { getQuizResultApi, getQuizzByIdApi } from '../../api/quizzes.js';
import InfoCardResult from '../../components/Exam/InfoCardResult.js';
import PageTitle from '../../components/PageTitle.js';
import { ResultList } from '../../components/Students/ResultList.js';
import newElement from '../../utils/newElement.js';

const Results = async () => {
	const quizId = window.location.hash.split('/')[2];
	const quizData = await getQuizzByIdApi(quizId);
	const student = JSON.parse(localStorage.getItem('userLogin'));
	const studentId = student.user.id;
	const { result } = await getQuizResultApi(quizId, studentId);

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
		`Nota ${result}`,
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
