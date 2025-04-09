import newElement from "../utils/newElement.js"
import BodyContent from "./BodyContent.js";
import { BodyTitle } from "./BodyTitle.js";

const Body = () => {
    const body = newElement('div');
    
    body.classList.add('body');
    body.id = 'body'


    const titleContent = BodyTitle();
    const bodyContent = BodyContent();

    body.appendChild(titleContent);
    body.appendChild(bodyContent);

    return body;
}

export default Body;
