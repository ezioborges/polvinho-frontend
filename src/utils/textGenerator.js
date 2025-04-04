import newElement from "./newElement.js";

const textGenerator = (textClass, text) => {
    const textElement = newElement('p');

    textElement.textContent = text;
    textElement.classList.add(textClass);

    return textElement;
}

export default textGenerator;
