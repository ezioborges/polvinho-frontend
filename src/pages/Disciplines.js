import newElement from "../utils/newElement.js"
import BodyContent from "../components/BodyContent.js";
import { BodyTitle } from "../components/BodyTitle.js";

const Home = () => {
    const body = newElement('div');
    
    body.classList.add('body');

    const titleContent = BodyTitle();
    const bodyContent = BodyContent();

    body.appendChild(titleContent);
    body.appendChild(bodyContent);

    return body;
}

export default Home;
