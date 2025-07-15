import PageTitle from '../../components/PageTitle.js';
import { Sidebar } from '../../components/Sidebar.js';
import newElement from '../../utils/newElement.js';
import { userNameByLocalStorage } from '../../utils/userNameByLocalStorage.js';

const DashboardProfessor = async () => {
	const userName = userNameByLocalStorage();

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

	const dashTitle = PageTitle('Dashboard', `Bem vindo, ${userName}`);

	// const dasContent =

	dashTitleArea.appendChild(dashTitle);
	dashMainBody.appendChild(dashTitleArea);

	dashboardContent.appendChild(sidebar);
	dashboardContent.appendChild(dashMainBody);

	return dashboardContent;
};

export default DashboardProfessor;
