import { router } from "../router.js";
import { tableText } from "../utils/disciplineBar.js";
import newElement from "../utils/newElement.js";

const disciplineBarDisc = (name, date, type) => {
    const linkContent = newElement('a')
    linkContent.href = '/arroz'
    linkContent.classList.add('link-content')
    const divContent = newElement('div')
    divContent.classList.add('discipline-bar-table')

    const nameBody = tableText('p', name, 'textMd', '--stone-900')
    nameBody.classList.add('name-body-left')

    const dateBody = tableText('p', date, 'textSm', '--stone-600')

    const divType = newElement('div')
    const typeBody = tableText('p', type, 'textSm', '--indigo-50')
    
    linkContent.appendChild(divContent)

    divType.appendChild(typeBody)
    divType.classList.add('type-body-right')

    divContent.appendChild(nameBody);
    divContent.appendChild(dateBody);
    divContent.appendChild(divType)

    return linkContent;
}

export default disciplineBarDisc;