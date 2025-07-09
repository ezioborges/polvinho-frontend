import {
	createProfessorApi,
	deleteProfessorApi,
	getAllProfessorsApi,
	updateProfessorApi,
} from '../api/professorsFetch.js';
import ToastBar from '../components/ToastBar/index.js';
import UserList from '../components/Users/UserList.js';
import { getAllUsers } from '../data/userData.js';
import urls from '../urls/index.js';

export const createProfessor = async element => {
	element.addEventListener('click', async () => {
		try {
			const newProfessor = {
				name: document.querySelector('#input-professor-name').value,
				email: document.querySelector('#input-professor-email').value,
				registration: document.querySelector(
					'#input-professor-register',
				).value,
				subject: document.querySelector('#input-professor-subjects')
					.value,
				role: 'professor',
			};

			await createProfessorApi(newProfessor);

			ToastBar(
				{
					iconParam: '../../assets/CheckCircle.svg',
					titleParam: 'Sucesso',
					msgParam: 'Professor(a) criado com sucesso!',
				},
				'success-toast',
			);
		} catch (error) {
			throw new Error('Erro ao criar professor');
		}
	});
};

export const deleteUser = async element => {
	element.addEventListener('click', async event => {
		try {
			const headerUrl = window.location.href.split('/')[4];
			const userTargetId = event.target.id;
			const userId = userTargetId.split('-')[2];

			await deleteProfessorApi(userId);

			ToastBar(
				{
					iconParam: '../../assets/CheckCircle.svg',
					titleParam: 'Sucesso',
					msgParam: 'Usuário excluído com sucesso!',
				},
				'success-toast',
			);

			const users = await getAllUsers(urls.users);
			console.log('🚀 ~ users:', users);

			const professors = await getAllProfessorsApi();

			// if (headerUrl === 'aluno-admin') {
			// 	const studentsContent =
			// 		document.querySelector('#students-content');
			// 	const topArea = document.querySelector('.body-title-area');
			// 	const studentArray = users.filter(
			// 		user => user.role === 'aluno',
			// 	);
			// 	studentsContent.innerHTML = '';
			// 	const studentsList = await UserList(studentArray);
			// 	studentsContent.appendChild(topArea);
			// 	studentsContent.appendChild(studentsList);
			// }

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
	});
};
