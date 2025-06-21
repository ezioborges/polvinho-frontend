import { entities } from '../../data/adminEntities.js';
import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';
import BodyWithoutContent from '../BodyWithoutContent.js';
import BarItem from './BarItem.js';

const DashContent = async () => {
	const content = newElement('div');
	//TODO: pode ser que essa seja o mesmo da lista de alunos
	content.classList.add('dash-content-body');

	const title = textGenerator('title3', 'Entidades');

	content.appendChild(title);

	const noContent = BodyWithoutContent('Nenhum conteúdo disponível');

	if (!entities.length) content.appendChild(noContent);

	entities.forEach(({ entity }) => {
		content.appendChild(BarItem(entity, true));
	});

	return content;
};

export default DashContent;
