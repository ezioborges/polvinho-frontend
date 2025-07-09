import BodyWithoutContent from '../components/BodyWithoutContent.js';
import PageTitle from '../components/PageTitle.js';
import SubjectsList from '../components/Subjects/SubjectsList.js';
import ToastBar from '../components/ToastBar/index.js';
import {
	deleteSubject,
	getAllSubjects,
	updateSubject,
} from '../data/subjectsData.js';
import urls from '../urls/index.js';

export const deleteSubjectEvent = element => {
	element.addEventListener('click', async ({ target }) => {
		await deleteSubject(target.id);

		const { subjects } = await getAllSubjects(urls.subjects);

		const subjectsArray = subjects.filter(
			subject => subject.isDeleted === false,
		);

		const bodyWithoutContent = BodyWithoutContent(
			'Não há disciplinas cadastradas!',
		);

		const subjectsContent = document.querySelector('#subjects-content');
		const bodyTitleArea = document.querySelector('.body-title-area');
		const titleListArea = document.querySelector('#title-list-area');
		const buttonRegister = document.querySelector(
			'#button-change-to-register',
		);

		subjectsContent.innerHTML = '';
		bodyTitleArea.innerHTML = '';

		const subjectsListItems = subjectsArray
			? await SubjectsList(subjectsArray)
			: bodyWithoutContent;

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
	console.log('subject ===> ', subject._id);
	element.addEventListener('click', async () => {
		const updatedSubject = {
			name: document.querySelector('#input-edit-subject').value,
			professor: document.querySelector('#input-edit-professor').value,
		};

		try {
			await updateSubject(subject._id, updatedSubject);

			ToastBar(
				{
					iconParam: '../../assets/CheckCircle.svg',
					titleParam: 'Sucesso',
					msgParam: 'Disciplina atualizada com sucesso!',
				},
				'success-toast',
			);

			window.location.href = `#/subjects-admin`;
		} catch (error) {
			throw new Error('Erro ao atualizar a disciplina');
		}
	});
};
