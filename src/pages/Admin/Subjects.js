import { BodyWithoputUsers } from '../../components/BodyWithoputUsers.js';
import createEntityButtonRoute from '../../components/Buttons/createEntityButtonRoute.js';
import headerEntitiesList from '../../components/Headers/headerEntitiesList.js';
import PageTitle from '../../components/PageTitle.js';
import SubjectsList from '../../components/Subjects/SubjectsList.js';
import { getAllSubjects } from '../../data/fetchData.js';
import urls from '../../urls/index.js';
import newElement from '../../utils/newElement.js';

const Subjects = async () => {
	const { subjects } = await getAllSubjects(urls.subjects);
	const headersList = ['Nome', 'Professor', 'Quiz', 'Ações'];

	const subjectsContent = newElement('div');

	const topArea = newElement('div');
	topArea.classList.add('user-top-area');

	const subjectsTitle = PageTitle(
		'Disciplinas',
		`${subjects.length} Cadastrados`,
	);
	subjectsTitle.style.marginLeft = '-3.75rem';

	const changeToRegister = createEntityButtonRoute(
		'Cadastrar',
		'textLG',
		'create-entity-button',
	);
	changeToRegister.onclick = () =>
		(window.location.href = '#/register/disciplina');

	const listContent = newElement('div');
	listContent.classList.add('list-area');

	const titleListArea = newElement('div');
	titleListArea.classList.add('title-student-list-area');

	const titleList = newElement('p');
	titleList.classList.add('title-list-student');
	titleList.classList.add('title2');
	titleList.textContent = 'Lista de Disciplinas';

	const subjectsListContent = newElement('div');
	subjectsListContent.classList.add('students-list');

	const headersArea = newElement('div');
	headersArea.classList.add('headers-area');

	headerEntitiesList(headersList, headersArea);

	const subjectsListItems = await SubjectsList(subjects, listContent);
	const bodyWithoutUsers = BodyWithoputUsers();

	if (subjects.length > 0) {
		listContent.appendChild(titleListArea);
		listContent.appendChild(headersArea);
		listContent.appendChild(subjectsListItems);
	} else {
		listContent.appendChild(bodyWithoutUsers);
	}

	titleListArea.appendChild(titleList);

	topArea.appendChild(subjectsTitle);
	topArea.appendChild(changeToRegister);

	subjectsContent.appendChild(topArea);
	subjectsContent.appendChild(listContent);

	return subjectsContent;
};

export default Subjects;
