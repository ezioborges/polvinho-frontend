import QuizzButton from '../../components/Buttons/QuizzButton.js';
import InputArea from '../../components/Input/textInput.js';
import { getSubjectsById } from '../../data/subjectsData.js';
import { getUserById } from '../../data/userData.js';
import { updateSubjectsEvent } from '../../events/subjects.js';
import newElement from '../../utils/newElement.js';

const SubjectEdit = async () => {
	const subjectId = window.location.href.split('/')[6];
	const subject = await getSubjectsById(subjectId);
	const professor = await getUserById(subject.professor);

	const editContent = newElement('div');

	const RowRegister = newElement('div');
	RowRegister.classList.add('register-row');

	const subjectNameLabelInput = InputArea(
		'Disciplina',
		'input-edit-subject',
		`Digite o nome da disciplina`,
	);
	subjectNameLabelInput.querySelector('#input-edit-subject').value =
		`${subject.name}`;

	const subjectProfessorLabelInput = InputArea(
		'Professor',
		'input-edit-professor',
		`Nome do professor`,
	);
	subjectProfessorLabelInput.querySelector('#input-edit-professor').value =
		`${professor.name}`;

	const buttonArea = newElement('div');
	buttonArea.classList.add('button-area');

	const registerButton = QuizzButton('Cadastrar', 'button-content', 'textMd');
	registerButton.style.width = '19.2vw';
	updateSubjectsEvent(registerButton, subject);

	buttonArea.appendChild(registerButton);

	RowRegister.appendChild(subjectNameLabelInput);
	RowRegister.appendChild(subjectProfessorLabelInput);

	editContent.appendChild(RowRegister);
	editContent.appendChild(buttonArea);

	return editContent;
};

export default SubjectEdit;
