import newElement from '../../utils/newElement.js';

export const SidebarPanelProf = () => {
	const content = newElement('div');
	content.classList.add('sidebar-panel-content');
	content.classList.add('sidebar-panel-prof-content');

	const sidebarContentLogo = newElement('div');
	sidebarContentLogo.classList.add('dropdown-prof-logo');

	const sidebarContentText = newElement('div');
	sidebarContentText.classList.add('dropdown-prof-text');

	const createImg = newElement('img');
	createImg.src = '../../../assets/FilePlus.png';
	createImg.alt = 'imagem de folha com operador de adição';
	createImg.classList.add('drop-prof-logo');

	const createQuiz = newElement('a');
	createQuiz.href = '#/create-quiz';
	createQuiz.classList.add('textSm');
	createQuiz.classList.add('drop-prof-text');
	createQuiz.textContent = 'Criar Quiz';

	sidebarContentLogo.appendChild(createImg);
	sidebarContentText.appendChild(createQuiz);

	content.appendChild(sidebarContentLogo);
	content.appendChild(sidebarContentText);

	return content;
};
