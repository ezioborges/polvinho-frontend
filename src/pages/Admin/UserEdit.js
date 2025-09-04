import { getProfessorByIdApi } from '../../api/professors.js';
import { getAllSubjectsApi } from '../../api/subjects.js';
import QuizzButton from '../../components/Buttons/QuizzButton.js';
import InputArea from '../../components/Input/textInput.js';
import { updateUser } from '../../events/users.js';
import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';
// É necessário importar o selectInput
import selectInput from '../../components/Input/selectInput.js';

const UserEdit = async () => {
	const userId = window.location.hash.split('/')[3];

	const userToEdit = await getProfessorByIdApi(userId);
	const subjects = await getAllSubjectsApi();

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

		const subjectsList = subjects.filter(
			subject =>
				subject.isDeleted === false &&
				subject.professor &&
				subject.professor._id === userId,
		);
		const subjectsOptions = subjectsList.map(subject => subject.name);

		const userSubject = await selectInput(
			'Selecionar displina(s)',
			'select-edit-subjects',
			subjectsOptions,
		);

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

		const subjectsList = subjects.filter(
			subject =>
				subject.isDeleted === false &&
				subject.professor &&
				subject.professor._id === userId,
		);
		const subjectsOptions = subjectsList.map(subject => subject.name);

		const userSubject = await selectInput(
			'Selecinar Disciplina(s)',
			'select-edit-subjects',
			subjectsOptions,
		);
		secondRow.appendChild(userEmail);
		secondRow.appendChild(userSubject);

		buttonArea.appendChild(registerButton);
		updateUser(registerButton, userToEdit.role, userToEdit._id);

		editContent.appendChild(title);
		editContent.appendChild(firstRow);
		editContent.appendChild(secondRow);
		editContent.appendChild(buttonArea);
	}

	return editContent;
};

export default UserEdit;
