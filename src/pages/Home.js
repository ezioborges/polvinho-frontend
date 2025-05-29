import { Sidebar } from "../components/Sidebar.js";
import newElement from "../utils/newElement.js";

const Home = () => {
    const bodyContent = newElement('div');
    bodyContent.classList.add('home-content');

    const mainBody = newElement('div');
    mainBody.classList.add('body');
    mainBody.id = 'main-body'

    const homeBody = newElement('div');
    homeBody.classList.add('home-body');

    const homeTitle = newElement('p');
    homeTitle.classList.add('title1')

    const sidebar = Sidebar();

    homeBody.appendChild(homeTitle);

    mainBody.appendChild(homeBody);

    bodyContent.appendChild(sidebar);
    bodyContent.appendChild(mainBody);

    return bodyContent;
}

export default Home;
