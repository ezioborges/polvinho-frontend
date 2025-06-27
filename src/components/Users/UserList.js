import newElement from '../../utils/newElement.js';
import BodyWithoutContent from '../BodyWithoutContent.js';
import headerEntitiesList from '../Headers/headerEntitiesList.js';
import UsersListComponent from './UsersListComponent.js';

const UserList = async userArray => {
	const headersList = ['Matricula', 'Nome', 'Disciplinas', 'Ações'];
	const roleByLink = window.location.href.split('/')[4];

	const titleList = newElement('p');
	titleList.classList.add('title-list-student');
	titleList.classList.add('title2');
	titleList.textContent =
		roleByLink === 'professor-admin'
			? 'Lista de Professores'
			: 'Lista de Alunos';

	const headersArea = newElement('div');
	headersArea.classList.add('headers-area');

	headerEntitiesList(headersList, headersArea);

	const listContent = newElement('div');
	listContent.id = 'list-content';

	const entitiesList = UsersListComponent(userArray, listContent);

	if (!userArray || userArray.length === 0) {
		const bodyWithoutContent = BodyWithoutContent(
			'Não há pessoas cadastradas!',
		);
		listContent.appendChild(bodyWithoutContent);
	}

	if (userArray.length > 0) {
		listContent.appendChild(titleList);
		listContent.appendChild(headersArea);
		listContent.appendChild(entitiesList);
	}

	return listContent;
};

export default UserList;
