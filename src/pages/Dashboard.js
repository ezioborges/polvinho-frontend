import newElement from "../utils/newElement.js";

const Dashboard = () => {
    const dashContent = newElement('div')
    dashContent.textContent = "Aqui vai ser o Dash"

    return dashContent;
}

export default Dashboard;
