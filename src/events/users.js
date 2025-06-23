import ToastBar from '../components/ToastBar/index.js';
import UserList from '../components/Users/UserList.js';
import { deleteUserEvent, getAllUsers } from '../data/userData.js';
import urls from '../urls/index.js';

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

			if (headerUrl === 'students-admin') {
				const studentsContent =
					document.querySelector('#students-content');
				const topArea = document.querySelector('.body-title-area');
				const studentArray = users.filter(
					user => user.role === 'aluno',
				);
				const studentsList = await UserList(studentArray);
				studentsContent.innerHTML = '';
				studentsContent.appendChild(topArea);
				studentsContent.appendChild(studentsList);
			}

			if (headerUrl === 'professors-admin') {
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
