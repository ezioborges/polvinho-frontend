import newElement from "../utils/newElement.js";

const DisciplinesContent = () => {
    const disciplineContent = newElement('div');
    disciplineContent.classList.add('body-content')
    
    const disciplineTable = newElement('table')
    disciplineTable.classList.add('discipline-table')

    const thead = newElement('thead')
    const trHeader = newElement('tr')

    const nameTH = newElement('th')
    nameTH.textContent = 'Nome'

    const dateTH = newElement('th')
    dateTH.textContent = 'Data de Entrega'

    const typeTH = newElement('th')
    typeTH.textContent = 'Tipo'

    const tbody = newElement('tbody')
    const trBody = newElement('tr')

    const nameTD = newElement('td')
    nameTD.textContent = 'Tema da avaliação'
    const dateTD = newElement('td')
    dateTD.textContent = "26/04/2025"
    const typeTD = newElement('td')
    typeTD.textContent = 'Simulado'


    disciplineContent.appendChild(disciplineTable)
    disciplineTable.appendChild(thead)
    thead.appendChild(trHeader)
    trHeader.appendChild(nameTH)
    trHeader.appendChild(dateTH)
    trHeader.appendChild(typeTH)

    disciplineTable.appendChild(tbody)
    tbody.appendChild(trBody)
    trBody.appendChild(nameTD)
    trBody.appendChild(dateTD)
    trBody.appendChild(typeTD)

    return disciplineContent;
}

export default DisciplinesContent;