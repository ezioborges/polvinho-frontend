import disciplinesArr from "../data/disciplinesArr.js";
import newElement from "../utils/newElement.js";
import textGenerator from "../utils/textGenerator.js";
import BodyWithoutContent from "./BodyWithoutContent.js";
import BarComponent from "./BarComponent.js";

const DashboardContent = () => {
    const disciplines = Object.values(disciplinesArr)
    const content = newElement('div');

    content.classList.add('body-content');

    const title = textGenerator('title3', 'Disciplinas');
    title.style.margin = '3rem 0 1rem 0';
        

    const noContent = BodyWithoutContent('Nenhuma disciplina cadastrada');

    content.appendChild(title);

    if (!disciplines.length) {
        content.appendChild(noContent);
        return content;
    } else {
        disciplines.forEach((item) => {
            content.appendChild(BarComponent(item));
        })
        return content;
    }
}

export default DashboardContent;