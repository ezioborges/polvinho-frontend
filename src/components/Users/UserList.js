import { getAllUsers } from '../../data/fetchData.js';
import urls from '../../urls/index.js';
import newElement from '../../utils/newElement.js';
import { BodyWithoputUsers } from '../BodyWithoputUsers.js';
import headerEntitiesList from '../Headers/headerEntitiesList.js';
import UsersListComponent from './UsersListComponent.js';

const UserList = async userArray => {
	const headersList = ['Matricula', 'Nome', 'Disciplinas', 'Ações'];
	const { users } = await getAllUsers(urls.users);
	const roleByLink = window.location.href.split('/')[4];

	const userAmount = users.length;
	// const studentAmount = studentArray.length;

	const bodyWithoutUsers = BodyWithoputUsers();

	const titleList = newElement('p');
	titleList.classList.add('title-list-student');
	titleList.classList.add('title2');
	titleList.textContent =
		roleByLink === 'professors-admin'
			? 'Lista de Professores'
			: 'Lista de Alunos';

	const headersArea = newElement('div');
	headersArea.classList.add('headers-area');

	// TODO: vai se tornar o retorno da função de lista

	headerEntitiesList(headersList, headersArea);

	const listContent = newElement('div');

	const studentsList = UsersListComponent(userArray, listContent);

	listContent.appendChild(titleList);
	listContent.appendChild(headersArea);
	if (userAmount > 0) {
		listContent.appendChild(studentsList);
	} else {
		listContent.appendChild(bodyWithoutUsers);
	}

	return listContent;
};

export default UserList;
