import newElement from '../../utils/newElement.js';
import { SelectItems } from '../SelectItems.js';

const selectInput = async (labelTitle, inputId) => {
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
	nameLabel.classList.add('textMd', 'input-label-name');

	const select = await SelectItems();

	selectInputArea.appendChild(nameLabel);
	selectInputArea.appendChild(select);

	return selectInputArea;
};

export default selectInput;
