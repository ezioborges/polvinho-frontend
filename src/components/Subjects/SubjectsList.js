import { getAllUsers } from '../../data/userData.js';
import urls from '../../urls/index.js';
import newElement from '../../utils/newElement.js';

const SubjectsList = async (subjectsArray, listContent) => {
	const bodyArea = newElement('div');
	bodyArea.classList.add('body-area');

	const { users } = await getAllUsers(urls.users);
	const professors = users.filter(user => user.role === 'professor');

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
			: 'Professor não encontrado';
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
		editArea.classList.add('edit-area');
		editArea.textContent = 'Editar';
		editArea.classList.add('textSm');
		editArea.href = `#/edit-area`;

		const deleteArea = newElement('a');
		deleteArea.classList.add('delete-area');
		deleteArea.textContent = 'Excluir';
		deleteArea.classList.add('textSm');
		// TODO: colocar a função de deletar disci0plinas aqui

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

	return bodyArea;
};

export default SubjectsList;
