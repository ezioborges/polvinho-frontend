import DashListItems from './components/Dashboard/DashListItems.js';
import DashboardMainContent from './components/Dashboard/DashboardMainContent.js';
import Login from './pages/Login.js';

const MAIN_CONTENT_ID = 'main-content';
const MAIN_BODY_ID = 'main-body';

const dashboardByRole = {
	admin: '/dashboard-admin',
	professor: '/dashboard-professor',
	aluno: '/dashboard-student',
};

const dashboardRoutes = new Set(Object.values(dashboardByRole));

const routes = {
	'/': Login,
	'/aluno-admin': './pages/Admin/Students.js',
	'/dashboard-admin': './pages/Admin/Dashboard.js',
	'/dashboard-professor': './pages/Prof/DashboardProfessor.js',
	'/dashboard-student': './pages/Student/DashboardStudent.js',
	'/disciplines': './pages/Disciplines.js',
	'/subjects/:id/results': './pages/Student/Results.js',
	'/quizzes/:quizId/student/:studentId/result': './pages/Student/Results.js',
	'/edit/aluno/:userId': './pages/Admin/UserEdit.js',
	'/edit/subject/:subjectId': './pages/Admin/SubjectEdit.js',
	'/edit/professor/:userId': './pages/Admin/UserEdit.js',
	'/error': './pages/PageError.js',
	'/professor-admin': './pages/Admin/Professor.js',
	'/register/:entity': './pages/Admin/Register.js',
	'/subjects-admin': './pages/Admin/Subjects.js',
	'/subject-professor/:subjectId': './pages/Prof/ProfessorSubjectPage.js',
	'/subject-student/:subjectId': './pages/Student/StudentSubjectPage.js',
	'/quiz/register-quiz': './pages/Prof/QuizRegister.js',
	'/quiz/quiz-answers/:quizId': './pages/Prof/QuizAnswers.js',
	'/quiz/create-question/:quizId': './pages/Prof/createQuestion.js',
	'/quiz/student/:quizId': './pages/Student/QuizStudentPage.js',
	'/quiz/:quizId': './pages/Prof/QuizPage.js',
	'/quiz-started/:quizId': './pages/Student/QuizStartedPage.js',
};

const getSegments = path => path.split('/').filter(Boolean);

const matchRoute = path => {
	const pathSegments = getSegments(path);

	for (const [pattern, component] of Object.entries(routes)) {
		const patternSegments = getSegments(pattern);
		if (patternSegments.length !== pathSegments.length) continue;

		const params = {};
		const matches = patternSegments.every((segment, index) => {
			if (segment.startsWith(':')) {
				params[segment.slice(1)] = pathSegments[index];
				return true;
			}

			return segment === pathSegments[index];
		});

		if (matches) return { pattern, component, params };
	}

	return null;
};

const getSession = () => {
	try {
		return JSON.parse(localStorage.getItem('userLogin'));
	} catch (error) {
		console.error('Sessão inválida no localStorage:', error);
		localStorage.removeItem('userLogin');
		return null;
	}
};

const navigate = path => {
	const nextHash = `#${path}`;

	if (window.location.hash === nextHash) {
		handleLocation();
		return;
	}

	window.location.hash = path;
};

const requiresRedirect = (path, session) => {
	if (!session?.token) {
		if (path === '/') return false;

		navigate('/');
		return true;
	}

	if (path !== '/') return false;

	const dashboard = dashboardByRole[session.user?.role?.toLowerCase()];
	if (dashboard) {
		navigate(dashboard);
		return true;
	}

	console.warn('Sessão removida: perfil de usuário desconhecido.');
	localStorage.removeItem('userLogin');
	return false;
};

const renderContent = (targetId, content) => {
	const target = document.getElementById(targetId);
	if (!target) throw new Error(`Elemento #${targetId} não encontrado.`);

	target.innerHTML = '';
	if (content instanceof HTMLElement) {
		target.appendChild(content);
		return;
	}

	if (typeof content === 'string') target.innerHTML = content;
};

const loadComponent = async route => {
	if (typeof route.component === 'function') return route.component;

	const pageModule = await import(route.component);
	if (typeof pageModule.default !== 'function') {
		throw new TypeError(`A rota ${route.pattern} não exporta uma função.`);
	}

	return pageModule.default;
};

const renderRoute = async (path, route) => {
	const Page = await loadComponent(route);

	if (path === '/') {
		renderContent(MAIN_CONTENT_ID, Page());
		return;
	}

	if (dashboardRoutes.has(path)) {
		renderContent(MAIN_CONTENT_ID, await Page(route.params));
		return;
	}

	const dashboardLayout = await DashboardMainContent(DashListItems);
	renderContent(MAIN_CONTENT_ID, dashboardLayout);
	renderContent(MAIN_BODY_ID, await Page(route.params));
};

export const router = event => {
	event?.preventDefault();

	const link =
		event?.currentTarget?.closest?.('a') ?? event?.target?.closest?.('a');
	const destination = link?.getAttribute('href');

	if (destination) navigate(destination.replace(/^#/, ''));
};

export const handleLocation = async () => {
	const path = window.location.hash.slice(1) || '/';
	const session = getSession();

	if (requiresRedirect(path, session)) return;

	const route = matchRoute(path);
	if (!route) {
		renderContent(MAIN_CONTENT_ID, '<h1>Página não encontrada</h1>');
		return;
	}

	try {
		await renderRoute(path, route);
	} catch (error) {
		console.error(`Erro ao carregar a rota ${path}:`, error);

		if (path !== '/error') {
			navigate('/error');
			return;
		}

		renderContent(MAIN_CONTENT_ID, '<h1>Erro ao carregar a página</h1>');
	}
};

window.addEventListener('hashchange', handleLocation);
handleLocation();
