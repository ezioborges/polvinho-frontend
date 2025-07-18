import newElement from '../../utils/newElement.js';

const InputArea = (labelTitle, inputId, placeholder) => {
	const nameAndRegister = newElement('div');
	nameAndRegister.classList.add('label-input-column');

	const nameLabel = newElement('label');
	nameLabel.htmlFor = inputId;
	nameLabel.textContent = labelTitle;
	nameLabel.classList.add('textMd');

	const nameInput = newElement('input');
	nameInput.classList.add('input-area');
	nameInput.type = 'text';
	nameInput.id = inputId;
	nameInput.placeholder = placeholder;

	nameAndRegister.appendChild(nameLabel);
	nameAndRegister.appendChild(nameInput);

	return nameAndRegister;
};

export default InputArea;
