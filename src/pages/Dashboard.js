import PageTitle from "../components/PageTitle.js";
import { Sidebar } from "../components/Sidebar.js";
import newElement from "../utils/newElement.js"

const Dashboard = () => {
    const bodyContent = newElement('div');
    bodyContent.classList.add('dash-content');

    const mainBody = newElement('div');
    mainBody.classList.add('body');
    mainBody.id = 'main-body';

    const dashBody = newElement('div');
    dashBody.classList.add('dashboard-body');

    const sidebar = Sidebar()
    
    const titleContent = PageTitle('Dashboard', 'Bem vindo, Aluno');

    dashBody.appendChild(titleContent);
    
    mainBody.appendChild(dashBody);

    bodyContent.appendChild(sidebar);
    bodyContent.appendChild(mainBody);

    

    return bodyContent;
}

export default Dashboard;
