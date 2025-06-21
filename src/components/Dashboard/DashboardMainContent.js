import newElement from '../../utils/newElement.js';
import PageTitle from '../PageTitle.js';
import { Sidebar } from '../Sidebar.js';
import DashContent from './DashListItems.js';

const DashboardMainContent = async () => {
	const userLogin = localStorage.getItem('userLogin');
	const userObj = JSON.parse(userLogin);
	const { name } = userObj.user;

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

	const dashContent = await DashContent();

	dashMainBody.appendChild(dashTitleArea);
	dashMainBody.appendChild(dashContent);

	dashboardContent.appendChild(sidebar);
	dashboardContent.appendChild(dashMainBody);

	return dashboardContent;
};

export default DashboardMainContent;
