import newElement from "../../utils/newElement.js";

const SendTestFinished = () => {
    const dialogContent = newElement('div')
    dialogContent.style.display = 'flex'
    dialogContent.style.alignItems = 'center'
    dialogContent.classList.add('dialog-content')
    
    const titleArea = newElement('span')
    titleArea.classList.add('finish-title-area')
    
    const titleFinishTest = newElement('p')
    titleFinishTest.textContent = 'Entregue'
    titleFinishTest.classList.add('title3')
    
    const checkCircle = newElement('img')
    checkCircle.src = '../../../assets/CheckCircle.png'
    checkCircle.alt = 'img-check-circle'

    const text = newElement('p')
    text.textContent = 'O quiz "Simulado Prova 1" foi entregue com sucesso!'
    text.style.color = 'var(--indigo-900)'

    const link = newElement('a')
    link.classList.add('link-to-resume')
    link.href = 'criar-rota-do-gabarito'
    link.textContent = 'Ver Gabarito'
    link.style.color = 'var(--indigo-700)'
    link.style.fontWeight = '600'


    titleArea.appendChild(checkCircle)
    titleArea.appendChild(titleFinishTest)

    dialogContent.appendChild(titleArea)
    dialogContent.appendChild(text)
    dialogContent.appendChild(link)

    return dialogContent;
}
export default SendTestFinished;