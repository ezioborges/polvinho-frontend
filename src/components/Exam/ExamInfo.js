import newElement from "../../utils/newElement.js";

const ExamInfo = (quizz) => {
    console.log('Aqui é quizz das info: ', quizz);
    const infoContent = newElement('div');
    infoContent.classList.add('info-content')

    const ulInfo = newElement('ul');

    const attempts = newElement('li');
    attempts.classList.add('li-exam')
    const time = newElement('li');
    time.classList.add('li-exam')
    const finish = newElement('li');
    finish.classList.add('li-exam')

    const attemptsSpan = newElement('p');
    attemptsSpan.innerHTML = `Tentativas: <span class="quantity-color">${quizz.attempts}</span>`
    attemptsSpan.classList.add('textLG')

    const timeSpan = newElement('span');
    timeSpan.innerHTML = `Tempo Máximo: <span class="quantity-color">${quizz.time}</span>`
    timeSpan.classList.add('textLG')

    const finishSpan = newElement('span');
    finishSpan.innerHTML = `Data de Entrega: <span class="quantity-color">${quizz.finish}</span>`
    finishSpan.classList.add('textLG')

    attempts.appendChild(attemptsSpan);
    time.appendChild(timeSpan);
    finish.appendChild(finishSpan);


    ulInfo.appendChild(attempts);
    ulInfo.appendChild(time);
    ulInfo.appendChild(finish);
    
    infoContent.appendChild(ulInfo);

    return infoContent;
}

export default ExamInfo;
