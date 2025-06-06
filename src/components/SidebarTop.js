import { router } from "../router.js";
import newElement from "../utils/newElement.js";

const SidebarTop = () => {
    const userLogin = JSON.parse(localStorage.getItem('userLogin'))
    const userRole = userLogin ? userLogin.user.role.toLowerCase() : null
    
    console.log('userLogin sidebar ===> ', userRole);

    if (userRole === 'admin') {
        const sidebarTopContent = newElement('div');
        sidebarTopContent.classList.add('sidebar-top-content');

        const sidebarTitle = newElement('div');
        sidebarTitle.classList.add('sidebar-logo');

        const polvoLogo = newElement('img');
        polvoLogo.src = './assets/logo.png';
        polvoLogo.alt = 'Logo do polvo';
        polvoLogo.classList.add('polvo-logo');

        const sidebarNav = newElement('div');
        sidebarNav.classList.add('sidebar-nav');

        const sidebarDashboard = newElement('div');
        sidebarDashboard.classList.add('sidebar-dashboard');

        const dashboardLogo = newElement('img');
        dashboardLogo.src = './assets/House.png';
        dashboardLogo.alt = 'Logo do dashboard';
        dashboardLogo.classList.add('menu-logo');

        const dashboardText = newElement('a');
        dashboardText.textContent = 'Dashboard';
        dashboardText.href = '/dashboard-admin'
        dashboardText.onclick = (event) => router(event)
        dashboardText.classList.add('sidebar-menu-text');


        const sidebarDiscipline = newElement('div');
        sidebarDiscipline.classList.add('sidebar-dashboard');

        const disciplineLogo = newElement('img');
        disciplineLogo.src = './assets/Books.png';
        disciplineLogo.alt = 'Logo das disciplinas';
        disciplineLogo.classList.add('menu-logo');

        const disciplineText = newElement('a');
        disciplineText.textContent = "Disciplinas";
        disciplineText.href = '/disciplines-admin'
        disciplineText.classList.add('sidebar-menu-text');
        disciplineText.onclick = (event) => router(event)
 
    
        // Configurações de texto
        const sidebarH1 = newElement('a');
        sidebarH1.textContent = "Polvo";
        sidebarH1.href = '/dashboard-admin';
        sidebarH1.classList.add('sidebar-h1');
        sidebarH1.onclick = (event) => router(event)

        const sidebarStudent = newElement('div');
        sidebarStudent.classList.add('sidebar-dashboard');

        const studentLogo = newElement('img');
        studentLogo.classList.add('menu-logo');
        studentLogo.src = '../../assets/student.png'

        const studentText = newElement('a');
        studentText.textContent = "Alunos";
        studentText.href = '/students-admin'
        studentText.classList.add('sidebar-menu-text');
        studentText.onclick = (event) => router(event)
    
        sidebarTitle.appendChild(polvoLogo)
        sidebarTitle.appendChild(sidebarH1)
    
        sidebarDashboard.appendChild(dashboardLogo);
        sidebarDashboard.appendChild(dashboardText);
    
        sidebarDiscipline.appendChild(disciplineLogo);
        sidebarDiscipline.appendChild(disciplineText);

        sidebarStudent.appendChild(studentLogo)
        sidebarStudent.appendChild(studentText)
    
        sidebarNav.appendChild(sidebarDashboard);
        sidebarNav.appendChild(sidebarDiscipline);
        sidebarNav.appendChild(sidebarStudent)
    
        sidebarTopContent.appendChild(sidebarTitle);
        sidebarTopContent.appendChild(sidebarNav);
    
        return sidebarTopContent;
    }

};

export default SidebarTop;
