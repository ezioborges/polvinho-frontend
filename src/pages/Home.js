import { Sidebar } from "../components/Sidebar.js";
import newElement from "../utils/newElement.js";

const Home = () => {
    const bodyContent = newElement('div');
    bodyContent.classList.add('home-content');

    const homeBody = newElement('div');
    homeBody.classList.add('body');
    homeBody.id = 'main-body'


    const sidebar = Sidebar();

    bodyContent.appendChild(sidebar);
    bodyContent.appendChild(homeBody);

    return bodyContent;
}

export default Home;
