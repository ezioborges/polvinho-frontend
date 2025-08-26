import newElement from '../../utils/newElement.js';

const Loading = () => {
	const loadContent = newElement('div');
	loadContent.textContent = 'Aqui é a loadPage';

	return loadContent;
};

export default Loading;
