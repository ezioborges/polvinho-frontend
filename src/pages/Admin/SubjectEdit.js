import { getAllProfessorsApi } from '../../api/professors.js';
import { getSubjectByIdApi } from '../../api/subjects.js';
import QuizzButton from '../../components/Buttons/QuizzButton.js';
import selectInput from '../../components/Input/selectInput.js';
import InputArea from '../../components/Input/textInput.js';
import { updateSubjectsEvent } from '../../events/subjects.js';
import newElement from '../../utils/newElement.js';

const SubjectEdit = async () => {
	const subjectId = window.location.href.split('/')[6];
	const subject = await getSubjectByIdApi(subjectId);
	const allprofessors = await getAllProfessorsApi();

	const professorArray = allprofessors.map(professor => professor.name);

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

	const subjectProfessorLabelInput = selectInput(
		'Professor',
		'input-edit-professor',
		professorArray,
	);

	const buttonArea = newElement('div');
	buttonArea.classList.add('button-area');

	const registerButton = QuizzButton('Editar', 'button-content', 'textMd');
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
