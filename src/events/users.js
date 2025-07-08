import { createProfessorApi } from '../api/usersFetch.js';
import ToastBar from '../components/ToastBar/index.js';
import UserList from '../components/Users/UserList.js';
import { getAllSubjects } from '../data/subjectsData.js';
import {
	deleteUserEvent,
	getAllUsers,
	updateUserEvent,
} from '../data/userData.js';
import urls from '../urls/index.js';

export const createProfessor = async element => {
	element.addEventListener('click', async () => {
		const newProfessor = {
			name: document.querySelector('#input-professor-name').value,
			email: document.querySelector('#input-professor-email').value,
			registration: document.querySelector('#input-professor-register')
				.value,
			subject: document.querySelector('#input-professor-subjects').value,
			role: 'professor',
		};

		console.log('newProfessor', newProfessor);
		await createProfessorApi(newProfessor);
		// console.log('🚀 ~ element.addEventListener ~ teste:', teste);
	});
};

export const deleteUser = async element => {
	element.addEventListener('click', async event => {
		try {
			const headerUrl = window.location.href.split('/')[4];
			const userTargetId = event.target.id;
			const userId = userTargetId.split('-')[2];
			const urlDelete = `${urls.users}/${userId}`;

			await deleteUserEvent(urlDelete);

			ToastBar({
				iconParam: '../../assets/CheckCircle.svg',
				titleParam: 'Sucesso',
				msgParam: 'Usuário excluído com sucesso!',
			});

			const { users } = await getAllUsers(urls.users);

			if (headerUrl === 'aluno-admin') {
				const studentsContent =
					document.querySelector('#students-content');
				const topArea = document.querySelector('.body-title-area');
				const studentArray = users.filter(
					user => user.role === 'aluno',
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
				const ProfessorArray = users.filter(
					user => user.role.toLowerCase() === 'professor',
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

export const updateUser = async (element, userId, role) => {
	element.addEventListener('click', async () => {
		const { subjects } = await getAllSubjects(urls.subjects);

		const subjectOption = document.querySelector(
			'#select-edit-subjects',
		).value;

		const subjectId = subjects.find(
			subject => subject.name === subjectOption,
		);

		const urlUpdate = `${urls.users}/${userId}`;

		const userUpdated = {
			name: document.querySelector('#input-edit-name').value,
			email: document.querySelector('#input-edit-email').value,
			subject: [subjectId._id],
		};

		try {
			await updateUserEvent(urlUpdate, userUpdated);
			ToastBar({
				iconParam: '../../assets/CheckCircle.svg',
				titleParam: 'Sucesso',
				msgParam: 'Usuário atualizado com sucesso!',
			});
			setTimeout(() => {
				window.location.hash = `#/${role}-admin`;
			}, 2000);
		} catch (error) {
			ToastBar({
				iconParam: '../../assets/ErrorCircle.svg',
				titleParam: 'Erro',
				msgParam: 'Erro ao atualizar usuário!',
			});
			console.error(error);
		}
	});
};
