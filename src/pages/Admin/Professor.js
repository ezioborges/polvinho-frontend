import createEntityButtonRoute from '../../components/Buttons/createEntityButtonRoute.js';
import PageTitle from '../../components/PageTitle.js';
import UserList from '../../components/Users/UserList.js';
import { getAllUsers } from '../../data/userData.js';
import urls from '../../urls/index.js';
import newElement from '../../utils/newElement.js';

const Professor = async () => {
	const { users } = await getAllUsers(urls.users);

	const ProfessorArray = users.filter(
		user => user.role.toLowerCase() === 'professor',
	);

	const professorContent = newElement('div');
	professorContent.id = 'professor-content';

	const professorTopArea = newElement('div');
	professorTopArea.classList.add('body-title-area');

	const professorPageTitle = PageTitle(
		'Professores',
		`${ProfessorArray.length} Cadastrados`,
	);

	const professorRegisterButton = createEntityButtonRoute(
		'Cadastrar',
		'textLG',
		'create-entity-button',
	);
	professorRegisterButton.onclick = () =>
		(window.location.href = '#/register/professor');

	const professorsList = await UserList(ProfessorArray);

	professorTopArea.appendChild(professorPageTitle);
	professorTopArea.appendChild(professorRegisterButton);

	professorContent.appendChild(professorTopArea);
	professorContent.appendChild(professorsList);

	return professorContent;
};

export default Professor;
