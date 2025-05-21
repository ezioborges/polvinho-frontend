import InfoCard from "../components/Exam/InfoCard.js";
import QuizzBody from "../components/Quizz/QuizzBody.js";
import { quizzesData } from "../data/quizzesData.js";
import newElement from "../utils/newElement.js";

const Results = () => {
    const hash = window.location.hash 
    const match = hash.match(/#\/disciplines\/(\d+)\/results/);
    const hashId = match ? match[1] : null;

    const data  = quizzesData.find(item => item.id == hashId)
    const { name, discipline, questions } = data

    //TENHO QUE QUE PEGAR AS QUESTÕES E DENTRO DAS QUESTÕES PRECISO PEGAR AS ALTERNATIVAS

    const resultsContent = newElement('div');
    resultsContent.classList.add('all-content')

    const bodyTest = QuizzBody(questions, `Assunto: ${name}`, `Disciplina: ${discipline}`)

    if (bodyTest.correctListItem.length > 0) {
        bodyTest.correctListItem.forEach((item) => {
            item.style.backgroundColor = 'green'
            item.style.color = 'white'
        })
    }

    console.log("🚀 ~ Results ~ bodyTest:", bodyTest.correctListItem)
    const infoCard = InfoCard('Nota');

    resultsContent.appendChild(bodyTest.bodyContent)
    resultsContent.appendChild(infoCard);

    return resultsContent;
}

export default Results;