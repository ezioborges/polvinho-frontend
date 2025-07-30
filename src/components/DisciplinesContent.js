import { getQuizzesBySubjectApi } from '../api/quizzes.js';
import newElement from '../utils/newElement.js';
import BodyWithoutContent from './BodyWithoutContent.js';
import disciplineBarDisc from './DisciplineBarDisc.js';
import headerEntitiesList from './Headers/headerEntitiesList.js';

const DisciplinesContent = async () => {
	const subjectId = window.location.hash.split('/')[2];
	const subject = await getQuizzesBySubjectApi(subjectId);
	const subjectQuizzes = subject.quizzes;

	const headersList = ['Nome', 'Data de Entrega', 'Tipo'];

	const noContent = BodyWithoutContent(
		'Nenhum quiz encontrado para esta disciplina.',
	);

	const disciplineContent = newElement('div');
	disciplineContent.classList.add('discipline-title-table');

	const disciplineHeader = newElement('div');
	disciplineHeader.classList.add('discipline-header');

	const disciplineBody = newElement('div');

	const headersArea = newElement('div');
	headersArea.classList.add('headers-area');

	headerEntitiesList(headersList, headersArea);

	disciplineContent.appendChild(headersArea);
	disciplineContent.appendChild(disciplineBody);

	if (!subject || subject.quizzes.length === 0) {
		disciplineBody.appendChild(noContent);
		return disciplineBody;
	}

	subjectQuizzes.forEach(quiz => {
		disciplineBody.appendChild(disciplineBarDisc(quiz));
	});

	return disciplineContent;
};

export default DisciplinesContent;
