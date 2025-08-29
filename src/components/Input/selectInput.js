import newElement from '../../utils/newElement.js';
import { SelectItems } from '../SelectItems.js';

const selectInput = (labelTitle, inputId, arr) => {
	const selectInputArea = newElement('div');
	selectInputArea.classList.add('label-input-column');

	const questionIcon = newElement('img');
	questionIcon.id = 'question-icon';
	questionIcon.src = '../../../assets/Question.png';
	questionIcon.alt = 'Icon de interrogação';
	questionIcon.style.marginLeft = '.3rem';

	const nameLabel = newElement('label');
	nameLabel.htmlFor = inputId;
	nameLabel.textContent = labelTitle;
	nameLabel.classList.add('textMd');
	nameLabel.classList.add('select-label-register');

	const select = SelectItems();
	select.classList.add('select-area');

	// arr.forEach(discipline => {
	// 	const option = newElement('option');
	// 	option.value = discipline;
	// 	option.textContent = discipline;

	// 	selectOptionsArea.appendChild(option);
	// 	select.appendChild(selectOptionsArea);
	// });

	// labelTitle === '' ? null : nameLabel.appendChild(questionIcon);

	selectInputArea.appendChild(nameLabel);
	selectInputArea.appendChild(select);

	return selectInputArea;
};

export default selectInput;
