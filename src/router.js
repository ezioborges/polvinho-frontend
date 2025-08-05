import DashboardMainContent from './components/Dashboard/DashboardMainContent.js';
import Login from './pages/Login.js';

// Importe DashListItems porque DashboardMainContent o espera como parâmetro
// para renderizar o conteúdo inicial do dashboard.
import DashListItems from './components/Dashboard/DashListItems.js'; // Ajuste o caminho conforme necessário

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
	'/dashboard-admin': './pages/Admin/Dashboard.js',
	'/dashboard-professor': './pages/Prof/DashboardProfessor.js',
	'/disciplines/:id': './pages/Exam.js',
	'/disciplines': './pages/Disciplines.js',
	'/disciplines/:id/quizz': './pages/Quizz.js',
	'/subjects/:id/results': './pages/Student/Results.js',
	'/edit/aluno/:userId': './pages/Admin/UserEdit.js',
	'/edit/subject/:subjectId': './pages/Admin/SubjectEdit.js',
	'/edit/professor/:userId': './pages/Admin/UserEdit.js',
	'/error': './pages/PageError.js',
	'/professor-admin': './pages/Admin/Professor.js',
	'/register/:entity': './pages/Admin/Register.js',

	'/subjects-admin': './pages/Admin/Subjects.js',
	'/subject-professor/:subjectId': './pages/Prof/ProfessorSubjectPage.js',
	'/subject-student/:subjectId': './pages/Student/StudentSubjectPage.js',

	'/quiz/:quizId': './pages/Prof/QuizPage.js',
	'/quiz/student/:quizId': './pages/Student/QuizStudentPage.js',
	'/quiz/quiz-answers/:quizId': './pages/Prof/QuizAnswers.js',
	'/quiz/register-quiz': './pages/Prof/QuizRegister.js',
	'/quiz/create-question/:quizId': './pages/Prof/createQuestion.js',
	'/dashboard-student': './pages/Student/DashboardStudent.js',

	'/quiz-started/:quizId': './pages/Student/QuizStartedPage.js',
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
		localStorage.removeItem('userLogin'); // Remove dados corrompidos
	}

	// --- Lógica de Autenticação e Redirecionamento ---

	// Cenário 1: Não logado e tentando acessar uma rota protegida
	if (path !== '/' && !token) {
		window.location.hash = '/'; // Redireciona para o login
		return; // Sai desta execução
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
		return; // Sai desta execução após redirecionar
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

	// Se nenhuma rota for encontrada (e não foi redirecionado pela autenticação)
	if (!matchedRoutePath) {
		renderContent('main-content', '<h1>Página não encontrada</h1>');
		return;
	}

	try {
		// --- Tratamento da Rota de Login (apenas quando NÃO logado) ---
		if (path === '/') {
			const loginContent = Login(); // Chame diretamente a função Login (já importada)
			renderContent('main-content', loginContent);
			return; // Sai da função após renderizar o login
		}

		// --- Tratamento para TODAS as Rotas Autenticadas ---

		// 1. **Sempre monte a estrutura do Dashboard no #main-content para rotas autenticadas.**
		//    Isso garante que a sidebar e o #main-body estejam sempre presentes,
		//    especialmente no refresh, usando o DashboardMainContent.
		//    Como DashboardMainContent espera DashListItems, passamos ele aqui.
		//    Isso significa que, no refresh de '/aluno-admin',
		//    DashboardMainContent vai renderizar o conteúdo inicial do dashboard por um instante,
		//    antes de ser substituído pelo conteúdo de Students.js dentro do #main-body.
		const dashboardLayoutElement =
			await DashboardMainContent(DashListItems);
		renderContent('main-content', dashboardLayoutElement);

		// 2. Agora que a estrutura do dashboard (com #main-body) está no DOM,
		//    determinamos o conteúdo específico da rota atual e o injetamos no #main-body.
		const mainBodyContainer = document.getElementById('main-body');

		if (mainBodyContainer) {
			// Se a rota atual é um dos dashboards principais (que já foram preenchidos
			// pelo DashboardMainContent()), não precisamos importar e injetar nada mais.
			if (path.includes('/dashboard')) {
				// Para dashboards, carrega a página específica diretamente
				const pageModule = await import(matchedRoutePath);
				if (
					pageModule.default &&
					typeof pageModule.default === 'function'
				) {
					const pageContent = await pageModule.default(params);
					renderContent('main-content', pageContent);
				}
				return;
			}

			// Para todas as OUTRAS rotas autenticadas (ex: /aluno-admin, /disciplines/:id)
			const pageModule = await import(matchedRoutePath); // Importa o módulo da página específica
			if (
				pageModule.default &&
				typeof pageModule.default === 'function'
			) {
				const pageContent = await pageModule.default(params); // Gera o conteúdo da página
				renderContent('main-body', pageContent); // Injeta no #main-body
			} else {
				console.error(
					`Módulo para a rota autenticada (${path}) não tem um export default function.`,
				);
				renderContent(
					'main-body',
					'<h1>Erro ao carregar o conteúdo da página.</h1>',
				);
			}
		} else {
			console.error(
				'Erro: O elemento #main-body não foi encontrado após carregar a estrutura do dashboard.',
			);
			renderContent(
				'main-content',
				'<h1>Erro: Estrutura da aplicação autenticada incompleta.</h1>',
			);
		}
	} catch (error) {
		console.error('Erro geral ao processar rota:', error);
		// Em caso de erro ao carregar/renderizar um módulo, redireciona para a página de erro genérica.
		window.location.hash = '/error';
	}
};

// Adiciona os event listeners para garantir que o roteamento funcione em diferentes cenários.
window.addEventListener('hashchange', handleLocation);
window.addEventListener('load', handleLocation); // Essencial para o carregamento inicial da página
window.onpopstate = handleLocation; // Para navegação via botões de voltar/avançar do navegador

// Chama handleLocation uma vez para processar a rota inicial ao carregar o script.
handleLocation();
