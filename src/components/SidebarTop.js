import newElement from "../utils/newElement.js";

const SidebarTop = () => {
    const sidebarTopContent = newElement('div');
    const sidebarTitle = newElement('div');
    const polvoLogo = newElement('img');
    const sidebarNav = newElement('div');
    const sidebarDashboard = newElement('div');
    const dashboardLogo = newElement('img');
    const dashboardText = newElement('p');
    const sidebarDiscipline = newElement('div');
    const disciplineLogo = newElement('img');
    const disciplineText = newElement('p');

    // Configurações de texto
    const sidebarH1 = document.createElement('h1');
    sidebarH1.textContent = "Polvo";
    dashboardText.textContent = 'Dashboard';
    disciplineText.textContent = "Disciplinas";

    // Adiciona classes
    sidebarTopContent.classList.add('sidebar-top-content');
    sidebarTitle.classList.add('sidebar-logo');
    sidebarNav.classList.add('sidebar-nav');
    sidebarH1.classList.add('sidebar-h1');
    sidebarDashboard.classList.add('sidebar-dashboard');
    dashboardText.classList.add('sidebar-menu-text');
    sidebarDiscipline.classList.add('sidebar-dashboard');
    disciplineText.classList.add('sidebar-menu-text');

    // Adiciona ícones
    polvoLogo.src = './assets/logo.png';
    polvoLogo.alt = 'Logo do polvo';
    polvoLogo.classList.add('polvo-logo');

    dashboardLogo.src = './assets/House.png';
    dashboardLogo.alt = 'Logo do dashboard';
    dashboardLogo.classList.add('menu-logo');

    disciplineLogo.src = './assets/Books.png';
    disciplineLogo.alt = 'Logo das disciplinas';
    disciplineLogo.classList.add('menu-logo');

    // Monta a estrutura
    sidebarTitle.appendChild(polvoLogo);
    sidebarTitle.appendChild(sidebarH1);

    sidebarDashboard.appendChild(dashboardLogo);
    sidebarDashboard.appendChild(dashboardText);

    sidebarDiscipline.appendChild(disciplineLogo);
    sidebarDiscipline.appendChild(disciplineText);

    sidebarNav.appendChild(sidebarDashboard);
    sidebarNav.appendChild(sidebarDiscipline);

    sidebarTopContent.appendChild(sidebarTitle);
    sidebarTopContent.appendChild(sidebarNav);

    return sidebarTopContent;
};

export default SidebarTop;
