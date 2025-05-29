import DashboardContent from "../components/DashboardContent.js";
import PageTitle from "../components/PageTitle.js";
import { Sidebar } from "../components/Sidebar.js";
import newElement from "../utils/newElement.js"

const Dashboard = () => {
    const bodyContent = newElement('div');
    bodyContent.classList.add('home-content');

    const mainBody = newElement('div');
    mainBody.classList.add('body');
    mainBody.id = 'main-body';

    const dashBody = newElement('div');
    dashBody.classList.add('dashboard-body');

    const sidebar = Sidebar()
    
    const titleContent = PageTitle('Dashboard', 'Bem vindo, Aluno');
    const dashContent = DashboardContent();

    dashBody.appendChild(titleContent);
    dashBody.appendChild(dashContent);
    
    mainBody.appendChild(dashBody);

    bodyContent.appendChild(sidebar);
    bodyContent.appendChild(mainBody);

    

    return bodyContent;
}

export default Dashboard;
