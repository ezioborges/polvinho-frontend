import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';

const BarItem = (item, register) => {
	const barItem = newElement('div');
	barItem.classList.add('bar-content');

	if (register === true) {
		const title = textGenerator('textMd', item.entity);
		title.classList.add('discipline-text');
		const newRegister = newElement('a');
		newRegister.href = `#/register/${item.entity}`;
		newRegister.classList.add('new-register');
		newRegister.classList.add('textMd');
		newRegister.textContent = 'Novo Registro';

		barItem.appendChild(title);
		barItem.appendChild(newRegister);

		barItem.appendChild(title);
		return barItem;
	}

	if (register === false) {
		const title = textGenerator('textMd', item.entity);
		title.classList.add('discipline-text');

		barItem.onclick = () => {
			window.location.hash = `#/subject-professor/${item.id}`;
		};

		barItem.appendChild(title);

		return barItem;
	}
};

export default BarItem;
