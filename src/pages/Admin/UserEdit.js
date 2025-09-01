import { getProfessorByIdApi } from '../../api/professors.js';
import { getAllSubjectsApi } from '../../api/subjects.js';
import InputArea from '../../components/Input/textInput.js';
import newElement from '../../utils/newElement.js';

const UserEdit = async () => {
	const userId = window.location.hash.split('/')[3];

	const userToEdit = await getProfessorByIdApi(userId);
	const subjects = await getAllSubjectsApi();

	const editContent = newElement('div');
	editContent.textContent = 'aqui é a página de edição';
	editContent.style.color = 'white';

	const firstRow = newElement('div');
	firstRow.classList.add('register-row');

	const userName = InputArea(
		'Nome completo',
		'input-edit-name',
		`${userToEdit.name}`,
	);
	userName.querySelector('#input-edit-name').value = `${userToEdit.name}`;

	const userRegister = InputArea(
		'Matrícula',
		'input-edit-register',
		'Não pode ser alterado',
	);
	userRegister.querySelector('#input-edit-register').disabled = true;

	// const secondRow = newElement('div');
	// secondRow.classList.add('register-row');

	// const userEmail = InputArea(
	// 	'Email',
	// 	'input-edit-email',
	// 	`${userToEdit.role}@email.com`,
	// );
	// userEmail.querySelector('#input-edit-email').value = `${userToEdit.email}`;

	// const subjectsList = subjects.filter(
	// 	subject => subject.isDeleted === false,
	// );
	// const subjectsOptions = subjectsList.map(subject => subject.name);

	// const userSubject = selectInput(
	// 	'Disciplinas',
	// 	'select-edit-subjects',
	// 	subjectsOptions,
	// );
	// userSubject.querySelector('#select-edit-subjects').value =
	// 	`${subjects.name}`;

	// const buttonArea = newElement('div');
	// buttonArea.classList.add('button-area');

	// const registerButton = QuizzButton(
	// 	'Salvar alterações',
	// 	'button-content',
	// 	'textMd',
	// );
	// registerButton.style.width = '19.2vw';

	// if (userToEdit.role === 'professor') {
	// 	const title = textGenerator('title1', `Edição de ${userToEdit.role}`);
	// 	title.style.marginBottom = '2.4rem';

	firstRow.appendChild(userName);
	firstRow.appendChild(userRegister);

	// 	secondRow.appendChild(userEmail);
	// 	secondRow.appendChild(userSubject);

	// 	buttonArea.appendChild(registerButton);
	// 	updateUser(registerButton, userToEdit.role, userToEdit._id);

	// 	editContent.appendChild(title);
	editContent.appendChild(firstRow);
	// 	editContent.appendChild(secondRow);
	// 	editContent.appendChild(buttonArea);
	// }

	// if (userToEdit.role === 'aluno') {
	// 	const title = textGenerator('title1', `Edição de ${userToEdit.role}`);
	// 	title.style.marginBottom = '2.4rem';

	firstRow.appendChild(userName);
	firstRow.appendChild(userRegister);

	// 	secondRow.appendChild(userEmail);
	// 	secondRow.appendChild(userSubject);

	// 	buttonArea.appendChild(registerButton);
	// 	updateUser(registerButton, userToEdit.role, userToEdit._id);

	// 	editContent.appendChild(title);
	editContent.appendChild(firstRow);
	// 	editContent.appendChild(secondRow);
	// 	editContent.appendChild(buttonArea);
	// }

	return editContent;
};

export default UserEdit;
