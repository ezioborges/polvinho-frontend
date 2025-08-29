import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';
import { userDataByLocalStorage } from '../../utils/userDataByLocalStorage.js';
import BodyWithoutContent from '../BodyWithoutContent.js';
import BarItem from './BarItem.js';

const DashListItems = async itemsArr => {
	const {
		user: { role },
	} = userDataByLocalStorage();

	const userRole = role.toLowerCase();

	const content = newElement('div');

	content.classList.add('dash-content-body');

	const adminTitle = textGenerator('title3', 'Entidades');
	const usersTitle = textGenerator('title3', 'Disciplinas');

	const title = userRole === 'admin' ? adminTitle : usersTitle;
	content.appendChild(title);

	const noContent = BodyWithoutContent('Nenhum conteúdo disponível');

	if (!itemsArr.length) content.appendChild(noContent);

	if (userRole === 'admin') {
		itemsArr.forEach(item => {
			content.appendChild(BarItem(item, true, userRole));
		});
	}

	if (userRole === 'professor') {
		itemsArr.forEach(item => {
			content.appendChild(BarItem(item, false, userRole));
		});
	}

	if (role === 'aluno') {
		itemsArr.forEach(item => {
			content.appendChild(BarItem(item, false, role));
		});
	}

	return content;
};

export default DashListItems;
