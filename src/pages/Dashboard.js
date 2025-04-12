import DashboardContent from "../components/DashboardContent.js";
import Title from "../components/Title.js";
import newElement from "../utils/newElement.js"

const Dashboard = () => {
    const dashBody = newElement('div');
    
    const titleContent = Title('Dashboard', 'Bem vindo, Aluno');
    const bodyContent = DashboardContent();

    dashBody.appendChild(titleContent);
    dashBody.appendChild(bodyContent);

    return dashBody;
}

export default Dashboard;
