import DisciplinesContent from '../components/DisciplinesContent.js';
import newElement from '../utils/newElement.js';

const Disciplines = () => {
	const disciplineContent = newElement('div');
	disciplineContent.classList.add('discipline-content');

	const title = PageTitle('Nome da disciplina', 'Quizzes');
	const disciplines = DisciplinesContent();

	disciplineContent.appendChild(title);
	disciplineContent.appendChild(disciplines);

	return disciplineContent;
};

export default Disciplines;
