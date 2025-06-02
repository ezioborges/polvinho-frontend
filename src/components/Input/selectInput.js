import newElement from "../../utils/newElement.js"

const selectInput = (labelTitle, inputId, arr) => {
    const selectInputArea = newElement('div')
    selectInputArea.classList.add('label-input-column')

    const nameLabel = newElement('label')
    nameLabel.htmlFor = inputId
    nameLabel.textContent = labelTitle
    nameLabel.classList.add('textMd')

    const select = newElement('select')
    select.classList.add('input-area')
    select.id = inputId

    arr.forEach((discipline) => {
        const option = newElement('option')
        option.value = discipline
        option.textContent = discipline
        select.appendChild(option)
    })

    selectInputArea.appendChild(nameLabel)
    selectInputArea.appendChild(select)
    
    return selectInputArea
}

export default selectInput;
