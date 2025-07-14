import {
	createProfessorApi,
	deleteProfessorApi,
	getAllProfessorsApi,
	updateProfessorApi,
} from '../api/professors.js';
import {
	createStudentApi,
	deleteStudentApi,
	getAllStudenstsApi,
	updateStudentApi,
} from '../api/students.js';
import ToastBar from '../components/ToastBar/index.js';
import UserList from '../components/Users/UserList.js';
import {
	resetProfessorInputs,
	resetUserInuts,
} from '../utils/resetUserInputs.js';

export const createUser = (element, userRole) => {
	element.addEventListener('click', async () => {
		const newUser = {
			name: document.querySelector('#input-user-name').value,
			email: document.querySelector('#input-user-email').value,
			registration: document.querySelector('#input-user-register').value,
			subject: document.querySelector('#input-user-subjects').value,
			role: userRole,
		};

		if (userRole === 'professor') {
			await createProfessorApi(newUser);
		}

		if (userRole === 'aluno') {
			await createStudentApi(newUser);
		}
		ToastBar(
			{
				iconParam: '../../assets/CheckCircle.svg',
				titleParam: 'Sucesso',
				msgParam: `${userRole}(a) criado com sucesso!`,
			},
			'success-toast',
		);

		resetUserInuts();
	});
};

export const updateProfessor = async (element, professorId) => {
	element.addEventListener('click', async () => {
		const professorUpdated = {
			name: document.querySelector('#input-edit-name').value,
			email: document.querySelector('#input-edit-email').value,
			subject: document.querySelector('#select-edit-subjects').value,
		};

		const { name, email, subject } = professorUpdated;

		if (!name || !email || !subject) {
			ToastBar(
				{
					iconParam: '../../assets/Vector-error.png',
					titleParam: 'Error',
					msgParam: 'Preencha todos os campos obrigatórios!',
				},
				'error-toast',
			);
		}

		await updateProfessorApi(professorId, professorUpdated);

		ToastBar(
			{
				iconParam: '../../assets/CheckCircle.svg',
				titleParam: 'Sucesso',
				msgParam: 'Professor(a) atualizado com sucesso!',
			},
			'success-toast',
		);

		resetProfessorInputs();
	});
};

export const updateUser = (element, userRole, userId) => {
	element.addEventListener('click', async () => {
		const userUpdated = {
			name: document.querySelector('#input-edit-name').value,
			email: document.querySelector('#input-edit-email').value,
			subject: document.querySelector('#select-edit-subjects').value,
		};

		const { name, email, subject } = userUpdated;

		if (!name || !email || !subject) {
			ToastBar(
				{
					iconParam: '../../assets/Vector-error.png',
					titleParam: 'Error',
					msgParam: 'Preencha todos os campos obrigatórios!',
				},
				'error-toast',
			);
		}

		if (userRole === 'aluno') {
			await updateStudentApi(userId, userUpdated);
			window.location.hash = '#/aluno-admin';
			resetProfessorInputs();
		}

		if (userRole === 'professor') {
			await updateProfessorApi(userId, userUpdated);
			window.location.hash = '#/professor-admin';
			resetProfessorInputs();
		}

		ToastBar(
			{
				iconParam: '../../assets/CheckCircle.svg',
				titleParam: 'Sucesso',
				msgParam: `${userRole}(a) atualizado com sucesso!`,
			},
			'success-toast',
		);
	});
};

export const deleteUser = async (element, userRole) => {
	element.addEventListener('click', async event => {
		try {
			const headerUrl = window.location.href.split('/')[4];
			const userTargetId = event.target.id;
			const userId = userTargetId.split('-')[2];

			if (userRole === 'professor') {
				await deleteProfessorApi(userId);
			}

			if (userRole === 'aluno') {
				await deleteStudentApi(userId);
			}

			ToastBar(
				{
					iconParam: '../../assets/CheckCircle.svg',
					titleParam: 'Sucesso',
					msgParam: 'Usuário excluído com sucesso!',
				},
				'success-toast',
			);

			const professors = await getAllProfessorsApi();
			const students = await getAllStudenstsApi();

			if (headerUrl === 'aluno-admin') {
				const studentsContent =
					document.querySelector('#students-content');
				const topArea = document.querySelector('.body-title-area');
				const studentArray = students.filter(
					user => user.role.toLowerCase() === 'aluno',
				);
				studentsContent.innerHTML = '';
				const studentsList = await UserList(studentArray);
				studentsContent.appendChild(topArea);
				studentsContent.appendChild(studentsList);
			}

			if (headerUrl === 'professor-admin') {
				const professorContent =
					document.querySelector('#professor-content');
				const topArea = document.querySelector('.body-title-area');
				const ProfessorArray = professors.filter(
					professor => professor.role.toLowerCase() === 'professor',
				);
				const professorList = await UserList(ProfessorArray);
				professorContent.innerHTML = '';
				professorContent.appendChild(topArea);
				professorContent.appendChild(professorList);
			}
		} catch (error) {
			console.error(error);
		}
	});
};
