import disciplinesArr from "../data/disciplinesArr.js";
import newElement from "../utils/newElement.js";
import textGenerator from "../utils/textGenerator.js";
import BodyWithoutContent from "./BodyWithoutContent.js";
import DisciplineBar from "./DisciplineBarDash.js";

const DashboardContent = () => {
    const disciplines = Object.values(disciplinesArr)
    const content = newElement('div');

    content.classList.add('body-content');

    const title = textGenerator('title4', 'Disciplinas');
    title.style.marginBottom = '.5rem';
        

    const noContent = BodyWithoutContent();

    content.appendChild(title);

    if (!disciplines.length) {
        content.appendChild(noContent);
        return content;
    } else {
        disciplines.forEach((item) => {
            content.appendChild(DisciplineBar(item));
        })
        return content;
    }
}

export default DashboardContent;