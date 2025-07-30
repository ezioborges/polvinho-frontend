import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';

const InfoCard = title => {
	const infoCardArea = newElement('div');
	infoCardArea.classList.add('info-card-area');

	const infoCardTitleArea = newElement('div');
	infoCardTitleArea.classList.add('info-card-title-area');

	const inforCardTitle = textGenerator('textXL', title);
	inforCardTitle.style.color = 'var(--stone-700)';

	infoCardTitleArea.appendChild(inforCardTitle);

	infoCardArea.appendChild(infoCardTitleArea);

	return infoCardArea;
};

export default InfoCard;
