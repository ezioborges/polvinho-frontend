import { getAllProfessorsApi } from '../../api/professorsFetch.js';
import { deleteSubjectEvent } from '../../events/subjects.js';
import newElement from '../../utils/newElement.js';
import BodyWithoutContent from '../BodyWithoutContent.js';

const SubjectsList = async subjectsArray => {
	const bodyArea = newElement('div');
	bodyArea.classList.add('body-area');

	const allProfessor = await getAllProfessorsApi();
	const professors = allProfessor.filter(user => user.role === 'professor');

	subjectsArray.forEach(subject => {
		const listRow = newElement('div');
		listRow.classList.add('bar-content');
		const findedProfessorName = professors.find(
			professor => professor._id === subject.professor,
		);

		const subjectNameArea = newElement('div');
		subjectNameArea.classList.add('student-box-area');

		const subjectName = newElement('p');
		subjectName.textContent = subject.name;
		subjectName.classList.add('textMd');

		const professorNameArea = newElement('div');
		professorNameArea.classList.add('student-box-area');

		const professorName = newElement('p');
		professorName.textContent = findedProfessorName
			? findedProfessorName.name
			: 'Professor não cadastrado';
		professorName.classList.add('textMd');

		const quizAmountArea = newElement('div');
		quizAmountArea.classList.add('student-box-area');

		const quizAmount = newElement('p');
		//TODO: aqui eu tenho que substituir pela quantidade de quizzes depois
		quizAmount.textContent = '0';
		quizAmount.classList.add('textMd');

		const studentActionsArea = newElement('div');
		studentActionsArea.classList.add('student-box-area');

		const actionsClickArea = newElement('div');
		actionsClickArea.classList.add('actions-click-area');

		const editArea = newElement('a');
		editArea.id = `${subject._id}`;
		editArea.classList.add('edit-area');
		editArea.textContent = 'Editar';
		editArea.classList.add('textSm');
		editArea.href = `#/edit/subject/${subject._id}`;

		const deleteArea = newElement('a');
		deleteArea.id = `${subject._id}`;
		deleteArea.classList.add('delete-area');
		deleteArea.textContent = 'Excluir';
		deleteArea.classList.add('textSm');
		deleteSubjectEvent(deleteArea);

		actionsClickArea.appendChild(editArea);
		actionsClickArea.appendChild(deleteArea);

		subjectNameArea.appendChild(subjectName);
		professorNameArea.appendChild(professorName);
		quizAmountArea.appendChild(quizAmount);

		studentActionsArea.appendChild(actionsClickArea);

		listRow.appendChild(subjectNameArea);
		listRow.appendChild(professorNameArea);
		listRow.appendChild(quizAmountArea);
		listRow.appendChild(studentActionsArea);

		bodyArea.appendChild(listRow);
	});

	if (!subjectsArray || subjectsArray.length === 0) {
		const bodyWithoutContent = BodyWithoutContent(
			'Não há pessoas cadastradas!',
		);
		bodyArea.appendChild(bodyWithoutContent);
	}

	return bodyArea;
};

export default SubjectsList;
