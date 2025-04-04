import newElement from "../utils/newElement.js";
import textGenerator from "../utils/textGenerator.js";
import BodyWithoutContent from "./BodyWithoutContent.js";
import DisciplineBar from "./DisciplineBar.js";

const BodyContent = () => {
    const discipline = []
    const content = newElement('div');

    content.classList.add('body-content');

    const title = textGenerator('title4', 'Disciplinas');
    title.style.marginBottom = '.5rem';

    discipline.push(DisciplineBar('Advinhação'));
    discipline.push(DisciplineBar('Trato das criaturas mágicas'))

    console.log(discipline.length);
        

    const noContent = BodyWithoutContent();

    content.appendChild(title);

    if (!discipline.length) {
        content.appendChild(noContent);
        return content;
    } else {
        discipline.forEach((item) => {
            content.appendChild(item);
        })
        return content;
    }

    //NÃO ESQUECER DE DESCOMENTAR ISSO
    // content.appendChild(divination);
    // content.appendChild(fantasticCreature);
    content.appendChild(noContent);



    return content;
}

export default BodyContent;
