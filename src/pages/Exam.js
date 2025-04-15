import newElement from "../utils/newElement.js"

const Exam = () => {
    const examContent = newElement('div')
    examContent.textContent = "Aqui vai ser o campo de exames mesmo"

    return examContent;
}

export default Exam;
