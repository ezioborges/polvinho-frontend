import newElement from "../utils/newElement.js";
import Home from "./Home.js";

const newBody = () => {
    const bodyContent = newElement('div')
    bodyContent.id = 'main-content'
    bodyContent.classList.add('body')

    const homeComponent = Home();
    bodyContent.appendChild(homeComponent)

    console.log("🚀 ~ newBody ~ bodyContent:", bodyContent)
    return bodyContent;
}

export default newBody;
