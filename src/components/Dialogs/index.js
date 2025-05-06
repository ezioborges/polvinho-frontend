import newElement from "../../utils/newElement.js";

const InitQuiz = (title, text) => {
    const dialogContent = newElement('div');
    
    dialogContent.textContent = `Aqui vai ser o dialog: ${title} - ${text}`
    
    return dialogContent;
};

export default InitQuiz;