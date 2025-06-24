import QuizzButton from '../../components/Buttons/QuizzButton.js';
import selectInput from '../../components/Input/selectInput.js';
import InputArea from '../../components/Input/textInput.js';
import { getAllSubjects, getSubjectsById } from '../../data/subjectsData.js';
import { getUserById } from '../../data/userData.js';
import { updateUser } from '../../events/users.js';
import urls from '../../urls/index.js';
import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';

const UserEdit = async () => {
	const role = window.location.hash.split('/')[2];
	const userId = window.location.hash.split('/')[3];
	const user = await getUserById(userId);

	const { subjects } = await getAllSubjects(urls.subjects);
	const [subjectId] = user.subject;
	const { subject } = await getSubjectsById(subjectId);

	const editContent = newElement('div');

	const title = textGenerator('title1', `Edição de ${role}`);

	const firstRow = newElement('div');
	firstRow.classList.add('register-row');

	const userName = InputArea(
		'Nome completo',
		'input-edit-name',
		`${user.name}`,
	);
	userName.querySelector('#input-edit-name').value = `${user.name}`;

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
		`${role}@email.com`,
	);
	userEmail.querySelector('#input-edit-email').value = `${user.email}`;

	const subjectsOptions = [];
	subjects.forEach(subject => subjectsOptions.push(subject.name));
	const userSubject = selectInput(
		'Disciplinas',
		'select-edit-subjects',
		subjectsOptions,
	);
	userSubject.querySelector('#select-edit-subjects').value =
		`${subject.name}`;

	const buttonArea = newElement('div');
	buttonArea.classList.add('button-area');

	const registerButton = QuizzButton(
		'Salvar alterações',
		'button-content',
		'textMd',
	);
	registerButton.style.width = '19.2vw';
	updateUser(registerButton, userId, role);

	firstRow.appendChild(userName);
	firstRow.appendChild(userRegister);

	secondRow.appendChild(userEmail);
	secondRow.appendChild(userSubject);

	buttonArea.appendChild(registerButton);

	editContent.appendChild(title);
	editContent.appendChild(firstRow);
	editContent.appendChild(secondRow);
	editContent.appendChild(buttonArea);

	return editContent;
};

export default UserEdit;
