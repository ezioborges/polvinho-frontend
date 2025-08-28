import newElement from '../../utils/newElement.js';

const InputDate = (text, inputId) => {
	const content = newElement('div');
	content.classList.add('quiz-input-date-column');

	const dateLabel = newElement('label');
	dateLabel.htmlFor = inputId;
	dateLabel.textContent = `Data de ${text}`;
	dateLabel.classList.add('textMd', 'quiz-input-date-label');
	dateLabel.style.width = '70%';
	dateLabel.style.marginLeft = '.5rem';

	const dateInput = newElement('input');
	dateInput.classList.add('input-area');
	dateInput.style.width = '30%';
	dateInput.type = 'date';
	dateInput.id = inputId;

	content.appendChild(dateInput);
	content.appendChild(dateLabel);

	return content;
};

export default InputDate;
