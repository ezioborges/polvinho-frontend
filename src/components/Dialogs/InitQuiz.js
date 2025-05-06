import newElement from "../../utils/newElement.js";
import CancelButton from "../Buttons/CancelButton.js";
import OpenQuizButton from "../Buttons/OpenQuizButton.js";

const InitQuiz = (title, text) => {
    const dialogOverlay = newElement('div')
    const dialogContent = newElement('div')
    const dialogTitle = newElement('p')
    const dialogText = newElement('p')
    const dialogButtonArea = newElement('div')
    const dialogTextsArea = newElement('div')
    
    const cancelButton = CancelButton('Cancelar', 'textMd')
    cancelButton.style.marginRight = '1rem'

    const startButton = OpenQuizButton('Começar', 'textMd')

    dialogOverlay.classList.add('dialog-overlay')
    dialogContent.classList.add('dialog-content')
    dialogButtonArea.classList.add('dialog-button-area')
    dialogTitle.classList.add('title3')
    dialogText.classList.add('textMd')

    dialogTitle.textContent = title
    dialogTitle.style.marginBottom = '1rem'
    dialogText.style.color = 'var(--stone-900)'

    dialogText.textContent = text
    dialogText.style.color = 'var(--stone-700)'

    dialogTextsArea.appendChild(dialogTitle)
    dialogTextsArea.appendChild(dialogText)

    dialogButtonArea.appendChild(cancelButton)
    dialogButtonArea.appendChild(startButton)
    
    dialogContent.appendChild(dialogTextsArea);
    dialogContent.appendChild(dialogButtonArea);

    document.body.appendChild(dialogOverlay);
    document.body.appendChild(dialogContent);

};

export default InitQuiz;