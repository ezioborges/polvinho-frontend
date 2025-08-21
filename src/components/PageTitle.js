import { backPageUtil } from '../utils/backPageUtil.js';
import newElement from '../utils/newElement.js';
import textGenerator from '../utils/textGenerator.js';

export const PageTitle = (title, subtitle) => {
	const titleAreaContent = newElement('div');
	titleAreaContent.classList.add('title-area-content');

	const backPage = newElement('div');
	backPage.classList.add('back-page');
	backPageUtil(backPage);

	const titleArea = newElement('div');
	titleArea.classList.add('page-title-area');

	const arrowLeftIcon = newElement('img');
	arrowLeftIcon.src = '/assets/arrow-left.png';
	arrowLeftIcon.alt = 'Arrow left icon';
	arrowLeftIcon.classList.add('arrow-left-icon');

	const titleTop = textGenerator('title2', title);
	titleTop.style.color = 'var(--stone-900)';

	const subtitleTop = textGenerator('textLG', subtitle);
	subtitleTop.style.color = 'var(--stone-700)';

	backPage.appendChild(arrowLeftIcon);

	titleArea.appendChild(titleTop);
	titleArea.appendChild(subtitleTop);

	titleAreaContent.appendChild(backPage);
	titleAreaContent.appendChild(titleArea);

	return titleAreaContent;
};

export default PageTitle;
