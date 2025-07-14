import {
	createSubject,
	deleteSubjectApi,
	getAllSubjectsApi,
	updateSubject,
} from '../api/subjects.js';
import BodyWithoutContent from '../components/BodyWithoutContent.js';
import PageTitle from '../components/PageTitle.js';
import SubjectsList from '../components/Subjects/SubjectsList.js';
import ToastBar from '../components/ToastBar/index.js';

export const createSubjectEvent = element => {
	element.addEventListener('click', () => {
		const newSubjetc = {
			name: document.querySelector('#input-new-subject').value,
		};

		createSubject(newSubjetc);

		document.querySelector('#input-new-subject').value = '';

		ToastBar(
			{
				iconParam: '../../assets/CheckCircle.png',
				titleParam: 'Sucesso',
				msgParam: 'Disciplçina adicionada com sucesso!',
			},
			'success-toast',
		);
	});
};

export const deleteSubjectEvent = element => {
	element.addEventListener('click', async ({ target }) => {
		await deleteSubjectApi(target.id);

		const subjects = await getAllSubjectsApi();

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

		ToastBar(
			{
				iconParam: '../../assets/CheckCircle.svg',
				titleParam: 'Sucesso',
				msgParam: 'Disciplina excluída com sucesso!',
			},
			'success-toast',
		);
	});
};

export const updateSubjectsEvent = (element, subject) => {
	element.addEventListener('click', async () => {
		try {
			const updatedSubject = {
				name: document.querySelector('#input-edit-subject').value,
				professor: document.querySelector('#input-edit-professor')
					.value,
			};

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
