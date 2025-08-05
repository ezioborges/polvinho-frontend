import { router } from '../../router.js';
import { clickEventCancelButton } from '../../utils/eventListeners.js';
import newElement from '../../utils/newElement.js';

const SendTestFinished = id => {
	const buttonContent = newElement('div');
	buttonContent.classList.add('finish-button-area');

	const closeButton = newElement('button');
	closeButton.classList.add('finish-close-button');
	closeButton.textContent = 'X';
	closeButton.onclick = clickEventCancelButton(closeButton);
	// Adiciona keyup para Enter e Escape
	closeButton.addEventListener('keyup', event => {
		if (event.key === 'Escape') {
			closeButton.click(); // dispara o click para fechar
		}
	});

	// Garante que o botão recebe foco ao abrir o dialog
	setTimeout(() => closeButton.focus(), 0);

	const dialogContent = newElement('div');
	dialogContent.style.display = 'flex';
	dialogContent.style.alignItems = 'center';
	dialogContent.classList.add('dialog-content');

	const titleArea = newElement('span');
	titleArea.classList.add('finish-title-area');

	const titleFinishTest = newElement('p');
	titleFinishTest.textContent = 'Entregue';
	titleFinishTest.classList.add('title3');

	const checkCircle = newElement('img');
	checkCircle.src = '../../../assets/CheckCircle.png';
	checkCircle.alt = 'img-check-circle';

	const text = newElement('p');
	text.textContent = 'O quiz "Simulado Prova 1" foi entregue com sucesso!';
	text.style.color = 'var(--indigo-900)';

	const link = newElement('a');
	link.classList.add('link-to-resume');
	link.href = `/subjects/${id}/results`;
	link.onclick = event => {
		router(event);
		closeButton.click(); // Fecha o dialog
	};
	link.textContent = 'Ver Gabarito';
	link.style.color = 'var(--indigo-700)';
	link.style.fontWeight = '600';

	titleArea.appendChild(checkCircle);
	titleArea.appendChild(titleFinishTest);

	buttonContent.appendChild(closeButton);

	dialogContent.appendChild(buttonContent);
	dialogContent.appendChild(titleArea);
	dialogContent.appendChild(text);
	dialogContent.appendChild(link);

	return dialogContent;
};
export default SendTestFinished;
