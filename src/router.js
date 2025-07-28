// router.js

// Importe DashboardMainContent e Login para uso direto no roteador.
// Certifique-se de que os caminhos estejam corretos no seu projeto.
import Login from './pages/Login.js';

// Importe DashListItems porque DashboardMainContent o espera como parâmetro
// para renderizar o conteúdo inicial do dashboard.

export const router = event => {
	event = event || window.event;
	event.preventDefault(); // Evita o comportamento padrão do link
	const link = event.currentTarget || event.target.closest('a');
	if (link && link.getAttribute('href')) {
		window.location.hash = link.getAttribute('href'); // Atualiza a hash na URL
	}
	handleLocation(); // Processa a nova hash
};

const routes = {
	'/': './pages/Login.js', // Esta rota é tratada de forma especial no handleLocation
	'/aluno-admin': './pages/Admin/Students.js',
	'/dashboard-admin': './pages/Admin/Dashboard.js', // Este módulo chama DashboardMainContent(DashListItems)
	'/dashboard-professor': './pages/Prof/DashboardProfessor.js', // Presumo que este também chama DashboardMainContent
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
	'/dashboard-student': './pages/Student/DashboardStudent.js',
};

/**
 * Função auxiliar para renderizar conteúdo em um elemento DOM específico.
 * @param {string} targetElementId - O ID do elemento onde o conteúdo será renderizado.
 * @param {HTMLElement|string} content - O conteúdo a ser renderizado.
 */
const renderContent = (targetElementId, content) => {
	const targetElement = document.getElementById(targetElementId);
	if (targetElement) {
		targetElement.innerHTML = ''; // Limpa o conteúdo existente
		if (content instanceof HTMLElement) {
			targetElement.appendChild(content);
		} else if (typeof content === 'string') {
			targetElement.innerHTML = content;
		}
	} else {
		console.error(
			`Erro: Elemento com ID '${targetElementId}' não encontrado.`,
		);
		document.body.innerHTML =
			'<h1>Erro Crítico: Container principal #main-content não encontrado!</h1>';
	}
};

export const handleLocation = async () => {
	const hashPath = window.location.hash;
	const path = hashPath.slice(1) || '/';

	let user = null;
	let token = null;

	try {
		const userLogin = localStorage.getItem('userLogin');
		if (userLogin) {
			user = JSON.parse(userLogin);
			token = user?.token;
		}
	} catch (error) {
		console.error('Erro ao parsear userLogin do localStorage:', error);
		localStorage.removeItem('userLogin');
	}

	// --- Lógica de Autenticação e Redirecionamento ---

	// Cenário 1: Não logado e tentando acessar uma rota protegida
	if (path !== '/' && !token) {
		window.location.hash = '/';
		return;
	}

	// Cenário 2: Já logado e tentando acessar a rota de login ('/')
	if (path === '/' && token) {
		if (user?.role === 'admin') {
			window.location.hash = '/dashboard-admin';
		} else if (user?.role === 'professor') {
			window.location.hash = '/dashboard-professor';
		} else if (user?.role === 'aluno') {
			window.location.hash = '/dashboard-student';
		} else {
			console.warn(
				'Token válido encontrado, mas role desconhecido. Redirecionando para login.',
			);
			localStorage.removeItem('userLogin');
			window.location.hash = '/';
		}
		return;
	}

	let matchedRoutePath = null;
	let params = {};

	// Encontra a rota correspondente e extrai os parâmetros
	for (const routePattern in routes) {
		const regexPath = routePattern.replace(/:\w+/g, '(\\w+)');
		const regex = new RegExp(`^${regexPath}$`);
		const match = path.match(regex);

		if (match) {
			matchedRoutePath = routes[routePattern];
			const paramNames = routePattern.match(/:\w+/g);
			if (paramNames) {
				paramNames.forEach((name, index) => {
					params[name.slice(1)] = match[index + 1];
				});
			}
			break;
		}
	}

	// Se nenhuma rota for encontrada
	if (!matchedRoutePath) {
		renderContent('main-content', '<h1>Página não encontrada</h1>');
		return;
	}

	try {
		// --- Tratamento da Rota de Login ---
		if (path === '/') {
			const loginContent = Login();
			renderContent('main-content', loginContent);
			return;
		}

		// --- Tratamento para TODAS as Rotas Autenticadas (comportamento uniforme) ---
		const pageModule = await import(matchedRoutePath);

		if (pageModule.default && typeof pageModule.default === 'function') {
			const pageContent = await pageModule.default(params);

			// Todos os dashboards e outras rotas renderizam diretamente no main-content
			renderContent('main-content', pageContent);
		} else {
			console.error(
				`Módulo para a rota (${path}) não tem um export default function.`,
			);
			renderContent(
				'main-content',
				'<h1>Erro ao carregar o conteúdo da página.</h1>',
			);
		}
	} catch (error) {
		console.error('Erro geral ao processar rota:', error);
		window.location.hash = '/error';
	}
};

// Adiciona os event listeners para garantir que o roteamento funcione em diferentes cenários.
window.addEventListener('hashchange', handleLocation);
window.addEventListener('load', handleLocation); // Essencial para o carregamento inicial da página
window.onpopstate = handleLocation; // Para navegação via botões de voltar/avançar do navegador

// Chama handleLocation uma vez para processar a rota inicial ao carregar o script.
handleLocation();
