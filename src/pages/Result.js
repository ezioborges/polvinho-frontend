import InfoCard from "../components/Exam/InfoCard.js";
import QuizzBody from "../components/Quizz/QuizzBody.js";
import { quizzesData } from "../data/quizzesData.js";
import newElement from "../utils/newElement.js";

const Results = () => {
    const hash = window.location.hash 
    const match = hash.match(/#\/disciplines\/(\d+)\/results/);
    const hashId = match ? match[1] : null;

    const data  = quizzesData.find(item => item.id == hashId)
    const { name, discipline, questions, alternatives } = data
    console.log("🚀 ~ Results ~ questions:", questions)

    console.log('pra ver se vem certo', alternatives)
    //TENHO QUE QUE PEGAR AS QUESTÕES E DENTRO DAS QUESTÕES PRECISO PEGAR AS ALTERNATIVAS

    const resultsContent = newElement('div');
    resultsContent.classList.add('all-content')

    const bodyTest = QuizzBody(questions, `Assunto: ${name}`, `Disciplina: ${discipline}`)

    const infoCard = InfoCard('Nota');

    resultsContent.appendChild(bodyTest)
    resultsContent.appendChild(infoCard);

    return resultsContent;
}

export default Results;