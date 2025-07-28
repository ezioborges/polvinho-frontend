import { panelDropdown } from '../utils/eventListeners.js';
import { SidebarUserTop } from './SidebarUserTop.js';

const SidebarTop = () => {
	const userLogin = JSON.parse(localStorage.getItem('userLogin'));
	const userRole = userLogin ? userLogin.user.role.toLowerCase() : null;

	if (userRole === 'admin') {
		return SidebarUserTop(userRole, 'Dashboard', panelDropdown);
	}

	if (userRole === 'professor') {
		return SidebarUserTop(userRole, 'Disciplinas', panelDropdown);
	}

	if (userRole === 'aluno') {
		return SidebarUserTop(userRole, 'Disciplinas', panelDropdown);
	}
};

export default SidebarTop;
