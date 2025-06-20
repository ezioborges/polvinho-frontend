import { subjectsAmountDropdown } from '../../utils/eventListeners.js';
import newElement from '../../utils/newElement.js';

const UserListComponent = (users, listContent) => {
	const bodyArea = newElement('div');
	bodyArea.classList.add('body-area');

	users.forEach(user => {
		const listRow = newElement('div');
		listRow.classList.add('bar-content');

		const studentRegisterArea = newElement('div');
		studentRegisterArea.classList.add('student-box-area');

		const studentNameArea = newElement('div');
		studentNameArea.classList.add('student-box-area');

		const studentSubjectsAmountArea = newElement('div');
		studentSubjectsAmountArea.classList.add('student-box-area');
		studentSubjectsAmountArea.classList.add('student-subjects-amount');

		// Adiciona o ID do usuário no elemento
		studentSubjectsAmountArea.dataset.userId = user._id;
		studentSubjectsAmountArea.dataset.userRegistration = user.registration;

		subjectsAmountDropdown(studentSubjectsAmountArea);

		const studentDropdownList = newElement('div');
		studentDropdownList.id = `user-register-${user.registration}`;
		studentDropdownList.classList.add('student-box-area');
		listContent.appendChild(studentDropdownList);
		//TODO: essa listContent vem da StudentList (elemento pai)

		const studentActionsArea = newElement('div');
		studentActionsArea.classList.add('student-box-area');

		const actionsClickArea = newElement('div');
		actionsClickArea.classList.add('actions-click-area');

		const studentRegister = newElement('p');
		studentRegister.textContent = user.registration;
		studentRegister.classList.add('textMd');

		const studentName = newElement('p');
		studentName.textContent = user.name;
		studentName.classList.add('textMd');

		const studentSubjectsAmount = newElement('p');
		studentSubjectsAmount.textContent =
			user.subject.length > 0 ? user.subject.length : '0';
		studentSubjectsAmount.classList.add('textMd');

		const editArea = newElement('a');
		editArea.classList.add('edit-area');
		editArea.textContent = 'Editar';
		editArea.classList.add('textSm');
		editArea.href = `#/edit-area`;

		const deleteArea = newElement('a');
		deleteArea.classList.add('delete-area');
		deleteArea.textContent = 'Excluir';
		deleteArea.classList.add('textSm');
		deleteArea.href = `#/delete-area`;

		actionsClickArea.appendChild(editArea);
		actionsClickArea.appendChild(deleteArea);

		studentActionsArea.appendChild(actionsClickArea);

		studentRegisterArea.appendChild(studentRegister);

		studentNameArea.appendChild(studentName);

		// Anexamos apenas o número de disciplinas, o painel global já foi criado acima.
		studentSubjectsAmountArea.appendChild(studentSubjectsAmount);

		listRow.appendChild(studentRegisterArea);
		listRow.appendChild(studentNameArea);
		listRow.appendChild(studentSubjectsAmountArea);
		listRow.appendChild(studentDropdownList);
		listRow.appendChild(studentActionsArea);

		bodyArea.appendChild(listRow);
	});

	return bodyArea;
};

export default UserListComponent;
