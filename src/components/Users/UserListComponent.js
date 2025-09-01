import { deleteUser } from '../../events/users.js';
import {
	clickEventCancelButton,
	openDialog,
	subjectsAmountDropdown,
} from '../../utils/eventListeners.js';
import newElement from '../../utils/newElement.js';
import BodyWithoutContent from '../BodyWithoutContent.js';

const UserListComponent = (users, listContent) => {
	const bodyArea = newElement('div');

	const local = window.location.hash;
	console.log('🚀 ~ UserListComponent ~ local:', local);

	const activeUsers = users.filter(user => user.isDeleted === false);

	activeUsers.forEach(user => {
		console.log('user ====> ', user);
		const listRow = newElement('div');
		listRow.classList.add('bar-content');

		const studentRegisterArea = newElement('div');
		studentRegisterArea.classList.add('entity-box-area');

		const studentNameArea = newElement('div');
		studentNameArea.classList.add('entity-box-area');

		const studentSubjectsAmountArea = newElement('div');
		studentSubjectsAmountArea.classList.add('entity-box-area');

		const studentSubjectsAmount = newElement('div');
		studentSubjectsAmount.classList.add('entity-subjects-amount');
		studentSubjectsAmount.textContent =
			user.subject.length > 0 ? user.subject.length : '0';
		studentSubjectsAmount.classList.add('textMd');

		// Adiciona o ID do usuário no elemento
		studentSubjectsAmountArea.dataset.userId = user._id;
		studentSubjectsAmountArea.dataset.userRegistration = user.registration;

		let isVisible = false;
		subjectsAmountDropdown(studentSubjectsAmountArea, isVisible);

		const studentDropdownList = newElement('div');
		studentDropdownList.id = `user-register-${user.registration}`;
		studentDropdownList.classList.add('textMd');

		const studentActionsArea = newElement('div');
		studentActionsArea.classList.add('entity-box-area');

		const actionsClickArea = newElement('div');
		actionsClickArea.classList.add('actions-click-area');

		const studentRegister = newElement('p');
		studentRegister.textContent = user.registration;
		studentRegister.classList.add('textMd');

		const studentName = newElement('p');
		studentName.textContent = user.name;
		studentName.classList.add('textMd');

		const editArea = newElement('a');
		editArea.classList.add('entity-action-area');
		editArea.textContent = 'Editar';
		editArea.classList.add('textSm');
		editArea.href = local.includes('#/aluno-admin')
			? `#/edit/aluno/${user._id}`
			: `#/edit/professor/${user._id}`;
		console.log('🚀 ~ UserListComponent ~ local:', window.location);

		const deleteArea = newElement('a');
		deleteArea.id = `delete-user-${user._id}`;
		deleteArea.classList.add('entity-action-area');
		deleteArea.textContent = 'Remover';
		deleteArea.classList.add('textSm');
		openDialog(
			deleteArea,
			'Tem Certeza?',
			`Você irá eliminar o ${user.role} "${user.name}". Esta ação não pode ser desfeita.`,
			'Cancelar',
			clickEventCancelButton,
			'Eliminar',
			deleteUser,
			'var(--red-500)',
			`id-${user.role}-${user._id}`,
		);

		actionsClickArea.appendChild(editArea);
		actionsClickArea.appendChild(deleteArea);

		studentActionsArea.appendChild(actionsClickArea);

		studentRegisterArea.appendChild(studentRegister);

		studentNameArea.appendChild(studentName);

		// Anexamos apenas o número de disciplinas, o painel global já foi criado acima.
		studentSubjectsAmountArea.appendChild(studentSubjectsAmount);
		studentSubjectsAmountArea.appendChild(studentDropdownList);

		listRow.appendChild(studentRegisterArea);
		listRow.appendChild(studentNameArea);
		listRow.appendChild(studentSubjectsAmountArea);
		listRow.appendChild(studentActionsArea);

		bodyArea.appendChild(listRow);
	});

	if (!activeUsers || activeUsers.length === 0) {
		const bodyWithoutContent = BodyWithoutContent(
			'Não há pessoas cadastradas!',
		);
		bodyArea.appendChild(bodyWithoutContent);
	}

	return bodyArea;
};

export default UserListComponent;
