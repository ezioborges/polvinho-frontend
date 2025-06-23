import newElement from '../../utils/newElement.js';
import { toastBarTimer } from '../../utils/toastBarTimer.js';

const ToastBar = ({ iconParam, titleParam, msgParam }) => {
	// Verifica se os parâmetros necessários foram fornecidos
	const mainBody = document.querySelector('#main-body');
	if (mainBody) mainBody.classList.add('toast-bar');

	const nameInput = document.querySelector('#input-name');
	if (nameInput) nameInput.classList.add('success-input');

	const emailInput = document.querySelector('#input-email');
	if (emailInput) emailInput.classList.add('success-input');

	const registerInput = document.querySelector('#input-register');
	if (registerInput) registerInput.classList.add('success-input');

	const successToast = newElement('div');
	successToast.classList.add('success-toast');

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

	successToast.appendChild(titleArea);
	successToast.appendChild(msg);

	mainBody.appendChild(successToast);
	toastBarTimer();
};

export default ToastBar;
