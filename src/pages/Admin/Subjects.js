import BodyWithoutContent from '../../components/BodyWithoutContent.js';
import createEntityButtonRoute from '../../components/Buttons/createEntityButtonRoute.js';
import headerEntitiesList from '../../components/Headers/headerEntitiesList.js';
import PageTitle from '../../components/PageTitle.js';
import SubjectsList from '../../components/Subjects/SubjectsList.js';
import { getAllSubjects } from '../../data/subjectsData.js';
import urls from '../../urls/index.js';
import newElement from '../../utils/newElement.js';

const Subjects = async () => {
	const subjects = await getAllSubjects(urls.subjects);

	const subjectsContent = newElement('div');
	subjectsContent.id = 'subjects-content';

	const subjectsArray = subjects.filter(
		subject => subject.isDeleted === false,
	);

	const headersList = ['Nome', 'Professor', 'Quiz', 'Ações'];

	const topArea = newElement('div');
	topArea.classList.add('body-title-area');

	const subjectsTitle = PageTitle(
		'Disciplinas',
		`${subjectsArray.length} Cadastrados`,
	);
	const changeToRegister = createEntityButtonRoute(
		'Cadastrar',
		'textLG',
		'create-entity-button',
	);
	changeToRegister.id = 'button-change-to-register';
	changeToRegister.onclick = () =>
		(window.location.href = '#/register/subject');

	const listContent = newElement('div');
	listContent.classList.add('list-area');

	const titleListArea = newElement('div');
	titleListArea.id = 'title-list-area';
	const titleList = newElement('p');
	titleList.classList.add('title-list-student');
	titleList.classList.add('title2');
	titleList.textContent = 'Lista de Disciplinas';

	const subjectsListContent = newElement('div');
	subjectsListContent.classList.add('students-list');

	const headersArea = newElement('div');
	headersArea.classList.add('headers-area');

	headerEntitiesList(headersList, headersArea);

	const subjectsListItems = await SubjectsList(subjectsArray);

	if (!subjectsArray || subjectsArray.length === 0) {
		const bodyWithoutContent = BodyWithoutContent(
			'Não há disciplinas cadastradas!',
		);
		listContent.appendChild(bodyWithoutContent);
	}

	if (subjectsArray.length > 0) {
		listContent.appendChild(titleListArea);
		listContent.appendChild(headersArea);
		listContent.appendChild(subjectsListItems);
	}

	titleListArea.appendChild(titleList);

	topArea.appendChild(subjectsTitle);
	topArea.appendChild(changeToRegister);

	subjectsContent.appendChild(topArea);
	subjectsContent.appendChild(listContent);

	return subjectsContent;
};

export default Subjects;
