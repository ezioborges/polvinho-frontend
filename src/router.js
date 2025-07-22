export const router = event => {
	event = event || window.event;
	event.preventDefault();
	const link = event.currentTarget || event.target.closest('a');
	if (link && link.getAttribute('href')) {
		window.location.hash = link.getAttribute('href');
	}
	handleLocation();
};

const routes = {
	'/': './pages/Login.js',
	'/aluno-admin': './pages/Admin/Students.js',
	'/dashboard-admin': './pages/Admin/Dashboard.js',
	'/dashboard-professor': './pages/Prof/DashboardProfessor.js',
	'/disciplines/:id': './pages/Exam.js',
	'/disciplines': './pages/Disciplines.js',
	'/disciplines/:id/quizz': './pages/Quizz.js',
	'/disciplines/:id/results': './pages/Result.js',
	'/edit/aluno/:userId': './pages/Admin/UserEdit.js',
	'/edit/subject/:subjectId': './pages/Admin/SubjectEdit.js',
	'/edit/professor/:userId': './pages/Admin/UserEdit.js',
	'/error': './pages/PageError.js',
	'/professor-admin': './pages/Admin/Professor.js',
	'/register/:entity': './pages/Admin/Register.js',
	'/subjects-admin': './pages/Admin/Subjects.js',
	'/subject-professor/:subjectId': './pages/Prof/ProfessorSubjectPage.js',
	'/quiz/:quizId': './pages/Prof/QuizPage.js',
	'/quiz/quiz-answers/:quizId': './pages/Prof/QuizAnswers.js',
	'/quiz/register-quiz': './pages/Prof/QuizRegister.js',
	'/quiz/create-question/:quizId': './pages/Prof/createQuestion.js',
};

export const handleLocation = async () => {
	const hashPath = window.location.hash;
	const path = hashPath.slice(1) || '/';

	// delay para que possa ver a rota antes de atualizar a página
	await new Promise(resolve => setTimeout(resolve, 100));

	const userLogin = localStorage.getItem('userLogin');
	let user = null;
	let token = null;

	try {
		if (userLogin) {
			user = JSON.parse(userLogin);
			token = user?.token;
		}
	} catch (error) {
		console.error('Erro ao parsear userLogin:', error);
		localStorage.removeItem('userLogin'); // Remove dados corrompidos
	}

	// verifica se o usuário tem token de acesso válido
	if (path !== '/' && !token) {
		window.location.hash = '/';
		return;
	}

	let matchedRoute = null;
	let params = null;

	for (const routePattern in routes) {
		const regexPath = routePattern.replace(/:\w+/g, '(\\w+)');
		const regex = new RegExp(`^${regexPath}$`);
		const match = path.match(regex);

		if (match) {
			matchedRoute = routes[routePattern];
			params = {};
			const paramNames = routePattern.match(/:\w+/g);
			if (paramNames) {
				paramNames.forEach((name, index) => {
					params[name.slice(1)] = match[index + 1];
				});
			}
			break;
		}
	}

	const route =
		matchedRoute ||
		(() => {
			const newMain = document.getElementById('main-body');
			if (newMain) {
				newMain.innerHTML = '<h1>Página não encontrada</h1>';
			} else {
				document.getElementById('main-content').innerHTML =
					'<h1>Página não encontrada</h1>';
			}
		});

	if (typeof route === 'string' && route.endsWith('.js')) {
		try {
			const module = await import(route);
			if (module.default && typeof module.default === 'function') {
				const content = await module.default(params);

				if (path === '/') {
					// Apenas Login: limpa e renderiza na raiz
					document.getElementById('main-content').innerHTML = '';
					document
						.getElementById('main-content')
						.appendChild(content);
				} else if (path.includes('/dashboard')) {
					// Qualquer dashboard: renderiza diretamente
					document.getElementById('main-content').innerHTML = '';
					document
						.getElementById('main-content')
						.appendChild(content);
				} else {
					// Outras rotas: garante que main-body existe
					let newMain = document.getElementById('main-body');
					if (!newMain) {
						// Determina qual dashboard carregar baseado no role do usuário
						const userLogin = localStorage.getItem('userLogin');
						const user = userLogin ? JSON.parse(userLogin) : null;

						let dashboardPath;
						if (user?.role === 'admin') {
							dashboardPath = './pages/Admin/Dashboard.js';
						} else if (user?.role === 'professor') {
							dashboardPath =
								'./pages/Prof/DashboardProfessor.js';
						} else {
							// Se não tem role definido, redireciona para login
							window.location.hash = '/';
							return;
						}

						try {
							const DashboardModule = await import(dashboardPath);
							const DashboardContent =
								await DashboardModule.default();
							document.getElementById('main-content').innerHTML =
								'';
							document
								.getElementById('main-content')
								.appendChild(DashboardContent);
							newMain = document.getElementById('main-body');
						} catch (error) {
							console.error('Erro ao carregar dashboard:', error);
							window.location.hash = '/error';
							return;
						}
					}
					if (newMain && content instanceof HTMLElement) {
						newMain.innerHTML = '';
						newMain.appendChild(content);
					} else {
						document.getElementById('main-content').innerHTML =
							'<h1>Erro: container #main-body não encontrado!</h1>';
					}
				}
			}
		} catch (error) {
			console.error('Erro ao importar o módulo:', error);
			window.location.hash = '/error';
		}
	} else if (typeof route === 'function') {
		route();
	}
};

window.addEventListener('hashchange', handleLocation);
window.addEventListener('load', handleLocation);
window.onpopstate = handleLocation;

handleLocation();
