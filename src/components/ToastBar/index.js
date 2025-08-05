import newElement from '../../utils/newElement.js';
import { toastBarTimer } from '../../utils/toastBarTimer.js';

const ToastBar = async ({ iconParam, titleParam, msgParam }, cssToast) => {
	// Verifica se os parâmetros necessários foram fornecidos
	const mainBody = document.querySelector('#main-body');

	const nameInput = document.querySelector('#input-name');
	if (nameInput) nameInput.classList.add('success-input');

	const emailInput = document.querySelector('#input-email');
	if (emailInput) emailInput.classList.add('success-input');

	const registerInput = document.querySelector('#input-register');
	if (registerInput) registerInput.classList.add('success-input');

	const responseToast = newElement('div');
	responseToast.classList.add('toast');
	responseToast.classList.add(cssToast);

	const titleArea = newElement('div');
	titleArea.classList.add('title-toast-area');

	const icon = newElement('img');
	icon.src = iconParam;
	icon.alt = 'Icon success';

	const title = newElement('p');
	title.textContent = titleParam;
	title.classList.add('textMd');

	const msg = newElement('p');
	msg.textContent = msgParam;
	msg.classList.add('textSm');

	titleArea.appendChild(icon);
	titleArea.appendChild(title);

	responseToast.appendChild(titleArea);
	responseToast.appendChild(msg);

	mainBody.appendChild(responseToast);
	toastBarTimer();
};

export default ToastBar;
