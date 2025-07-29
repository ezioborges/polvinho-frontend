import { getAllUsersApi } from '../api/users.js';
import Dialog from '../components/Dialogs/index.js';
import SendTestFinished from '../components/Dialogs/SendTestFinished.js';
import SubjectsPanelList from '../components/Panel/SubjectsPanelList.js';
import { fetchLogin } from '../data/userData.js';
import urls from '../urls/index.js';

export const openDialog = (
	element,
	title,
	text,
	cancelTitle,
	funcCancelButton,
	startTitle,
	funcStartQuiz,
	buttonColor,
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
			const response = await fetchLogin(urls.login);

			const data = await response.json();

			const userLogin = {
				token: data.token,
				user: data.user,
			};

			if (response.ok) {
				const role = data.user.role.toLowerCase();

				localStorage.setItem('userLogin', JSON.stringify(userLogin));

				if (role === 'admin') {
					return (window.location.hash = '#/dashboard-admin');
				}

				if (role === 'professor') {
					return (window.location.hash = '#/dashboard-professor');
				}

				if (role === 'aluno') {
					return (window.location.hash = '#/dashboard-student');
				}

				//TODO: MUDAR ESSA VERIFICAÇÃO PARA QUE SEJA PELAS CREDENCAIS DO USER
				if (
					role !== 'admin' ||
					role !== 'professor' ||
					role !== 'aluno'
				) {
					credentialsInput.style.border = ' 2px solid var(--red-500)';
					passwordInput.style.border = '2px solid var(--red-500)';
					credentialsInput.value = '';
					passwordInput.value = '';
					errorArea.style.display = 'flex';
					errorMessage.textContent =
						'Erro ao fazer login. Verifique suas credenciais.';
					console.error('Erro no login ', data.message);
				}
			}
		} catch (error) {
			throw new Error(`Erro ao buscar usuários: ${error.message}`);
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

let isVisible = false;
export const panelDropdown = (element, sidebarDropFunc) => {
	element.addEventListener('click', async () => {
		isVisible = !isVisible;
		const panel = document.querySelector('#panel-dropdown');

		if (!isVisible) {
			panel.classList.remove('panel-dropdown-open');
			panel.classList.add('panel-dropdown-close');
		} else {
			const dropdown = await sidebarDropFunc();
			panel.innerHTML = '';
			panel.appendChild(dropdown);

			panel.classList.remove('panel-dropdown-close');
			panel.classList.add('panel-dropdown-open');
		}
	});
};

export const subjectsAmountDropdown = element => {
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
