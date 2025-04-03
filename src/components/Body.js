import newElement from "../utils/newElement.js"

const Body = () => {
    const body = newElement('div');
    body.classList.add('body');

    return body;
}

export default Body;
