import { getProfessorByIdApi } from '../../api/professorsFetch.js';
import QuizzButton from '../../components/Buttons/QuizzButton.js';
import selectInput from '../../components/Input/selectInput.js';
import InputArea from '../../components/Input/textInput.js';
import { getAllSubjects } from '../../data/subjectsData.js';
import { updateUser } from '../../events/users.js';
import urls from '../../urls/index.js';
import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';

const UserEdit = async () => {
	const userId = window.location.hash.split('/')[3];

	const userToEdit = await getProfessorByIdApi(userId);
	const subjects = await getAllSubjects(urls.subjects);

	const editContent = newElement('div');

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

	const secondRow = newElement('div');
	secondRow.classList.add('register-row');

	const userEmail = InputArea(
		'Email',
		'input-edit-email',
		`${userToEdit.role}@email.com`,
	);
	userEmail.querySelector('#input-edit-email').value = `${userToEdit.email}`;

	const subjectsOptions = [];
	subjects.forEach(subject => subjectsOptions.push(subject.name));
	const userSubject = selectInput(
		'Disciplinas',
		'select-edit-subjects',
		subjectsOptions,
	);
	userSubject.querySelector('#select-edit-subjects').value =
		`${subjects.name}`;

	const buttonArea = newElement('div');
	buttonArea.classList.add('button-area');

	const registerButton = QuizzButton(
		'Salvar alterações',
		'button-content',
		'textMd',
	);
	registerButton.style.width = '19.2vw';

	if (userToEdit.role === 'professor') {
		const title = textGenerator('title1', `Edição de ${userToEdit.role}`);
		title.style.marginBottom = '2.4rem';

		firstRow.appendChild(userName);
		firstRow.appendChild(userRegister);

		secondRow.appendChild(userEmail);
		secondRow.appendChild(userSubject);

		buttonArea.appendChild(registerButton);
		updateUser(registerButton, userToEdit.role, userToEdit._id);

		editContent.appendChild(title);
		editContent.appendChild(firstRow);
		editContent.appendChild(secondRow);
		editContent.appendChild(buttonArea);
	}

	if (userToEdit.role === 'aluno') {
		const title = textGenerator('title1', `Edição de ${userToEdit.role}`);
		title.style.marginBottom = '2.4rem';

		firstRow.appendChild(userName);
		firstRow.appendChild(userRegister);

		secondRow.appendChild(userEmail);
		secondRow.appendChild(userSubject);

		buttonArea.appendChild(registerButton);
		updateUser(registerButton, userToEdit.role, userToEdit._id);

		editContent.appendChild(title);
		editContent.appendChild(firstRow);
		editContent.appendChild(secondRow);
		editContent.appendChild(buttonArea);
	}

	// const { subjects } = await getAllSubjects(urls.subjects);
	// const [subjectId] = user.subject;
	// const { subject } = await getSubjectsById(subjectId);

	// const secondRow = newElement('div');
	// secondRow.classList.add('register-row');

	// const userEmail = InputArea(
	// 	'Email',
	// 	'input-edit-email',
	// 	`${role}@email.com`,
	// );
	// userEmail.querySelector('#input-edit-email').value = `${user.email}`;

	// const subjectsOptions = [];
	// subjects.forEach(subject => subjectsOptions.push(subject.name));
	// const userSubject = selectInput(
	// 	'Disciplinas',
	// 	'select-edit-subjects',
	// 	subjectsOptions,
	// );
	// userSubject.querySelector('#select-edit-subjects').value =
	// 	`${subject.name}`;

	// const buttonArea = newElement('div');
	// buttonArea.classList.add('button-area');

	// const registerButton = QuizzButton(
	// 	'Salvar alterações',
	// 	'button-content',
	// 	'textMd',
	// );
	// registerButton.style.width = '19.2vw';
	// updateUser(registerButton, userId, role);

	// firstRow.appendChild(userName);
	// firstRow.appendChild(userRegister);

	// secondRow.appendChild(userEmail);
	// secondRow.appendChild(userSubject);

	// buttonArea.appendChild(registerButton);

	// editContent.appendChild(title);
	// editContent.appendChild(firstRow);
	// editContent.appendChild(secondRow);
	// editContent.appendChild(buttonArea);

	return editContent;
};

export default UserEdit;
