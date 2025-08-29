import { getQuizResultApi } from '../../../api/quizzes.js';
import { getAllStudenstsApi } from '../../../api/students.js';
import { maxScore } from '../../../utils/maxScore.js';
import newElement from '../../../utils/newElement.js';
import textGenerator from '../../../utils/textGenerator.js';

export const StudentsResponseAndResumeList = async quizId => {
	const students = await getAllStudenstsApi();
	const studentResponseContent = newElement('div');
	studentResponseContent.classList.add('student-response-content');

	const responseTitle = textGenerator('title4', 'Alunos que responderam');

	studentResponseContent.appendChild(responseTitle);

	students.forEach(async student => {
		const { result } = await getQuizResultApi(quizId, student._id);
		const scores = result.map(res => res.score);
		const bestScore = maxScore(scores);
		const studentContent = newElement('div');
		studentContent.classList.add('bar-content');

		const studentName = newElement('div');
		studentName.classList.add('textMdBold');
		studentName.textContent = student.name;

		const studentInfo = newElement('div');
		studentInfo.classList.add('student-info');

		const responseViewButton = newElement('div');
		responseViewButton.textContent = 'Ver Respostas';
		responseViewButton.classList.add('textMd');
		responseViewButton.classList.add('action-area');
		responseViewButton.style.color = 'var(--indigo-900)';
		responseViewButton.onclick = () =>
			(window.location.hash = `#/quiz/quiz-answers/${student._id}`);

		const gradeArea = newElement('div');
		gradeArea.textContent = `${bestScore}/10`;
		gradeArea.classList.add('textMd');
		gradeArea.classList.add('action-area');
		gradeArea.style.color = 'var(--stone-600)';

		studentInfo.appendChild(responseViewButton);
		studentInfo.appendChild(gradeArea);

		studentContent.appendChild(studentName);
		studentContent.appendChild(studentInfo);

		studentResponseContent.appendChild(studentContent);
	});

	return studentResponseContent;
};
