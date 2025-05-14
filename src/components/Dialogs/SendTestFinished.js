import { clickEventCancelButton } from "../../utils/eventListeners.js";
import newElement from "../../utils/newElement.js";

const SendTestFinished = () => {
    const FinishButton = document.querySelector('#start-button')
    console.log("🚀 ~ SendTestFinished ~ FinishButton:", FinishButton)
    if (FinishButton) {
        clickEventCancelButton(FinishButton)
    }
    const dialogContent = newElement('div');
    const titleDialog = newElement('p');
    const textDialog = newElement('p');
    const resumeLink = newElement('a')


    titleDialog.textContent = 'Teste enviado com sucesso!'

    textDialog.textContent = 'O quiz "nome do Quiz" fois enviado com sucesso!'

    resumeLink.textContent = 'Ver Gabarito'

    dialogContent.appendChild(titleDialog);
    dialogContent.appendChild(textDialog);
    dialogContent.appendChild(resumeLink);

    console.log('Aqui ta batendo');
    


    return dialogContent;
}
export default SendTestFinished;