import { entities } from '../../data/adminEntities.js';
import newElement from '../../utils/newElement.js';
import { professorSubjects } from '../../utils/professorSubjects.js';
import { userDataByLocalStorage } from '../../utils/userDataByLocalStorage.js';
import PageTitle from '../PageTitle.js';
import { Sidebar } from '../Sidebar.js';

const DashboardMainContent = async DashListItems => {
	const {
		user: { name, role },
	} = userDataByLocalStorage();

	const userRole = role.toLowerCase();
	console.log('🚀 ~ userRole:', userRole);

	const dashboardContent = newElement('div');
	dashboardContent.classList.add('dash-content');

	const sidebar = Sidebar();

	const dashMainBody = newElement('div');
	dashMainBody.classList.add('body');
	dashMainBody.id = 'main-body';

	const dashTitleArea = newElement('div');
	dashTitleArea.classList.add('body-title-area');

	const dashBody = newElement('div');
	dashBody.classList.add('dashboard-body');

	const dashTitle = PageTitle('Dashboard', `Bem vindo, ${name}`);

	dashTitleArea.appendChild(dashTitle);

	dashMainBody.appendChild(dashTitleArea);

	if (userRole === 'admin') {
		const dashContent = await DashListItems(entities);
		dashMainBody.appendChild(dashContent);
	}

	if (userRole === 'professor') {
		const subjectsOfProfessor = await professorSubjects();
		const subjectsNameObject = subjectsOfProfessor.map(subject => {
			return { id: subject._id, entity: subject.name };
		});
		const dashContent = await DashListItems(subjectsNameObject);
		dashMainBody.appendChild(dashContent);
	}

	if (userRole === 'aluno') {
		const subjectsOfProfessor = await professorSubjects();
		const subjectsNameObject = subjectsOfProfessor.map(subject => {
			return { id: subject._id, entity: subject.name };
		});
		const dashContent = await DashListItems(subjectsNameObject);
		dashMainBody.appendChild(dashContent);
	}

	dashboardContent.appendChild(sidebar);
	dashboardContent.appendChild(dashMainBody);

	return dashboardContent;
};

export default DashboardMainContent;
