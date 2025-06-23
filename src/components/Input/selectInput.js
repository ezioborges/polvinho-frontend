import newElement from '../../utils/newElement.js';

const selectInput = (labelTitle, inputId, arr) => {
	const selectInputArea = newElement('div');
	selectInputArea.classList.add('label-input-column');

	const questionIcon = newElement('img');
	questionIcon.src = '../../../assets/Question.png';
	questionIcon.alt = 'Icon de interrogação';
	questionIcon.style.marginLeft = '.3rem';

	const nameLabel = newElement('label');
	nameLabel.htmlFor = inputId;
	nameLabel.textContent = labelTitle;
	nameLabel.classList.add('textMd');
	nameLabel.classList.add('select-label-register');

	const select = newElement('select');
	select.classList.add('select-area');
	select.id = inputId;

	arr.forEach(discipline => {
		const option = newElement('option');
		option.value = discipline;
		option.textContent = discipline;
		select.appendChild(option);
	});

	nameLabel.appendChild(questionIcon);

	selectInputArea.appendChild(nameLabel);
	selectInputArea.appendChild(select);

	return selectInputArea;
};

export default selectInput;
