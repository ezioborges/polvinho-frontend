import { getAllSubjectsApi } from '../../api/subjects.js';
import { entities } from '../../data/adminEntities.js';
import newElement from '../../utils/newElement.js';
import { userDataByLocalStorage } from '../../utils/userDataByLocalStorage.js';
import PageTitle from '../PageTitle.js';
import { Sidebar } from '../Sidebar.js';

const DashboardMainContent = async dashContentParam => {
	const {
		user: { name, role },
	} = userDataByLocalStorage();

	const userRole = role.toLowerCase();

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
	dashMainBody.appendChild(dashTitleArea);

	if (userRole === 'admin') {
		const dashContent = await dashContentParam(entities);
		dashMainBody.appendChild(dashContent);
	}

	if (role === 'professor') {
		const subjects = await getAllSubjectsApi();
		const subjectsNameObject = subjects.map(subject => {
			return { entity: subject.name };
		});
		const dashContent = await dashContentParam(subjectsNameObject);
		dashMainBody.appendChild(dashContent);
	}

	dashboardContent.appendChild(sidebar);
	dashboardContent.appendChild(dashMainBody);

	return dashboardContent;
};

export default DashboardMainContent;
