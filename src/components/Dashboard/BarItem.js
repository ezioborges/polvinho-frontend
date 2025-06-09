import newElement from "../../utils/newElement.js";
import textGenerator from "../../utils/textGenerator.js";

const BarItem = (entity, register) => {
    const entityFormated = entity.toLowerCase()
    const item = newElement('div');
    item.classList.add('bar-content')    

    const title = textGenerator('textMd', entity);
    title.classList.add('discipline-text')

    if (register === true) {        
        const newRegister = newElement('a')
        newRegister.href = `#/register/${entityFormated}`
        newRegister.classList.add('new-register')
        newRegister.classList.add('textMd')
        newRegister.textContent = 'Novo Registro'


        item.appendChild(title)
        item.appendChild(newRegister)

        return item
    }

    item.appendChild(title)

    return item
}

export default BarItem;