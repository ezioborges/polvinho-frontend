import { quizzesArr } from "../data/quizzesArr.js";
import { tableText } from "../utils/disciplineBar.js";
import newElement from "../utils/newElement.js";
import BodyWithoutContent from "./BodyWithoutContent.js";
import disciplineBarDisc from "./DisciplineBarDisc.js";

const DisciplinesContent = () => {
    const displinesArr = Object.values(quizzesArr);
    // console.log("🚀 ~ DisciplinesContent ~ displinesArr:", displinesArr)
    const disciplineContent = newElement('div');
    disciplineContent.classList.add('discipline-title-table')

    const disciplineHeader = newElement('div')
    disciplineHeader.classList.add('discipline-header')

    const disciplineBody = newElement('div')
    disciplineBody.classList.add('discipline-body')
    
    const nameHeader = tableText('p', 'Nome', 'textSm', '--stone-500');
    const dateHeader = tableText('p', 'Data de Entrega', 'textSm', '--stone-500');
    const typeHeader = tableText('p', 'Tipo', 'textSm', '--stone-500');

    const noContent = BodyWithoutContent()

    disciplineContent.appendChild(disciplineHeader);
    disciplineHeader.appendChild(nameHeader)
    disciplineHeader.appendChild(dateHeader)
    disciplineHeader.appendChild(typeHeader)
    
    disciplineContent.appendChild(disciplineBody)

    if(!displinesArr.length) {
        disciplineBody.appendChild(noContent)
        return disciplineBody
    } 

    displinesArr.forEach(({name, date, type, id}) => {
        disciplineBody.appendChild(disciplineBarDisc(name, date, type, id))
    })

    return disciplineContent;
}

export default DisciplinesContent;