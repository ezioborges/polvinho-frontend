import { getAllUsersApi } from '../api/users.js';
import Dialog from '../components/Dialogs/index.js';
import SendTestFinished from '../components/Dialogs/SendTestFinished.js';
import SubjectsPanelList from '../components/Panel/SubjectsPanelList.js';
import { fetchLogin } from '../data/userData.js';
import { BASE_URL } from '../urls/index.js';
import { toggleLoadingOverlay } from './toggleLoadingOverlay.js';

export const openDialog = (
	element,
	title,
	text,
	cancelTitle,
	funcCancelButton,
	startTitle,
	funcStartQuiz,
	buttonColor,
	id = null,
) => {
	element.addEventListener('click', () => {
		Dialog(
			title,
			text,
			cancelTitle,
			funcCancelButton,
			startTitle,
			funcStartQuiz,
			buttonColor,
			id,
		);
	});
};

export const clickEventCancelButton = element => {
	element.addEventListener('click', () => {
		const dialogOverlay = document.querySelector('.dialog-overlay');
		const dialogContent = document.querySelector('.dialog-content');

		if (dialogOverlay) {
			dialogOverlay.remove();
		}

		if (dialogContent) {
			dialogContent.remove();
		}
	});
};

export const clickEventStartQuiz = element => {
	element.addEventListener('click', () => {
		const hash = window.location.hash;

		if (hash.startsWith('#/disciplines/')) {
			window.location.hash = `${hash}/quizz`;
		} else {
			console.warn('O hash atual não corresponde ao formato esperado.');
		}
	});

	clickEventCancelButton(element);
};

export const clickFinishTest = element => {
	element.addEventListener('click', () => {
		const dialogContent = document.querySelector('.dialog-content');
		const hash = window.location.hash;
		const match = hash.match(/#\/disciplines\/([^/]+)\/quizz/);
		const hashId = match ? match[1] : null;

		if (dialogContent) {
			dialogContent.remove();

			const finishTest = SendTestFinished(hashId);

			document.body.appendChild(finishTest);
		}
	});
};

export const clickFormLogin = element => {
	element.addEventListener('submit', async event => {
		event.preventDefault();

		const credentialsInput = document.querySelector('#credentials');
		const passwordInput = document.querySelector('#password');
		const errorArea = document.querySelector('#error-area');
		const errorMessage = document.querySelector('#error-message');

		try {
			// função responsável por exibir e remover o overlay do
			toggleLoadingOverlay(true);

			const response = await fetchLogin(`${BASE_URL}/login`);
			const data = await response.json();

			toggleLoadingOverlay(false);

			if (response.ok) {
				const userLogin = {
					token: data.token,
					user: data.user,
				};
				const role = data.user.role.toLowerCase();

				localStorage.setItem('userLogin', JSON.stringify(userLogin));

				if (role === 'admin') {
					window.location.hash = '#/dashboard-admin';
				} else if (role === 'professor') {
					window.location.hash = '#/dashboard-professor';
				} else if (role === 'aluno') {
					window.location.hash = '#/dashboard-student';
				} else {
					credentialsInput.style.border = '2px solid var(--red-500)';
					passwordInput.style.border = '2px solid var(--red-500)';
					credentialsInput.value = '';
					passwordInput.value = '';
					errorArea.style.display = 'flex';
					errorMessage.textContent =
						'Erro de autenticação. Verifique seu usuário.';
					console.error(
						'Erro no login: role desconhecido.',
						data.message,
					);
				}
			} else {
				credentialsInput.style.border = '2px solid var(--red-500)';
				passwordInput.style.border = '2px solid var(--red-500)';
				credentialsInput.value = '';
				passwordInput.value = '';
				errorArea.style.display = 'flex';
				errorMessage.textContent =
					'Erro ao fazer login. Verifique suas credenciais.';
				console.error('Erro no login ', data.message);
			}
		} catch (error) {
			toggleLoadingOverlay(false);
			credentialsInput.style.border = '2px solid var(--red-500)';
			passwordInput.style.border = '2px solid var(--red-500)';
			errorArea.style.display = 'flex';
			errorMessage.textContent = 'Erro ao se conectar com o servidor.';
			console.error(`Erro ao buscar usuários: ${error.message}`);
		}
	});
};
export const endSession = event => {
	event.addEventListener('click', () => {
		localStorage.removeItem('userLogin');
		localStorage.removeItem('jwtToken');
		window.location.hash = '#/';
	});

	clickEventCancelButton(event);
};

let isVisiblePanel = false;
export const panelDropdown = (element, sidebarDropFunc) => {
	element.addEventListener('click', async () => {
		isVisiblePanel = !isVisiblePanel;
		const panel = document.querySelector('#panel-dropdown');
		const arrowPanel = document.querySelector('.drop-arrow-icon');

		if (!isVisiblePanel) {
			panel.classList.remove('panel-dropdown-open');
			panel.classList.add('panel-dropdown-close');

			arrowPanel.src = '/assets/arrow-right.svg';
		} else {
			const dropdown = await sidebarDropFunc();
			panel.innerHTML = '';
			panel.appendChild(dropdown);

			panel.classList.remove('panel-dropdown-close');
			panel.classList.add('panel-dropdown-open');
			arrowPanel.src = '/assets/arrow-down.svg';
		}
	});
};

export const subjectsAmountDropdown = (element, isVisible) => {
	element.addEventListener('click', async () => {
		const userId = element.dataset.userId;
		const userRegistration = element.dataset.userRegistration;

		const panelSubjects = document.querySelector(
			`#user-register-${userRegistration}`,
		);

		isVisible = !isVisible;

		if (!isVisible) {
			panelSubjects.classList.remove('subjects-dropdown-open');
			panelSubjects.classList.add('subjects-dropdown-close');
			panelSubjects.innerHTML = '';
		} else {
			const users = await getAllUsersApi();

			const currentUser = users.find(user => user._id === userId);

			if (!currentUser) {
				console.error(`Usuário com ID ${userId} não encontrado.`);
				return;
			}

			// Passa um ARRAY CONTENDO APENAS O USUÁRIO ATUAL para SubjectsPanelList
			const panelList = await SubjectsPanelList(currentUser);

			panelSubjects.innerHTML = '';
			panelSubjects.appendChild(panelList);

			panelSubjects.classList.remove('subjects-dropdown-close');
			panelSubjects.classList.add('subjects-dropdown-open');
		}
	});
};
