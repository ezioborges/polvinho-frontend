import newElement from '../../utils/newElement.js';
import textGenerator from '../../utils/textGenerator.js';

const InfoCard = (title, quiz) => {
	const infoCardArea = newElement('div');
	infoCardArea.classList.add('info-card-area');

	const infoCardTitleArea = newElement('div');
	infoCardTitleArea.classList.add('info-card-title-area');

	const inforCardTitle = textGenerator('textXL', title);
	inforCardTitle.style.color = 'var(--stone-700)';

	const inforCardBodyArea = newElement('div');
	inforCardBodyArea.classList.add('info-card-body-area');

	infoCardTitleArea.appendChild(inforCardTitle);

	//TODO: AQUI EU TENHO PRIMEIRO COLOCAR O 'VC NÃO POSSUI NENHUMA TENTATIVA'
	// depois o número de tentativas ex: 1 de 5 nesse formato tentativas: 1/5
	if (!quiz || quiz.maxAttempts >= 0) {
		const noAttempts = textGenerator(
			'textSm',
			'Você não possui nenhuma tentativa.',
		);
		noAttempts.classList.add('no-attempts');

		inforCardBodyArea.appendChild(noAttempts);

		infoCardArea.appendChild(infoCardTitleArea);
		infoCardArea.appendChild(inforCardBodyArea);

		return infoCardArea;
	}

	infoCardArea.appendChild(infoCardTitleArea);
	infoCardArea.appendChild(inforCardBodyArea);

	return infoCardArea;
};

export default InfoCard;
