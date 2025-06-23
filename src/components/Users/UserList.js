import { getAllUsers } from '../../data/fetchData.js';
import urls from '../../urls/index.js';
import newElement from '../../utils/newElement.js';
import BodyWithoutContent from '../BodyWithoutContent.js';
import headerEntitiesList from '../Headers/headerEntitiesList.js';
import UsersListComponent from './UsersListComponent.js';

const UserList = async userArray => {
	const headersList = ['Matricula', 'Nome', 'Disciplinas', 'Ações'];
	const { users } = await getAllUsers(urls.users);
	const roleByLink = window.location.href.split('/')[4];

	const userAmount = users.length;

	const bodyWithoutContent = BodyWithoutContent(
		'Não há pessoas cadastradas!',
	);

	const titleList = newElement('p');
	titleList.classList.add('title-list-student');
	titleList.classList.add('title2');
	titleList.textContent =
		roleByLink === 'professors-admin'
			? 'Lista de Professores'
			: 'Lista de Alunos';

	const headersArea = newElement('div');
	headersArea.classList.add('headers-area');

	headerEntitiesList(headersList, headersArea);

	const listContent = newElement('div');

	const entitiesList = UsersListComponent(userArray, listContent);

	if (userAmount > 0) {
		listContent.appendChild(titleList);
		listContent.appendChild(headersArea);
		listContent.appendChild(entitiesList);
	} else {
		listContent.appendChild(bodyWithoutContent);
	}

	return listContent;
};

export default UserList;
