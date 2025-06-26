import PageTitle from '../components/PageTitle.js';
import SubjectsList from '../components/Subjects/SubjectsList.js';
import ToastBar from '../components/ToastBar/index.js';
import {
	deleteSubject,
	getAllSubjects,
	updateSubject,
} from '../data/subjectsData.js';
import { getUserById } from '../data/userData.js';
import urls from '../urls/index.js';

export const deleteSubjectEvent = element => {
	element.addEventListener('click', async ({ target }) => {
		await deleteSubject(target.id);

		const { subjects } = await getAllSubjects(urls.subjects);
		console.log('🚀 ~ element.addEventListener ~ subjects:', subjects);

		const subjectsArray = subjects.filter(
			subject => subject.isDeleted === false,
		);

		const subjectsContent = document.querySelector('#subjects-content');
		const bodyTitleArea = document.querySelector('.body-title-area');
		const titleListArea = document.querySelector('#title-list-area');
		const buttonRegister = document.querySelector(
			'#button-change-to-register',
		);

		subjectsContent.innerHTML = '';
		bodyTitleArea.innerHTML = '';
		const subjectsListItems = await SubjectsList(subjectsArray);

		const subjectsTitle = PageTitle(
			'Disciplinas',
			`${subjectsArray.length} Cadastrados`,
		);

		bodyTitleArea.appendChild(subjectsTitle);
		bodyTitleArea.appendChild(buttonRegister);

		subjectsContent.appendChild(bodyTitleArea);
		subjectsContent.appendChild(titleListArea);
		subjectsContent.appendChild(subjectsListItems);

		ToastBar({
			iconParam: '../../assets/CheckCircle.svg',
			titleParam: 'Sucesso',
			msgParam: 'Disciplina excluída com sucesso!',
		});
	});
};

export const updateSubjectsEvent = (element, subject) => {
	element.addEventListener('click', async () => {
		const professor = await getUserById(subject.professor);
		console.log(
			'🚀 ~ element.addEventListener ~ professor:',
			professor._id,
		);

		const updatedSubject = {
			name: document.querySelector('#input-edit-subject').value,
			professor: document.querySelector('#input-edit-professor').value,
		};

		console.log(
			'🚀 ~ updateSubjectsEvent ~ updatedSubject:',
			updatedSubject,
		);

		try {
			await updateSubject(subject._id, updatedSubject);

			ToastBar({
				iconParam: '../../assets/CheckCircle.svg',
				titleParam: 'Sucesso',
				msgParam: 'Disciplina atualizada com sucesso!',
			});

			window.location.href = `#/subjects-admin`;
		} catch (error) {
			throw new Error('Erro ao atualizar a disciplina');
		}
	});
};
