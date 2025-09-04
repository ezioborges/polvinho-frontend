import { getAllSubjectsApi } from '../api/subjects.js';
import newElement from '../utils/newElement.js';

export const SelectItems = async () => {
	const subjects = await getAllSubjectsApi();
	const subjectNames = subjects.map(subject => subject.name);

	const selectItemsContent = newElement('div');
	selectItemsContent.classList.add('select-items-content');

	const selectedItemHeader = newElement('div');
	selectedItemHeader.classList.add('selected-items-header', 'textSm');

	// Lógica para abrir/fechar o dropdown diretamente aqui
	selectedItemHeader.addEventListener('click', () => {
		const dropdown = document.querySelector(
			'#select-dropdown-subjects-name',
		);
		if (dropdown.style.display === 'flex') {
			dropdown.style.display = 'none';
		} else {
			dropdown.style.display = 'flex';
		}
	});

	const selectedItemsAmount = newElement('div');
	selectedItemsAmount.classList.add('selected-items-amount', 'textSm');
	selectedItemsAmount.innerHTML =
		'<span>Nenhuma Disciplina Selecionada</span>';

	const dropdownSubjectsName = newElement('div');
	dropdownSubjectsName.id = 'select-dropdown-subjects-name';
	dropdownSubjectsName.classList.add(
		'textSm',
		'select-dropdown-subjects-name',
	);
	// Definir o estilo inicial como 'none' para que o dropdown não apareça
	dropdownSubjectsName.style.display = 'none';

	const itemsToSelectList = newElement('ul');

	subjectNames.forEach(name => {
		const subjectItem = newElement('li');
		subjectItem.classList.add('textSm', 'select-subject-item');
		subjectItem.textContent = name;

		itemsToSelectList.appendChild(subjectItem);
	});

	selectedItemHeader.appendChild(selectedItemsAmount);

	dropdownSubjectsName.appendChild(itemsToSelectList);

	selectItemsContent.appendChild(selectedItemHeader);
	selectItemsContent.appendChild(dropdownSubjectsName);

	return selectItemsContent;
};
