import { panelDropdown } from '../utils/eventListeners.js';
import { SidebarUserTop } from './SidebarTopProfessor.js';

const SidebarTop = () => {
	const userLogin = JSON.parse(localStorage.getItem('userLogin'));
	const userRole = userLogin ? userLogin.user.role.toLowerCase() : null;

	// TODO: AQUI VOU TRABALHAR NA TELA DE PROFESSOR TBM!!!
	if (userRole === 'admin') {
		return SidebarUserTop(userRole, 'Dashboard', panelDropdown);
	}

	if (userRole === 'professor') {
		return SidebarUserTop(userRole, 'Disciplinas', panelDropdown);
	}
};

export default SidebarTop;
