import { getAllSubjectsApi } from '../api/subjects.js';
import newElement from '../utils/newElement.js';

export const DropdownList = async selectedItemsAmount => {
	const subjects = await getAllSubjectsApi();
	const dropdownList = newElement('ul');

	subjects.forEach(subject => {
		const subjectItem = newElement('li');
		subjectItem.classList.add('textSm', 'select-subject-item');
		subjectItem.id = `${subject.name}-${subject._id}`;
		subjectItem.textContent = subject.name;

		subjectItem.addEventListener('click', event => {
			// Impedir que o clique no item feche o dropdown
			event.stopPropagation();

			// Adiciona ou remove a classe 'select-subject-item-clicked'
			subjectItem.classList.toggle('select-subject-item-clicked');

			// Pega todos os itens com a classe e atualiza o contador
			const selectedItems = dropdownList.querySelectorAll(
				'.select-subject-item-clicked',
			);
			const selectedCount = selectedItems.length;

			if (selectedCount === 0) {
				selectedItemsAmount.innerHTML =
					'<span>Nenhuma Disciplina Selecionada</span>';
			} else {
				selectedItemsAmount.innerHTML = `<span>${selectedCount} disciplina(s) selecionada(s)</span>`;
			}
		});

		dropdownList.appendChild(subjectItem);
	});

	return dropdownList;
};
