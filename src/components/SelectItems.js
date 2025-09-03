import { getAllSubjectsApi } from '../api/subjects.js';
import newElement from '../utils/newElement.js';

export const SelectItems = async () => {
	const subjects = await getAllSubjectsApi();
	const subjectNames = subjects.map(subject => subject.name);
	console.log('🚀 ~ SelectItems ~ subjects:', subjectNames);
	// 1. Crie o contêiner principal para o componente.
	const selectItemsContent = newElement('div');
	selectItemsContent.classList.add('select-items-content');

	// 2. Crie a estrutura do dropdown customizado (`div.custom-select`).
	const selectCustom = newElement('div');
	selectCustom.classList.add('custom-select');

	// a. Crie a área que exibe a opção selecionada.
	const selectItemArea = newElement('div');
	selectItemArea.classList.add('select-item-area');
	selectItemArea.textContent = 'Selecione uma opção';
	selectItemArea.classList.add('textSm');

	// b. Crie a lista de opções (`ul`).
	const selectList = newElement('ul');
	selectList.classList.add('select-list');

	// c. Crie os itens da lista (`li`).
	const optionLi1 = newElement('li');
	optionLi1.classList.add('select-option-item', 'textSm');
	optionLi1.textContent = 'option 24';

	const optionLi2 = newElement('li');
	optionLi2.classList.add('textSm');
	optionLi2.textContent = 'option 2';

	const optionLi3 = newElement('li');
	optionLi3.classList.add('textSm');
	optionLi3.textContent = 'option 3';

	// 3. Monte a estrutura do dropdown customizado (aninhamento correto).
	selectCustom.appendChild(selectItemArea);
	selectCustom.appendChild(selectList);

	selectList.appendChild(optionLi1);
	selectList.appendChild(optionLi2);
	selectList.appendChild(optionLi3);

	// 4. Crie o `<select>` nativo (escondido) para o formulário.
	const selectTag = newElement('select');
	selectTag.name = 'my_select';
	selectTag.style.display = 'none';

	// 5. Crie as `<option>`s nativas.
	const optionOp1 = newElement('option');
	optionOp1.textContent = 'option 1';

	const optionOp2 = newElement('option');
	optionOp2.textContent = 'option 2';

	const optionOp3 = newElement('option');
	optionOp3.textContent = 'option 3';

	// 6. Anexe as `<option>`s ao `<select>` nativo.
	selectTag.appendChild(optionOp1);
	selectTag.appendChild(optionOp2);
	selectTag.appendChild(optionOp3);

	// 7. Anexe o dropdown customizado e o `<select>` nativo ao contêiner principal.
	selectItemsContent.appendChild(selectCustom);
	selectItemsContent.appendChild(selectTag);

	// 8. Agora, selecione os elementos no DOM para adicionar os eventos.
	const selectSelected =
		selectItemsContent.querySelector('.select-item-area');
	const selectOptions = selectItemsContent.querySelector('.select-list');
	const nativeSelect = selectItemsContent.querySelector(
		'select[name="my_select"]',
	);

	// 9. Adicione os event listeners.
	selectSelected.addEventListener('click', () => {
		selectOptions.style.display =
			selectOptions.style.display === 'block' ? 'none' : 'block';
	});

	selectOptions.addEventListener('click', ({ target }) => {
		if (target.tagName === 'LI') {
			const selectedText = target.textContent;
			selectSelected.textContent = selectedText;

			// <--- Loop corrigido para `for...of`
			for (const option of nativeSelect.options) {
				if (option.textContent === selectedText) {
					option.selected = true;
					break;
				}
			}
			selectOptions.style.display = 'none';
		}
	});

	document.addEventListener('click', ({ target }) => {
		if (!selectCustom.contains(target)) {
			selectOptions.style.display = 'none';
		}
	});

	return selectItemsContent;
};
