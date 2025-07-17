import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';
import { userDataByLocalStorage } from '../../utils/userDataByLocalStorage.js';
import BodyWithoutContent from '../BodyWithoutContent.js';
import BarItem from './BarItem.js';

const DashListItems = async itemsArr => {
	const {
		user: { role },
	} = userDataByLocalStorage();

	const adminRole = role.toLowerCase();

	const content = newElement('div');

	content.classList.add('dash-content-body');

	const title = textGenerator('title3', 'Entidades');
	content.appendChild(title);

	const noContent = BodyWithoutContent('Nenhum conteúdo disponível');

	if (!itemsArr.length) content.appendChild(noContent);

	if (role === 'professor') {
		itemsArr.forEach(item => {
			content.appendChild(BarItem(item, false));
		});
	}

	if (adminRole === 'admin') {
		itemsArr.forEach(item => {
			content.appendChild(BarItem(item, true));
		});
	}

	return content;
};

export default DashListItems;
