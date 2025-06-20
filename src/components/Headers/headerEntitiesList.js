import newElement from '../../utils/newElement.js';

const headerEntitiesList = (headersList, headersArea) => {
	headersList.forEach(header => {
		const headerItem = newElement('p');
		headerItem.classList.add('header-item');
		headerItem.textContent = header;
		headerItem.classList.add('textMd');
		headersArea.appendChild(headerItem);
	});
};

export default headerEntitiesList;
