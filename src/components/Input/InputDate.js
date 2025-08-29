import newElement from '../../utils/newElement.js';

const InputDate = (text, inputId) => {
	const content = newElement('div');
	content.classList.add('label-input-column-date');

	const dateLabel = newElement('label');
	dateLabel.htmlFor = inputId;
	dateLabel.textContent = `Data de ${text}`;
	dateLabel.classList.add('textMd');
	dateLabel.style.width = '20%';
	dateLabel.style.marginLeft = '.5rem';

	const dateInput = newElement('input');
	dateInput.classList.add('input-area');
	dateInput.style.width = '30%';
	dateInput.type = 'date';
	dateInput.id = inputId;

	content.appendChild(dateLabel);
	content.appendChild(dateInput);

	return content;
};

export default InputDate;
