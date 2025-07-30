import newElement from '../utils/newElement.js';
import textGenerator from '../utils/textGenerator.js';

export const PageTitle = (title, subtitle) => {
	const titleArea = newElement('div');

	const titleTop = textGenerator('title1', title);
	titleTop.style.color = 'var(--stone-900)';

	const subtitleTop = textGenerator('textXL', subtitle);
	subtitleTop.style.color = 'var(--stone-700)';

	titleArea.appendChild(titleTop);
	titleArea.appendChild(subtitleTop);

	return titleArea;
};

export default PageTitle;
