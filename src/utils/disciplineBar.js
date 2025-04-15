import newElement from "./newElement.js";

export const tableText = (tag, title, textClass, fontColor) => {
    const titleElement = newElement(tag);

    titleElement.textContent = title;
    titleElement.classList.add(textClass);
    titleElement.style.color = `var(${fontColor})`

    return titleElement;
}