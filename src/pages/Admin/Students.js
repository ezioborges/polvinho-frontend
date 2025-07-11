import { getAllStudenstsApi } from '../../api/students.js';
import createEntityButtonRoute from '../../components/Buttons/createEntityButtonRoute.js';
import PageTitle from '../../components/PageTitle.js';
import UserList from '../../components/Users/UserList.js';
import newElement from '../../utils/newElement.js';

const Students = async () => {
	const studentsContent = newElement('div');
	studentsContent.id = 'students-content';

	const students = await getAllStudenstsApi();

	const studentArray = students.filter(user => user.isDeleted === false);

	const studentAmount = studentArray.length;

	const topArea = newElement('div');
	topArea.classList.add('body-title-area');

	const studentTitle = PageTitle('Alunos', `${studentAmount} Cadastrados`);

	const changeToRegister = createEntityButtonRoute(
		'Cadastrar',
		'textLG',
		'create-entity-button',
	);
	changeToRegister.onclick = () =>
		(window.location.href = '#/register/aluno');

	const studentsList = await UserList(studentArray);

	topArea.appendChild(studentTitle);
	topArea.appendChild(changeToRegister);

	studentsContent.appendChild(topArea);
	studentsContent.appendChild(studentsList);

	return studentsContent;
};

export default Students;
