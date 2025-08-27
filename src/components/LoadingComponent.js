import newElement from '../utils/newElement.js';

export const LoadingComponent = () => {
	const overlay = newElement('div');
	overlay.classList.add('loading-overlay');

	const loadSpinner = newElement('img');
	loadSpinner.src = '../../assets/load-spinner.svg';

	const loadText = newElement('p');
	loadText.textContent = 'Carregando...';
	loadText.classList.add('title1');
	loadText.style.color = 'var(--indigo-950)';

	overlay.appendChild(loadSpinner);
	overlay.appendChild(loadText);

	return overlay;
};
